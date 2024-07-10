import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import PasswordInput from "../../components/Input/PasswordInput";
import { useState } from "react";
import { validateEmail } from "../../utils/helper";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!password) {
      setError("Oops.. you forget the password!");
      return;
    }

    setError("");

    // Login API Call
  };

  return (
    <>
      <Navbar />

      <div className="flex items-center justify-center mt-28">
        <div className="w-96 border rounded bg-white px-7 py-10">
          <form onSubmit={handleLogin}>
            <h4 className="text-2xl mb-4">Login</h4>
            <div>
              <h4 className="text-sm">Email</h4>
              <input
                type="text"
                placeholder="Email"
                className="input-box"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <h4 className="text-sm">Password</h4>
              <PasswordInput
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {error && <p className="text-red-500 text-xs pb-1">{error}</p>}

            {/* Start of Button with button primary and submit type */}
            <button className="btn-primary" type="submit">
              Login
            </button>
            {/* End of Button with button primary and submit type */}

            {/* start of helper if the user didnt have an account yet */}
            <p className="text-sm text-center mt-4">
              Not registered yet?{" "}
              <Link to="/signup" className="fpnt-medium text-primary underline">
                Create an Account
              </Link>
            </p>
            {/* end of helper if the user didnt have an account yet */}
          </form>
        </div>
      </div>
    </>
  );
};
export default Login;
