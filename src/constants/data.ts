import React from "react";
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

export const experienceData = [
  {
    title: "Graduated technical school",
    location: "Ryki, Poland",
    description:
      "I successfully graduated after four years of education, gaining base knowledge in computer science, electronics, and engineering.",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2023",
  },
  {
    title: "Graduated bootcamp",
    location: "GoIT, Ukraine",
    description:
      "Successfully graduated after completing an intensive Full-Stack course, acquiring in-depth knowledge of HTML, CSS, JavaScript, React, Node.js and various web-technologies",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
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
  "i18n",
] as const;
