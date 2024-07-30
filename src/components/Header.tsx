import { logo } from "../assets/svg";
import Button from "./Button";

export default function Header() {
  return (
    <header className="w-full flex justify-between item-center py-4 mt-3">
        <a href="#"><img src={logo} alt="Logo de Digit-NFT" className="size-8"/></a>
        <div className="flex gap-7 text-neutral-700">
            <a href="#">Home</a>
            <a href="#">Top sales</a>
            <a href="#">Collections</a>
            <a href="#">Our Blog</a>
            <a href="#">About us</a>
        </div>
        <div className="flex gap-5 items-center">
            <a href="#" className="text-neutral-800 border-e border-e-neutral-800 px-[26px] py-1">Sign up</a>
            <Button>Connect Wallet</Button>
        </div>
    </header>
  )
}
