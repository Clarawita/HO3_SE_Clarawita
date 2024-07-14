import Image from "next/image"

export const Hero = () => {
  return (
    <section className="flex flex-col justify-between items-center gap-4 w-11/12 sm:flex-row sm:w-11/12 md:w-11/12 lg:w-5/6 mx-auto mb-[25vh] pt-28">
      <span className="flex flex-col items-start gap-4 w-1/2">
        <h4 className="font-poppins font-medium text-red text-sm tracking-tight leading-none sm:text-base md:text-lg lg:text-xl py-3 px-6 rounded-lg bg-white">Never Stop Learning</h4>
        <h1 className="text-font-black font-bold leading-tight md:text-4xl lg:text-6xl tracking-normal">
          Grow up your skills<br />
          by online courses<br />
          with <span className="inline-block items-center lg:w-full">
            <Image
            src="/images/logo.png"
            alt="Landscape picture"
            width={250}
            height={200}
            className="w-1/2 max-w-full h-auto lg:w-full"
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