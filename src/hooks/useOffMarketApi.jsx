import { useEffect, useMemo, useState } from "react";

/**
 * Fetches the OFF-MARKET inventory from:
 *   GET {VITE_API_BASE}/api/agents/propertylistings
 * and returns the single record that matches `listingKey`.
 *
 * - Auth: looks for Bearer token in localStorage.accessToken (adjust if needed)
 * - Normalizes the result: { data, error, loading }
 */
export default function useOffMarketApi(listingKey) {
  const [list, setList] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(Boolean(listingKey));

  useEffect(() => {
    let abort = false;

    async function run() {
      if (!listingKey) {
        setLoading(false);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const base = import.meta.env.VITE_JOVI_API_BASE; // e.g. http://localhost:5050
        // const token = localStorage.getItem("accessToken");

        const res = await fetch(`${base}/api/agents/propertylistings`, {
            method: GET,
        //   headers: {
        //     ...(token ? { Authorization: `Bearer ${token}` } : {}),
        //   },
        //   credentials: "include",
        });

        const json = await res.json().catch(() => ({}));
        if (!res.ok) {
          throw new Error(json?.message || "Failed to fetch property listings.");
        }

        if (!abort) {
          // API shape from Postman: { success: true, data: [ ... ] }
          setList(Array.isArray(json?.data) ? json.data : []);
        }
      } catch (e) {
        if (!abort) setError(e);
      } finally {
        if (!abort) setLoading(false);
      }
    }

    run();
    return () => {
      abort = true;
    };
  }, [listingKey]);

  // find the single record by listingKey; it may live either at root.listingId
  // or inside propertyDetails.listingId depending on your backend shape.
  const data = useMemo(() => {
    if (!list || !listingKey) return null;
    return (
      list.find(
        (r) =>
          r?.listingId === listingKey ||
          r?.propertyDetails?.listingId === listingKey
      ) || null
    );
  }, [list, listingKey]);

  return { data, error, loading };
}
