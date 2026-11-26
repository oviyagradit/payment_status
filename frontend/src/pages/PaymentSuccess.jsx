import { Link, Navigate, useLocation } from "react-router-dom";

export default function PaymentSuccess() {
  const { state } = useLocation();

  // Opened directly without paying -> back to the form
  if (!state) return <Navigate to="/" replace />;

  return (
    <div className="page">
      <div className="card result success">
        <div className="icon">✓</div>
        <h1>Payment Successful</h1>
        <p>{state.message}</p>
        <p className="detail">
          Amount: <strong>{state.amount}</strong>
        </p>
        <p className="detail">
          Transaction ID: <strong>{state.transactionId}</strong>
        </p>
        <Link className="button" to="/">
          Make another payment
        </Link>
      </div>
    </div>
  );
}
