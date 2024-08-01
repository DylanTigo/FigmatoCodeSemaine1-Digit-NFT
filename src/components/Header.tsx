import { useState } from "react";
import { logo, menu } from "../assets/svg";
import Button from "./Button";
import Menu from "./Menu";

export default function Header() {
  const [menuActive, setMenuActive] = useState(true);

  function toggleMenu () {
    setMenuActive(!menuActive)
  }

  return (
    <header className="w-full flex justify-between item-center py-4 mt-3">
      <a href="#" className="flex items-center">
        <img src={logo} alt="Logo de Digit-NFT" className="size-8" />
      </a>
      <nav className="lg:flex hidden gap-7 items-center text-neutral-700">
        <a href="#">Home</a>
        <a href="#">Top sales</a>
        <a href="#">Collections</a>
        <a href="#">Our Blog</a>
        <a href="#">About us</a>
      </nav>
      <div className="lg:flex hidden gap-5 items-center">
        <a
          href="#"
          className="text-neutral-800 border-e border-e-neutral-800 px-[26px] py-1"
        >
          Sign up
        </a>
        <Button>Connect Wallet</Button>
      </div>
      <button
        type="button"
        className="flex lg:hidden p-2 rounded-lg bg-neutral-50"
        onClick={toggleMenu}
      >
        <img src={menu} alt="cross Image" />
      </button>
      <Menu onClick={() => toggleMenu()} menuActive={menuActive}/>
    </header>
  );
}
