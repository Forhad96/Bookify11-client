import { Helmet } from "react-helmet";

const About = () => {
  return (
    <div className="relative bg-gray-800 h-screen">

      <div className="absolute inset-0">
        <img
          src="https://i.ibb.co/LZJ6Cvc/IMG-20231009-WA0003.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-900 opacity-60"></div>
      </div>
      <div className="relative max-w-7xl mx-auto text-center py-24 px-4 sm:px-6 lg:px-8">
        <p className="mb-3 text-yellow-400 font-bold">ABOUT THE HOTEL</p>
        <h1 className="text-3xl lg:text-4xl text-white font-bold">
          Want to Enjoy Your Trips or Business Trips <br /> Get Booked Now
        </h1>
        <button className="btn btn-warning mt-5 text-white">Book Hotel</button>
      </div>
    </div>
  );
};
export default About;
