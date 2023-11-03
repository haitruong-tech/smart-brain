import React from "react";

const Navigation = ({ onRouteChange, isSignedIn }) => {
  return (
    <nav style={{ display: "flex", justifyContent: "flex-end" }}>
      {
        {
          true: (
            <p
              onClick={() => onRouteChange("signin")}
              className="f3 link dim black underline pa3 pointer white"
            >
              Sign Out
            </p>
          ),
          false: (
            <>
              <p
                onClick={() => onRouteChange("signin")}
                className="f3 link dim black underline pa3 pointer white"
              >
                Sign In
              </p>
              <p
                onClick={() => onRouteChange("register")}
                className="f3 link dim black underline pa3 pointer white"
              >
                Register
              </p>
            </>
          ),
        }[isSignedIn]
      }
    </nav>
  );
};

export default Navigation;
