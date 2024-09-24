import React from "react";
import "../style.css";

const styles = {
  flexContainer: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f9fbfb",
    padding: 20,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    backgroundColor: "#ffffff",
    padding: 50,
    border: "1px solid #e7e7e7",
    borderRadius: 10,
    maxWidth: "450px",
    minWidth: "320px",
    width: "100%",
  },
  label: {
    marginBottom: 5,
  },
  formInput: {
    width: "100%",
    height: 40,
    padding: 5,
    border: "1px solid #000000",
    borderRadius: 5,
    marginBottom: 15,
  },
  formButton: {
    backgroundColor: "#008888",
    color: "#ffffff",
    padding: 10,
    border: "1px solid #e7e7e7",
    borderRadius: 5,
    fontSize: 16,
    cursor: "pointer",
    width: "100%",
  },
  formHeader: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: "20px",
  },
  borderRed: {
    border: "1px solid #ea0000",
  },
};

function Signup() {
  const id = React.useId();
  const [formData, setFormData] = React.useState({
    emailAddress: "",
    password: "",
    confirmPassword: "",
  });

  const [errorClass, setErrorClass] = React.useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (
      formData.password === formData.confirmPassword &&
      formData.password !== "" &&
      formData.confirmPassword !== ""
    ) {
      setErrorClass("");
      console.log("Thank you for signing up for @yourcompanyname.");
    } else {
      if (formData.password === "" || formData.confirmPassword === "") {
        console.log("Please enter your password field(s).");
      } else {
        console.log("Passwords do not match. ");
      }
      setErrorClass("border-red");
    }
  }

  return (
    <>
      <div style={styles.flexContainer}>
        <form style={styles.form} onSubmit={handleSubmit}>
          <div style={styles.formHeader}>
            <h1 style={{ margin: 0, fontSize: 24, lineHeight: "30px" }}>
              Sign up
            </h1>
            <div className="sign-in-link">
              <span>
                Already have an account?{" "}
                <a href="">
                  Sign in <strong>→</strong>
                </a>
              </span>
            </div>
          </div>
          <label style={styles.label} htmlFor={`${id}emailAddress`}>
            Email Address
          </label>
          <input
            type="email"
            name="emailAddress"
            id={`${id}emailAddress`}
            style={styles.formInput}
            onChange={handleChange}
            value={formData.emailAddress}
          />

          <label style={styles.label} htmlFor={`${id}password`}>
            Password
          </label>
          <input
            type="password"
            name="password"
            id={`${id}password`}
            style={styles.formInput}
            onChange={handleChange}
            value={formData.password}
            className={errorClass}
          />

          <label style={styles.label} htmlFor={`${id}confirmPassword`}>
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            id={`${id}confirmPassword`}
            style={styles.formInput}
            onChange={handleChange}
            value={formData.confirmPassword}
            className={errorClass}
          />

          <button style={styles.formButton}>Sign up</button>
        </form>
      </div>
    </>
  );
}

export default Signup;
