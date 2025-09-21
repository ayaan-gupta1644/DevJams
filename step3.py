from pydantic import BaseModel
from typing import Optional
from datetime import date

class TransactionBase(BaseModel):
    date: date
    description: str
    amount: float
    category: Optional[str] = None

class TransactionCreate(TransactionBase):
    pass

class UserBase(BaseModel):
    email: str

class UserCreate(UserBase):
    pass

class SavingsGoalBase(BaseModel):
    goal_name: str
    target_amount: float
    progress: Optional[float] = 0

class SavingsGoalCreate(SavingsGoalBase):
    pass