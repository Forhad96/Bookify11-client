

const About = () => {
  return (
    <div
      className="relative flex items-center justify-center w-full h-screen text-center bg-center bg-cover "
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/221457/pexels-photo-221457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
        height: 560,
      }}
    >
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-sky-900 opacity-50" />
      <div className="z-10 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="mb-6 text-4xl font-medium leading-10 tracking-tight text-gray-50 md:text-6xl">
            Want to Enjoy Your Trips or Business Trips <br /> Get Booked Now
          </h2>
          <p className="mb-6 tracking-wide text-gray-300 sm:mt-5 sm:text-md sm:max-w-xl sm:mx-auto md:mt-5">
            Success is most important part of life and it is determination of
            having achieved and accomplished aim with lots of failure enthusiam.
          </p>
          <div className="justify-center sm:flex">
            <div className="">
              <a
                href="#"
                className="flex items-center justify-center w-full px-8 py-3 text-gray-100 bg-blue-600 rounded-md shadow hover:bg-blue-500 "
              >
                Book Hotel
              </a>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <a
                href="#"
                className="flex items-center justify-center w-full px-8 py-3 text-blue-600 bg-gray-100 rounded-md shadow hover:text-gray-100 hover:bg-blue-500 "
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
    <div className="relative bg-gray-800 h-[80vh]">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/3659683/pexels-photo-3659683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-900 opacity-30"></div>
      </div>
      <div className="top-1/2 left-1/2 absolute transform -translate-x-1/2 max-w-7xl mx-auto text-center  px-4 sm:px-6 lg:px-8">
        <p className="mb-3 text-yellow-400 font-bold">ABOUT THE HOTEL</p>
        <h1 className="text-3xl lg:text-4xl text-white font-bold">
          Want to Enjoy Your Trips or Business Trips <br /> Get Booked Now
        </h1>
        <button className="btn btn-warning mt-5 text-white">Book Hotel</button>
      </div>
    </div>;