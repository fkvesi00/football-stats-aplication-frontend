import React from 'react';

function Footer() {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
      <div className="grid grid-flow-col gap-4">
      <a href="https://www.facebook.com/umametkovic" className="link link-hover text-blue-600 underline">facebook
      </a>
        <button className="link link-hover">Contact: fkvesi00@fesb.hr</button>
      </div>
      <div className="flex justify-center items-center flex-col"> {/* Centered container with flex-direction: column */}
    <p className="mb-2">Sponsored by:</p>  
    <a href="https://www.facebook.com/Boogiemtk" className="link link-hover text-blue-600 underline flex items-center">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
    <path fill-rule="evenodd" d="M0 12c0-6.627 5.373-12 12-12s12 5.373 12 12c0 6.75-5.438 12.212-12.188 12h-1.188v-8.203h2.688l.375-3.125h-3.063V9.156c0-.875.375-1.75 2.188-1.75h2.438v-3h-3.688C7.875 5.406 7 7.313 7 9.25v1.625H4v3.125h3v8.203C5.437 24.212 0 18.75 0 12z"/>
  </svg>
  Boogie Metković
</a> {/* mb-2 adds margin-bottom for spacing */}
    <div className="p-2"> {/* Adjust padding for frame */}
        <img src="/images/boogie1.png" alt="Sponsor Logo" className="h-auto max-w-full max-h-15" /> {/* Adjust max height */}
    </div>
</div>
      <div>
        <div className="grid grid-flow-col gap-4">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              {/* SVG path */}
            </svg>
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              {/* SVG path */}
            </svg>
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              {/* SVG path */}
            </svg>
          </button>
        </div>
      </div>
      <div>
        <p>Copyright © 2024 - All right reserved by Kvesić Filip</p>
      </div>
    </footer>
  );
}

export default Footer;