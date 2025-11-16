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
      src: "/Assets/ramon_mcdarghmitchell.png",
      alt: "Team Image 1",
      width: 100,
      height: 100,
    },
    image2: {
      src: "/Assets/ramon_mcdarghmitchell.png",
      alt: "Team Image 2",
      width: 100,
      height: 100,
    },
    image3: {
      src: "/Assets/ramon_mcdarghmitchell.png",
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
      id: createMemberId("Ramon Mitchell", "President1"), // essential for routing
      name: "Ramon Mitchell",
      title: "President1",
      favoriteSong: "Favorite Song",
      favoriteMovie: "Favorite Movie",
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
        src: "/Board/Executive/ramon_mcdarghmitchell.png",
        alt: "Ramon Mitchell",
        width: 350,
        height: 350,
      },
    },
    {
      id: createMemberId("Ramon Mitchell", "President2"),
      name: "Ramon Mitchell",
      title: "President2",
      favoriteSong: "Favorite Song",
      favoriteMovie: "Favorite Movie",
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
        src: "/Board/Executive/ramon_mcdarghmitchell.png",
        alt: "Ramon Mitchell",
        width: 350,
        height: 350,
      },
    },
    {
      id: createMemberId("Ramon Mitchell", "President3"),
      name: "Ramon Mitchell",
      title: "President3",
      favoriteSong: "Favorite Song",
      favoriteMovie: "Favorite Movie",
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
        src: "/Board/Executive/ramon_mcdarghmitchell.png",
        alt: "Ramon Mitchell",
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
      id: createMemberId("Ramon Mitchell", "President"),
      name: "Ramon Mitchell",
      title: "President",
      favoriteSong: "Favorite Song",
      favoriteMovie: "Favorite Movie",
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
        alt: "Ramon Mitchell",
        width: 350,
        height: 350,
      },
    },
    {
      id: createMemberId("Ramon Mitchell", "President4"),
      name: "Ramon Mitchell",
      title: "President4",
      favoriteSong: "Favorite Song",
      favoriteMovie: "Favorite Movie",
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
        alt: "Ramon Mitchell",
        width: 350,
        height: 350,
      },
    },
    {
      id: createMemberId("Ramon Mitchell", "President5"),
      name: "Ramon Mitchell",
      title: "President5",
      favoriteSong: "Favorite Song",
      favoriteMovie: "Favorite Movie",
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
        alt: "Ramon Mitchell",
        width: 350,
        height: 350,
      },
    },
    {
      id: createMemberId("Ramon Mitchell", "President6"),
      name: "Ramon Mitchell",
      title: "President6",
      favoriteSong: "Favorite Song",
      favoriteMovie: "Favorite Movie",
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
        alt: "Ramon Mitchell",
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
      id: createMemberId("Ramon Mitchell", "President11"),
      name: "Ramon Mitchell",
      title: "President11",
      favoriteSong: "Favorite Song",
      favoriteMovie: "Favorite Movie",
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
        src: "/Board/Outreach/ramon_mcdarghmitchell.png",
        alt: "Ramon Mitchell",
        width: 350,
        height: 350,
      },
    },
    {
      id: createMemberId("Ramon Mitchell", "President12"),
      name: "Ramon Mitchell",
      title: "President12",
      favoriteSong: "Favorite Song",
      favoriteMovie: "Favorite Movie",
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
        src: "/Board/Outreach/ramon_mcdarghmitchell.png",
        alt: "Ramon Mitchell",
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
      id: createMemberId("Ramon Mitchell", "President7"),
      name: "Ramon Mitchell",
      title: "President7",
      favoriteSong: "Favorite Song",
      favoriteMovie: "Favorite Movie",
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
        src: "/Board/Finance/ramon_mcdarghmitchell.png",
        alt: "Ramon Mitchell",
        width: 350,
        height: 350,
      },
    },
    {
      id: createMemberId("Ramon Mitchell", "President8"),
      name: "Ramon Mitchell",
      title: "President8",
      favoriteSong: "Favorite Song",
      favoriteMovie: "Favorite Movie",
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
        src: "/Board/Finance/ramon_mcdarghmitchell.png",
        alt: "Ramon Mitchell",
        width: 350,
        height: 350,
      },
    },
    {
      id: createMemberId("Ramon Mitchell", "President9"),
      name: "Ramon Mitchell",
      title: "President9",
      favoriteSong: "Favorite Song",
      favoriteMovie: "Favorite Movie",
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
        src: "/Board/Finance/ramon_mcdarghmitchell.png",
        alt: "Ramon Mitchell",
        width: 350,
        height: 350,
      },
    },
    {
      id: createMemberId("Ramon Mitchell", "President10"),
      name: "Ramon Mitchell",
      title: "President10",
      favoriteSong: "Favorite Song",
      favoriteMovie: "Favorite Movie",
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
        src: "/Board/Finance/ramon_mcdarghmitchell.png",
        alt: "Ramon Mitchell",
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
