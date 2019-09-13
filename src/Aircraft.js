import React from "react";
import Image from "./aircraft.jpeg";

function Aircraft() {
  return (
    <div>
      <img scr={Image} title='aircraft-image' className='aircraft'></img>
    </div>
  );
}

export default Aircraft;
