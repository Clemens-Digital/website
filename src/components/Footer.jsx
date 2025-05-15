export const Footer = () => {
  return (
    <footer className="relative py-8 text-white font-montserrat">
      <div className="container mx-auto px-6 text-center">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Clemens Digital. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a
              href="mailto:clemensdigitalsolutions@gmail.com"
              className="text-[#0074d9] hover:underline"
            >
              Email Us Directly
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
