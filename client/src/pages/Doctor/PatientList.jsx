import { useLoaderData } from "react-router";
import TableRow from "../../components/TableRow";

export default function PatientList() {
  const patients = useLoaderData();
  console.log(patients);
  return (
    <main className="p-10 shadow-xl rounded-2xl">
      <header className="mb-4">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered input-sm w-full max-w-xs"
        />
      </header>
      <span className="divider"></span>
      <div className="overflow-x-auto">
        <table className="table ">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Blood Group</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {patients.data.map((patient) => {
              return <TableRow key={patient._id} patient={patient} />;
            })}
          </tbody>
        </table>
      </div>
    </main>
  );
}
