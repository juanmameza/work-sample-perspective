"use client";

import React, { useContext, useEffect, useRef, useState } from "react";
import BlockComponent from "./block";
import { FunnelContext } from "./funnel";
import NavigationComponent from "./navigation";

const UserStoryComponent: React.FC = () => {
  const { funnelObject } = useContext(FunnelContext);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  const itemsRef = useRef(new Map());

  useEffect(() => {
    setCurrentPageIndex(0);
  }, [funnelObject]);

  const handleBackClick = () => {
    if (currentPageIndex > 0) {
      setCurrentPageIndex(currentPageIndex - 1);
    }
  };

  const handleForwardClick = () => {
    if (currentPageIndex < funnelObject.pages.length - 1) {
      setCurrentPageIndex(currentPageIndex + 1);
    }
  };

  const renderPage = (page: Page) => {
    return (
      <div key={`div-${page.id}`}>
        {page.blocks.map((block) => (
          <div key={block.id}>
            <BlockComponent block={block} />
          </div>
        ))}
      </div>
    );
  };

  return (
    funnelObject && (
      <div className="rounded shadow-lg">
        <div
          className="flex flex-row gap-4 space-y-2 py-4 max-w-[375px] h-[600px] overflow-x-hidden"
          style={{ backgroundColor: funnelObject.bgColor }}
        >
          {funnelObject.pages &&
            renderPage(funnelObject.pages[currentPageIndex])}
        </div>
        {funnelObject.pages && (
          <NavigationComponent
            currentPageIndex={currentPageIndex}
            lastPageIndex={funnelObject.pages.length - 1}
            onBackClick={handleBackClick}
            onForwardClick={handleForwardClick}
          />
        )}
      </div>
    )
  );
};

export default UserStoryComponent;
