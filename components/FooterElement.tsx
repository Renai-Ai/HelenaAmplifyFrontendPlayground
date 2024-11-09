import React from 'react';

interface FooterElementProps {
  label: string;
  href: string;
}

const FooterElement: React.FC<FooterElementProps> = ({ label, href }) => {
    return (
        <li>
                <a
                  href={href}
                  className="text-md text-gray-200 hover:text-white transition-colors 
                    duration-300 hover:text-deep-purple-accent-400 font-semibold"
                >
                  {label}
                </a>
        </li>
    );
};

export default FooterElement;