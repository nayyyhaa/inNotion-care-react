import { useState } from "react";
import { DiscountData } from "toolkit/data/DiscountData";

export const DiscountPopup = ({ discountData, setDiscountData }) => {
  const [code, setCode] = useState(discountData?.code);

  return (
    <div className={`modal-wrapper modal-wrapper-example grid-ctr ${discountData?.showModal ? "show-modal" : ""}`}>
      <div className="modal grid-ctr p-t-5">
        <ul className="no-bullet col-flex no-wrap p-h-2 m-b-3 p-t-2">
          <li className="filter-list m-v-2">Select Discount</li>
          {DiscountData?.map((data) => (
            <li key={data?._id} className="filter-item discount-box m-v-1">
              <label className="categories cursor">
                <input
                  type="radio"
                  className="radio-input m-v-05 m-r-1"
                  name="discount"
                  id={data?._id}
                  checked={data?.code === code}
                  onChange={() => setCode(data?.code)}
                />
                <span>{data.title}</span>
                <p className="sub-heading m-v-05">{data?.description}</p>
                <p className="m-v-05">
                  Code: <span className="colored-text">{data?.code}</span>
                </p>
              </label>
            </li>
          ))}
          <li className="filter-item add-tag row-flex m-v-05">
            <button
              className="btn primary-outline-btn m-r-1"
              onClick={() => {
                setDiscountData((prev) => ({ ...prev, showModal: false }));
                setCode(discountData?.code);
              }}
            >
              Cancel
            </button>
            <button
              className={`btn primary-btn ${code ? "" : "disabled-btn"}`}
              onClick={() => setDiscountData((prev) => ({ ...prev, code, showModal: false }))}
            >
              Add
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
