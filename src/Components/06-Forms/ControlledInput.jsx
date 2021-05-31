import { useState } from "react";

const ControlledInput = () => {


  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataTosend = JSON.stringify({ userName, password });
    console.log(dataTosend);
    setUserName("");
    setPassword("")
  }


  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>User Name</label>
        <input
          id="userName"
          type="text"
          name="userName"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <label>password </label>
        <input
          id="password"
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

    </>
  );
};

export default ControlledInput;
