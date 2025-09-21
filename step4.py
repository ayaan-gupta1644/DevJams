from fastapi import FastAPI, HTTPException
from typing import List
from datetime import date

from step2 import Transaction, User, SavingsGoal, Base  # your SQLAlchemy models
from step3 import TransactionCreate, TransactionBase, SavingsGoalCreate, SavingsGoalBase  # your Pydantic schemas
from sqlalchemy.orm import Session
from database import SessionLocal, engine  # your DB session management

Base.metadata.create_all(bind=engine)

app = FastAPI()

# Dependency to get DB session per request
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.post("/transactions", response_model=TransactionBase)
def create_transaction(transaction: TransactionCreate, db: Session = next(get_db())):
    db_transaction = Transaction(
        date=transaction.date,
        description=transaction.description,
        amount=transaction.amount,
        category=transaction.category,
        user_id=1  # For MVP, assuming a fixed user or add authentication later
    )
    db.add(db_transaction)
    db.commit()
    db.refresh(db_transaction)
    return db_transaction

@app.get("/transactions", response_model=List[TransactionBase])
def read_transactions(db: Session = next(get_db())):
    return db.query(Transaction).all()

@app.post("/categorize")
def categorize_transaction(data: dict):
    description = data.get("description", "").lower()
    # Basic categorization rule example
    category_map = {
        "pizza": "food",
        "uber": "travel",
        "movie": "entertainment"
    }
    for keyword, category in category_map.items():
        if keyword in description:
            return {"category": category}
    return {"category": "others"}

@app.post("/savings-goals", response_model=SavingsGoalBase)
def create_savings_goal(goal: SavingsGoalCreate, db: Session = next(get_db())):
    db_goal = SavingsGoal(
        goal_name=goal.goal_name,
        target_amount=goal.target_amount,
        progress=goal.progress,
        user_id=1  # Fixed user for MVP
    )
    db.add(db_goal)
    db.commit()
    db.refresh(db_goal)
    return db_goal

@app.get("/savings-goals", response_model=List[SavingsGoalBase])
def read_savings_goals(db: Session = next(get_db())):
    return db.query(SavingsGoal).all()
