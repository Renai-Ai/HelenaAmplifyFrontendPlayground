'use client'
import React, { useEffect, useState, useRef } from "react";
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from '@/amplify_outputs.json';
// Update the Auth import to the correct path
import { signOut, signIn, getCurrentUser } from 'aws-amplify/auth';

// Define types for Auth user
interface AuthUser {
  username: string;
  // Add other properties as needed based on your Auth user object
}

// Define type for Auth event data
interface AuthEventData {
  // Add properties as needed
}

Amplify.configure(awsExports);

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [showAuthenticator, setShowAuthenticator] = useState(false);
  const [user, setUser] = useState<AuthUser | null>(null);
  const [formWidth, setFormWidth] = useState(0);
  const formRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Check if user is already authenticated
    const checkUser = async () => {
      try {
        const currentUser = await getCurrentUser();
        setUser(currentUser as unknown as AuthUser);
      } catch (error) {
        // User is not authenticated
        setUser(null);
      }
    };
    
    checkUser();
  }, []);

  // Effect to measure the form width
  useEffect(() => {
    if (showAuthenticator && formRef.current) {
      // Use a timeout to allow the form to render fully
      const timer = setTimeout(() => {
        // Find the actual form element within the authenticator
        const formElement = formRef.current?.querySelector('.amplify-authenticator') as HTMLElement;
        if (formElement) {
          setFormWidth(formElement.offsetWidth);
        }
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, [showAuthenticator]);

  const handleSignIn = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setShowAuthenticator(true);
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      setUser(null);
    } catch (error) {
      console.error('Error signing out: ', error);
    }
  };

  return (
    <>
      <header className="text-white body-font">
        <div className="container mx-auto flex flex-wrap p-5 md:flex-row">
          <a className="flex title-font font-medium text-white mb-4 md:mb-0 pr-4" href="/">
            <img src="RenAiWhiteBackgroundCircle_256x256.png" alt="logo" className="h-10" />
            <span className="ml-3 text-3xl">RenAi Helena Demo</span>
          </a>
          <button
            className="text-white cursor-pointer text-xl leading-none py-1 border border-solid border-transparent rounded bg-transparent block md:hidden outline-none focus:outline-none ml-auto pb-3"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-menu"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
          <div
            className={"md:flex flex-grow items-center" + (navbarOpen ? " flex" : " hidden")}
            id="example-navbar-danger"
          >
            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center font-semibold pl-7">
              <a className="mr-6 hover:text-white" href="/">Home</a>
              <a className="mr-6 hover:text-white" href="/github">GitHub</a>
              <a className="mr-6 hover:text-white" href="/about">About</a>
              {user ? (
                <>
                  <span className="text-green-400 ml-6">Hello, {user.username}</span>
                  <button className="ml-4 bg-red-500 px-4 py-2 rounded-lg" onClick={handleSignOut}>Logout</button>
                </>
              ) : (
                <>
                  <a className="ml-6 bg-green-500 px-4 py-2 rounded-lg" href="#" onClick={handleSignIn}>Get Started</a>
                </>
              )}
            </nav>
          </div>
        </div>
      </header>
      
      {showAuthenticator && !user && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg overflow-hidden">
            <div 
              className="p-4 flex justify-between items-center border-b"
              style={{ 
                width: formWidth > 0 ? `${formWidth}px` : 'auto',
                minWidth: '400px' // Fallback width until we measure the actual form
              }}
            >
              <h2 className="text-lg font-medium text-gray-900">Get Started</h2>
              <button 
                onClick={() => setShowAuthenticator(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <div ref={formRef}>
              <Authenticator>
                {({ signOut: authSignOut, user: authUser }) => {
                  // Once authenticated, update user state and hide authenticator
                  if (authUser) {
                    setUser(authUser as unknown as AuthUser);
                    setShowAuthenticator(false);
                  }
                  return <></>;  // Return a valid React element instead of null
                }}
              </Authenticator>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;