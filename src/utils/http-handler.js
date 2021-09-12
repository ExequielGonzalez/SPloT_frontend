const url = "http://0.0.0.0:5000";

async function fetchAsync(url, verb = "GET") {
  let data = {};
  let response = await fetch(url, { method: `${verb}` });
  if (response.status === 200) data = await response.json();
  return { status: response.status, data: data };
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
  if (vehicle.status !== 200) return vehicle;
  const entry = await fetchAsync(
    `${url}/api/v1/entries/?vehicleId=${vehicle.data.id}`
  );
  if (entry.status !== 200) return entry;
  // console.log(entry[0]);
  const vehiclePhoto = await fetchAsync(
    `${url}/api/v1/vehiclePhotos?entryId=${entry.data[0].id}`
  );
  if (vehiclePhoto.status !== 200) return vehiclePhoto;
  // console.log(vehiclePhoto);

  return await fetchAsync(
    `${url}/api/v1/vehiclePhotos/photo/${vehiclePhoto.data[0].id}`
  );
}

export async function deleteEntry(id) {
  return await fetchAsync(`${url}/api/v1/entries/${id}`, "DELETE");
}
