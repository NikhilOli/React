import React from "react";
import About from "./About";
import Gallery from "./Gallery";

function Home() {
  return (
    <>
      <div className="container text-center m-auto my-52 w-[50%] h-[200px]">
        <h1 className="font-bold text-5xl mb-7 text-green-600">Digital Creative Studio</h1>
        <p className="text-green-600">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old !
        </p>
      </div>
      <About />
      <Gallery />
    </>
  );
}

export default Home;
