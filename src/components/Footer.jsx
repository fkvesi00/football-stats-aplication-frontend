import React from 'react';

function Footer() {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
      <div className="grid grid-flow-col gap-4">
      <a href="https://www.facebook.com" className="link link-hover text-blue-600 underline">Facebook</a>
        <button className="link link-hover">Contact: fkvesi00@fesb.hr</button>
      </div>
      <div className="flex justify-center items-center flex-col"> {/* Centered container with flex-direction: column */}
    <p className="mb-2">Sponsored by:</p>  
    <a href="https://www.facebook.com/Boogiemtk" className="link link-hover flex items-center">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
    <path d="M10 1a9 9 0 0 0-9 9c0 4.968 4.032 9 9 9 4.968 0 9-4.032 9-9a9 9 0 0 0-9-9zm1.594 13.388l-.917-4.744H7.55V8.604h1.127V7.202c0-1.186.626-2.324 2.381-2.324h1.517v1.85h-1.273c-.272 0-.629.1-.629.678v1.493h2.126l-.164 2.042h-1.962v4.744h-2.36z"/>
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