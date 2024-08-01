import { useEffect, useRef } from "react";
import { cross } from "../assets/svg";
import Button from "./Button";

interface MenuProps {
  onClick: () => void;
  menuActive: boolean;
}

export default function Menu({ onClick, menuActive }: MenuProps) {
  const menu = useRef<HTMLDivElement>(null);
  const background = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (menuActive && menu.current) {
      menu.current.classList.remove("translate-x-full");
      background.current?.classList.remove("opacity-0");
      background.current?.classList.remove("invisible");
      document.body.classList.add("overflow-hidden")
    } else if (!menuActive && menu.current) {
      menu.current.classList.add("translate-x-full");
      background.current?.classList.add("opacity-0");
      background.current?.classList.add("invisible");
      document.body.classList.remove("overflow-hidden")
    }
  }, [menuActive]);

  return (
    <>
      <div
        ref={background}
        className="fixed z-10 left-0 top-0 bg-black/25 w-svw h-lvh opacity-0 invisible transition-opacity duration-300"
      ></div>
      <div
        ref={menu}
        className="fixed right-0 top-0 w-full sm:w-[492px] h-full sm:h-[922px] bg-[#F8F8F8] px-[26px] sm:px-[52px] pt-3 flex flex-col gap-16 z-20 translate-x-full transition-transform ease-out duration-300"
      >
        <div className="flex justify-end w-full py-4">
          <button
            type="button"
            className="flex lg:hidden p-2 rounded-lg bg-neutral-50"
            onClick={() => onClick()}
          >
            <img src={cross} alt="cross Image" />
          </button>
        </div>

        <nav className="flex flex-col gap-7 text-neutral-700">
          <a href="#">Home</a>
          <a href="#">Top sales</a>
          <a href="#">Collections</a>
          <a href="#">Our Blog</a>
          <a href="#">About us</a>
        </nav>

        <div className="flex gap-5 items-center">
          <a
            href="#"
            className="text-neutral-800 border-e border-e-neutral-800 px-[26px] py-1"
          >
            Sign up
          </a>
          <Button>Connect Wallet</Button>
        </div>
      </div>
    </>
  );
}
