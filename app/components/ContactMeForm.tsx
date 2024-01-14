export default function ContactMeForm(){
  return(
  <div id="contact" className="bg-emerald-400 py-16 text-center m-5 shadow-2xl shadow-emerald-400
  rounded-md">
       <div className=" flex justify-center  "> <h2 className="text-3xl font-bold mb-8 bg-black text-amber-500 rounded-md max-w-fit   text-center p-2 shadow-md">Contact Me</h2></div>
        <form className="max-w-md mx-auto mt-2">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-3 py-2 border rounded-md focus:outline-none  border-black  focus:border-blue-500"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border rounded-md focus:outline-none  border-black  focus:border-blue-500"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full px-3 py-2 border rounded-md focus:outline-none border-black focus:border-blue-500"
              placeholder="Your Message"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300"
          >
            Submit
          </button>
        </form>
        
        
      </div>
  )
  }
  