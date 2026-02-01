import enum
from datetime import datetime
from typing import List, Optional
from sqlalchemy import ForeignKey, String, Integer, Boolean, Float, DateTime, Enum as SQLEnum, Text
from sqlalchemy.orm import Mapped, mapped_column, relationship
from database import Base

# --- Enums ---
class UserRole(str, enum.Enum):
    ADMIN = "admin"
    CLIENT = "client"
    INTERN = "intern"

class VerificationStatus(str, enum.Enum):
    PENDING = "pending"
    VERIFIED = "verified"
    REJECTED = "rejected"

class ProjectStatus(str, enum.Enum):
    ORDERED = "ordered"
    IN_PROGRESS = "in_progress"
    COMPLETED = "completed"

class SubmissionStatus(str, enum.Enum):
    PENDING_REVIEW = "pending_review"
    APPROVED = "approved"
    CHANGES_REQUESTED = "changes_requested"

# --- Models ---

class User(Base):
    __tablename__ = "users"

    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    email: Mapped[str] = mapped_column(String, unique=True, index=True)
    hashed_password: Mapped[str] = mapped_column(String)
    full_name: Mapped[str] = mapped_column(String)
    role: Mapped[UserRole] = mapped_column(SQLEnum(UserRole))
    is_active: Mapped[bool] = mapped_column(Boolean, default=True)

    # Relationships
    intern_profile: Mapped[Optional["InternProfile"]] = relationship(
        "InternProfile", back_populates="user", uselist=False
    )
    
    # As a Client
    projects_ordered: Mapped[List["Project"]] = relationship(
        "Project", back_populates="client"
    )
    
    # As an Intern
    assigned_tasks: Mapped[List["Task"]] = relationship(
        "Task", back_populates="intern"
    )
    submissions: Mapped[List["Submission"]] = relationship(
        "Submission", back_populates="intern"
    )
    certificates: Mapped[List["Certificate"]] = relationship(
        "Certificate", back_populates="intern"
    )

class InternProfile(Base):
    __tablename__ = "intern_profiles"

    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    user_id: Mapped[int] = mapped_column(ForeignKey("users.id"), unique=True)
    college_name: Mapped[str] = mapped_column(String)
    github_profile_url: Mapped[Optional[str]] = mapped_column(String, nullable=True)
    resume_url: Mapped[Optional[str]] = mapped_column(String, nullable=True)
    verification_status: Mapped[VerificationStatus] = mapped_column(
        SQLEnum(VerificationStatus), default=VerificationStatus.PENDING
    )

    # Relationships
    user: Mapped["User"] = relationship("User", back_populates="intern_profile")

class Project(Base):
    __tablename__ = "projects"

    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    client_id: Mapped[int] = mapped_column(ForeignKey("users.id"))
    title: Mapped[str] = mapped_column(String)
    description: Mapped[str] = mapped_column(Text)
    budget: Mapped[float] = mapped_column(Float)
    status: Mapped[ProjectStatus] = mapped_column(
        SQLEnum(ProjectStatus), default=ProjectStatus.ORDERED
    )
    created_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)

    # Relationships
    client: Mapped["User"] = relationship("User", back_populates="projects_ordered")
    tasks: Mapped[List["Task"]] = relationship("Task", back_populates="project")

class Task(Base):
    __tablename__ = "tasks"

    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    project_id: Mapped[int] = mapped_column(ForeignKey("projects.id"))
    assigned_intern_id: Mapped[Optional[int]] = mapped_column(ForeignKey("users.id"), nullable=True)
    title: Mapped[str] = mapped_column(String)
    description: Mapped[str] = mapped_column(Text)
    bounty_amount: Mapped[float] = mapped_column(Float)
    is_completed: Mapped[bool] = mapped_column(Boolean, default=False)

    # Relationships
    project: Mapped["Project"] = relationship("Project", back_populates="tasks")
    intern: Mapped[Optional["User"]] = relationship("User", back_populates="assigned_tasks")
    submissions: Mapped[List["Submission"]] = relationship("Submission", back_populates="task")

class Submission(Base):
    __tablename__ = "submissions"

    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    task_id: Mapped[int] = mapped_column(ForeignKey("tasks.id"))
    intern_id: Mapped[int] = mapped_column(ForeignKey("users.id"))
    pr_link: Mapped[str] = mapped_column(String)
    live_link: Mapped[Optional[str]] = mapped_column(String, nullable=True)
    status: Mapped[SubmissionStatus] = mapped_column(
        SQLEnum(SubmissionStatus), default=SubmissionStatus.PENDING_REVIEW
    )
    submitted_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)

    # Relationships
    task: Mapped["Task"] = relationship("Task", back_populates="submissions")
    intern: Mapped["User"] = relationship("User", back_populates="submissions")

class Certificate(Base):
    __tablename__ = "certificates"

    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    intern_id: Mapped[int] = mapped_column(ForeignKey("users.id"))
    unique_certificate_id: Mapped[str] = mapped_column(String, unique=True, index=True)
    project_name: Mapped[str] = mapped_column(String)
    issued_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)

    # Relationships
    intern: Mapped["User"] = relationship("User", back_populates="certificates")