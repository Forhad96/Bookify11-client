const Promotions = () => {
    return (
      <div className="p-6 py-12 text-darkDark dark:text-light bg-background dark:bg-backgroundDark">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <h2 className="text-center text-6xl  font-bold">
              Up to
              <br className="sm:hidden" />
              50% Of
            </h2>
            <div className="space-x-2  text-center py-2 lg:py-0">
              <span>! Use code:</span>
              <span className="font-bold text-lg">Bookify</span>
            </div>
            <a
              href="#"
              rel="noreferrer noopener"
              className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block bg-gray-900 text-gray-50 border-gray-600"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    );
};
export default Promotions;