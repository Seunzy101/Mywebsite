const TOKEN = import.meta.env.VITE_TP_TOKEN;

export async function getCheapFlights(origin, destination, currency = "NGN") {
  const res = await fetch(
    `/api/tp/v1/prices/cheap?origin=${origin}&destination=${destination}&currency=${currency}&token=${TOKEN}`,
    { headers: { "x-access-token": TOKEN } }
  );
  return res.json();
}

export async function getFlightsFromMultipleOrigins(origins, destination, currency = "NGN") {
  const results = await Promise.all(
    origins.map((origin) => getCheapFlights(origin, destination, currency))
  );
  return results;
}