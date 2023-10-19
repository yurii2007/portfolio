import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import moneyguardImg from "../images/money-guard.png";
import cinemaniaImg from "../images/cinemania.png";
import carRentImg from "../images/car-rent.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Money Guard",
    description:
      "Welcome to our Money Guard, your go-to web app for effortlessly managing income and expenses. As the team lead and developer, I'm dedicated to enhancing your financial control experience.",
    tags: ["React", "Redux Toolkit", "i18n", "REST API", "Styled Components"],
    imageUrl: moneyguardImg,
  },
  {
    title: "Cinemania",
    description:
      "Welcome to our Cinemania, where you can explore a wide range of films across genres. My role was a developer, I am worked with API and part of the front-end development.",
    tags: ["JavaScript", "REST API", "CSS3", "HTML5"],
    imageUrl: cinemaniaImg,
  },
  {
    title: "Car Rent",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Redux Toolkit", "Tailwind", "Lottie"],
    imageUrl: carRentImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "Express",
  "Framer Motion",
  "i18n"
] as const;