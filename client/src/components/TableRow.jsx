import { useNavigate } from "react-router";

export default function TableRow({ key, patient }) {
  const navigate = useNavigate();
  console.log(key);

  return (
    <tr key={key}>
      <th>1</th>
      <td>{patient.firstName + " " + patient.lastName}</td>
      <td>{new Date(patient.DOB).toLocaleDateString()}</td>
      <td>{patient.gender}</td>
      <td>{patient.blood_group}</td>

      <td>{patient.email}</td>
      <td>
        <button className="btn btn-sm btn-outline btn-error">X</button>
        <button
          className="btn btn-sm btn-outline btn-info"
          onClick={() => {
            navigate(`/doctor/${patient._id}`);
          }}
        >
          i
        </button>
      </td>
    </tr>
  );
}
