export const scheduleHeroData = {
  title: <>Our Schedule</>,
  description: (
    <>
      The best way to connect with ColorStack, is to show up to events and
      you’re in the right place to do so. Mark your calendars and come show out!
    </>
  ),
  images: {
    image1: {
      src: "/Assets/ramon_mcdarghmitchell.png",
      alt: "Schedule Image 1",
      width: 100,
      height: 100,
    },
    image2: {
      src: "/Assets/ramon_mcdarghmitchell.png",
      alt: "Schedule Image 2",
      width: 100,
      height: 100,
    },
    image3: {
      src: "/Assets/ramon_mcdarghmitchell.png",
      alt: "Schedule Image 3",
      width: 100,
      height: 100,
    },
  },
};

export const fullScheduleData = {
  titleSection: {
    id: "full-schedule",
    index: 1,
    title: "Full Schedule",
  },
  iframe: (
    <iframe
      src="https://calendar.google.com/calendar/embed?src=c_de540ce00910ac62f0cfb64e5121aea89310070a4cc3abb8af1ce9f87df1c796%40group.calendar.google.com&ctz=America%2FLos_Angeles"
      style={{ border: 0 }}
      width="100%"
      height="100%"
    />
  ),
  events: [
    {
      title: "Event 1",
      description: "Description 1",
    },
  ],
};

export const eventTypesData = {
  titleSection: {
    id: "event-types",
    index: 2,
    title: "Event Types",
  },
  eventTypes: [
    {
      icon: "💻",
      title: "Technical Workshops",
      description:
        "Hands-on coding sessions, algorithm practice, system design, and interview prep",
    },
    {
      icon: "🎉",
      title: "Social Events",
      description:
        "Casual meetups, game nights, and community building activities",
    },
    {
      icon: "💼",
      title: "Industry Nights",
      description:
        "Networking with tech professionals, company visits, and career panels",
    },
    {
      icon: "📚",
      title: "Study Sessions",
      description:
        "Collaborative study groups for classes, projects, and exam preparation",
    },
  ],
};
