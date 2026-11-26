import { Link, Navigate, useLocation } from "react-router-dom";

export default function PaymentFailure() {
  const { state } = useLocation();

  // Opened directly without paying -> back to the form
  if (!state) return <Navigate to="/" replace />;

  return (
    <div className="page">
      <div className="card result failure">
        <div className="icon">✕</div>
        <h1>Payment Failed</h1>
        <p>{state.message}</p>
        {state.amount !== null && state.amount !== "" && (
          <p className="detail">
            Entered amount: <strong>{String(state.amount)}</strong>
          </p>
        )}
        <Link className="button" to="/">
          Try again
        </Link>
      </div>
    </div>
  );
}
