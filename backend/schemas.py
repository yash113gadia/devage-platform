from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import datetime
from models import UserRole, SubmissionStatus

class UserBase(BaseModel):
    email: EmailStr

class UserCreate(UserBase):
    password: str
    full_name: str
    role: UserRole

class UserResponse(UserBase):
    id: int
    full_name: str
    role: UserRole
    is_active: bool

    class Config:
        from_attributes = True

class Token(BaseModel):
    access_token: str
    token_type: str

class ProjectCreate(BaseModel):
    title: str
    description: str
    budget: float

class TaskCreate(BaseModel):
    title: str
    description: str
    bounty_amount: float

# --- Submissions ---
class SubmissionCreate(BaseModel):
    task_id: int
    pr_link: str
    live_link: Optional[str] = None

class SubmissionUpdate(BaseModel):
    status: SubmissionStatus

class SubmissionResponse(BaseModel):
    id: int
    task_id: int
    intern_id: int
    pr_link: str
    live_link: Optional[str]
    status: SubmissionStatus
    submitted_at: datetime

    class Config:
        from_attributes = True
