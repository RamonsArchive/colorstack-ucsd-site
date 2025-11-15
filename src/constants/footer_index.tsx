import Link from "next/link";

export const footerData = {
  affiliationData: {
    affiliations: [
      {
        id: "colorstack",
        logo: {
          src: "/Assets/Logos/ct_banner_crop1.png",
          alt: "ColorStack Logo",
          width: 200,
          height: 200,
        },
        description: (
          <>
            Part of the ColorStack National network →{" "}
            <Link
              href="https://colorstack.org"
              className="text-text-secondary hover:text-text-primary transition-colors duration-300 underline"
            >
              colorstack.org
            </Link>
          </>
        ),
        href: "https://www.colorstack.org",
      },
    ],
  },
  contactData: {
    index: 1,
    title: "Contact",
    data: [
      {
        id: "email",
        name: "Email",
        email: "colorstackatucsd@ucsd.edu",
      },
    ],
  },
  quickLinksData: {
    index: 2,
    title: "Quick Links",
    data: [
      {
        id: "terms-of-service",
        name: "Terms of Service",
        href: "/terms-of-service",
      },
      {
        id: "privacy-policy",
        name: "Privacy Policy",
        href: "/privacy-policy",
      },
    ],
  },
};
