import Image from "next/image";
import HomeHero from "@/src/components/HomeHero";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen w-full">
      <div className="flex flex-col gap-20 p-10 max-w-7xl w-full min-h-screen">
        <HomeHero />
      </div>
    </div>
  );
}
