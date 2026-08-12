import React from "react";
import PageTransition from "../components/PageTransition";

const Home = React.memo(() => {
  return (
    <PageTransition>
      <div className="bg-background">HOME</div>
    </PageTransition>
  );
});
export default Home;
