// import React from 'react'

const Footer = () => {
  return (
      <footer className="bg-gray-800 text-white py-4 mt-auto border-t border-gray-700">
          <div className="container mx-auto text-center">
              <p className="text-sm">
                  &copy; {new Date().getFullYear()} ShareMate. All rights reserved.
              </p>
              <div className="flex justify-center space-x-4 mt-2">
                  <a href="#" className="text-gray-400 hover:text-white">
                      Privacy Policy
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white">
                      Terms of Service
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white">
                      Help
                  </a>
              </div>
          </div>
      </footer>
  );
};

export default Footer;