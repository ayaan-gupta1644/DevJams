# database.py
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

# URL for a SQLite database file named "mydatabase.db"
# If you want to use a different database, you'll change this line
DATABASE_URL = "sqlite:///./mydatabase.db"

# Create a database engine
engine = create_engine(
    DATABASE_URL,
    connect_args={"check_same_thread": False}  # Needed for SQLite
)

# Create a session local class
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)