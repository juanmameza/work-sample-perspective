import React from "react";
import TextBlockComponent from "./blocks/text";
import ButtonBlockComponent from "./blocks/button";
import ImageBlockComponent from "./blocks/image";
import ListBlockComponent from "./blocks/list";

type Props = {
  block: Block;
};

const BlockComponent: React.FC<Props> = ({ block }) => {
  const selectBlockType = ({ type }: Block) => {
    switch (type) {
      case "text":
        return <TextBlockComponent block={block as TextBlock} />;
      case "button":
        return <ButtonBlockComponent block={block as ButtonBlock} />;
      case "image":
        return <ImageBlockComponent block={block as ImageBlock} />;
      case "list":
        return <ListBlockComponent block={block as ListBlock} />;
      default:
        return null;
    }
  };

  return <div id={block.id}>{selectBlockType(block)}</div>;
};

export default BlockComponent;
