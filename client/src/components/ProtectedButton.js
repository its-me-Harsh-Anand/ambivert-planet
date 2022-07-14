import { withAuthenticationRequired } from "@auth0/auth0-react";
import React from "react";
import Loading from "./Loading";

function ProtectedButton() {

  return (
    <div>
      <button className="protected-button">
        call protected api
      </button>
    </div>
  );
}

export default withAuthenticationRequired(ProtectedButton, {
  onRedirecting: () => <Loading />,
});
