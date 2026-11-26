import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { makePayment } from "../api.js";

export default function PaymentForm() {
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handlePay = async (event) => {
    event.preventDefault();
    setLoading(true);

    const result = await makePayment(amount);

    setLoading(false);
    if (result.status === "success") {
      navigate("/success", { state: result });
    } else {
      navigate("/failure", { state: result });
    }
  };

  return (
    <div className="page">
      <form className="card" onSubmit={handlePay}>
        <h1>Make a Payment</h1>
        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          type="text"
          inputMode="numeric"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          disabled={loading}
          autoFocus
        />
        <button type="submit" disabled={loading || amount.trim() === ""}>
          {loading ? "Processing..." : "Pay"}
        </button>
      </form>
    </div>
  );
}
