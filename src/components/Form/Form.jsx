import InputWrapper from './InputWrapper/InputWrapper';

const Form = () => {
  return (
    <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      <form>
        <InputWrapper
          forName="username"
          content="Username"
          type="text"
          id="username"
        />
        <InputWrapper
          forName="password"
          content="Password"
          type="password"
          id="password"
        />
        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label for="remember-me">Remember me</label>
        </div>
        <button className="sign-in-button">Sign In</button>
      </form>
    </section>
  );
};

export default Form;
