const Review = () => {
    return (
      <section className="py-20 mt-16 bg-background dark:bg-darkDark">
        <div className="flex flex-col lg:flex-row gap-10 container mx-auto px-5">
          <div className="flex-1">
            <div>
              <img
                src="https://i.ibb.co/44Y5NpN/IMG-20231012-WA0010.jpg"
                alt=""
              />
            </div>
          </div>

          <div className="mb-10 flex-1">
            <p className="text-yellow-400 font-bold pb-2">REVIEW</p>
            <h2 className="text-4xl text-black dark:text-textDark font-bold mb-10">
              What Our <br /> Customer Say
            </h2>

            <div className="w-5/6">
              <div className="bg-gray-100 p-10 rounded-3xl text-black">
                <div className="flex gap-5">
                  <div>
                    {/* <ImQuotesLeft></ImQuotesLeft> */}
                  </div>
                  <p>
                    I recently booked a stay at Paradise Beach Resort through
                    this website, and it was an incredible experience! The
                    booking process was seamless, and the resort exceeded all
                    expectations. The picturesque views and top-notch service
                    made my vacation truly memorable.
                  </p>
                </div>

                <div className="mt-5">
                  <h3 className="text-xl font-bold">Review by Sarah R.</h3>
                  <p>Lovely Customer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};
export default Review;