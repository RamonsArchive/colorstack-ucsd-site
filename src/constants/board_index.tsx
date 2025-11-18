import { BoardCardType } from "../lib/GlobalTypes";
import { createMemberId } from "../lib/utils";

export const boardHeroData = {
  title: "Meet the Board",
  description: (
    <>
      Meet the passionate leaders making Color
      <span className="text-primary-500">S</span>tack @ UCSD possible. Our board
      members are dedicated students who work tirelessly to build community,
      organize events, and create opportunities for Black and Hispanic software
      engineering students at UC San Diego.
    </>
  ),
  images: {
    image1: {
      src: "/ClubPhotos/santa2.jpg",
      alt: "Team Image 1",
      width: 100,
      height: 100,
    },
    image2: {
      src: "/ClubPhotos/WIC1.JPG",
      alt: "Team Image 2",
      width: 100,
      height: 100,
    },
    image3: {
      src: "/ClubPhotos/santa1.jpg",
      alt: "Team Image 3",
      width: 100,
      height: 100,
    },
  },
};

// Executive Board Data for individual members
export const executiveBoardData = {
  titleSection: {
    id: "executive-board",
    index: 1,
    title: "Executive Board",
  },
  cards: [
    {
      id: createMemberId("Emily Nguyen", "President"), // essential for routing
      name: "Emily Nguyen",
      title: "President",
      favoriteSong: "Reptilia by The Strokes",
      favoriteMovie: "Avatar",
      whyJoin: <></>,
      linkedin: "https://www.linkedin.com/in/emn007/",
      image: {
        src: "/Board/Executive/emilynguyen_pres.JPG",
        alt: "Emily Nguyen",
        width: 350,
        height: 350,
      },
    },
    {
      id: createMemberId("Arturo Lopez Vazquez", "VP of Operations"),
      name: "Arturo Lopez Vazquez",
      title: "VP of Operations",
      favoriteSong: "Tell Me You Know by Good Kid ",
      favoriteMovie: "WALL·E",
      whyJoin: (
        <>
          I felt that there wasn{"'"}t much connection between latinos in UCSD
          and at the time I didn{"'"}t know about SHPE so I joined Color
          <span className="text-primary-500">S</span>tack to promote unity and
          encouragement between latino and other underrepresented communities.
        </>
      ),
      linkedin: "https://www.linkedin.com/in/arturo-lópez-vázquez-52ba43307/",
      image: {
        src: "/Board/Executive/Arturo_vpo.jpg",
        alt: "Arturo Lopez Vazquez",
        width: 350,
        height: 350,
      },
    },
  ],
};

export const developmentBoardData = {
  titleSection: {
    id: "development-board",
    index: 2,
    title: "Development Board",
  },
  cards: [
    {
      id: createMemberId("Ramon Calderon McDargh-Mitchell", "Web Dev Lead"),
      name: "Ramon Calderon McDargh-Mitchell",
      title: "Web Dev Lead",
      favoriteSong: "Avalon by Zeruel",
      favoriteMovie: "Karate Kid",
      whyJoin: (
        <>
          I joined Color<span className="text-primary-500">S</span>tack because
          I want to make a real difference on campus for Hispanic software
          engineers who often feel underrepresented or undersupported. I also
          want to share what I’ve learned in tech and learn from others, so we
          can build a vibrant, skilled, and empowered Black and Hispanic
          community here on campus.
        </>
      ),
      linkedin: "www.linkedin.com/in/ramonmnm100",
      image: {
        src: "/Board/Development/ramon_mcdarghmitchell.png",
        alt: "Ramon Calderon McDargh-Mitchell",
        width: 350,
        height: 350,
      },
    },
    {
      id: createMemberId("Karim Barajas", "VP of Programming"),
      name: "Karim Barajas",
      title: "VP of Programming",
      favoriteSong: "Changes by 2Pac",
      favoriteMovie: "Ratatouille",
      whyJoin: (
        <>
          I joined Color<span className="text-primary-500">S</span>tack because,
          as a Hispanic student in tech, I wanted to help create a space where
          students who feel underrepresented or unsupported can feel supported,
          seen, and empowered. Throughout my time at UCSD, I’ve learned a lot
          about navigating tech, academics, internships, and opportunities, and
          I want to share that knowledge so others don’t feel alone or
          discouraged. Whether it’s through advice, mentorship, workshops, or
          simply showing that GPA or background doesn’t define your potential, I
          want to uplift anyone pursuing a technical field or career. Whether
          that’s in software engineering, finance, games, or any technical path,
          I believe that everyone deserves access to education and opportunity.
          That’s why I enjoy helping the club with event planning and
          collaborating with other organizations to create opportunities that
          match students’ interests.
        </>
      ),
      linkedin: "https://www.linkedin.com/in/karim-barajas-036052310/",
      image: {
        src: "/Board/Development/karimbarajas_vpp.jpg",
        alt: "Karim Barajas",
        width: 350,
        height: 350,
      },
    },
    {
      id: createMemberId("Zyanya Rios", "Technical Programming Lead"),
      name: "Zyanya Rios",
      title: "Technical Programming Lead",
      favoriteSong: "Payphone - Maroon 5",
      favoriteMovie: "Nimona",
      whyJoin: <></>,
      linkedin: "https://www.linkedin.com/in/zyanya-isabella-rios/",
      image: {
        src: "/Board/Development/zyanyaRios_TechnicalProgrammingLead.png",
        alt: "Zyanya Rios",
        width: 350,
        height: 350,
      },
    },
  ],
};

