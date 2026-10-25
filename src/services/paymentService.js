import axiosClient from "../lib/axiosClient";

const CHECKOUT_ENDPOINT = "/payment/v1/coin-package/checkout-session";
const LIST_ENDPOINT = "/payment/v1/list";

/**
 * POST /payment/v1/coin-package/checkout-session
 * Body: { coin_package_id, success_url, cancel_url }
 */
export async function createCheckoutSession({
  coinPackageId,
  successUrl,
  cancelUrl,
}) {
  const { data } = await axiosClient.post(CHECKOUT_ENDPOINT, {
    coin_package_id: coinPackageId,
    success_url: successUrl,
    cancel_url: cancelUrl,
  });
  return data?.data ?? null;
}

/**
 * GET /payment/v1/list
 * Do not send user_id (admin-only). Optional status filter only.
 */
export async function listPayments({ status } = {}) {
  const params = {};
  if (status !== undefined && status !== null && status !== "") {
    params.status = status;
  }
  const { data } = await axiosClient.get(LIST_ENDPOINT, { params });
  return Array.isArray(data?.data) ? data.data : [];
}

/** Stripe hosted Checkout URL from API — never construct manually */
export function isValidStripeCheckoutUrl(url) {
  if (!url || typeof url !== "string") return false;
  try {
    const parsed = new URL(url);
    return (
      parsed.protocol === "https:" && parsed.hostname === "checkout.stripe.com"
    );
  } catch {
    return false;
  }
}
