'use client'

import FooterElement from "./FooterElement"

const Footer = () => {
    return (
      <footer className="pb-4 text-gray-200">
        <div className="max-w-5xl xl:max-w-5xl mx-auto divide-y divide-gray-900 px-4 sm:px-6 md:px-8">
          <div/>
          <div className="flex flex-col-reverse justify-between pt-5 pb-4 border-t lg:flex-row bg-top border-black">
            <ul className="flex flex-col space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
                <FooterElement label="Terms of Service" href="/" />
                <FooterElement label="Privacy Policy" href="/" />
                <FooterElement label="Partners" href="/" />
                <FooterElement label="Random" href="/random" />
            </ul>
            <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
              <a
                href="/"
                className="text-md text-gray-200 hover:text-white transition-colors 
                duration-300 hover:text-deep-purple-accent-400 font-semibold tracking-tight"
              >
                © 2024 RenAi MIT Breakthrough Tech AI Team
              </a>
            </ul>
          </div>
        </div>
      </footer>
    );
  }

  export default Footer;