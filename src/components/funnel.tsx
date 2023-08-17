"use client";

import React, { createContext, useState } from "react";
import UploadComponent from "./upload";

type Props = {
  children?: React.ReactNode;
};

export const FunnelContext = createContext<{ funnelObject: Funnel }>({
  funnelObject: {} as Funnel,
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
          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
          {funnelObject.name && (
            <h1 className="text-white self-start my-4">
              {funnelObject.name + " loaded successfully"}
            </h1>
          )}
        </div>
        <div className="flex flex-col space-y-8 place-content-center justify-center">
          {children}
        </div>
      </div>
    </FunnelContext.Provider>
  );
};

export default FunnelComponent;
