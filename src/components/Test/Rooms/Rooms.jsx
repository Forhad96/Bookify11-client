import Room from "./Room";

const Rooms = () => {
    return (
      <section className="rooms">
        {/* overlay & spinner loader */}
        {/* {loading && (
          <div className="fixed top-0 left-0 z-50 flex h-screen w-full items-center justify-center bg-black/90">
            <SpinnerDotted color="white" />

          </div>
        )} */}

        <div className="container mx-auto py-24">
          <div className="text-center">
            <div className="font-tertiary text-[15px] uppercase tracking-[6px]">
              Hotel & Spa Adina
            </div>
            <h2 className="mb-4 font-primary text-[32px] lg:text-[45px]">
              Hotel & Suites
            </h2>
          </div>

          {/* grid */}
          <div className="mx-auto grid max-w-sm grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {[1,2,3,4,5,6].map((room) => {
              return <Room room={room} key={room.id} />;
            })}
          </div>
        </div>
      </section>
    );
};
export default Rooms;