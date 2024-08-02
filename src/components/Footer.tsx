import { logo } from "../assets/svg";

export default function Footer() {
  return (
    <footer className="mt-section mb-3">
      <img src={logo} alt="Logo de Digit-NFT" className="size-9" />
      <div className="flex justify-between max-lg:flex-col lg:items-center gap-4 py-8">
        <p className="text-2xl">Create Explore & Collect Digital NFTs</p>
        <div className="flex w-fit justify-center gap-[30px] text-sm">
          <a className="link" href="#">Privacy</a>
          <a className="link" href="#">Terms & Conditions</a>
          <a className="link" href="#">About Us</a>
        </div>
      </div>
    </footer>
  );
}
