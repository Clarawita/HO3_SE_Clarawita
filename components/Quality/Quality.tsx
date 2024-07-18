import Image from "next/image";
import { Button } from "../Button";

export const Quality = () => {
  
  const handleButtonClick = () => {
    console.log("Button clicked!");
  };

  return (
    <section className="relative flex flex-col items-center justify-center gap-8 w-11/12 mx-auto mb-[25vh]">
      <Image
        className="absolute top-[250px] right-[50px] z-[-2]"
        src="/images/Pattern.svg"
        alt="Pattern"
        width={180}
        height={180}
      />
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-center text-5xl font-bold">
          High quality video, audio <br />& live classes
        </h2>
        <p className="text-center text-lg font-normal text-grey w-4/5 mx-auto">
          High-definition video is video of higher resolution and quality than
          standard-definition. While there is no standardized meaning for
          high-definition, generally any video image with considerably more than
          480 vertical scan lines or 576 vertical lines is considered
          high-definition.
        </p>
        <Button onClick={handleButtonClick} className="button2" href="/course" content="Visit Courses"/>

      </div>
      <div className="flex flex-col items-center justify-center gap-8">
        <Image
          src="/images/sec2-img.svg"
          alt="Live Teaching"
          width={1100}
          height={400}
          className="sec2-img"
        />
        <div className="flex items-center justify-center gap-8">
          {[
            ["/images/volume.svg", "Audio Classes"],
            ["/images/live.svg", "Live Classes"],
            ["/images/play.svg", "Recorded Classes"],
          ].map(([image, desc], index) => (
            <span
              key={index}
              className="flex items-center gap-4 py-4 px-5 rounded-lg bg-white text-black font-semibold text-xl"
            >
              <Image src={image} alt={desc} width={50} height={50} />
              <p>{desc}</p>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Quality;
