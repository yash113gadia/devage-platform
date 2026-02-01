from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from typing import List
from datetime import datetime
import crud, models, schemas, auth, database

# Create tables
models.Base.metadata.create_all(bind=database.engine)

app = FastAPI(title="DevAgency Platform")

# CORS Configuration
origins = [
    "http://localhost:5173", # Vite default
    "http://127.0.0.1:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/users/", response_model=schemas.UserResponse)
def create_user(user: schemas.UserCreate, db: Session = Depends(auth.get_db)):
    db_user = crud.get_user_by_email(db, email=user.email)
    if db_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    return crud.create_user(db=db, user=user)

@app.post("/token", response_model=schemas.Token)
def login_for_access_token(form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(auth.get_db)):
    user = crud.get_user_by_email(db, form_data.username)
    if not user or not auth.verify_password(form_data.password, user.hashed_password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token = auth.create_access_token(
        data={"sub": user.email}
    )
    return {"access_token": access_token, "token_type": "bearer"}

@app.get("/me", response_model=schemas.UserResponse)
async def read_users_me(current_user: models.User = Depends(auth.get_current_user)):
    return current_user

# --- Submission Endpoints ---

@app.post("/submissions/", response_model=schemas.SubmissionResponse)
def submit_task(
    submission: schemas.SubmissionCreate,
    db: Session = Depends(auth.get_db),
    current_user: models.User = Depends(auth.get_current_user)
):
    if current_user.role != models.UserRole.INTERN:
         raise HTTPException(status_code=403, detail="Only interns can submit tasks")
    
    # Optional: Check if task exists, is assigned to user, etc.
    return crud.create_submission(db=db, submission=submission, user_id=current_user.id)

@app.get("/my-submissions", response_model=List[schemas.SubmissionResponse])
def read_my_submissions(
    db: Session = Depends(auth.get_db),
    current_user: models.User = Depends(auth.get_current_user)
):
    if current_user.role != models.UserRole.INTERN:
        raise HTTPException(status_code=403, detail="Only interns have submissions")
    return crud.get_submissions_by_intern(db=db, user_id=current_user.id)

@app.put("/submissions/{submission_id}", response_model=schemas.SubmissionResponse)
def review_submission(
    submission_id: int,
    submission_update: schemas.SubmissionUpdate,
    db: Session = Depends(auth.get_db),
    current_user: models.User = Depends(auth.get_current_user)
):
    if current_user.role != models.UserRole.ADMIN:
        raise HTTPException(status_code=403, detail="Only admins can review submissions")
    
    updated_submission = crud.update_submission_status(
        db=db, submission_id=submission_id, status=submission_update.status
    )
    if not updated_submission:
        raise HTTPException(status_code=404, detail="Submission not found")
    
    return updated_submission

# --- Public Endpoints ---

@app.get("/certificates/{certificate_id}")
def verify_certificate(certificate_id: str):
    # Mock Logic for testing
    if certificate_id == "DEV-2026-001":
        return {
            "id": certificate_id,
            "intern_name": "Dave Developer",
            "project_name": "AI Chatbot for Gym",
            "issued_at": datetime.utcnow()
        }
    raise HTTPException(status_code=404, detail="Certificate not found")
