const Faq = () => {
    return (
      <section className="my-20 bg-gray-100">
        <div className="container mx-auto px-5  py-20">
          <div className="mb-10 text-center">
            <p className="text-yellow-400 font-bold pb-2">FAQS</p>
            <h2 className="text-4xl text-black font-bold mb-3">
              Frequently ask question
            </h2>
            <p>
              Everything you need to know right here all your fingertips. Ask
              question, browse around <br /> for answer, or submit your feature
              requests.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-10">
            <div className="flex-1">
              <div className="collapse collapse-arrow bg-white border mb-2">
                <input type="radio" name="my-accordion-2" checked="checked" />
                <div className="collapse-title text-xl font-bold">
                  How do I make a reservation at a resort or hotel?
                </div>
                <div className="collapse-content">
                  <p>
                    Making a reservation is easy! Simply visit our website,
                    search for your desired destination, select the dates of
                    your stay, choose from the available resorts or hotels, and
                    proceed to book.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-arrow bg-white border mb-2">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-bold">
                  Can I modify or cancel my reservation?
                </div>
                <div className="collapse-content">
                  <p>
                    Yes, you can modify or cancel your reservation, depending on
                    the cancellation policy of the specific resort or hotel.
                    Please check the cancellation policy provided during the
                    booking process for more details.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-arrow bg-white  border mb-2">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-bold">
                  Are there any additional fees or hidden charges?
                </div>
                <div className="collapse-content">
                  <p>
                    We believe in transparency. The price displayed during the
                    booking process includes all applicable taxes and fees.
                    There are no hidden charges.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex-1">
              <div className="collapse collapse-arrow bg-white border mb-2">
                <input type="radio" name="my-accordion-2" checked="checked" />
                <div className="collapse-title text-xl font-bold">
                  What payment options are available for booking?
                </div>
                <div className="collapse-content">
                  <p>
                    We accept various payment methods, including major
                    credit/debit cards and secure online payment gateways.
                    Select your preferred payment option during the booking
                    process.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-arrow bg-white border mb-2">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-bold">
                  Can I request specific amenities or room preferences?
                </div>
                <div className="collapse-content">
                  <p>
                    Absolutely! During the booking process, you can request
                    specific amenities or room preferences in the Special
                    Requests section. While we wll do our best to accommodate
                    your requests, they are subject to availability.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-arrow bg-white  border mb-2">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-bold">
                  Is my personal information secure?
                </div>
                <div className="collapse-content">
                  <p>
                    Yes, we prioritize the security and privacy of our users.
                    Our website uses industry-standard encryption to protect
                    your personal information. Please refer to our Privacy
                    Policy for more details on data security and usage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};
export default Faq;