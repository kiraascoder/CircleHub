import React from "react";
import LoadingGif from "../images/loading.gif";

const Loader = () => {
  return (
    <div>
      <div className="loader">
        <div className="loaderImage">
          <img src={LoadingGif} alt="loading" />
        </div>
      </div>
    </div>
  );
};

export default Loader;
