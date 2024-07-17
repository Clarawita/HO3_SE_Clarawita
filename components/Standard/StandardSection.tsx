// import { title } from "process";
import { StCardList } from "./StandardCardList";
import { Button } from "../Button";
import { useRouter } from "next/router";

const data = [
  {
    image: "/images/028-1.svg",
    title: "Standard One",
    desc: "Standard 1 is a foundation Standard that reflects 7 important concepts...",
  },
  {
    image: "/images/029-2.svg",
    title: "Standard Two",
    desc: "Standard 2 builds on the foundations of Standard 1 and includes requirements...",
  },
  {
    image: "/images/030-3.svg",
    title: "Standard Three",
    desc: "Standard 3 of the Aged Care Quality Standards applies to all services delivering personal...",
  },
  {
    image: "/images/031-4.svg",
    title: "Standard Four",
    desc: "Standard 4 of the Aged Care Quality Standards focuses on services and supports...",
  },
  {
    image: "/images/032-5.svg",
    title: "Standard Five",
    desc: "Standard 5 Learning Resources. Learning Resources ensure that the school has the...",
  },
  {
    image: "/images/033-6.svg",
    title: "Standard Six",
    desc: "Standard 6 requires an organisation to have a system to resolve complaints...",
  },
  {
    image: "/images/034-7.svg",
    title: "Standard Seven",
    desc: "Standard 7 Blood Management mandates that leaders of health service organisations....",
  },
  {
    image: "/images/035-8.svg",
    title: "Standard Eight",
    desc: "Standard 8 Course from NCERT Solutions help students to understand...",
  },
];

function StandardSection() {
  const handleButtonClick = () => {
    console.log("Button clicked!");
  };

  return (
    <section className="flex flex-col items-center justify-center gap-8 w-11/12 mx-auto mb-20">
      <div className="text-center mb-8">
        <h2 className="text-5xl font-bold">Qualified lessons for students</h2>
        <p className="text-gray-600 mt-4 w-3/5 mx-auto text-lg">
          A lesson or class is a structured period of time where learning is
          intended to occur. It involves one or more students being taught by a
          teacher or instructor.
        </p>
      </div>
      <StCardList cards={data} />
      <Button onClick={handleButtonClick} className="button2" href="/class" content="Visit more classes"/>
    </section>
  );
}

export { StandardSection };
