import { Hand } from "lucide-react";
import Header from "./components/UI/header";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="">
        <Header />
        <h1 className="text-4xl font-extrabold tracking-tight">Hello world!</h1>
        <Hand />
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi magnam, velit assumenda at nisi dignissimos sed ea. Voluptates possimus ex enim provident sapiente, debitis exercitationem dicta reprehenderit nostrum sed sequi?</p>
      </main>
    </div>
  );
}
