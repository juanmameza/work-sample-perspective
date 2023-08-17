import Image from "next/image";
import React from "react";

type Props = {
  block: ImageBlock;
};

const ImageBlockComponent: React.FC<Props> = ({ block }) => {
  const { src } = block;

  return (
    <Image src={src} alt="" className="max-w-sm" width={400} height={400} />
  );
};

export default ImageBlockComponent;
