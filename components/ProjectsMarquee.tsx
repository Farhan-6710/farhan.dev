import { cn } from "@/lib/utils";
import Marquee from "@/components/core/marquee";
import Image from "next/image";
import FunctionsHero from "./FunctionsHero";

const data = [
  {
    id: 1,
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing.",
    img: "/img-1.png",
  },
  {
    id: 2,
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "/img-2.png",
  },
  {
    id: 3,
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/img-3.png",
  },
  {
    id: 4,
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/img-4.png",
  },
  {
    id: 5,
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/img-5.png",
  },
  {
    id: 6,
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/img-6.png",
  },
];

// Split data into two rows
const rowOne = data.slice(0, Math.ceil(data.length / 2));
const rowTwo = data.slice(Math.ceil(data.length / 2));

const ReviewCard = ({
  img,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border",
        // light styles
        "border-gray-700 bg-black",
      )}
    >
      <Image
        className="w-full h-40 aspect-video object-cover"
        width={320}
        height={320}
        alt=""
        src={img}
      />
    </figure>
  );
};

const ProjectsMarquee = () => {
  return (
    <div className="relative flex h-full w-full flex-col items-center overflow-hidden bg-transparent py-4">
      <div className="mb-8">
      <Marquee className="[--duration:20s]">
        {rowOne.map((item) => (
          <ReviewCard key={item.username} {...item} />
        ))}
      </Marquee>
      <Marquee reverse className="[--duration:20s]">
        {rowTwo.map((item) => (
          <ReviewCard key={item.username} {...item} />
        ))}
      </Marquee>
      </div>
      <FunctionsHero />
      <div className="absolute h-full w-full bg-transparent"></div>
    </div>
  );
};

export default ProjectsMarquee;
