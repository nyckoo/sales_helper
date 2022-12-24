import { people01, people02, people03, facebook, instagram, linkedin, twitter, airbnb, binance, coinbase, dropbox, send, shield, star } from "../assets";

export const navLinks = [
  {
    id: "home",
    link: "/",
    title: "Home",
  },
  {
    id: "dashboard",
    link: "/dashboard",
    title: "Dashboard",
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "About",
        link: "/content",
      },
      {
        name: "How it Works",
        link: "/howitworks",
      },
      {
        name: "Future plans",
        link: "/futureplans",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Partners",
        link: "/partners",
      },
      {
        name: "Suggestions",
        link: "/suggestions",
      },
      {
        name: "Blog",
        link: "/blog",
      },
    ],
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Scanned Offers",
    value: "10000+",
  },
  {
    id: "stats-2",
    title: "Active Users",
    value: "100+",
  },
  {
    id: "stats-3",
    title: "Supported Platforms",
    value: "2",
  }
];

export const offers = [
  {
    uuid: "1",
    title: "Backend Software Developer",
    skills: ["C++", "SQL"],
    url: "https://www.justjoin.it/backend",
  },
  {
    uuid: "2",
    title: "Frontend Engineer",
    skills: ["React", "Vue"],
    url: "https://www.justjoin.it/frontend",
  },
  {
    uuid: "3",
    title: "AWS DevOps",
    skills: ["AWS", "Jenkins"],
    url: "https://www.justjoin.it/devops",
  },
];

export const users = [
  {
    name: "George",
    surname: "Harz",
    position: "Backend",
    is_busy: true
  },
  {
    name: "Jack",
    surname: "Limon",
    position: "Sysops",
    is_busy: false
  },
  {
    name: "Linda",
    surname: "Ramon",
    position: "Devops",
    is_busy: true
  }
];

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Rewards",
    content:
      "The best credit cards offer some tantalizing combinations of promotions and prizes",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "100% Secured",
    content:
      "We take proactive steps make sure your information and transactions are secure.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Balance Transfer",
    content:
      "A balance transfer credit card can save you a lot of money in interest charges.",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    name: "Herman Jensen",
    title: "Founder & Leader",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "Money makes your life easier. If you're lucky to have it, you're lucky.",
    name: "Steve Mark",
    title: "Founder & Leader",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "It is usually people in the money business, finance, and international trade that are really rich.",
    name: "Kenn Gallagher",
    title: "Founder & Leader",
    img: people03,
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];