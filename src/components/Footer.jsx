import React from 'react';

function Footer() {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
      <div className="grid grid-flow-col gap-4">
        <button className="link link-hover">About us</button>
        <button className="link link-hover">Contact</button>
        <button className="link link-hover">Jobs</button>
        <button className="link link-hover">Press kit</button>
      </div>
      <div style="display: flex; justify-content: center;">
        <p>Sponsored by:</p>
      </div>
      <div className="flex items-center justify-center"> {/* Centered container */}
        <div className="p-2"> {/* Adjust padding for frame */}
          <img src="/images/boogie1.png" alt="Sponsor Logo" className="h-auto max-w-full max-h-15 mr-4" /> {/* Adjust max height */}
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