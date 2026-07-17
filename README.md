# Airline Voucher Seat Assignment

Simple web application to generate 3 random seats for airline voucher winners.

## Stack

- Next.js / React
- Laravel
- SQLite

## Requirements

- PHP 8.3+
- Composer
- Node.js and npm

## Backend Setup

```bash
cd backend
composer install
copy .env.example .env
php artisan key:generate
php artisan migrate
php artisan serve
```

Backend will run at `http://localhost:8000`.

The SQLite configuration in `.env`:

```env
DB_CONNECTION=sqlite
DB_DATABASE=database/vouchers.db
FRONTEND_URL=http://localhost:3000
```

## Frontend Setup

Open another terminal:

```bash
cd frontend
npm install
npm run dev
```

Frontend will run at `http://localhost:3000`.

## API

### Check Voucher

```http
POST /api/check
```

Request:

```json
{
  "flightNumber": "GA102",
  "date": "2026-07-17"
}
```

### Generate Voucher

```http
POST /api/generate
```

Request:

```json
{
  "name": "Sarah",
  "id": "98123",
  "flightNumber": "GA102",
  "date": "2026-07-17",
  "aircraft": "Airbus 320"
}
```

## Testing

```bash
cd backend
php artisan test
```
