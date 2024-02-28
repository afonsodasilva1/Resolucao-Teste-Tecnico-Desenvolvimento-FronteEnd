import { IUser } from "@/app/@types/Types"
import { ButtonStatus } from "./ButtonStatus"
import { ArrowRight } from "./ArrowRight"
import { Table } from "@mantine/core"
import { HeadingListItem } from "./HeadingListItem"

export function ListUserItem(user: IUser) {
  return (
    <Table.Tr className="border-none outline-none">
      <Table.Td>
        <div className="w-max flex items-center gap-4">
          <img src={user.avatar} alt="avatar" className="w-10 h-10 rounded-md border" />
          <div className="w-max flex flex-col">
            <HeadingListItem>{user.name}</HeadingListItem>
            <span className="text-[13px] text-mygray-500">
              {user.designation}
            </span>
          </div>
        </div>
      </Table.Td>
      <Table.Td>
        <HeadingListItem>
          {user.id}
        </HeadingListItem>
      </Table.Td>
      <Table.Td>
        <HeadingListItem>
          {user.email}
        </HeadingListItem>
      </Table.Td>
      <Table.Td>
        <HeadingListItem>
          {user.phone_number}
        </HeadingListItem>
      </Table.Td>
      <Table.Td>
        <div className="flex flex-col gap-1 justify-center">
          <HeadingListItem>{user.date_added.day}</HeadingListItem>
          <span className="text-mygray-500 text-[13px]">
            {user.date_added.hour}
          </span>
        </div>
      </Table.Td>
      <Table.Td className="flex items-center justify-between">
        <ButtonStatus status={user.status} />
        <ArrowRight />
      </Table.Td>
    </Table.Tr>
  )
}
