const BASE_URL = "https://api.noroff.dev/api/v1/online-shop";

/**
 * Fetch all products
 */
export async function getAllProducts() {
  const response = await fetch(BASE_URL);
  if (!response.ok) {
    throw new Error(`Failed to fetch products: ${response.statusText}`);
  }
  return response.json();
}

/**
 * Fetch one product by ID
 * @param {string} productId 
 */
export async function getProductById(productId) {
  const response = await fetch(`${BASE_URL}/${productId}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch product: ${response.statusText}`);
  }
  return response.json();
}
