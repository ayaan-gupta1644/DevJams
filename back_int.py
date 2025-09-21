from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # URL where frontend runs
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
