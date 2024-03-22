import React from 'react';

function Footer() {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
      <div className="grid grid-flow-col gap-4">
        <a href="https://www.facebook.com/umametkovic" className="link link-hover">Facebook</a>
        <button className="link link-hover">Contact: fkvesi00@fesb.hr</button>
      </div>
      <div className="flex justify-center items-center flex-col"> {/* Centered container with flex-direction: column */}
    <p className="mb-2">Sponsored by:</p>  
    <a href="https://www.facebook.com/Boogiemtk"></a> {/* mb-2 adds margin-bottom for spacing */}
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