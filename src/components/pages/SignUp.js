const SignUp = () => {
  return (
    <>
      <div className="signup-background">
        <form className="signup-form">
          <div>
            <label className="label" htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="name" />
          </div>

          <div>
            <label className="label" htmlFor="lastName">Last Name</label>
            <input type="text" id="LastName" placeholder="last name" />
          </div>

          <div>
            <label className="label" htmlFor="username">username</label>
            <input type="text" id="username" placeholder="user name" />
          </div>

          <div>
            <label className="label" htmlFor="Email">Email</label>
            <input type="email" id="email" placeholder="write Your email" />
          </div>

          <div>
            <label className="label" htmlFor="Password">Password</label>
            <input type="password" id="password" placeholder="password" />
          </div>

          <div>
            <label className="label" htmlFor="confirm-password">Confirm Password</label>
            <input type="password" id="confirm-password" placeholder="confirm password" />
          </div>

          <button>Sign up</button>
        </form>
      </div>
    </>
  );
};

export default SignUp;
