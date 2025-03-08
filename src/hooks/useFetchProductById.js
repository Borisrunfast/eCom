import { useEffect, useState } from "react";
import { getProductById } from "../api/products/read";

/**
 * Fetch one product by its ID.
 * @param {string} productId 
 */
export default function useFetchProductById(productId) {
  const [product, setProduct]   = useState(null);
  const [loading, setLoading]   = useState(true);
  const [error, setError]       = useState(null);

  useEffect(() => {
    async function fetchSingleProduct() {
      try {
        const data = await getProductById(productId);
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    // Only fetch if there's a valid productId
    if (productId) {
      fetchSingleProduct();
    }
  }, [productId]);

  return { product, loading, error };
}
