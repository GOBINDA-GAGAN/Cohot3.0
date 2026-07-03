import React, { useState } from "react";
import Cad from "./components/Cad";

const Web = () => {
  // Basic State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Object State
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Dynamic Form
  const [formdata2, setFormdata2] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormdata2((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const inputStyle =
    "w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500";

  const buttonStyle =
    "w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300";

  return (
    <div className="min-h-screen bg-slate-100 p-10">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-slate-800">
          React useState Forms
        </h1>

        <p className="text-gray-500 mt-3">
          Three different ways of handling form state in React
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {Array.from({ length: 4 }).map((_, index) => (
          <Cad key={index} />
        ))}
      </div>

      {/* Forms */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* ---------------- BASIC ---------------- */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-blue-600 mb-6">
            Basic useState
          </h2>

          <div className="space-y-4">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={inputStyle}
              type="text"
              placeholder="Enter Name"
            />

            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={inputStyle}
              type="email"
              placeholder="Enter Email"
            />

            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={inputStyle}
              type="password"
              placeholder="Enter Password"
            />

            <button className={buttonStyle}>Submit</button>

            <div className="bg-slate-100 rounded-lg p-4 space-y-2 mt-5">
              <p>
                <strong>Name:</strong> {name}
              </p>

              <p>
                <strong>Email:</strong> {email}
              </p>

              <p>
                <strong>Password:</strong> {password}
              </p>
            </div>
          </div>
        </div>

        {/* ---------------- OBJECT ---------------- */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-green-600 mb-6">
            Object State
          </h2>

          <div className="space-y-4">
            <input
              value={formdata.name}
              onChange={(e) =>
                setFormdata({
                  ...formdata,
                  name: e.target.value,
                })
              }
              className={inputStyle}
              type="text"
              placeholder="Enter Name"
            />

            <input
              value={formdata.email}
              onChange={(e) =>
                setFormdata({
                  ...formdata,
                  email: e.target.value,
                })
              }
              className={inputStyle}
              type="email"
              placeholder="Enter Email"
            />

            <input
              value={formdata.password}
              onChange={(e) =>
                setFormdata({
                  ...formdata,
                  password: e.target.value,
                })
              }
              className={inputStyle}
              type="password"
              placeholder="Enter Password"
            />

            <button className={buttonStyle}>Submit</button>

            <div className="bg-slate-100 rounded-lg p-4 space-y-2 mt-5">
              <p>
                <strong>Name:</strong> {formdata.name}
              </p>

              <p>
                <strong>Email:</strong> {formdata.email}
              </p>

              <p>
                <strong>Password:</strong> {formdata.password}
              </p>
            </div>
          </div>
        </div>

        {/* ---------------- DYNAMIC ---------------- */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-purple-600 mb-6">
            Dynamic Form
          </h2>

          <div className="space-y-4">
            <input
              name="name"
              value={formdata2.name}
              onChange={handleChange}
              className={inputStyle}
              type="text"
              placeholder="Enter Name"
            />

            <input
              name="email"
              value={formdata2.email}
              onChange={handleChange}
              className={inputStyle}
              type="email"
              placeholder="Enter Email"
            />

            <input
              name="password"
              value={formdata2.password}
              onChange={handleChange}
              className={inputStyle}
              type="password"
              placeholder="Enter Password"
            />

            <button className={buttonStyle}>Submit</button>

            <div className="bg-slate-100 rounded-lg p-4 space-y-2 mt-5">
              <p>
                <strong>Name:</strong> {formdata2.name}
              </p>

              <p>
                <strong>Email:</strong> {formdata2.email}
              </p>

              <p>
                <strong>Password:</strong> {formdata2.password}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Web;