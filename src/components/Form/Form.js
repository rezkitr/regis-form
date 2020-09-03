import React, { useState, useEffect } from "react";
import axios from "axios";

import "./Form.css";

const renderDob = () => {
  for (let i = 0; i <= 31; i++) {
    return <option value={i}>{i}</option>;
  }
};

const renderCountry = (countries) => {
  return countries.map((country, index) => {
    return (
      <option key={index} value={country.name}>
        {country.name}
      </option>
    );
  });
};

const renderPhoneCode = (countries) => {
  return countries.map((country, index) => {
    return (
      <option key={index} value={country.callingCodes}>
        {country.name}
      </option>
    );
  });
};

const Form = () => {
  const [countries, setCountries] = useState([]);
  const [callingCode, setCallingCode] = useState("");

  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((res) => {
        setCountries(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="px-5" style={{ marginTop: "50px" }}>
      <h6 className="font-weight-bold">Create New Account</h6>

      <form className="mt-3">
        {/* title */}
        <div className="form-row">
          <div className="form-group col">
            <label>Title</label>
            <br />
            <input type="checkbox" name="mrs" id="mrs" className="mr-2" />
            <label htmlFor="mrs" className="checkbox-label mr-3">
              Mrs
            </label>
            <input type="checkbox" name="ms" id="ms" className="mr-2" />
            <label htmlFor="ms" className="checkbox-label mr-3">
              Ms
            </label>
            <input type="checkbox" name="mdm" id="mdm" className="mr-2" />
            <label htmlFor="mdm" className="checkbox-label mr-3">
              Mdm
            </label>
            <input type="checkbox" name="mr" id="mr" className="mr-2" />
            <label htmlFor="mr" className="checkbox-label mr-3">
              Mr
            </label>
            <input type="checkbox" name="dr" id="dr" className="mr-2" />
            <label htmlFor="dr" className="checkbox-label">
              Dr
            </label>
          </div>
        </div>

        {/* name */}
        <div className="form-row">
          <div className="form-group col">
            <label htmlFor="last-name">
              Last Name <span className="star">*</span>
            </label>
            <input
              type="text"
              name="last-name"
              id="last-name"
              className="form-control"
              placeholder="Last Name"
            />
          </div>
          <div className="form-group col">
            <label htmlFor="first-name">
              First Name <span className="star">*</span>
            </label>
            <input
              type="text"
              name="first-name"
              id="first-name"
              className="form-control"
              placeholder="First Name"
            />
          </div>
        </div>

        {/* phone */}
        <label htmlFor="phone">
          Mobile phone number <span className="star">*</span>
        </label>
        <div className="form-row">
          <div className="form-group col-1">
            <select
              name="phonecode"
              id="phonecode"
              className="form-control"
              onChange={(event) => {
                setCallingCode(event.target.value);
              }}
            >
              <option selected></option>
              {renderPhoneCode(countries)}
            </select>
          </div>

          <div className="form-group col-4">
            <div className="input-group">
              <div className="input-group-prepend">
                <div className="input-group-text">{`+${callingCode}`}</div>
              </div>
              <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="Mobile phone number"
                className="form-control"
              />
            </div>
          </div>
        </div>

        {/* address */}
        <h6 className="font-weight-bold mt-3">Address</h6>

        <div className="form-row mt-4">
          <div className="form-group col">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              id="address"
              className="form-control"
              placeholder="Address"
            />
          </div>
        </div>

        {/* country/province */}
        <div className="form-row">
          <div className="form-group col">
            <label htmlFor="country">
              Country/Location <span className="star">*</span>
            </label>
            <select name="country" id="country" className="form-control">
              {renderCountry(countries)}
            </select>
          </div>
          <div className="form-group col">
            <label htmlFor="province">
              Province/District <span className="star">*</span>
            </label>
            <select name="province" id="province" className="form-control">
              <option value="#">-</option>
              <option value="#">-</option>
            </select>
          </div>
        </div>

        {/* contact */}
        <h6 className="font-weight-bold mt-3">Contact</h6>

        <div className="form-row">
          <div className="form-group col-6">
            <label htmlFor="email">
              Email address <span className="star">*</span>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="form-control"
              placeholder="Email address"
            />
          </div>
          <div className="form-group col">
            <label htmlFor="dob">
              Date of birth <span className="star">*</span>
            </label>
            <select
              name="dob"
              id="dob"
              className="form-control"
              placeholder="DD"
            >
              {renderDob()}
            </select>
          </div>
          <div className="form-group col">
            <label htmlFor="mob">
              Month <span className="star">*</span>
            </label>
            <input
              type="text"
              name="mob"
              id="mob"
              className="form-control"
              placeholder="MM"
            />
          </div>
          <div className="form-group col">
            <label htmlFor="yob">
              Year <span className="star">*</span>
            </label>
            <input
              type="text"
              name="yob"
              id="yob"
              className="form-control"
              placeholder="YY"
            />
          </div>
        </div>

        {/* standard */}
        <h6 className="font-weight-bold mt-3">Standard privacy note</h6>

        <p className="privacy-note">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          rerum consequatur facere atque asperiores incidunt provident quidem,
          doloribus similique nulla consectetur ratione fuga beatae nemo.
          Accusamus animi magnam nesciunt atque?
        </p>
        <p className="privacy-note">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          rerum consequatur facere atque asperiores incidunt provident quidem,
          doloribus similique nulla consectetur ratione fuga beatae nemo.
          Accusamus animi magnam nesciunt atque?
        </p>
        <p className="privacy-note">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          rerum consequatur facere atque asperiores incidunt provident quidem,
          doloribus similique nulla consectetur ratione fuga beatae nemo.
          Accusamus animi magnam nesciunt atque?
        </p>
      </form>
    </div>
  );
};

export default Form;
