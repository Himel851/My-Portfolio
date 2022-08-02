import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/1d1cc2e6-2d5d-4281-8101-d9f1c0cae2a8"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
        </div>
        <div class="w-full md:w-96 md:max-w-full mx-auto">
          <div class="p-6 border border-gray-300 sm:rounded-md">
            <form
              method="POST"
              action="https://getform.io/f/1d1cc2e6-2d5d-4281-8101-d9f1c0cae2a8"
            >
              <label class="block mb-6">
                <span class="text-[#f67586] font-bold">Your Name</span>
                <input
                  type="text"
                  name="name"
                  class="block w-full mt-1 ml-3 border-gray-300 rounded-md shadow-sm"
                  placeholder="**Nazmul Hasan Himel**"
                  required
                />
              </label>
              <label class="block mb-6">
                <span class="text-[#f67586] font-bold">Email address</span>
                <input
                  name="email"
                  type="email"
                  class="block w-full mt-1 ml-3 border-gray-300 rounded-md shadow-sm"
                  placeholder="getform@gmail.com"
                  required
                />
              </label>
              <label class="block mb-6">
                <span class="text-[#f67586] font-bold">Message</span>
                <textarea
                  name="message"
                  class="block w-full mt-1 ml-3 border-gray-300 rounded-md shadow-sm"
                  rows="3"
                  placeholder="Tell us what you're thinking about..."
                  required
                ></textarea>
              </label>
              <div class="mb-6">
                <button
                  type="submit"
                  class="h-10 px-5 text-white font-bold bg-pink-600 rounded-lg hover:bg-pink-800"
                >
                  Contact Us
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-20">
          <span class="block text-sm text-white sm:text-center dark:text-gray-400">
            © Nazmul Hasan Himel - 2022
          </span>
        </footer>
      </form>
    </div>
  );
};

export default Contact;
