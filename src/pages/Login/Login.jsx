import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import SocialLogin from "../SocialLogin/SocialLogin";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const Login = () => {
    const { singInWithEmail, user } = useAuth();
      const navigate = useNavigate()

    const handleLogin = async (event) => {
      event.preventDefault();
      const from = new FormData(event.target);
      const email = from.get("email");
      const password = from.get("password");
      try {
        await singInWithEmail(email, password);
        toast.success("Login successful");
        navigate('/')
      } catch (error) {
        console.log(error);
        toast.error(error.code);
      }
    };

  return (
    <div className="mx-auto flex w-full my-10 max-w-lg flex-col rounded-xl border border-border bg-backgroundSecondary p-4 sm:p-20">
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className="flex w-full flex-col gap-2">
        <p>Sign in with</p>
        <SocialLogin></SocialLogin>
      </div>
      <div className="divider my-6 text-xs text-content2">or continue with</div>

      <div className="form-group">
        <form onSubmit={handleLogin}>
          <div className="form-field">
            <label className="form-label">Email address</label>

            <input
              placeholder="Type here"
              type="email"
              name="email"
              className="input max-w-full"
            />
            <label className="form-label">
              <span className="form-label-alt">
                Please enter a valid email.
              </span>
            </label>
          </div>
          <div className="form-field">
            <label className="form-label">
              <span>Password</span>
            </label>
            <div className="form-control">
              <input
                placeholder="Type here"
                type="password"
                name="password"
                className="input max-w-full"
              />
            </div>
          </div>
          <div className="form-field">
            <div className="form-control justify-between">
              <div className="flex gap-2">
                <input type="checkbox" className="checkbox" />
                <a href="#">Remember me</a>
              </div>
              <label className="form-label">
                <a className="link link-underline-hover link-primary text-sm">
                  Forgot your password?
                </a>
              </label>
            </div>
          </div>
          <div className="form-field pt-5">
            <div className="form-control justify-between">
              <button type="submit" className="btn btn-primary w-full">
                Sign in
              </button>
            </div>
          </div>
        </form>

        <div className="form-field">
          <div className="form-control">
            <div className="link link-underline-hover link-primary text-sm">
              Do not have an account?
              <Link className="text-lg" to="/register">Register</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
