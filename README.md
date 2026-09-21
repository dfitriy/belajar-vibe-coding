# Belajar Vibe Coding - Bun + ElysiaJS + Drizzle + MySQL

Project template menggunakan Bun, ElysiaJS, Drizzle ORM, dan MySQL.

## Tech Stack
- **Runtime**: [Bun](https://bun.sh/)
- **Framework**: [ElysiaJS](https://elysiajs.com/)
- **ORM**: [Drizzle ORM](https://orm.drizzle.team/)
- **Database**: MySQL

## Quick Start

### 1. Install Dependencies
```bash
bun install
```

### 2. Environment Setup
Copy `.env.example` ke `.env` dan sesuaikan kredensial database Anda:
```bash
cp .env.example .env
```

### 3. Run Development Server
```bash
bun run dev
```
Server akan berjalan di `http://localhost:3000`.

### 4. Database Migrations (Drizzle Kit)
- **Generate Migrations**: `bun run db:generate`
- **Push Migrations to Database**: `bun run db:push`
- **Open Drizzle Studio**: `bun run db:studio`
