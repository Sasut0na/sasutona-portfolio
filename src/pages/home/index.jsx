import React from "react"

import ProfilePart from "../profile-part/profile-part"
import Accounts from "../accounts/accounts"


const Home = () => {
  return (
    <React.Fragment>
      <ProfilePart />
      <Accounts />
    </React.Fragment>
  );
};

export default Home;
