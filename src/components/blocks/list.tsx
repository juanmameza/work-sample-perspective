import React from "react";
import Image from "next/image";

type Props = {
  block: ListBlock;
};

const ListBlockComponent: React.FC<Props> = ({ block }) => {
  const { id, items } = block;

  return (
    <ul>
      {items.map((item, idx) => (
        <li
          key={`list-${id}-${idx}`}
          className="flex flex-row justify-center"
        >
          <Image src={item.src} alt="" width={100} height={100} />
          <div className="flex-col text-black self-center">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ListBlockComponent;
