export const joinusHeroData = {
  title: <>Join Us</>,
  description: (
    <>
      Want to join a thriving community of Black and Latinx software engineers
      at UCSD? Here’s your chance. We welcome everyone — just apply below.
    </>
  ),
  primaryButton: {
    name: "Membership Form",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSfLo1o8Qt4-RID1um4CqLL8jh3R6oulKzvi8MjObgKdjBuqww/viewform?usp=share_link&ouid=102229617436923479024",
    variant: "secondary" as const, // as const that string literal "primary"
  },
  images: {
    image1: {
      src: "/Assets/ramon_mcdarghmitchell.png",
      alt: "Join Us Image 1",
      width: 100,
      height: 100,
    },
    image2: {
      src: "/Assets/ramon_mcdarghmitchell.png",
      alt: "Join Us Image 2",
      width: 100,
      height: 100,
    },
    image3: {
      src: "/Assets/ramon_mcdarghmitchell.png",
      alt: "Join Us Image 3",
      width: 100,
      height: 100,
    },
  },
};

export const whyJoinUsData = {
  titleSection: {
    id: "why-join-us",
    index: 1,
    title: "Why Join Us?",
  },
  cards: [
    {
      icon: "🧑‍🤝‍🧑",
      title: "Community",
      description:
        "Join a supportive network of Black and Latinx students in tech",
    },
    {
      icon: "📅",
      title: "Events",
      description:
        "Access to exclusive workshops, networking events, and social gatherings.",
    },
    {
      icon: "🚀",
      title: "Opportunities",
      description:
        "Direct connections to industry partners, research, and state of the art projects",
    },
    {
      icon: "🧠",
      title: "Mentorship",
      description:
        "Get paired with experienced mentors who can guide your journey @ UCSD and beyond.",
    },
  ],
};

export const membershipFormData = {
  titleSection: {
    id: "membership-form",
    index: 2,
    title: "Membership Form",
  },
  forms: {
    primaryButton: {
      name: "Membership Form",
      href: "https://docs.google.com/forms/d/e/1FAIpQLSfLo1o8Qt4-RID1um4CqLL8jh3R6oulKzvi8MjObgKdjBuqww/viewform?usp=share_link&ouid=102229617436923479024",
      variant: "secondary" as const,
    },
  },
};

export const faqData = {
  titleSection: {
    id: "faq",
    index: 3,
    title: "FAQ",
  },
  cards: [
    {
      question: "Do I need to be a CS major to Join?",
      answer:
        "No! While many of our members are CS majors, we welcome students from all majors who are interested in technology and software engineering.",
    },
    {
      question: "Is there a Membership Fee?",
      answer:
        "No, membership is completely free! All of our events and resources are available to members at no cost.",
    },
    {
      question: "How much time commitment is there?",
      answer:
        "You can participate as much or as little as you'd like! However, we recommend attending most events to get the most out of your membership.",
    },
  ],
};
