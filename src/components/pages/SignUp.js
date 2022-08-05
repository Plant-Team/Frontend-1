const SignUp = () => {
  return (
    <>
      <form className="signup-form">
        <input type="text" id="name" placeholder="name" />
        <input type="text" id="Lastname" placeholder="last name" />
        <input type="text" id="username" placeholder="user name" />
        <input type="email" id="email" placeholder="write Your email" />
        <input type="password" id="password" placeholder="password" />
        <input type="password" id="confirm-password" placeholder="confirm password" />
        <button>Sign up</button>
      </form>
    </>
  );
};

export default SignUp;
