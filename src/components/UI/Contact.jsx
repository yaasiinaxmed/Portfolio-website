import React from "react";

function Contact() {
  return (
    <section id="contact" className="pb">
      <div className="container">
        <h2 className="text-headingColor font-[700] text-[2.5rem] mb-8">Get in toach</h2>
        <div className="md:flex justify-between items-center ">
          <div className="w-full md:w-1/2 h-[300px] sm:h-[450px]">
            <iframe
              title="google-maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63795.86928099002!2d45.3066649!3d2.0592008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3d58425955ce6b53%3A0xbb20eaaa52cc59d9!2sMogadishu!5e0!3m2!1sen!2sso!4v1692981173473!5m2!1sen!2sso"
              className="border-0 w-full h-full"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-center bg-indigo-100 px-4
          lg:px-8 py-8 ">
            <form className="w-full  ">
              <div className="mb-5">
                <input type="text" placeholder="Enter you name"  className="w-full p-3 focus:outline-none
                rounded-[5px] "/>
              </div>
              <div className="mb-5">
                <input type="text" placeholder="Enter you email"  className="w-full p-3 focus:outline-none
                rounded-[5px] "/>
              </div>
              <div className="mb-5">
                <input type="text" placeholder="Enter you subject"  className="w-full p-3 focus:outline-none
                rounded-[5px] "/>
              </div>
              <div className="mb-5">
                <textarea rows={3} placeholder="Write you message"  className="w-full p-3 focus:outline-none
                rounded-[5px] "></textarea>
              </div>
              <button className="w-full p-3 focus:outline-none rounded-[5px] bg-smallTextColor text-white
              hover:bg-headingColor text-center ease-linear duration-150 ">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
