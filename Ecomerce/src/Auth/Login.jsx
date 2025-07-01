import React from "react";

function Login() {
  const [state, setState] = React.useState({
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

    const { email, password } = state;
    alert(`You are login with email: ${email} and password: ${password}`);

    setState({
      email: "",
      password: "",
    });
  };

  return (
    <div className="absolute top-0 left-0 h-full w-1/2 flex items-center justify-center transition-transform duration-700 z-[2]">
      <form
        onSubmit={handleOnSubmit}
        className="bg-white flex flex-col items-center justify-center px-12 text-center w-full h-full"
      >
        <h1 className="text-3xl font-bold mb-2">Sign in</h1>

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

        <span className="text-sm mb-2 text-gray-600">or use your account</span>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={state.email}
          onChange={handleChange}
          className="w-full bg-gray-200 border-none px-4 py-3 my-2 rounded text-sm focus:outline-none"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={state.password}
          onChange={handleChange}
          className="w-full bg-gray-200 border-none px-4 py-3 my-2 rounded text-sm focus:outline-none"
        />

        <a href="#" className="text-sm text-gray-600 mt-2 mb-4 hover:underline">
          Forgot your password?
        </a>

        <button
          type="submit"
          className="bg-[#ff4b2b] text-white rounded-full px-10 py-3 text-xs font-bold uppercase tracking-widest transition transform active:scale-95 focus:outline-none"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}

export default Login;
