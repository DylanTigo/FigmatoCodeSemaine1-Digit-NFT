import { astroGaming, coolKong, headBroken } from "./assets/images";
import { arrow, stars } from "./assets/svg";
import AdvantageCard from "./components/AdvantageCard";
import Button from "./components/Button";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { avantages, collections } from "./datas/datas";

function App() {
  return (
    <>
      <Header />
      <main>
        <section className="mt-[106px] container flex max-lg:flex-col">
          <div className="flex gap-[52px] flex-col text-neutral-600 lg:max-w-[50%]">
            <h1 className="lg:text-[120px] sm:text-8xl text-[52px] lg:leading-[108px] leading-[82px] text-nowrap font-normal">
              See the NFT
              <span className="block">new world</span>
            </h1>
            <div className="max-w-[412px]">
              <p className="w-full text-neutral-400 mb-[26px] text-pretty">
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
          <div className="relative w-[596px] h-[588px] flex justify-between lg:mt-5 max-sm:mt-[107px] max-lg:mx-auto">
            <img
              src={stars}
              alt=""
              className="absolute top-[15px] left-[150px]"
            />
            <img
              src={headBroken}
              alt="Bald woman's head cracked with butterfly"
              className="rounded-full object-cover object-center w-[288px] h-[442px] self-end"
            />
            <img
              src={coolKong}
              alt="Monkey wearing glass and smoking"
              className="rounded-full object-cover object-center w-[288px] h-[442px]"
            />
          </div>
        </section>

        <section className="section">
          <h2 className="title">Our Collections</h2>
          <div className="flex justify-between items-center flex-wrap gap-[10px]">
            <div className="flex gap-2 w-fit overflow-x-scroll scrollbar-hide">
              <button type="button" className="filterBtn active">
                All cathegories
              </button>
              <button type="button" className="filterBtn">
                Art
              </button>
              <button type="button" className="filterBtn">
                Celibrities
              </button>
              <button type="button" className="filterBtn">
                Gaming
              </button>
              <button type="button" className="filterBtn">
                Sport
              </button>
            </div>
            <a
              href="#"
              className="underline decoration-neutral-500 decoration-solid ms-3"
            >
              View more
            </a>
          </div>
          <div className="flex gap-6 justify-center flex-wrap">
            {collections.map((item) => (
              <Card item={item} key={item.id} />
            ))}
          </div>
        </section>
        <section className="section">
          <h2 className="title">Create and Sell Now</h2>
          <div className="flex gap-6 justify-center flex-wrap">
            {avantages.map((avantage ) => (
              <AdvantageCard key={avantage.id} avantage={avantage} />
            ))}
          </div>
        </section>
        <section className="section py-[4.5rem] text-white flex flex-col justify-center items-center relative rounded-4xl overflow-hidden">
          <img
            src={astroGaming}
            alt="astronaut with casino domino"
            className="absolute top-0 left-0 w-full h-full object-cover brightness-50 -z-10"
          />
          <h2 className="text-[28px] sm:text-[46px] lg:text-[4rem] font-medium">Build your NFT profile</h2>
          <p className="font-semibold max-sm:text-xs">Join almost 10k NFT profiles on Digit !</p>
          <Button variant="secondary">Sign up now</Button>
        </section>

        <Footer />
      </main>
    </>
  );
}

export default App;
