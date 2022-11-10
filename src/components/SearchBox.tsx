const SearchBox = () => (
  <form>
    <div className="flex">
      <label
        htmlFor="search-dropdown"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
      >
        Your Email
      </label>
      <button
        id="dropdown-button"
        data-dropdown-toggle="dropdown"
        className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
        type="button"
      >
        Filter{" "}
        <svg
          aria-hidden="true"
          className="ml-1 w-4 h-4"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
      <div
        id="dropdown"
        className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 absolute m-0"
        data-popper-reference-hidden=""
        data-popper-escaped=""
        data-popper-placement="bottom"
        style={{
          inset: "0px auto auto 0px",
          transform: "translate3d(0px, 538.4px, 0px)",
        }}
      >
        <ul
          className="py-1 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdown-button"
        >
          <li>
            <button
              type="button"
              className="inline-flex py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Stars
            </button>
          </li>
          <li>
            <button
              type="button"
              className="inline-flex py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Forks
            </button>
          </li>
          <li>
            <button
              type="button"
              className="inline-flex py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Help wanted issues
            </button>
          </li>
          <li>
            <button
              type="button"
              className="inline-flex py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Updated
            </button>
          </li>
        </ul>
      </div>
      <div className="relative w-full">
        <input
          type="search"
          id="search-dropdown"
          className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
          placeholder="Search for repositories..."
          required
        />
        <button
          type="submit"
          className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Search
          <span className="sr-only">Search</span>
        </button>
      </div>
    </div>
  </form>
);

export default SearchBox;
