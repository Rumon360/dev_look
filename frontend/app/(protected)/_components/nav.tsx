import { Button } from "@/components/ui/button";
import Logo from "@/components/ui/logo";

function Nav() {
  return (
    <header className="sticky px-container h-[calc(60px+40*(100vw-576px)/1024)] border-b top-0 z-50 flex items-center justify-between bg-white">
      <div className="max-w-[calc(50px+14*(100vw-576px)/1024)] h-auto block">
        <Logo />
      </div>
      <nav>
        <ul>
          <li>
            <Button className="bg-black text-white">Logout</Button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
