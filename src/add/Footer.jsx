import React from "react";

const Footer = () => {
  return (
    <div className="bg-black">
      <div className="text-white p-18 flex md:flex-row flex-col space-y-5 text-center justify-center items-center">
        <div className="space-y-4 flex-1">
          <h1 className="text-xl">CS--tickets System</h1>
          <hr />
          <p className="text-xs">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti,
            nobis omnis laudantium earum quod sit dolore enim accusantium?
            Minima ab placeat, minus, assumenda quos temporibus quas facere
            magnam cupiditate illum, ad corporis? Atque velit nobis explicabo
            cumque est possimus expedita beatae nemo!
          </p>
        </div>
        <div className="space-y-4 flex-1">
          <h1 className="text-xl">Company</h1>
          <p className="text-xs">About us</p>
          <p className="text-xs">Our Mission</p>
          <p className="text-xs">Contact Sale</p>
        </div>

        <div className="space-y-4 flex-1">
          <h1 className="text-xl">Services</h1>
          <p className="text-xs">Products & Services</p>
          <p className="text-xs">Customer Stories</p>
          <p className="text-xs">Download Apps</p>
        </div>

        <div className="space-y-4 flex-1">
          <h1 className="text-xl">Information</h1>
          <p className="text-xs">Privacy & Policy</p>
          <p className="text-xs">Terms & Condition</p>
          <p className="text-xs">Join Us</p>
        </div>

        <div className="space-y-4 flex-1">
          <h1 className="text-xl">Social Links</h1>
          <p className="text-xs">@CS- Tickets System</p>
          <p className="text-xs">@CS- Tickets System</p>
          <p className="text-xs">@CS- Tickets System</p>
          <p className="text-xs">@CS- Tickets System</p>
        </div>
      </div>

      <div className="text-center p-5">
        <p className="text-xs text-gray-300">@ CS- Tickets System- All Right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
