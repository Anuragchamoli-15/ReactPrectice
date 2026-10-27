import React from "react";

function About() {
  return (
    <div className="flex flex-col items-center ">
      <div className="border-2 mt-5 p-2 rounded-md bg-blue-300">
        <h1 className="text-2xl font-bold text-center"> your Guid</h1>
        <p>This is your guid, alwaya with you</p>
      </div>

      <div className="mt-10 rounded-md bg-blue-300 p-2 border-2">
        <h2 className="text-2xl font-bold text-center">About us</h2>
        <p>we are providing services for touring</p>
      </div>
    </div>
  );
}

export default About;
