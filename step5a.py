from databases import Database
from step2 import create_engine, MetaData

DATABASE_URL = "sqlite+aiosqlite:///./test.db"

database = Database(DATABASE_URL)
metadata = MetaData()

engine = create_engine("sqlite:///./test.db", connect_args={"check_same_thread": False})
