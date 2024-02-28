import { RoundedSeparator } from "../../BlockPath/RoundedSeparator";
import { ActiveLink } from "./ActiveLink";

export function ActiveMenuLink() {
  return (
    <div className="flex items-center justify-center px-20 gap-[30px]">
      <ActiveLink active topic="Doctor" />
      <ActiveLink topic="Administration" />
      <ActiveLink topic="Accounts" />
      <div className="flex items-center justify-center">
        <RoundedSeparator className="ml-2" />
        <RoundedSeparator className="ml-1" />
      </div>
    </div>
  )
}