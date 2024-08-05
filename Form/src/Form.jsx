import { useState } from "react";
export default function Form() {
  let [formData, setformData] = useState({
    fullName: "",
    userName: "",
    password: "",
  });
  let handleInputChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };
  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setformData({
      fullName: "",
      userName: "",
      password: "",
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fullName">Enter fullnAme:</label>
        <br />
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
        />
        <br />
        <label htmlFor="userName">Enter username:</label>
        <br />
        <input
          type="text"
          id="userName"
          name="userName"
          value={formData.userName}
          onChange={handleInputChange}
        />
        <br />
        <label htmlFor="password">Enter Password</label>
        <br />
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
        <br /> <br />
        <button>Submit</button>
      </form>
    </>
  );
}
