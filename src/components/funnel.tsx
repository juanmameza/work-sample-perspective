"use client";

import React, { createContext, useState } from "react";
import UploadComponent from "./upload";

type Props = {
  children?: React.ReactNode;
};

const DEFAULT_FUNNEL_OBJECT = {
  name: "",
  bgColor: "white",
  pages: [],
};

export const FunnelContext = createContext<{ funnelObject: Funnel }>({
  funnelObject: DEFAULT_FUNNEL_OBJECT,
});

const FunnelComponent: React.FC<Props> = ({ children }) => {
  const [funnelObject, setFunnelObject] = useState<Funnel>({} as Funnel);

  const handleUpload = (event: React.BaseSyntheticEvent) => {
    let file = event.target.files[0];
    if (!file) return;
    setFunnelObject({} as Funnel);
    const reader = new FileReader();
    reader.readAsText(file);

    reader.onload = () => {
      const buffer = reader.result;
      const result = buffer && JSON.parse(buffer.toString());
      setFunnelObject(result as unknown as Funnel);
    };
  };

  return (
    <FunnelContext.Provider value={{ funnelObject }}>
      <div className="flex flex-row space-x-12">
        <div className="flex flex-col space-y-8 justify-center">
          <UploadComponent onChange={(ev) => handleUpload(ev)} />
          <h1 className="text-white self-start my-4">{funnelObject.name}</h1>
        </div>
        <div className="flex flex-col space-y-8">{children}</div>
      </div>
    </FunnelContext.Provider>
  );
};

export default FunnelComponent;
