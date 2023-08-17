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
    <div className="flex self-center space-x-4 place-content-center items-center py-4">
      <button
        onClick={onBackClick}
        disabled={currentPageIndex === 0}
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:bg-gray-500 disabled:focus:bg-gray-500 disabled:hover:bg-gray-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>

        <span className="sr-only">Icon description</span>
      </button>
      <p className="text-base text-gray-900 dark:text-white"> {`Page ${currentPageIndex + 1} of ${lastPageIndex + 1}`}</p>
      <button
        onClick={onForwardClick}
        disabled={currentPageIndex === lastPageIndex}
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:bg-gray-500 disabled:focus:bg-gray-500 disabled:hover:bg-gray-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
      </button>
    </div>
  );
};

export default NavigationComponent;
