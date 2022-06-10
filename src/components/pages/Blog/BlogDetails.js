import React from "react";

const BlogDetails = ({ blogModal, setBlogModal }) => {
  const { img, title, description, code } = blogModal;
  const closeModal = () => {
    setBlogModal(null);
  };
  return (
    <div>
      <input type="checkbox" id="blogModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <label
            htmlFor="blogModal"
            onClick={closeModal}
            className="btn btn-sm btn-circle btn-primary absolute right-2 top-2"
          >
            ✕
          </label>
          <div>
            <img src={img} alt="" />
            <div className="lg:px-6 md:px-4 px-2">
              <h2 className="text-2xl font-bold  mt-2 text-primary">{title}</h2>

              <h5 className="text-lg mt-2">{description}</h5>

              {code && (
                <>
                  <textarea
                    className="my-5 bg-accent w-full p-5"
                    disabled
                    value={code}
                    name=""
                    id=""
                    rows="10"
                  ></textarea>
                </>
              )}
            </div>
          </div>

          <div className="modal-action">
            <label
              htmlFor="blogModal"
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

export default BlogDetails;
