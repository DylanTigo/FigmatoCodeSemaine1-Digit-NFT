import { ethereum } from "../assets/svg";

type Card = {
  id: number;
  name: string;
  price: number;
  img: string;
  type: string;
};

export default function Card({ item }: { item: Card }) {
  
  return (
    <article className="card w-[282px] h-[341px] rounded-card border space-y-4 border-neutral-100 p-3 shrink-0">
      <div className="w-full h-[213px] rounded-card overflow-hidden">
        <img
          src={item.img}
          alt={"image de " + item.name}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex justify-between w-full items-center font-bold">
        <p>{item.name}</p>
        <div className="flex gap-[2px] items-center">
          <img src={ethereum} alt="bitcoin icon" className="size-6" />
          <span className="text-neutral-800">{item.price}</span>
        </div>
      </div>
      <button
        type="button"
        className="w-full border border-neutral-800 rounded-xl flex justify-center py-[10px] btnLight"
      >
        Place a Bild
      </button>
    </article>
  );
}
