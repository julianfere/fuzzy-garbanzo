import { StudenTableProps } from "./types";
import { calculateAge } from "../../utils/helpers/ageCalculator";
import edit from "../../assets/edit.svg";
import trash from "../../assets/trash.svg";
import { Link } from "react-router-dom";
import "./studentTable.css";

export const StudentTable = ({ students }: StudenTableProps) => {
  return (
    <table className="student-table">
      <thead>
        <tr>
          <th className="table-header">Estudiante</th>
          <th className="table-header">Edad</th>
          <th className="table-header">Escolaridad</th>
          <th className="table-header">Escolarizado</th>
          <th className="table-header" colSpan={2}></th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <tr key={student.id} className="table-row">
            <td className="table-data student">
              {student.name} {student.lastname}
            </td>
            <td className="table-data">{calculateAge(student.birthdate)}</td>
            <td className="table-data grade">{student.school_grade}</td>
            <td className="table-data">
              {student.active_student ? "Si" : "No"}
            </td>
            <td className="table-data">
              <Link to={`/student/${student.id}`}>
                <img src={edit} alt="edit"></img>
              </Link>
            </td>
            <td className="delete">
              <img src={trash} alt="delete" />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
