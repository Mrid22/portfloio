import Image from "next/image";
import Clock from "../components/Clock";
import Intro from "../components/Intro";
import Menu from "../components/Gauntlet";

export default function Home() {
  const title = "Mridul Agarwal";
  return (
    <>
      <title>{title}</title>
      <header
        className={
          "absolute w-screen flex justify-between select-none top-0 left-0 z-20 bg-black/50 text-white px-5"
        }
      >
        <p>1</p>
        <p>{title}</p>
        <Clock />
      </header>
      <main>
        <div id={"Hero"} className={"w-screen h-screen relative"}>
          <Image src={"wallpaper.jpg"} alt={"wallpaper"} fill={true} />
        </div>
        <Intro />
        <Menu />
      </main>
    </>
  );
}
