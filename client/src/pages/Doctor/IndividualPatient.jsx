import { useLoaderData } from "react-router";
import Phone from "../../assets/Phone.svg";
import Stat from "../../components/common/Stat";

export default function IndividualPatient() {
  const { data } = useLoaderData();
  const patient = data[0];
  console.log(patient);
  return (
    <main>
      <div className="patient-overview-grid grid grid-rows-3 gap-4">
        <div className="grid grid-rows-1 grid-cols-3 gap-4">
          <div className=" col-span-1">
            <div className="card bg-base-100 shadow-xl">
              <div className="avatar w-40 px-10 pt-10">
                <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
              <div className="card-body items-center text-center">
                <h2 className="card-title">
                  {patient.firstName + " " + patient.lastName}
                </h2>
                <p className="flex items-center">
                  <img src={Phone} className="w-10" />
                  <p>{patient.email}</p>
                </p>
              </div>
            </div>
          </div>
          <div className="patient-overview-details col-span-2">
            <div className="card bg-base-100 w-full shadow-xl">
              <div className="card-body items-center text-center">
                <h2 className="card-title">Overview</h2>
                <div className="overview-items grid grid-cols-2 grid-rows-1">
                  <div className="row-1">
                    <Stat
                      title={"DOB"}
                      value={new Date(patient.DOB).toLocaleDateString()}
                    />
                    <Stat title={"Gender"} value={patient.gender} />
                  </div>
                  <div className="row-2">
                    <Stat title={"Height"} value={`${patient.Height} cm`} />
                    <Stat title={"Weight"} value={`${patient.weight} kg`} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="patient-medical-details">
          <div className="patient-overview-details">
            <div className="card bg-base-100 w-full shadow-xl">
              <div className="card-body ">
                <h2 className="card-title">Medical History</h2>
                <div className="overview-items grid grid-cols-3 grid-rows-1">
                  <div className="col-1">
                    <Stat
                      title="Emergency Contact Name"
                      value={patient.emergencyContactName}
                    />
                    <Stat
                      title="Emergency Contact Number"
                      value={patient.emergencyContactNumber}
                    />
                  </div>
                  <div className="col-2">
                    <Stat
                      title="Allergies"
                      value={patient.allergies.join(",")}
                    />
                    <Stat
                      title="Medications"
                      value={patient.currentMedications.join(",")}
                    />
                  </div>
                  <div className="col-3">
                    <Stat
                      title="Previous Medical Conditions"
                      value={patient.medicalHistory.join(",")}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="patient-history">
          <div className="card bg-base-100 w-full shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Medical History</h2>
              <div className="overflow-x-auto">
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr>
                      <th>Date Of Visit</th>
                      <th>Diagnosis</th>
                      <th>Status</th>
                      <th>Documents</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    <tr>
                      <th>1</th>
                      <td>Cy Ganderton</td>
                      <td>Quality Control Specialist</td>
                      <td>Blue</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
