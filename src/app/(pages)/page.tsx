import HomeHero from "@/src/components/HomeHero";
import WhereWeGone from "@/src/components/WhereWeGone";
import Partners from "@/src/components/Partners";
import UpcomingEvents from "@/src/components/UpcomingEvents";
import AnnouncementBoard from "@/src/components/AnnouncementBoard";
import AnnouncementPopup from "@/src/components/AnnouncementPopup";
import { fetchUpcomingEvents } from "@/src/lib/actions/calander";
import OurMission from "@/src/components/OurMission";

export default async function Home() {
  // call fetch upcoming evens on server using server actions for maximum performance
  const upcomingEvents = await fetchUpcomingEvents();

  // Handle errors gracefully - if fetch fails, show empty array instead of crashing
  const events =
    upcomingEvents.status === "SUCCESS" ? upcomingEvents.data || [] : [];

  return (
    <div className="flex items-center w-full">
      <AnnouncementPopup />
      <div className="flex flex-col gap-26 w-full max-w-full">
        <div className="flex flex-col gap-10 xs:p-5 lg:p-10">
          <HomeHero />
        </div>

        <div className="flex flex-col gap-26 p-5 lg:p-10">
          <AnnouncementBoard />
          <WhereWeGone />
          <Partners />
          <UpcomingEvents upcomingEvents={events} />
          <OurMission />
        </div>
      </div>
    </div>
  );
}
