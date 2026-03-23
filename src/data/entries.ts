export interface Entry {
  id: number;
  title: string;
  content: string;
  date: string;
  summary: string;
}

const entries: Entry [] = [
    {
      id: 1,
      title: "First Devlog",
      content: "We setup the react scaffolding",
      date: "03-07-2026",
      summary: "My first devlog entry",
    },
    {
      id: 2,
      title: "Second Devlog",
      content: "We created the Home and About section",
      date: "03-08-2026",
      summary: "My second devlog entry",
    },
    {
      id: 3,
      title: "Third Devlog",
      content: "We added a Header with our profile picture",
      date: "03-09-2026",
      summary: "My third devlog entry",
    },
    {
      id: 4,
      title: "Fourth Devlog",
      content: "We added basic routing functionality",
      date: "03-10-2026",
      summary: "My fourth devlog entry",
    },
    {
      id: 5,
      title: "Fifth Devlog",
      content: "We separated Home, About, and the Header into React components",
      date: "03-11-2026",
      summary: "My fifth devlog entry",
    },
  ];

export default entries;