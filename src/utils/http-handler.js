const url = "http://localhost:5000";
const url_mqtt_api = "http://localhost:3001";

async function fetchAsync(url, verb = "GET") {
  let data = {};
  let response = await fetch(url, { method: `${verb}` });
  if (response.status === 200) data = await response.json();
  return { status: response.status, data: data };
}

async function fetchAsyncPost(url, verb = "POST", data) {
  let response = await fetch(url, {
    method: `${verb}`,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (response.status === 200) data = await response.json();
  return { status: response.status, data: data };
}

async function fetchMqttPost(topic, data) {
  let response = await fetch(`${url_mqtt_api}/api/mqtt/${topic}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
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
  console.log(vehicle);
  if (vehicle.status !== 200) return vehicle;
  const entry = await fetchAsync(
    `${url}/api/v1/entries/?exitTime=null&vehicleId=${vehicle.data.id}`
  );
  if (entry.status !== 200) return entry;
  //console.log(entry.data[0].id);
  const vehiclePhoto = await fetchAsync(
    `${url}/api/v1/vehiclePhotos?entryId=${entry.data[0].id}`
  );
  if (vehiclePhoto.status !== 200) return vehiclePhoto;
  //console.log(vehiclePhoto);

  return await fetchAsync(
    `${url}/api/v1/vehiclePhotos/photo/${vehiclePhoto.data[0].id}`
  );
}

export async function deleteEntry(id) {
  return await fetchAsync(`${url}/api/v1/entries/${id}`, "DELETE");
}

export async function editEntry(id, data) {
  return await fetchAsyncPost(`${url}/api/v1/entries/${id}`, "PUT", data);
}

export async function addPayment(data) {
  return await fetchAsyncPost(`${url}/api/v1/payments`, "POST", data);
}

export async function getTrafficLightData(passageWayId) {
  return await fetchAsync(
    `${url}/api/v1/trafficlights?passagewayId=${passageWayId}`
  );
}

export async function turnOnTrafficLight(trafficLightId) {
  return await fetchMqttPost("traffic_light", {
    id: trafficLightId,
    data: "1",
  });
}

//!stats Page

export async function getMoneyEarnByPeriod(
  since = 1630805031,
  until = 1631669031
) {
  return await fetchAsync(
    `${url}/api/v1/reports/collected?since=${since}&until=${until}`
  );
}

export async function getOccupationByPeriod(
  since = 1630805031,
  until = 1631669031
) {
  return await fetchAsync(
    `${url}/api/v1/reports/occupation?since=${since}&until=${until}`
  );
}

export async function getPaymentMethodsByPeriod(
  since = 1630805031,
  until = 1631669031
) {
  return await fetchAsync(
    `${url}/api/v1/reports/paymentMethods?since=${since}&until=${until}`
  );
}

//!history page
export async function getHistory() {
  return await fetchAsync(`${url}/api/v1/history?rowsPerPage=100&page=1`);
}

export async function getPhotoByEntryIdHistory(entryId) {
  const vehiclePhoto = await fetchAsync(
    `${url}/api/v1/vehiclePhotos?entryId=${entryId}`
  );
  if (vehiclePhoto.status !== 200) return vehiclePhoto;
  console.log(vehiclePhoto);

  return await fetchAsync(
    `${url}/api/v1/vehiclePhotos/photo/${vehiclePhoto.data[0].id}`
  );
}
