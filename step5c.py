from fastapi import FastAPI
from step5a import database, engine, metadata
import step2
from contextlib import asynccontextmanager

@asynccontextmanager
async def lifespan(app: FastAPI):
    metadata.create_all(engine)
    await database.connect()
    try:
        yield
    finally:
        await database.disconnect()

app = FastAPI(lifespan=lifespan)

@app.get("/transactions")
async def get_transactions():
    query = step2.transactions.select()
    return await database.fetch_all(query)

@app.post("/transactions")
async def create_transaction(transaction: dict):
    query = step2.transactions.insert().values(**transaction)
    last_record_id = await database.execute(query)
    return {**transaction, "id": last_record_id}
