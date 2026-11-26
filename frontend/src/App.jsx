import { Routes, Route, Navigate } from "react-router-dom";
import PaymentForm from "./pages/PaymentForm.jsx";
import PaymentSuccess from "./pages/PaymentSuccess.jsx";
import PaymentFailure from "./pages/PaymentFailure.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<PaymentForm />} />
      <Route path="/success" element={<PaymentSuccess />} />
      <Route path="/failure" element={<PaymentFailure />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
