type ProjectOwnership = "Client" | "Perosnal";

export interface ProjectItem {
  name: string;
  type: ProjectOwnership;
  projectDetails: string[];
}

export const projectList: ProjectItem[] = [
  {
    name: "Ecommerce Solution",
    type: "Client",
    projectDetails: [
      "A series of customer websites on NextJS, across different ventures of D2C, B2C and B2B, with responsive behaviour for mobile users, with device specific custom implementations wherever necessary.",
      "Android and Ios apps developed on React Native.",
      "Employed optimistic behaviour for cart interactions which solve major concurrency issues and the syncing carts across different devices.",
      "Solved technical challenges like Custom Next-auth integration.",
      "Panel for backend operations on vite.",
    ],
  },
  {
    name: "Multiplayer Pong",
    type: "Perosnal",
    projectDetails: [
      "Players can create rooms of 2 and play a real time game of pong across the internet.",
      "Uses socket.io on a Node.js backend.",
    ],
  },
];
