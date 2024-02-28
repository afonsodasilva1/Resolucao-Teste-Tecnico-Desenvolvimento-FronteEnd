import { ArrowRight as ArrowRightLucide } from "lucide-react"

export function ArrowRight() {
  return (
    <button
      className="w-[32px] h-[32px] rounded-[6px] bg-mygray-100 text-white-100 font-medium border-none outline-none hover:bg-gray-300 transition-all  "
    >
      <ArrowRightLucide size={18} className="w-full text-gray-400 cursor-pointer transition-all" />
    </button>
  );
}