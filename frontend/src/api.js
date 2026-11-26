/**
 * Calls the backend payment API.
 * Always resolves to an object with a `status` field ("success" | "failure"),
 * so the UI only has to check that one value.
 */
export async function makePayment(amount) {
  try {
    const response = await fetch("/api/payment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    return {
      status: "failure",
      message: "Unable to reach the payment server. Please try again.",
      amount,
    };
  }
}
