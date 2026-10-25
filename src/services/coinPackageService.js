import axiosClient from "../lib/axiosClient";

const LIST_ENDPOINT = "/coin-package/v1/list";

/** GET /coin-package/v1/list → data[] */
export async function listCoinPackages() {
  const { data } = await axiosClient.get(LIST_ENDPOINT);
  return Array.isArray(data?.data) ? data.data : [];
}
