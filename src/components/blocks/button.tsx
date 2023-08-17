import React from "react";

type Props = {
  block: ButtonBlock;
};

const ButtonBlockComponent: React.FC<Props> = ({ block }) => {
  const { color, bgColor, text } = block;

  return (
    <>
      <button
        className={`hover:bg-blue-700 text-white font-bold py-2 px-4 rounded justify-center text-[${color}]`}
        style={{ backgroundColor: bgColor }}
      >
        {block.text}
      </button>
    </>
  );
};

export default ButtonBlockComponent;
