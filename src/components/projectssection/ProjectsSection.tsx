import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { Button } from "../ui/button";

const projects = [
  {
    cardName: "Portfolio Website",
    cardDescription:
      "A personal portfolio built with React, Vite, Tailwind, and shadcn/ui to showcase my skills and projects.",
    cardLink: "https://yourportfolio.com",
    cardPicture:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f", // Laptop workspace
    IsPicLeft: false,
    githubLink: "https://github.com/yourname/portfolio",
  },
  {
    cardName: "Weather App",
    cardDescription:
      "A weather forecast app that uses OpenWeather API with real-time data and location-based search.",
    cardLink: "https://yourweatherapp.com",
    cardPicture:
      "https://images.unsplash.com/photo-1501973801540-537f08ccae7b", // Weather clouds
    IsPicLeft: true,
    githubLink: "https://github.com/yourname/weather-app",
  },
  {
    cardName: "Task Manager",
    cardDescription:
      "A to-do list app with authentication, CRUD tasks, and drag-and-drop reordering.",
    cardLink: "https://yourtaskmanager.com",
    cardPicture:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c", // Productivity setup
    IsPicLeft: false,
    githubLink: "https://github.com/yourname/task-manager",
  },
  {
    cardName: "Chat App",
    cardDescription:
      "A real-time chat app built with WebSocket and Express, styled with Tailwind CSS.",
    cardLink: "https://yourchatapp.com",
    cardPicture:
      "https://images.unsplash.com/photo-1553531384-397c80973a0b", // Chat illustration
    IsPicLeft: true,
    isInProgress: true, // still in progress
    githubLink: "https://github.com/yourname/chat-app",
  },
];

export default function ProjectTabs() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <div className="flex flex-col items-center w-full gap-4">
      <div>
        <h1 className="text-2xl font-semibold text-center">Projects</h1>
        <hr className="border-t-4 mx-2 border-blue-700" />
      </div>

      <div className="flex w-full mt-10 gap-6 items-center">
        <div className="flex flex-col gap-3 w-1/6">
          {projects.map((project, index) => (
            <Button
              key={project.cardName}
              onClick={() => setSelectedProject(index)}
              className="rounded-full backdrop-blur-md bg-white/30 shadow-md"
              variant="outline"
            >
              {project.cardName}
            </Button>
          ))}
        </div>

        <div className="w-5/6 flex items-center justify-center">
          {selectedProject !== null ? (
            <ProjectCard {...projects[selectedProject]} />
          ) : (
            <div className="flex flex-col justify-center items-center w-full h-[524px] ">
              <img
                src="https://pngimg.com/uploads/minions/minions_PNG35.png"
                alt="Funny Placeholder"
                className="w-72 h-auto opacity-80"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
