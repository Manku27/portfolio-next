import React from "../images/tech-stack/React.png";
import Typescript from "../images/tech-stack/Typescript.png";
import Javascript from "../images/tech-stack/Javascript.png";
import Redux from "../images/tech-stack/Redux.png";
import NextJS from "../images/tech-stack/NextJS.png";
import NodeJS from "../images/tech-stack/NodeJS.png";
import ExpressJS from "../images/tech-stack/ExpressJS.png";
import Docker from "../images/tech-stack/Docker.png";
import Azure from "../images/tech-stack/Azure.png";
import Git from "../images/tech-stack/Git.png";
import Kubernetes from "../images/tech-stack/Kubernetes.png";
import GraphQL from "../images/tech-stack/GraphQL.png";

export interface TechStackListItem {
  icon: any;
  alt: string;
}

export const frontend = [
  {
    icon: React,
    alt: "React and React Native",
  },
  {
    icon: Typescript,
    alt: "Typescript",
  },
  {
    icon: Javascript,
    alt: "Javascript",
  },
  {
    icon: Redux,
    alt: "Redux",
  },
  {
    icon: NextJS,
    alt: "Next.js",
  },
];

export const backend = [
  {
    icon: NodeJS,
    alt: "Node.js",
  },
  {
    icon: ExpressJS,
    alt: "Express.js",
  },
];

export const devops = [
  {
    icon: Docker,
    alt: "Docker",
  },
  {
    icon: Azure,
    alt: "Azure",
  },
  {
    icon: Git,
    alt: "Git",
  },
];

export const others = [
  {
    icon: Kubernetes,
    alt: "Kubernetes",
  },
  {
    icon: GraphQL,
    alt: "GraphQL",
  },
];
