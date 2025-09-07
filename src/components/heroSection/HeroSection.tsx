import { Github } from "lucide-react";
import myPhoto from "../../assets/image (1).png";
import { Button } from "../ui/button";




export default function HeroSection(){

    return(
        <div className="w-full flex mb-28">
            <div className="w-1/2 flex flex-col gap-5 text-start mt-20">
            <span className="">Hey,I'm Da9an</span>
            <div className="flex items-center gap-0 text-8xl font-bold"><h1 className="text-blue-700">Front</h1><h1>end </h1></div>
            <h1 className="text-8xl font-bold">Developer</h1>
            <span className="text-xl text-gray-500">I'm a frontend developer based in ras el oued, i'll help you build beautiful websites.</span>
            <div className="flex gap-3 items-center">
            <Button size="lg">Get in Touch</Button>
            <Button variant="link" size="lg">My GitHub <Github className="w-5 h-5" /></Button>
            </div>
            </div>
            <div className="w-1/2 absolute right-0 top-0">
                <img alt="me" src={myPhoto} />
            </div>
        </div>
    )
}