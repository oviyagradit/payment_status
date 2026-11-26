const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

/**
 * Returns true only for positive whole numbers.
 * Accepts numbers (100) or numeric strings ("100").
 * Rejects decimals ("10.5"), text ("abc"), empty values, zero and negatives.
 */
function isValidIntegerAmount(amount) {
  if (typeof amount === "number") {
    return Number.isInteger(amount) && amount > 0;
  }
  if (typeof amount === "string") {
    const trimmed = amount.trim();
    return /^\d+$/.test(trimmed) && Number(trimmed) > 0;
  }
  return false;
}

// POST /api/payment  { "amount": "100" }
app.post("/api/payment", (req, res) => {
  const { amount } = req.body || {};

  if (isValidIntegerAmount(amount)) {
    return res.status(200).json({
      status: "success",
      message: "Payment processed successfully.",
      amount: Number(amount),
      transactionId: `TXN${Date.now()}`,
    });
  }

  return res.status(400).json({
    status: "failure",
    message: "Payment failed. Amount must be a whole number (integer) greater than 0.",
    amount: amount ?? null,
  });
});

app.get("/api/health", (_req, res) => res.json({ status: "ok" }));

app.listen(PORT, () => {
  console.log(`Payment API running on http://localhost:${PORT}`);
});
