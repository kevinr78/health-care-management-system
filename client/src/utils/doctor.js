import API_REQUEST from "./API";

async function getPatientsList() {
  const doc_id = new URLSearchParams(window.location.search).get("id");
  const request = new API_REQUEST("POST", "/doctor/getPatient", { doc_id });
  //request.add_headers();
  const { ok, data } = await request.send();
  console.log(data);
  if (!ok) {
    alert("Error while fetchin patient list");
  }

  return { data };
}

async function getPatient({ params }) {
  const patientId = params.patientId;
  const request = new API_REQUEST("GET", `/doctor/${patientId}`, null);
  const { ok, data } = await request.send();
  if (!ok) {
    alert("Error while fetching patient");
  }
  return { data };
}

export { getPatientsList, getPatient };
