import { useContext } from "react";
import { Link } from "react-router-dom";
import { Divider } from "@blueprintjs/core";
import { BeautyContext } from "../context";
import { hash } from "../utils";

const Beauty = () => {
  const beauties = useContext(BeautyContext);
  const nameMap = beauties.names;
  const images = beauties.images;

  return (
    <div className="p-4">
      <div className="sticky top-0 bg-white">
        {Object.keys(nameMap).map((letter) => (
          <a
            key={letter}
            href={`#beauty-letter-${letter}`}
            className="mr-[7px] text-blue-500"
          >
            {letter}
          </a>
        ))}
      </div>
      <div className="mt-4">
        {Object.keys(nameMap).map((letter) => {
          return (
            <div key={letter} className="mb-4">
              <h2
                id={`beauty-letter-${letter}`}
                className="text-xl font-bold flex items-center"
              >
                {letter}
                <span className="w-full">
                  <Divider />
                </span>
              </h2>
              <div className="grid grid-cols-3 gap-4">
                {nameMap[letter].map((name) => {
                  return (
                    <Link
                      to={hash(name)}
                      state={images[name].images}
                      key={name}
                      preventScrollReset={false}
                      className="bg-blue-100 active:bg-blue-300 shadow-md rounded-md p-4  font-sans text-cente"
                    >
                      <p>
                        {name}({images[name].num})
                      </p>
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Beauty;
