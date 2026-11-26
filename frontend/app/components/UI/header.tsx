import { Clapperboard, UserRound } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex row justify-between items-center p-5 border-b border-border shadow-[0_4px_10px_rgba(0,0,0,0.1)]">
      <div className="flex gap-[10px] items-center">
        <div className="bg-black w-[40px] h-[40px] rounded-[10px] flex justify-center items-center">
          <Clapperboard className="text-primary" />
        </div>
        <span className="text-xl font-semibold">
          Series <br />
          Tracker
        </span>
      </div>
      <div>EN/UA</div>
      <div>Theme switcher</div>
      <Link
        href={"/login"}
        className="flex items-center w-[100px] h-[60px] bg-primary px-5 py-2 rounded-[100px]"
      >
        <span className="text-button-text font-semibold">Try Free</span>
      </Link>
      <div className="flex justify-center items-center p-2 w-[40px] h-[50px] bg-primary border border-border rounded-[20px]">
        <UserRound className="text-button-text"/>
      </div>
    </header>
  );
}
