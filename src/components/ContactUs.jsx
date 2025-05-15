export const ContactUs = () => {
  return (
    <section className="relative py-16 text-white font-montserrat">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-[#0074d9] text-glow">
          Contact Us
        </h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed text-gray-300">
          Have questions or want to work with us? Fill out the form below, and we'll get back to you as soon as possible.
        </p>
        <form
          action="https://formspree.io/f/mbloqare"
          method="POST"
          className="space-y-6 max-w-3xl mx-auto bg-gradient-to-r from-gray-800 to-gray-700 p-8 rounded-lg shadow-lg"
        >
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-300" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border rounded-lg p-3 bg-gray-900 text-gray-300"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-300" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border rounded-lg p-3 bg-gray-900 text-gray-300"
              placeholder="Your Email"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-300" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full border rounded-lg p-3 bg-gray-900 text-gray-300"
              placeholder="Your Message"
              rows="5"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-[#0074d9] text-white py-3 rounded-lg hover:bg-[#005bb5] transition-all duration-300 transform hover:-translate-y-1"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};
