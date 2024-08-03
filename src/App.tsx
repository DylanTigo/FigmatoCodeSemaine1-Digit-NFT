import { useEffect, useMemo, useRef, useState } from "react";
import { astroGaming, coolKong, headBroken } from "./assets/images";
import { arrow, stars } from "./assets/svg";
import AdvantageCard from "./components/AdvantageCard";
import Button from "./components/Button";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { avantages, collections } from "./datas/datas";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useGSAP } from "@gsap/react";

type Collection = {
  id: number;
  name: string;
  price: number;
  img: string;
  type: string;
};

function App() {
  const hero = useRef(null);
  const img1 = useRef(null);
  const img2 = useRef(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const advantagesRef = useRef<HTMLDivElement[]>([]);
  const signUpSection = useRef(null);
  const [activeCategory, setActiveCategory] = useState("all");

  const filterCollections = ( collections: Collection[], category: string ) => {
    if (category === "all") return collections;
    const filteredCollections = collections.filter((collection) => collection.type === category);
    
    return filteredCollections;
  }
  const filtedCollections = useMemo(() => filterCollections(collections, activeCategory) , [activeCategory]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        start: "top top",
        end: "bottom top",
        scrub: true,
        toggleActions: "play none none reverse",
      },
    });

    tl.to(img1.current, { y: -600, ease: "power1.inOut" }, 0);
    tl.to(img2.current, { y: -300, ease: "power1.inOut" }, 0);
  }, [hero.current]);

  useGSAP(
    () => {
      gsap.from(
        cardsRef.current,
        {
          opacity: 0,
          y: 80,
          stagger: 0.1,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },{ dependencies: [activeCategory], revertOnUpdate: true }
  );

  useGSAP(
    () => {
      gsap.fromTo(
        advantagesRef.current,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          onComplete: () => {},
          scrollTrigger: {
            trigger: advantagesRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  );

  return (
    <>
      <Header />
      <main>
        <section
          ref={hero}
          className="mt-[106px] container flex max-lg:flex-col"
        >
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
              <button type="button" className="flex gap-4 items-center group !overflow-visible">
                Discover now{" "}
                <div className="p-[14px] rounded-full border border-neutral-600 group-hover:-rotate-45 group-hover:translate-x-1 transition-transform duration-300">
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
              ref={img1}
              src={headBroken}
              alt="Bald woman's head cracked with butterfly"
              className="rounded-full object-cover object-center w-[288px] h-[442px] self-end"
            />
            <img
              ref={img2}
              src={coolKong}
              alt="Monkey wearing glass and smoking"
              className="rounded-full object-cover object-center w-[288px] h-[442px]"
            />
          </div>
        </section>

        <section className="section" id="collections">
          <h2 className="title">Our Collections</h2>
          <div className="flex justify-between items-center flex-wrap gap-[10px]">
            <div className="flex gap-2 w-fit overflow-x-scroll scrollbar-hide">
              <button type="button" className={`filterBtn ${activeCategory === "all" ? "active" : ""}`} onClick={() => setActiveCategory("all")}>
                All cathegories
              </button>
              <button type="button" className={`filterBtn ${activeCategory === "art" ? "active" : ""}`} onClick={() => setActiveCategory("art")}>
                Art
              </button>
              <button type="button" className={`filterBtn ${activeCategory === "celebrities" ? "active" : ""}`} onClick={() => setActiveCategory("celebrities") }>
                Celibrities
              </button>
              <button type="button" className={`filterBtn ${activeCategory === "gaming" ? "active" : ""}`} onClick={() => setActiveCategory("gaming") }>
                Gaming
              </button>
              <button type="button" className={`filterBtn ${activeCategory === "sport" ? "active" : ""}`} onClick={() => setActiveCategory("sport")} disabled>
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
            {filtedCollections.map((item, index) => (
              <div
                ref={(el) => (cardsRef.current[index] = el as HTMLDivElement)}
                key={item.id}
              >
                <Card item={item} />
              </div>
            ))}
          </div>
        </section>
        <section className="section" ref={signUpSection}>
          <h2 className="title">Create and Sell Now</h2>
          <div className="flex gap-6 justify-center flex-wrap">
            {avantages.map((avantage, index) => (
              <div
                ref={(el) =>
                  (advantagesRef.current[index] = el as HTMLDivElement)
                }
                key={avantage.id}
              >
                <AdvantageCard avantage={avantage} />
              </div>
            ))}
          </div>
        </section>
        <section
          ref={signUpSection}
          className="section py-[4.5rem] text-white flex flex-col justify-center items-center group relative rounded-4xl overflow-hidden"
        >
          <img
            src={astroGaming}
            alt="astronaut with casino domino"
            className="absolute top-0 left-0 w-full h-full object-cover brightness-50 -z-10 group-hover:scale-150 group-hover:duration-[20s] ease-linear transition-transform" 
          />
          <h2 className="text-[28px] sm:text-[46px] lg:text-[4rem] font-medium">
            Build your NFT profile
          </h2>
          <p className="font-semibold max-sm:text-xs">
            Join almost 10k NFT profiles on Digit !
          </p>
          <Button variant="secondary">Sign up now</Button>
        </section>

        <Footer />
      </main>
    </>
  );
}

export default App;
