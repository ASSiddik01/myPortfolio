import React from "react";

const ProtfolioDetails = ({ portfolioModal, setPortfolioModal }) => {
  const { name, type, url, img1, img2, img3, description, features, tt } =
    portfolioModal;
  const closeModal = () => {
    setPortfolioModal(null);
  };
  return (
    <div>
      <input type="checkbox" id="protfolioModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <label
            htmlFor="protfolioModal"
            onClick={closeModal}
            className="btn btn-sm btn-circle btn-primary absolute right-2 top-2"
          >
            ✕
          </label>
          <div>
            <img src={img1} alt="" />
            <div className="lg:px-6 md:px-4 px-2">
              <h2 className="text-2xl font-bold  mt-2 text-primary">{name}</h2>
              <h5 className="text-lg mt-2">
                <a target="blank" href={url}>
                  <span className="font-bold">Live Site</span>
                </a>
              </h5>
              <h5 className="text-lg mt-2">
                <span className="font-bold">Type:</span> {type}{" "}
              </h5>
              <h5 className="text-lg mt-2">{description}</h5>
              {features && (
                <ul className="mt-2 list-disc ml-5">
                  <li>{features.f1}</li>
                  <li>{features.f2}</li>
                  <li>{features.f3}</li>
                </ul>
              )}
              <div className="block lg:flex justify-between mt-5">
                <img className="lg:w-1/2 lg:mr-2 my-2" src={img2} alt="" />
                <img className="lg:w-1/2 lg:ml-2 my-2" src={img3} alt="" />
              </div>
              {tt && (
                <h5 className="text-lg mt-2">
                  <span className="font-bold">Tools and Technologis:</span> {tt}{" "}
                </h5>
              )}
            </div>
          </div>

          <div className="modal-action">
            <label
              htmlFor="protfolioModal"
              onClick={closeModal}
              className="inline-block mt-3 rounded bg-primary text-center border-0 py-2 px-6 text-white leading-7 tracking-wide hover:bg-secondary"
            >
              Close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProtfolioDetails;
