import ParticlesBg from "particles-bg";

import Navigation from "./components/Navigation/Navigation";
import SignIn from "./components/SignIn/SignIn";
import Register from "./components/Register/Register";
import Logo from "./components/Logo/Logo";
import Rank from "./components/Rank/Rank";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";

import "tachyons";
import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageURL: "",
      boundingBoxes: null,
      // {
      //   bottom_row: 0,
      //   left_col: 0,
      //   right_col: 0,
      //   top_row: 0,
      // },
      route: "signin",
      user: {
        id: "",
        name: "",
        email: "",
        entries: 0,
        joined: new Date(),
      },
    };
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  onImageSubmit = async () => {
    // Prevent delay displaying image
    this.setState({ imageURL: this.state.input });

    // const boundingBoxes = await calculateFaceBoundingBox(this.state.input);
    const response = await fetch(
      `${process.env.REACT_APP_BASE_API_URL}/image/face-detect`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userID: this.state.user.id,
          imageURL: this.state.input,
        }),
      }
    );
    const { entries, boundingBoxes } = await response.json();
    // Set bounding box around face
    this.setState({ user: { ...this.state.user, entries }, boundingBoxes });
  };

  onRouteChange = (route) => {
    this.setState({ route });
  };

  loadUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined,
      },
    });
  };

  render() {
    const { route, imageURL, boundingBoxes } = this.state;

    return (
      <div className="App">
        <ParticlesBg type="lines" bg={true} />
        <Navigation
          isSignedIn={route === "home"}
          onRouteChange={this.onRouteChange}
        />
        {
          {
            signin: (
              <SignIn
                onRouteChange={this.onRouteChange}
                loadUser={this.loadUser}
              />
            ),
            register: (
              <Register
                onRouteChange={this.onRouteChange}
                loadUser={this.loadUser}
              />
            ),
            home: (
              <>
                <Logo />
                <Rank
                  name={this.state.user.name}
                  entries={this.state.user.entries}
                />
                <ImageLinkForm
                  onInputChange={this.onInputChange}
                  onImageSubmit={this.onImageSubmit}
                />
                <FaceRecognition
                  imageURL={imageURL}
                  boundingBoxes={boundingBoxes}
                />
              </>
            ),
          }[route]
        }
      </div>
    );
  }
}

export default App;
