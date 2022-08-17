import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    isStudent: true,
    college: "",
    otherCollege: "",
    University: "",
    city: "",
    conPassword: "",
    password: "",
    zip: "",
  });
  console.log(formData.value);
  function handleSubmit(event) {
    event.preventDefault();
    let form = document.querySelector(".error");
    let img = document.createElement("img");
    img.src = "https://cdn-icons-png.flaticon.com/512/7510/7510794.png";
    if (
      Object.keys(formData).length === 0 &&
      Object.getPrototypeOf(formData) === Object.prototype
    ) {
      if (formData.password === formData.conPassword) {
        form.parentElement.appendChild(img);
        form.style.display = "none";
        setTimeout(() => {
          form.style.display = "grid";
          img.style.display = "none";
        }, 1500);
      } else {
        let error = document.createElement("h2");
        error.innerText = "Password does not match";
        error.style.fontWeight = "bold";
        error.style.color = "#d5516a";
        form.appendChild(error);
      }
    } else {
      let error = document.createElement("h3");
      error.innerText =
        "Required fields , Please fill the form with required fields.";
      error.style.fontWeight = "bold";
      error.style.color = "#d5516a";
      form.prepend(error);
    }
  }
  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevData) => {
      if ([name] == "otherCollege") {
        formData.college = "";
      } else if ([name] == "college") {
        formData.otherCollege = "";
      }
      return {
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  return (
    <div className="container">
      <h1>Registration</h1>
      <h3>Universty E-mail Form</h3>
      <div className="error"></div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder=" first Name"
          onChange={handleChange}
          value={formData.firstName}
        />
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder=" last Name"
          onChange={handleChange}
          value={formData.lastName}
          required
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Your E-mail"
          onChange={handleChange}
          value={formData.email}
          required
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Your Password"
          onChange={handleChange}
          value={formData.password}
          required
        />
        <input
          type="password"
          name="conPassword"
          id="conPassword"
          placeholder="Confirm Password"
          onChange={handleChange}
          value={formData.conPassword}
          required
        />
        <input
          type="text"
          name="city"
          placeholder="city"
          onChange={handleChange}
          required
        />
        <input
          type="nuber"
          name="zip"
          placeholder="Zip"
          onChange={handleChange}
          required
        />
        {/* <select
          id="favColor"
          value={formData.favColor}
          onChange={handleChange}
          name="favColor"
        >
          <option defaultChecked value="">
            Choose Color
          </option>
          <option value="red">Red</option>
          <option value="orange">Orange</option>
          <option value="yellow">Yellow</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="indigo">Indigo</option>
          <option value="violet">Violet</option>
        </select>
        <label htmlFor="student">
          Are You Studen?{` `}
          <input
            type="checkbox"
            name="isStudent"
            id="isStudent"
            onChange={handleChange}
            checked={formData.isStudent}
          />
        </label> */}
        {formData.isStudent && (
          <>
            <input
              value={formData.University}
              type="text"
              name="University"
              id="University"
              placeholder="Your University"
              onChange={handleChange}
            />

            {formData.University && (
              <fieldset>
                <legend>Studying Field </legend>
                <input
                  type="radio"
                  name="college"
                  id="Computer Science"
                  value="Computer Science"
                  onChange={handleChange}
                  checked={formData.college === "Computer Science"}
                />
                <label htmlFor="Computer Science">Computer Science</label>
                <br></br>
                <input
                  type="radio"
                  name="college"
                  id="Business"
                  value="Business"
                  onChange={handleChange}
                  checked={formData.college === "Business"}
                />
                <label htmlFor="Business">Business</label>
                <br></br>
                <input
                  type="radio"
                  name="otherCollege"
                  id="other"
                  value="other"
                  onChange={handleChange}
                  checked={formData.otherCollege}
                />
                <label htmlFor="other">other</label>
                <br></br>
                {formData.otherCollege && (
                  <input
                    type="text"
                    name="otherCollege"
                    id="college"
                    placeholder="Your college"
                    onChange={handleChange}
                  />
                )}
              </fieldset>
            )}
          </>
        )}

        <input type="submit" name="submit" id="submit" value="submit" />
      </form>
    </div>
  );
}

export default App;