export const outreachBoardData = {
  titleSection: {
    id: "outreach-board",
    index: 3,
    title: "Outreach Board",
  },
  cards: [
    {
      id: createMemberId("Yasmin Kabir", "Internal Outreach Chair"),
      name: "Yasmin Kabir",
      title: "Internal Outreach Chair",
      favoriteSong: "Make It Up To You by Khalid ft. Arya Starr",
      favoriteMovie: "Parasite",
      whyJoin: (
        <>
          I joined Color<span className="text-primary-500">S</span>tack to find
          more community within Computer Science with other minority students,
          especially other Black students.
        </>
      ),
      linkedin: "https://www.linkedin.com/in/yasminkabir/",
      image: {
        src: "/Board/Outreach/yasmin_ioc.jpg",
        alt: "Yasmin Kabir",
        width: 350,
        height: 350,
      },
    },
    {
      id: createMemberId("Danae Delgado-Diaz", "Design & Engagement Lead"),
      name: "Danae Delgado-Diaz ",
      title: "Design & Engagement Lead",
      favoriteSong: "Automatic Sun by The Warning",
      favoriteMovie: "Spider-man: Into the Spiderverse",
      whyJoin: (
        <>
          I joined Color<span className="text-primary-500">S</span>tack because
          I wanted to find Hispanic community within my major. I wanted to help
          form that community too through my interest in graphic design as I
          think it{"'"}s important for us to see ourselves in media representing
          the very subjects we wish to pursue.
        </>
      ),
      linkedin: "https://www.linkedin.com/in/danae-delgado-diaz",
      image: {
        src: "/Board/Outreach/Danae_Design&EngagementLead.jpg", // public/Board/Outreach/Danae_Design&EngagementLead.jpg
        alt: "Danae Delgado-Diaz",
        width: 350,
        height: 350,
      },
    },
    {
      id: createMemberId("Christina Asinobi", "Marketing Chair"),
      name: "Christina Asinobi",
      title: "Marketing Chair",
      favoriteSong: "Good Days by SZA",
      favoriteMovie: "Aladdin",
      whyJoin: (
        <>
          I joined Color<span className="text-primary-500">S</span>tack because
          I wanted to help create the kind of community where students that are
          typically underrepresented in tech feel supported, seen, and
          connected. I want to bring people together and make sure no one feels
          alone while navigating this field.
        </>
      ),
      linkedin: "www.linkedin.com/in/ramonmnm100", // TODO: Add LinkedIn link
      image: {
        src: "/placeholder-person.png",
        alt: "Christina Asinobi",
        width: 350,
        height: 350,
      },
    },
  ],
};

export const financeBoardData = {
  titleSection: {
    id: "finance-board",
    index: 4,
    title: "Finance Board",
  },
  cards: [
    {
      id: createMemberId("Isidro Hernandez Cardenas", "Treasurer"),
      name: "Isidro Hernandez Cardenas",
      title: "Treasurer",
      favoriteSong: "Dtmf by Bad Bunny",
      favoriteMovie: "The Amazing Spider-man",
      whyJoin: <></>,
      linkedin: "https://www.linkedin.com/in/isidro-hernandez-cardenas/",
      image: {
        src: "/Board/Finance/isidro_treasurer.png",
        alt: "Isidro Hernandez Cardenas",
        width: 350,
        height: 350,
      },
    },
  ],
};

// Combine all boards into one flat map for easy lookup
export const allMembersMap: Record<string, BoardCardType> = {};

// Helper to add members to map
const addMembersToMap = (members: BoardCardType[]) => {
  members.forEach((member) => {
    allMembersMap[member.id] = member;
  });
};

addMembersToMap(executiveBoardData.cards);
addMembersToMap(developmentBoardData.cards);
addMembersToMap(outreachBoardData.cards);
addMembersToMap(financeBoardData.cards);

// Export a function to get member by ID
export const getMemberById = (id: string): BoardCardType | undefined => {
  return allMembersMap[id];
};
