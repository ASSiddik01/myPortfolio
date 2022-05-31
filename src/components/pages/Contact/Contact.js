import React from "react";

const Contact = () => {
  const handleForm = (e) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <section className="pb-10">
      <div className="flex flex-wrap md:px-4">
        <form
          onSubmit={handleForm}
          className="p-8 md:mx-4 bg-white rounded-md shadow-md"
        >
          <div className="m-3">
            <h3 className="text-2xl text-natural font-bold mb-6">
              Contact with Me
            </h3>
          </div>
          <div className="w-full flex flex-wrap">
            <div className="w-full md:w-1/2">
              <div className="m-3">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full border border-secondary rounded py-4 px-6 text-sm bg-white"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="m-3">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Your Email"
                  className="w-full border border-secondary rounded py-4 px-6 text-sm bg-white"
                />
              </div>
            </div>
            <div className="w-full">
              <div className="m-3">
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="Subject"
                  className="w-full border border-secondary rounded py-4 px-6 text-sm bg-white"
                />
              </div>
            </div>
            <div className="w-full">
              <div className="m-3">
                <textarea
                  name="message"
                  required
                  placeholder="Your Message"
                  rows="6"
                  className="w-full border border-secondary rounded py-4 px-6 text-sm bg-white"
                />
              </div>
            </div>
            <div className="w-full">
              <div className="m-3 text-right">
                <input
                  type="submit"
                  value="Send Message"
                  className="rounded bg-primary text-center border-0 py-3 px-6 text-white leading-7 tracking-wide hover:bg-primary cursor-pointer"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
