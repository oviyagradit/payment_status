# Payment Status

A small React + Express app. The customer enters an amount and clicks **Pay**.
The backend accepts the payment only if the amount is a whole number (integer) greater than 0.
The frontend shows a success or failure page depending on the API's `status`.

## Run it

Open two terminals.

**Backend** (http://localhost:5000)

```
cd backend
npm install
npm start
```

**Frontend** (http://localhost:3000)

```
cd frontend
npm install
npm run dev
```

Then open http://localhost:3000.

## API

`POST /api/payment` with body `{ "amount": "100" }`

| Input        | HTTP | Response `status` |
| ------------ | ---- | ----------------- |
| `100`        | 200  | `success`         |
| `10.5`       | 400  | `failure`         |
| `abc`        | 400  | `failure`         |
| `0`, `-5`    | 400  | `failure`         |
