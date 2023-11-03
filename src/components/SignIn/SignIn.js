import React from "react";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  onInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmitSignIn = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_BASE_API_URL}/signin`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password,
        }),
      }
    );
    const message = await response.json();
    if (!response.ok) {
      alert(message);
      return;
    }
    localStorage.setItem("user", JSON.stringify(message));
    this.props.loadUser(message);
    this.props.onRouteChange("home");
  };

  render() {
    const { onRouteChange } = this.props;

    return (
      <article
        style={{ maxWidth: 500, marginTop: 80 }}
        className="br3 ba b--white-10 mv4 center"
      >
        <main className="pa4 white">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Sign In</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f4" htmlFor="email">
                  Email
                </label>
                <input
                  className="white pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="email"
                  name="email"
                  id="email"
                  value={this.state.email}
                  onChange={this.onInputChange}
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f4" htmlFor="password">
                  Password
                </label>
                <input
                  className="white b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  name="password"
                  id="password"
                  value={this.state.password}
                  onChange={this.onInputChange}
                />
              </div>
            </fieldset>
            <div className="">
              <input
                onClick={this.onSubmitSignIn}
                className="white b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib"
                type="submit"
                value="Sign in"
              />
            </div>
            <div className="lh-copy mt3">
              <p
                onClick={() => onRouteChange("register")}
                className="f6 link dim white db pointer"
              >
                Register
              </p>
            </div>
          </div>
        </main>
      </article>
    );
  }
}

export default SignIn;
