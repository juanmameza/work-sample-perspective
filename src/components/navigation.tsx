type Props = {
  currentPageIndex: number;
  lastPageIndex: number;
  onBackClick: () => void;
  onForwardClick: () => void;
};

const NavigationComponent: React.FC<Props> = ({
  currentPageIndex,
  lastPageIndex,
  onBackClick,
  onForwardClick,
}) => {
  return (
    <div className="self-center space-x-4">
      <button onClick={onBackClick} disabled={currentPageIndex === 0}>
        {"<"}
      </button>
      <button
        onClick={onForwardClick}
        disabled={currentPageIndex === lastPageIndex}
      >
        {">"}
      </button>
    </div>
  );
};

export default NavigationComponent;