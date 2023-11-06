import useAuth from "../../hooks/useAuth";

const Registration = () => {
  const { createUser ,user} = useAuth();
  console.log(user);
  
  const handleRegister =async (event)=>{

    
    event.preventDefault()
    const from = new FormData(event.target)
    const email = from.get('email')
    const password = from.get('password')
    
    try{
     await createUser(email,password)
    }catch(error){
      console.log(error);
    }
  }
  return (
    <div className="mx-auto flex w-full max-w-sm flex-col gap-6">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-semibold">Sign In</h1>
        <p className="text-sm">Sign in to access your account</p>
      </div>
      <div className="form-group">
        <form onSubmit={handleRegister}>
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
            <label className="form-label">Password</label>
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
          <div className="form-control justify-center">
            <a className="link link-underline-hover link-primary text-sm">
              Don't have an account yet? Sign up.
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Registration;
