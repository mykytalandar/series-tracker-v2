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
      <Link href={"/login"} className="">Try Free</Link>
      <div>
        <UserRound />
      </div>
    </header>
  );
}
