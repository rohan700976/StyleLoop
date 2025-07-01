import React from "react";

function Signup() {
  const [state, setState] = React.useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (evt) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  };

  const handleOnSubmit = (evt) => {
    evt.preventDefault();

    const { name, email, password } = state;
    alert(
      `You are signing up with name: ${name}, email: ${email}, and password: ${password}`
    );

    setState({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="absolute top-0 left-0 h-full w-1/2 opacity-0 z-[1] transition-all duration-700 ease-in-out container-sign-up">
      <form
        onSubmit={handleOnSubmit}
        className="bg-white flex flex-col items-center justify-center px-12 text-center w-full h-full"
      >
        <h1 className="text-3xl font-bold mb-2">Create Account</h1>

        <div className="flex justify-center my-4">
          <a
            href="#"
            className="border border-gray-300 rounded-full w-10 h-10 flex items-center justify-center mx-1 text-gray-700 hover:text-blue-600"
          >
            <i className="fab fa-facebook-f" />
          </a>
          <a
            href="#"
            className="border border-gray-300 rounded-full w-10 h-10 flex items-center justify-center mx-1 text-gray-700 hover:text-red-600"
          >
            <i className="fab fa-google-plus-g" />
          </a>
          <a
            href="#"
            className="border border-gray-300 rounded-full w-10 h-10 flex items-center justify-center mx-1 text-gray-700 hover:text-blue-500"
          >
            <i className="fab fa-linkedin-in" />
          </a>
        </div>

        <span className="text-sm mb-2 text-gray-600">
          or use your email for registration
        </span>

        <input
          type="text"
          name="name"
          value={state.name}
          onChange={handleChange}
          placeholder="Name"
          className="w-full bg-gray-200 border-none px-4 py-3 my-2 rounded text-sm focus:outline-none"
        />

        <input
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full bg-gray-200 border-none px-4 py-3 my-2 rounded text-sm focus:outline-none"
        />

        <input
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
          placeholder="Password"
          className="w-full bg-gray-200 border-none px-4 py-3 my-2 rounded text-sm focus:outline-none"
        />

        <button
          type="submit"
          className="bg-[#ff4b2b] text-white rounded-full px-10 py-3 text-xs font-bold uppercase tracking-widest transition transform active:scale-95 focus:outline-none mt-4"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Signup;
