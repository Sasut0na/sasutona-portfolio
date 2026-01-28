import React from "react"

import ProfilePart from "../profile-part/index"
import Accounts from "../accounts/index"


const Home = () => {
  return (
    <React.Fragment>
      <ProfilePart />
      <Accounts />
    </React.Fragment>
  );
};

export default Home;
