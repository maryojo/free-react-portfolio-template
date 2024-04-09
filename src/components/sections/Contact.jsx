import React from "react";
import Button from "../base-components/Button";

const Contact = () => {
  return (
    <div>
      <div className="flex relative flex-row items-center w-full bg-neutral-900">
        <div className="hidden md:block md:absolute left-10 border-2 border-neutral-700">
        <img className=" md:w-[12rem] lg:w-[17rem]" src="https://images.pexels.com/photos/1125328/pexels-photo-1125328.jpeg?auto=compress&cs=tinysrgb&w=600"/>

        </div>
        <div className="w-[40%]">
        </div>
        <div className=" p-7 pl-0 w-[60%]">
          <p className="font-bold text-[32px]">Get in touch</p>
          <form className="flex flex-col gap-3">
            <input type="text" name="fullName" placeholder="Full Name" />
            <input type="email" name="email" placeholder="Email Address" />
            <input type="text" name="message" placeholder="Message" />
            <Button text="Send Message" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
