import { useState } from "react";
import { logo, menu } from "../assets/svg";
import Button from "./Button";
import Menu from "./Menu";

export default function Header() {
  const [menuActive, setMenuActive] = useState(false);

  function toggleMenu () {
    setMenuActive(prev => !prev)
  }

  return (
    <header className="w-full flex justify-between item-center py-4 mt-3">
      <a href="#" className="flex items-center">
        <img src={logo} alt="Logo de Digit-NFT" className="size-8" />
      </a>
      <nav className="lg:flex hidden gap-7 items-center text-neutral-700">
        <a className="link" href="#">Home</a>
        <a className="link" href="#">Top sales</a>
        <a className="link" href="#">Collections</a>
        <a className="link" href="#">Our Blog</a>
        <a className="link" href="#">About us</a>
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
