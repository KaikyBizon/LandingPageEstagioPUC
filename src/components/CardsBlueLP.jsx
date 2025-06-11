export default function CardsBlue({title, description}) {

    return(
        <div className="p-4 lg:my-0 h-full lg:h-[650px] bg-[#7599ee] rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.5)] transition-transform duration-300 hover:scale-102">
          <h2 className="text-xl font-semibold mb-2 text-[#002776]">
            {title}
          </h2>
          <p className="text-black text-lg mb-4">
            {description}
          </p>
        </div>
    )
}