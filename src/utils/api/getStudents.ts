import { BASE_URL } from "../constants";

export const getStudents = async () => {
  const response = await fetch(`${BASE_URL}/students`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: sessionStorage.getItem("token") || "",
    },
  });
  const students = await response.json();
  return students;
};
