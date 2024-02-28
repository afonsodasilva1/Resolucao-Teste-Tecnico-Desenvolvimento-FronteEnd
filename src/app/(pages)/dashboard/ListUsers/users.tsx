"use client";
import { Suspense } from "react";
import { useQuery } from "@tanstack/react-query";
import { ListUserItem } from "./LIstUserItem";
import { IUser } from "@/app/@types/Types";
import { api } from "@/app/api";

export default function Users() {
  const { data: users } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const users = await api.get<IUser[]>("/users");
      return users.data;
    }
  });

  return (
    <Suspense fallback={<p>Carregando...</p>}>
      {users?.map(user => (
        <ListUserItem
          key={user.id}
          id={user.id}
          name={user.name}
          avatar={user.avatar}
          email={user.email}
          phone_number={user.phone_number}
          date_added={user.date_added}
          designation={user.designation}
          status={user.status}
        />
      ))}
    </Suspense>
  )
}