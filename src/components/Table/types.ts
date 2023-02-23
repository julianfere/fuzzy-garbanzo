type Student = {
  id: number;
  name: string;
  lastname: string;
  birthdate: string;
  address: string;
  school_grade: "high" | "middle" | "elementary" | "kinder";
  active_student: boolean;
  user_id: number;
};

type StudenTableProps = {
  students: Student[];
};

export type { Student, StudenTableProps };
