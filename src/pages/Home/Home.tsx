import { useMemo } from "react";
import { useAuth } from "../../auth/useAuth";
import { Button } from "../../components/Button/Button";
import { Filter } from "../../components/Filter/Filter";
import { StudentTable } from "../../components/Table/StudentTable";
import { useQuery } from "react-query";
import { Student } from "../../components/Table/types";
import addUserIcon from "../../assets/add_user.svg";
import "./home.css";
import { getStudents } from "../../utils/api/getStudents";

export const Home = () => {
  const { getCurrentUser } = useAuth();
  const currentUser = useMemo(() => getCurrentUser(), [getCurrentUser]);

  const students = useMemo(
    () =>
      [
        {
          id: 1,
          name: "Danae",
          lastname: "Gutkowski",
          birthdate: "2007-07-06",
          address: "null",
          school_grade: "middle",
          active_student: true,
          user_id: 1,
        },
        {
          id: 2,
          name: "Reagan",
          lastname: "Braun",
          birthdate: "2001-06-20",
          address: "null",
          school_grade: "high",
          active_student: true,
          user_id: 1,
        },
        {
          id: 3,
          name: "Marlys",
          lastname: "Bauch",
          birthdate: "2007-11-05",
          address: "null",
          school_grade: "elementary",
          active_student: true,
          user_id: 1,
        },
        {
          id: 4,
          name: "Blake",
          lastname: "Willms",
          birthdate: "2008-10-15",
          address: "null",
          school_grade: "elementary",
          active_student: true,
          user_id: 2,
        },
        {
          id: 5,
          name: "Keenan",
          lastname: "Volkman",
          birthdate: "2005-05-09",
          address: "null",
          school_grade: "high",
          active_student: true,
          user_id: 2,
        },
        {
          id: 6,
          name: "Katrina",
          lastname: "Kuhn",
          birthdate: "2010-12-05",
          address: "null",
          school_grade: "elementary",
          active_student: true,
          user_id: 2,
        },
      ] as Student[],
    []
  );

  const query = useQuery("students", getStudents);
  console.log(query);
  return (
    <main className="students-container">
      <article className="table-container">
        <section className="action-container">
          <Filter />
          <Button
            text="Agregar estudiante"
            icon={addUserIcon}
            onClick={() => {}}
          />
        </section>
        {query.isLoading && <p>Loading...</p>}
        {query.isError && <StudentTable students={[]} />}
        {query.isSuccess && <StudentTable students={query.data ?? []} />}
      </article>
    </main>
  );
};
