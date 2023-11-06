import room1 from "../../assets/room/3.png";
// import room2 from "../../assets/room/2.png";
// import room3 from "../../assets/room/3.png";
// import room4 from "../../assets/room/4.png";
const RoomGallery = () => {
  return (
    <section className="py-16 bg-gray-100 text-gray-900">
      <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
        <img
          src={room1}
          alt=""
          className="w-full object-cover h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 bg-gray-500 aspect-square"
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
          src="https://source.unsplash.com/random/200x200/?0"
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
          src="https://source.unsplash.com/random/200x200/?1"
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
          src="https://source.unsplash.com/random/200x200/?2"
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
          src="https://source.unsplash.com/random/200x200/?3"
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
          src="https://source.unsplash.com/random/200x200/?4"
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
          src="https://source.unsplash.com/random/200x200/?5"
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
          src="https://source.unsplash.com/random/200x200/?6"
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
          src="https://source.unsplash.com/random/200x200/?7"
        />
        <img
          src="https://source.unsplash.com/random/302x302/"
          alt=""
          className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 bg-gray-500 aspect-square"
        />
      </div>
    </section>
  );
};
export default RoomGallery;
