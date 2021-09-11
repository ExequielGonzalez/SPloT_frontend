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

export async function getPhotoByPlateNumber(plateNumber) {
  const vehicle = await fetchAsync(`${url}/api/v1/vehicles/${plateNumber}`);
  // console.log(vehicle);
  const entry = await fetchAsync(
    `${url}/api/v1/entries/?vehicleId=${vehicle.id}`
  );
  // console.log(entry[0]);
  const vehiclePhoto = await fetchAsync(
    `${url}/api/v1/vehiclePhotos?entryId=${entry[0].id}`
  );
  // console.log(vehiclePhoto);
  return await fetchAsync(
    `${url}/api/v1/vehiclePhotos/photo/${vehiclePhoto[0].id}`
  );
}
