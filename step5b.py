from sqlalchemy import Table, Column, Integer, String, Float, Date, ForeignKey
from database import metadata

users = Table(
    "users",
    metadata,
    Column("id", Integer, primary_key=True),
    Column("email", String, unique=True)
)

transactions = Table(
    "transactions",
    metadata,
    Column("id", Integer, primary_key=True),
    Column("date", Date),
    Column("description", String),
    Column("amount", Float),
    Column("category", String, nullable=True),
    Column("user_id", Integer, ForeignKey("users.id")),
)

savings_goals = Table(
    "savings_goals",
    metadata,
    Column("id", Integer, primary_key=True),
    Column("goal_name", String),
    Column("target_amount", Float),
    Column("progress", Float, default=0),
    Column("user_id", Integer, ForeignKey("users.id")),
)
