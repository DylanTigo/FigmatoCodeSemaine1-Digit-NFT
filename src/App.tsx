import { coolKong, headBroken } from "./assets/images";
import { arrow, stars } from "./assets/svg";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <main>
        <section className="mt-[106px] container flex">
          <div className="flex gap-[52px] flex-col text-neutral-600 w-1/2">
            <h1 className="text-[120px] leading-[108px] text-nowrap">
              See the NFT
              <span className="block">new world</span>
            </h1>
            <div className="max-w-[412px]">
              <p className="w-full text-neutral-400 mb-[26px]">
                Vorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, di
              </p>
              <button type="button" className="flex gap-4 items-center">
                Discover now{" "}
                <div className="p-[14px] rounded-full border border-neutral-600">
                <img
                  src={arrow}
                  alt="fléche vers la droite"
                  className="size-5"
                />
                </div>
              </button>
            </div>
          </div>
          <div className="relative w-[596px] h-[588px] flex justify-between mt-5">
            <img src={ stars } alt="" className="absolute top-[15px] left-[150px]"/>
            <img src={headBroken} alt="Bald woman's head cracked with butterfly" className="rounded-full object-cover object-center w-[288px] h-[442px] self-end"/>
            <img src={coolKong} alt="Monkey wearing glass and smoking" className="rounded-full object-cover object-center w-[288px] h-[442px]"/>
          </div>

        </section>

        <section className="section">
          <h2 className="title">Our Collections</h2>
          <div className="flex justify-between items-center">
            <div className="flex gap-2 w-fit">
              <button type="button" className="filterBtn active">All cathegories</button>
              <button type="button" className="filterBtn">Art</button>
              <button type="button" className="filterBtn">Celibrities</button>
              <button type="button" className="filterBtn">Gaming</button>
              <button type="button" className="filterBtn">Sport</button>
            </div>
            <a href="#" className=" decoration-neutral-500">View more</a>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
