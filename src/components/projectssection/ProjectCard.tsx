import { Button } from "../ui/button";
import { Github } from "lucide-react"; 

interface ProjectCardProps {
  cardName: string;
  cardDescription: string;
  cardLink: string;
  cardPicture: string;
  IsPicLeft: boolean;
  isInProgress?: boolean;   
  githubLink?: string;      
}

export default function ProjectCard(props: ProjectCardProps) {
  return (
    <div
      className={`flex w-full rounded-xl items-center transition-all duration-300 hover:shadow-2xl hover:bg-white/40 hover:backdrop-blur-lg bg-white/30 backdrop-blur-md border-white/20 shadow-lg overflow-hidden ${
        props.IsPicLeft ? "flex-row-reverse" : "flex-row"
      }`}
    >
      <div className="w-1/2 flex items-start text-start flex-col gap-4 px-8">
        <h1 className="font-semibold text-3xl">{props.cardName}</h1>
        <span className="text-sm text-gray-500">{props.cardDescription}</span>
        <div className="flex gap-3">
          {props.isInProgress ? (
            <Button
              variant="ghost"
              disabled
              className="rounded-full cursor-not-allowed"
            >
              On Work
            </Button>
          ) : (
            <Button
              variant="ghost"
              className="rounded-full"
              onClick={() => window.open(props.cardLink, "_blank")}
            >
              View Project
            </Button>
          )}

          {props.githubLink && (
            <Button
              variant="ghost"
              className="rounded-full flex items-center gap-2"
              onClick={() => window.open(props.githubLink, "_blank")}
            >
              <Github className="w-5 h-5" />
              Code
            </Button>
          )}
        </div>
      </div>

      <div className="w-1/2">
        <img
          src={props.cardPicture}
          alt={props.cardName}
          className="w-full h-[524px] object-cover"
        />
      </div>
    </div>
  );
}
