import { IUser } from "../@types/Types";
import avatar from "@/app/assets/schedule.png";

export const usersDB: IUser[] = [
  {
    id: "001",
    name: "Afonso Vicente",
    avatar: "",
    email: "afonso@gmail.com",
    phone_number: "945332002",
    date_added: {
      day: "12/12/2022",
      hour: "03:00 PM"
    },
    designation: "Doctor",
    status: "Approved",
  },
  {
    id: "002",
    name: "Mauro Twister",
    avatar: "",
    email: "twister@gmail.com",
    phone_number: "945551192",
    date_added: {
      day: "12/12/2023",
      hour: "03:00 PM"
    },
    designation: "Especialist",
    status: "Declined",
  },
  {
    id: "003",
    name: "Java Simon",
    avatar: "",
    email: "java@gmail.com",
    phone_number: "945332002",
    date_added: {
      day: "12/12/2022",
      hour: "03:00 PM"
    },
    designation: "teste",
    status: "Approved",
  },
  {
    id: "04",
    name: "Miguel Deep",
    avatar: "",
    email: "deep@gmail.com",
    phone_number: "945332002",
    date_added: {
      day: "12/12/2022",
      hour: "03:00 PM"
    },
    designation: "Teste1",
    status: "Declined",
  },
  {
    id: "005",
    name: "Abílio Félix",
    avatar: "",
    email: "abfline@gmail.com",
    phone_number: "945332002",
    date_added: {
      day: "12/12/2022",
      hour: "03:00 PM"
    },
    designation: "",
    status: "Approved",
  },
]
