import Image from "next/image";
import HomeHero from "@/src/components/HomeHero";
import WhereWeGone from "@/src/components/WhereWeGone";

export default function Home() {
  return (
    <div className="flex items-center w-full">
      <div className="flex flex-col gap-20 p-10 w-full">
        <div className="flex flex-col h-[calc(100vh-5rem)] shrink-0 max-w-7xl w-full">
          <HomeHero />
        </div>

        <WhereWeGone />
      </div>
    </div>
  );
}
