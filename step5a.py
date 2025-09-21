from databases import Database
from sqlalchemy import create_engine, MetaData

DATABASE_URL = "sqlite+aiosqlite:///./test.db"

database = Database(DATABASE_URL)
metadata = MetaData()

engine = create_engine("sqlite:///./test.db", connect_args={"check_same_thread": False})
