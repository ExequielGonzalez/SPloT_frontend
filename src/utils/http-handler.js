const url = "http://localhost:5000";

async function fetchAsync(url) {
  let response = await fetch(url);
  let data = await response.json();
  return data;
}

export async function getPrices() {
  return await fetchAsync(`${url}/api/v1/costs/1`);
}

export async function getActivePlates() {
  return await fetchAsync(`${url}/api/v1/actives`);
}

export async function getOccupationDetails() {
  return await fetchAsync(`${url}/api/v1/reports/countPlaces`);
}
