from __future__ import annotations

import os

from pydantic import BaseModel, Field


def _split_origins(value: str) -> list[str]:
    return [part.strip() for part in value.split(",") if part.strip()]


class Settings(BaseModel):
    app_env: str = Field(default_factory=lambda: os.getenv("APP_ENV", "development"))
    port: int = Field(default_factory=lambda: int(os.getenv("PORT", "3000")))
    cors_origins: list[str] = Field(
        default_factory=lambda: _split_origins(
            os.getenv(
                "CORS_ORIGINS",
                "http://localhost:8081,http://127.0.0.1:8081",
            )
        )
    )


settings = Settings()
