import { Metadata } from "next";
export const generateMetadata = (): Metadata => {
  return {
    title: "Mridul Agarwal - UI Design",
  };
};
export default function UiDesign() {
  return (
    <>
      <div className={"w-screen h-screen flex justify-center items-center"}>
        <h1 className={"text-5xl font-bold text-white"}>UI Design</h1>
      </div>
    </>
  );
}
