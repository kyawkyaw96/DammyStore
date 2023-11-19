import React from "react";
import { ToastContainer, Zoom, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const About = () => {
  const aa = () => {
    toast.success(" Product add!", {
      position: "top-center",
      autoClose: 500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  return (
    <div>
      <ToastContainer
        position='top-center'
        autoClose={500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Zoom}
        theme='light'
        className={"  md:w-[220px]"}
      />
      {/* Same as */}
      <button onClick={aa} className=' px-3 py-2 bg-red-400 m-5'>
        click
      </button>
    </div>
  );
};

export default About;
