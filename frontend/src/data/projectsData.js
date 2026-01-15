import {
  SiReact,
  SiTailwindcss,
  SiMongodb,
  SiPython,
  SiFlask,
  SiPhp,
  SiMysql,
  SiJavascript,
  SiHtml5,
  SiBootstrap,
  SiChartdotjs,
} from "react-icons/si";
import twitchInsightImg from "@/assets/img/projects/twitch-insight/twitch-insight.png";
import twitchInsight1Img from "@/assets/img/projects/twitch-insight/twitch-insight1.png";
import twitchInsight2Img from "@/assets/img/projects/twitch-insight/twitch-insight2.png";
import twitchInsight3Img from "@/assets/img/projects/twitch-insight/twitch-insight3.png";
import twitchInsight4Img from "@/assets/img/projects/twitch-insight/twitch-insight4.png";
import twitchInsight5Img from "@/assets/img/projects/twitch-insight/twitch-insight5.png";
import twitchInsight6Img from "@/assets/img/projects/twitch-insight/twitch-insight6.png";
import twitchInsight7Img from "@/assets/img/projects/twitch-insight/twitch-insight7.png";
import twitchInsight11Img from "@/assets/img/projects/twitch-insight/twitch-insight11.png";
import budgetTracker1Img from "@/assets/img/projects/budget-tracker/budget-tracker1.png";
import budgetTracker2Img from "@/assets/img/projects/budget-tracker/budget-tracker2.png";
import budgetTracker3Img from "@/assets/img/projects/budget-tracker/budget-tracker3.png";
import budgetTracker4Img from "@/assets/img/projects/budget-tracker/budget-tracker4.png";
import budgetTracker5Img from "@/assets/img/projects/budget-tracker/budget-tracker5.png";
import budgetTracker6Img from "@/assets/img/projects/budget-tracker/budget-tracker6.png";
import portfolioImg from "@/assets/img/projects/portfolio/portfolio.png";
import portfolio1Img from "@/assets/img/projects/portfolio/portfolio1.png";
import portfolio2Img from "@/assets/img/projects/portfolio/portfolio2.png";
import portfolio3Img from "@/assets/img/projects/portfolio/portfolio3.png";
import portfolio4Img from "@/assets/img/projects/portfolio/portfolio4.png";
import portfolio5Img from "@/assets/img/projects/portfolio/portfolio5.png";
import portfolio6Img from "@/assets/img/projects/portfolio/portfolio6.png";

export const projects = [
  {
    title: "Twitch Insight",
    description:
      "Real-time sentiment analysis platform for Twitch streamers, powered by advanced NLP and machine learning. Provides instant audience engagement insights and emotional response tracking.",
    details:
      "Twitch Insight analyzes chat messages in real-time using the RoBERTa natural language processing model. By integrating with the Twitch API, we extract live chat comments and provide streamers with instant insights about their audience's emotional responses. The dashboard displays sentiment trends and engagement metrics, helping content creators better understand their community.",
    type: "Capstone Project",
    technologies: [
      { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
      { name: "Tailwind", icon: SiTailwindcss, color: "text-[#38B2AC]" },
      { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]" },
      { name: "Python", icon: SiPython, color: "text-[#3776AB]" },
      { name: "Flask", icon: SiFlask, color: "text-gray-400" },
    ],
    links: {
      github: "https://github.com/bamcortezz/Capstone",
    },
    image: twitchInsightImg,
    images: [
      twitchInsightImg,
      twitchInsight1Img,
      twitchInsight2Img,
      twitchInsight3Img,
      twitchInsight4Img,
      twitchInsight5Img,
      twitchInsight6Img,
      twitchInsight7Img,
      twitchInsight11Img,
    ],
  },
  {
    title: "Budget Tracker",
    description:
      "Modern expense tracking application with intuitive UI for managing personal finances. Track income, expenses, and visualize spending patterns with interactive charts and insights.",
    details:
      "A personal finance management application built with PHP and MySQL using MVC (Model-View-Controller) architecture and Object-Oriented Programming principles. Features include transaction management, category-based expense tracking, data visualization with Chart.js, and budget goal setting. The app provides a clean, user-friendly interface styled with Tailwind CSS for monitoring financial health and making informed spending decisions.",
    type: "Personal Project",
    technologies: [
      { name: "PHP", icon: SiPhp, color: "text-[#777BB4]" },
      { name: "MySQL", icon: SiMysql, color: "text-[#4479A1]" },
      { name: "Tailwind", icon: SiTailwindcss, color: "text-[#38B2AC]" },
      { name: "Chart.js", icon: SiChartdotjs, color: "text-[#FF6384]" },
    ],
    links: {
      github: "https://github.com/bamcortezz/BudgetTracker",
      live: "https://bloomtracker.free.nf/",
    },
    image: budgetTracker1Img,
    images: [
      budgetTracker1Img,
      budgetTracker2Img,
      budgetTracker3Img,
      budgetTracker4Img,
      budgetTracker5Img,
      budgetTracker6Img,
    ],
  },
  {
    title: "Portfolio",
    description:
      "Modern, responsive portfolio showcasing development expertise with smooth animations and interactive UI. Built with React and Tailwind CSS for optimal performance and user experience.",
    details:
      "A personal project built with React and Tailwind CSS to showcase my development skills and projects. Features a clean, responsive design with smooth animations and an organized presentation of my work and technical capabilities.",
    type: "Personal Project",
    technologies: [
      { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
      { name: "Tailwind", icon: SiTailwindcss, color: "text-[#38B2AC]" },
    ],
    links: {
      github: "https://github.com/bamcortezz/Portfolio",
      live: "https://francisemilcortez.vercel.app/",
    },
    image: portfolioImg,
    images: [
      portfolioImg,
      portfolio1Img,
      portfolio2Img,
      portfolio3Img,
      portfolio4Img,
      portfolio5Img,
      portfolio6Img,
    ],
  },
];
