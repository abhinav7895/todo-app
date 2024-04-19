import { json } from "react-router-dom";
import { User } from "../../types";

export function getCurrentDate() {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = new Date();
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
}


export const setUserToLocalStorage = async (user : User) => {
  localStorage.removeItem("user");
  localStorage.setItem("user", JSON.stringify(user));
}