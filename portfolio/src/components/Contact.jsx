import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full lg:h-screen h-[950px] bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/45e7190c-415f-4541-ac6c-4a0f710b6755"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            // Submit the form below or send mi an email -
            nemanja.andric.1994@outlook.com
          </p>
        </div>
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="p-2 my-2 bg-slate-500 text-slate-100 text-bold text-xl border-2 border-slate-600 focus:border-pink-600 focus:duration-300 duration-300 outline-none rounded-md"
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="p-2 my-2 bg-slate-500 text-slate-100 text-bold text-xl border-2 border-slate-600 focus:border-pink-600 focus:border-pink-600 focus:duration-300 outline-none rounded-md"
        />
        <textarea
          name="message"
          rows="10"
          placeholder="Message"
          className="p-2 my-2 bg-slate-500 text-slate-100 text-bold text-xl border-2 border-slate-600 focus:border-pink-600 focus:border-pink-600 focus:duration-300 outline-none rounded-md"
        ></textarea>
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 hover:duration-300 duration-300 px-4 py-3 my-8 mx-auto flex items-center">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
