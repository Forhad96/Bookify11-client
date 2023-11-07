import useAuth from "../../hooks/useAuth";

const Registration = () => {
  const { createUser,updateUserProfile, user } = useAuth();


  const handleRegister = async (event) => {
    event.preventDefault();
    const from = new FormData(event.target);
    const name = from.get("name");
    const photo = from.get("photo");
    const email = from.get("email");
    const password = from.get("password");

    try {
      await createUser(email, password);
      await updateUserProfile(name,photo)
      console.log("created");
      alert('created successful')

    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="mx-auto flex w-full max-w-lg flex-col rounded-xl border border-border bg-backgroundSecondary p-4 sm:p-20">
      <div className="flex w-full flex-col gap-2">
        <p>Sign in with</p>
        {/* socail sing up */}
      </div>
      <div className="divider my-6 text-xs text-content2">or continue with</div>

      <div className="form-group">
        <form onSubmit={handleRegister}>
          <div className="form-field">
            <label className="form-label">Name</label>

            <input
              placeholder="Type here"
              type="text"
              name="name"
              className="input max-w-full"
            />
            <label className="form-label">
              <span className="form-label-alt">
                Please enter your full name
              </span>
            </label>
          </div>
          <div className="form-field">
            <label className="form-label">Photo url</label>

            <input
              placeholder="Type here"
              type="text"
              name="photo"
              className="input max-w-full"
            />
            <label className="form-label">
              <span className="form-label-alt">
                Please enter your full name
              </span>
            </label>
          </div>
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
            <a className="link link-underline-hover link-primary text-sm">
              Don&rsquo:t have an account? Sign in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Registration;
