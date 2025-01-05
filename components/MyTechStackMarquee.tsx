import { cn } from "@/lib/utils";
import Marquee from "@/components/core/marquee";
import Image from "next/image";

const data = [
  {
    id: 1,
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing.",
    img: "/tech-stack/bootstrap4.svg",
  },
  {
    id: 2,
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "/tech-stack/css3.svg",
  },
  {
    id: 3,
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/tech-stack/nextjs.svg",
  },
  {
    id: 4,
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/tech-stack/reactjs.svg",
  },
  {
    id: 6,
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/tech-stack/expressjs-light.svg",
  },
  {
    id: 7,
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/tech-stack/materialui.svg",
  },
  {
    id: 8,
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/tech-stack/mongodb.svg",
  },
  {
    id: 9,
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/tech-stack/nodejs.svg",
  },
  {
    id: 10,
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/tech-stack/tailwindcss.svg",
  },
  {
    id: 11,
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/tech-stack/redux.svg",
  },
  {
    id: 12,
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/tech-stack/supabase.svg",
  },
  {
    id: 13,
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/tech-stack/vitejs.svg",
  },
  {
    id: 14,
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/tech-stack/typescript.svg",
  },
  {
    id: 15,
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/tech-stack/jquery.svg",
  },
];

// Split data into two rows
const rowTwo = data.slice(0, Math.ceil(data.length / 2));
const rowOne = data.slice(Math.ceil(data.length / 2));

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
        "relative w-10 2xl:w-10 cursor-pointer overflow-hidden rounded-xl mx-4",
      )}
    >
      <Image
        className="w-full aspect-square"
        width={320}
        height={320}
        alt=""
        src={img}
      />
    </figure>
  );
};

const MyTechStackMarquee = () => {
  return (
    <div className="relative flex w-full flex-col gap-2 items-center overflow-hidden bg-transparent 2xl:py-4 h-fit">
      <Marquee className="[--duration:20s]">
        {rowOne.map((item) => (
          <ReviewCard key={item.id} {...item} />
        ))}
      </Marquee>
      <Marquee reverse className="[--duration:20s]">
        {rowTwo.map((item) => (
          <ReviewCard key={item.id} {...item} />
        ))}
      </Marquee>
    </div>
  );
};

export default MyTechStackMarquee;
