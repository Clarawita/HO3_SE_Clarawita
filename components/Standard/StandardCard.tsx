import Image from "next/image"

type CardProps = {
  image: string,
  title: string,
  desc: string,
  onClick?: () => void;
}

function StandardCard({image, title, desc, onClick}: CardProps){
  return (
    <div className="bg-white py-6 px-6 w-72 rounded-lg flex flex-col items-center justify-between gap-2 shadow-md">
      <Image
          src={image}
          alt={title}
          width={50}
          height={50}
        />
      <h3 className="text-2xl font-bold tracking-wide">{title}</h3>
      <p className="text-lg text-grey align mb-3 text-center">{desc}</p>
      <button className="py-2 px-7 bg-white border border-purple rounded-md font-poppins text-lg font-medium text-purple cursor-pointer transition-all duration-200 hover:bg-purple hover:text-white" onClick={onClick}>Class Details</button>
    </div>
  )
}

export type {CardProps}
export {StandardCard};