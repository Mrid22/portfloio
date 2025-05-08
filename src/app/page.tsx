import Image from "next/image";
import Clock from "../components/Clock";
export default function Home() {
  return (
    <>
      <header
        className={
          "w-screen flex justify-between select-none sticky top-0 left-0 z-20 bg-black/50 text-white px-5"
        }
      >
        <p>1</p>
        <p>Mridul Agarwale</p>
        <Clock />
      </header>
      <main className={"bg-black"}>
        <div className={"text-10xl bg-black"}>Next.js on GitHub Pages</div>
        <div id={"Hero"} className={"w-screen h-screen"}>
          <Image src={"wallpaper.jpg"} alt={"wallpaper"} fill={true} />
        </div>
      </main>
    </>
  );
}
