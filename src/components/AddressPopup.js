import { useAddress } from "contexts/AddressContext";
import { useAuth } from "contexts/AuthContext";
import { useState, useRef } from "react";
import { v4 as uuid } from "uuid";


export const AddressPopup = ({ showPopup, setShowPopup }) => {
  const { user } = useAuth();
  const initialState = {
    _id: uuid(),
    firstName: "",
    lastName: "",
    email: user?.email,
    address: "",
    city: "",
    state: "",
    pincode: "",
    phNo: "",
  };
  const [form, setForm] = useState(initialState);
  const { dispatchAddress } = useAddress();
  const [checkFormValidity, setFormValid] = useState(false);
  const formRef = useRef();

  const resetForm = () => {
    setForm(initialState);
    setShowPopup(false);
    setFormValid(false);
  };

  const validateForm = (e) => {
    e.preventDefault();
    setFormValid(true);
    if (formRef.current.checkValidity()) {
      dispatchAddress({ type: "ADD_ADDRESS", payload: form });
      resetForm();
    }
  };

  return (
    <div className={`modal-wrapper modal-wrapper-example grid-ctr ${showPopup ? "show-modal" : ""}`}>
      <div className="modal address-modal grid-ctr p-t-5">
        <ul className="no-bullet col-flex no-wrap p-h-2 m-b-3 p-t-2">
          <li className="filter-list m-v-2">ADD NEW ADDRESS</li>
          <li>
            {" "}
            <form
              className={`left-text row-flex text-wrap ${checkFormValidity ? "form-validated" : ""}`}
              noValidate
              ref={formRef}
              onSubmit={(e) => validateForm(e)}
            >
              <div className="field col-flex w-45p m-v-1">
                <label className="m-v-1" htmlFor="fname">
                  FIRST NAME<span className="mandatory-field">*</span>
                </label>
                <input
                  type="text"
                  className="input p-07"
                  id="fname"
                  value={form.firstName}
                  required
                  onChange={(e) => setForm((prev) => ({ ...prev, firstName: e.target.value }))}
                />
                <small className="form-validation-msg success-msg green-text">
                  <i className="fa fa-check-circle-o" aria-hidden="true"></i>Valid field
                </small>
                <small className="form-validation-msg error-msg red-text">
                  <i className="fa fa-exclamation-circle" aria-hidden="true"></i>Please enter valid input
                </small>
              </div>
              <div className="field col-flex w-45p m-v-1">
                <label className="m-v-1" htmlFor="lname">
                  LAST NAME<span className="mandatory-field">*</span>
                </label>
                <input
                  type="text"
                  className="input p-07"
                  id="lname"
                  value={form.lastName}
                  required
                  onChange={(e) => setForm((prev) => ({ ...prev, lastName: e.target.value }))}
                />
                <small className="form-validation-msg success-msg green-text">
                  <i className="fa fa-check-circle-o" aria-hidden="true"></i>Valid field
                </small>
                <small className="form-validation-msg error-msg red-text">
                  <i className="fa fa-exclamation-circle" aria-hidden="true"></i>Please enter valid input
                </small>
              </div>
              <div className="field col-flex w-95p m-v-1">
                <label className="m-v-1" htmlFor="address">
                  ADDRESS<span className="mandatory-field">*</span>
                </label>
                <input
                  type="text"
                  className="input p-07"
                  id="address"
                  value={form.address}
                  required
                  onChange={(e) => setForm((prev) => ({ ...prev, address: e.target.value }))}
                />
                <small className="form-validation-msg success-msg green-text">
                  <i className="fa fa-check-circle-o" aria-hidden="true"></i>Valid field
                </small>
                <small className="form-validation-msg error-msg red-text">
                  <i className="fa fa-exclamation-circle" aria-hidden="true"></i>Please enter valid address
                </small>
              </div>
              <div className="field col-flex w-45p m-v-1">
                <label className="m-v-1" htmlFor="city">
                  CITY<span className="mandatory-field">*</span>
                </label>
                <input
                  type="text"
                  className="input p-07"
                  id="city"
                  value={form.city}
                  required
                  onChange={(e) => setForm((prev) => ({ ...prev, city: e.target.value }))}
                />
                <small className="form-validation-msg success-msg green-text">
                  <i className="fa fa-check-circle-o" aria-hidden="true"></i>Valid field
                </small>
                <small className="form-validation-msg error-msg red-text">
                  <i className="fa fa-exclamation-circle" aria-hidden="true"></i>Please enter valid city
                </small>
              </div>
              <div className="field col-flex w-45p m-v-1">
                <label className="m-v-1" htmlFor="state">
                  STATE<span className="mandatory-field">*</span>
                </label>
                <input
                  type="text"
                  className="input p-07"
                  id="state"
                  value={form.state}
                  required
                  onChange={(e) => setForm((prev) => ({ ...prev, state: e.target.value }))}
                />
                <small className="form-validation-msg success-msg green-text">
                  <i className="fa fa-check-circle-o" aria-hidden="true"></i>Valid field
                </small>
                <small className="form-validation-msg error-msg red-text">
                  <i className="fa fa-exclamation-circle" aria-hidden="true"></i>Please enter valid state
                </small>
              </div>
              <div className="field col-flex w-45p m-v-1">
                <label className="m-v-1" htmlFor="pincode">
                  PINCODE<span className="mandatory-field">*</span>
                </label>
                <input
                  type="number"
                  className="input p-07"
                  id="pincode"
                  value={form.pincode}
                  required
                  onChange={(e) => setForm((prev) => ({ ...prev, pincode: e.target.value }))}
                />
                <small className="form-validation-msg success-msg green-text">
                  <i className="fa fa-check-circle-o" aria-hidden="true"></i>Valid field
                </small>
                <small className="form-validation-msg error-msg red-text">
                  <i className="fa fa-exclamation-circle" aria-hidden="true"></i>Please enter valid pincode
                </small>
              </div>
              <div className="field col-flex w-45p m-v-1">
                <label className="m-v-1" htmlFor="phNo">
                  PHONE NO.<span className="mandatory-field">*</span>
                </label>
                <input
                  type="number"
                  className="input p-07"
                  id="phNo"
                  value={form.phNo}
                  required
                  onChange={(e) => setForm((prev) => ({ ...prev, phNo: e.target.value }))}
                />
                <small className="form-validation-msg success-msg green-text">
                  <i className="fa fa-check-circle-o" aria-hidden="true"></i>Valid field
                </small>
                <small className="form-validation-msg error-msg red-text">
                  <i className="fa fa-exclamation-circle" aria-hidden="true"></i>Please enter valid phNo
                </small>
              </div>
              <li className="row-flex m-v-05 full-wd">
                <button type="reset" className="btn primary-outline-btn w-45p m-1" onClick={() => resetForm()}>
                  Cancel
                </button>
                <button type="submit" className="btn primary-btn w-45p">
                  Add
                </button>
              </li>
            </form>
          </li>
        </ul>
      </div>
    </div>
  );
};
