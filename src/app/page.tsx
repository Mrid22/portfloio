import Image from "next/image";
import Clock from "../components/Clock";
export default function Home() {
  const title = "Mridul Agarwal";
  return (
    <>
      <title>{title}</title>
      <header
        className={
          "w-screen flex justify-between select-none sticky top-0 left-0 z-20 bg-black/50 text-white px-5"
        }
      >
        <p>1</p>
        <p>{title}</p>
        <Clock />
      </header>
      <main className={"bg-black"}>
        <div className={"text-10xl bg-black w-screen"}>
          Next.js on GitHub Pages
        </div>
        <div id={"Hero"} className={"w-screen h-screen"}>
          <Image src={"wallpaper.jpg"} alt={"wallpaper"} fill={true} />
        </div>
      </main>
    </>
  );
}
