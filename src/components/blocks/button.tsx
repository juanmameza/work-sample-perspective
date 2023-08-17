import React from "react";

type Props = {
  block: ButtonBlock;
};

const ButtonBlockComponent: React.FC<Props> = ({ block }) => {
  const { color, bgColor, text } = block;

  return (
    <div className="flex place-content-center p-4">
      <button
        className={`hover:bg-blue-700 text-white focus:ring-4 font-bold py-2 px-4 font-medium rounded-full text-sm px-5 py-2.5 text-center text-[${color}]`}
        style={{ backgroundColor: bgColor }}
      >
        {block.text}
      </button>
    </div>
  );
};

export default ButtonBlockComponent;
