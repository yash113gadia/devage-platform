from sqlalchemy.orm import Session
import models, schemas
from auth import get_password_hash
from typing import List

def get_user_by_email(db: Session, email: str):
    return db.query(models.User).filter(models.User.email == email).first()

def create_user(db: Session, user: schemas.UserCreate):
    hashed_password = get_password_hash(user.password)
    db_user = models.User(
        email=user.email,
        hashed_password=hashed_password,
        full_name=user.full_name,
        role=user.role,
        is_active=True
    )
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

# --- Submission CRUD ---

def create_submission(db: Session, submission: schemas.SubmissionCreate, user_id: int):
    db_submission = models.Submission(
        task_id=submission.task_id,
        intern_id=user_id,
        pr_link=submission.pr_link,
        live_link=submission.live_link,
        status=models.SubmissionStatus.PENDING_REVIEW
    )
    db.add(db_submission)
    db.commit()
    db.refresh(db_submission)
    return db_submission

def get_submissions_by_intern(db: Session, user_id: int) -> List[models.Submission]:
    return db.query(models.Submission).filter(models.Submission.intern_id == user_id).all()

def get_submission_by_id(db: Session, submission_id: int):
    return db.query(models.Submission).filter(models.Submission.id == submission_id).first()

def update_submission_status(db: Session, submission_id: int, status: models.SubmissionStatus):
    submission = get_submission_by_id(db, submission_id)
    if submission:
        submission.status = status
        db.commit()
        db.refresh(submission)
    return submission
