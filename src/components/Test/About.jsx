const About = () => {
    return (
      <section className="py-20 text-white">
        <div className="container mx-auto">
          <div
            className="hero py-44 rounded-3xl "
            style={{
              backgroundImage:
                "url(https://i.ibb.co/LZJ6Cvc/IMG-20231009-WA0003.jpg)",backgroundRepeat:"no-repeat",backgroundSize:"cover"
            }}
          >
            <div className="hero-overlay bg-opacity-70"></div>
            <div className="hero-content text-center">
              <div className="w-4/5 lg:w-full text-white  my-5">
                <div className="flex gap-3 justify-center">
                  <p className="mb-3 text-yellow-400 font-bold">
                    ABOUT THE HOTEL
                  </p>
                </div>
                <h1 className="text-3xl lg:text-4xl font-bold">
                  Want to Enjoy Your Trips or Business Trips <br /> Get Booked
                  Now
                </h1>
                <button className="btn btn-warning mt-5 text-white">
                  Book Hotel
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};
export default About;