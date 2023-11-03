import React from "react";

const Navigation = ({ onRouteChange, isSignedIn }) => {
  const signOut = () => {
    localStorage.removeItem("user");
    onRouteChange("signin");
  };

  return (
    <nav style={{ display: "flex", justifyContent: "flex-end" }}>
      {
        {
          true: (
            <p
              onClick={signOut}
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
