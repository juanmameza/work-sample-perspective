import React from "react";

type Props = {
  block: TextBlock;
};

const TextBlockComponent: React.FC<Props> = ({ block }) => {
  const blockAlign = block.align;
  const blockColor = block.color;

  return (
    <>
      <p className={`flex p-2 place-content-${blockAlign}`} style={{ color: blockColor }}>
        {block.text}
      </p>
    </>
  );
};

export default TextBlockComponent;
