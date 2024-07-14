import Image from "next/image"

export const Hero = () => {
  return (
    <section className="flex justify-between items-center gap-4 w-11/12 mx-auto mb-[25vh] pt-28">
      <span className="flex flex-col items-start gap-4 w-1/2">
        <h4 className="font-poppins font-medium text-red text-xl py-3 px-6 rounded-lg bg-white">Never Stop Learning</h4>
        <h1 className="text-font-black font-bold leading-tight text-6xl tracking-normal">
          Grow up your skills<br />
          by online courses<br />
          with <span className="inline-block items-center">
            <Image 
            src="/images/logo.png"
            alt="Landscape picture"
            width={250}
            height={200}
            />
          </span>
        </h1>
        <p className="text-justify text-lg font-medium">e-learn is a Global training provider based in Indonesia that specialises in accredited and bespoke training courses. We crush the barriers to getting a degree</p>
        <div className="grid grid-cols-[3fr_150px] p-2 w-full bg-white rounded-lg">
          <input
            type="text"
            placeholder="Class/Course"
            className="p-2 text-xl font-poppins border-none outline-none"
          />
          <button className="button2 ">
            Search
          </button>
        </div>
      </span>
      <span className="w-1/2">
        <Image className="mr-0 ml-auto" src="/images/sec1-hero.svg" alt="Hero" width={500} height={600} />
      </span>
    </section>
  );
};