const desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

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
  // {
  //   id: "login",
  //   link: "/login",
  //   title: "Login",
  // },
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

export const busyButtons = [
  {
    id: "1",
    content: "Yes",
    type: true
  },
  {
    id: "2",
    content: "No",
    type: false
  },
]

export const filterButtons = [
  {
    uuid: "1",
    content: "Backend",
    type: "backend"
  },
  {
    uuid: "2",
    content: "Frontend",
    type: "frontend"
  },
  {
    uuid: "3",
    content: "Fullstack",
    type: "fullstack"
  },
  {
    uuid: "4",
    content: "Mobile",
    type: "mobile"
  },
];

export const staticOffers = [
  {
    uuid: "1",
    title: "Backend Software Developer",
    skills: ["Fast API", "MongoDB"],
    url: "https://www.justjoin.it/backend",
    category: "backend",
    description: desc
  },
  {
    uuid: "2",
    title: "Backend Engineer",
    skills: ["Django", "Flask"],
    url: "https://www.justjoin.it/frontend",
    category: "frontend",
    description: desc
  },
  {
    uuid: "3",
    title: "Junior Backend Tester",
    skills: ["Postman", "Python"],
    url: "https://www.justjoin.it/devops",
    category: "backend",
    description: desc
  },
  {
    uuid: "4",
    title: "Junior Mobile Dev",
    skills: ["Flutter", "UI"],
    url: "https://www.justjoin.it/devops",
    category: "mobile",
    description: desc
  },
  {
    uuid: "5",
    title: "Fullstack Engineer",
    skills: ["Node", "React"],
    url: "https://www.justjoin.it/devops",
    category: "fullstack",
    description: desc
  },
];

export const staticUsers = [
  {
    id: 1,
    name: "George",
    surname: "Harz",
    position: "Backend",
    category: "Mid",
    is_busy: true
  },
  {
    id: 2,
    name: "Jack",
    surname: "Limon",
    position: "Fullstack",
    category: "Junior",
    is_busy: false
  },
  {
    id: 3,
    name: "Linda",
    surname: "Ramon",
    position: "Fullstack",
    category: "Senior",
    is_busy: true
  },
  {
    id: 4,
    name: "Hanz",
    surname: "Simons",
    position: "Mobile",
    category: "Junior",
    is_busy: false
  },
  {
    id: 5,
    name: "Jimmy",
    surname: "Kingston",
    position: "Frontend",
    category: "Mid",
    is_busy: true
  },
  {
    id: 6,
    name: "Tim",
    surname: "Whimper",
    position: "Mobile",
    category: "Flutter, Dart Mid",
    is_busy: true
  },
  {
    id: 7,
    name: "Neil",
    surname: "Urgent",
    position: "Backend",
    category: "Go, Oracle Senior",
    is_busy: false
  },
  {
    id: 8,
    name: "Manda",
    surname: "Babung",
    position: "Fullstack",
    category: ".NET, Rust Mid",
    is_busy: true
  },
  {
    id: 9,
    name: "Pigeon",
    surname: "Quick",
    position: "Mobile",
    category: "Android Mid",
    is_busy: false
  },
  {
    id: 10,
    name: "Croco",
    surname: "Papig",
    position: "Frontend",
    category: "React/Vue Junior",
    is_busy: false
  }
];
