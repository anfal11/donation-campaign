import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Card = () => {
  const { id } = useParams();

  const cards = useLoaderData();

  const [card, setCard] = useState({});

  useEffect(() => {
    const findCard = JSON.parse(cards)?.find(
      (card) => card.id === parseInt(id)
    );
    setCard(findCard);
  }, [cards, id]);

  console.log(card);
  return (
    <>
      <div className="flex flex-col max-w-[1320px] mx-auto justify-center items-center z-0 gap-4 p-4 mt-20 mb-20">
        <div className="relative w-full lg:w-[1120px] mx-auto">
          {/* Image */}
          <img
            src={card.picture}
            className="w-[100%] object-contain rounded-lg"
            alt={card.title}
          />

          {/* Donate button */}
          <div className="bg-[#0b0b0b80] h-36 w-[100%] absolute bottom-0 p-10 bg-opacity-25">
            <button
              className="p-3 rounded text-xl font-semibold text-white"
              style={{ backgroundColor: card.tertiary_color }}
            >
              Donate ${card.price}
            </button>
          </div>
        </div>

        <div className="w-full lg:w-[1000px] xl:w-[1130px]">
          {/* Title */}
          <h1 className="text-4xl text-center md:text-start md:text-5xl font-bold">
            {card.title}
          </h1>

          {/* Description */}
          <p className="py-6 text-justify text-lg font-normal text-[#0b0b0bb3]">
            {card.description}
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
