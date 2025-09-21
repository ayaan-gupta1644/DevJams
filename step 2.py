from sqlalchemy import Column, Integer, String, Float, Date, ForeignKey
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship

Base = declarative_base()

class User(Base):
    __tablename__ = 'users'
    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True)
    # add more fields as needed

    transactions = relationship("Transaction", back_populates="user")
    savings_goals = relationship("SavingsGoal", back_populates="user")

class Transaction(Base):
    __tablename__ = 'transactions'
    id = Column(Integer, primary_key=True, index=True)
    date = Column(Date)
    description = Column(String)
    amount = Column(Float)
    category = Column(String, nullable=True)  # Category initially optional
    user_id = Column(Integer, ForeignKey('users.id'))

    user = relationship("User", back_populates="transactions")

class SavingsGoal(Base):
    __tablename__ = 'savings_goals'
    id = Column(Integer, primary_key=True, index=True)
    goal_name = Column(String)
    target_amount = Column(Float)
    progress = Column(Float, default=0)
    user_id = Column(Integer, ForeignKey('users.id'))

    user = relationship("User", back_populates="savings_goals")
