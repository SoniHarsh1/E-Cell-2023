import { useState } from "react";
import "./Navbar.css";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="flex items-center justify-between border-b border-gray-400 py-8">
      
      <img src="./ecell.png" alt="Logo" />
     
      <nav>
  
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
              
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
                 
              <svg
                className="h-8 w-8 text-gray-900"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
               
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
           
            <ul className="flex flex-col items-center justify-between min-h-[250px]">
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/HOME">HOME</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/ABOUT US">ABOUT US</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/EVENTS">EVENTS</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/BLOGS">BLOGS</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/CONTACT">CONTACT</a>
              </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
        
          <li>
            <a href="/HOME" >HOME</a>
          </li>
          <li>
            <a href="/ABOUT US">ABOUT US</a>
          </li>
          <li>
            <a href="/EVENTS">EVENTS</a>
          </li>
          <li>
            <a href="/BLOGS">BLOGS</a>
          </li>
          <li>
            <a href="/CONTACT">CONTACT</a>
          </li>
        </ul>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
      a {
    background-image: linear-gradient(
    to right,
    #39acd5,
    #39acd5 50%,
    #000 50%
  );
  background-size: 200% 100%;
  background-position: -100%;
  display: inline-block;
  padding: 5px 0;
  position: relative;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.3s ease-in-out;
}

a:before {
  content: '';
  background: #0190c9;
  display: block;
  position: absolute;
  bottom: -3px;
  left: 0;
  width: 0;
  height: 3px;
  transition: all 0.3s ease-in-out;
}

a:hover {
 background-position: 0;
}

a:hover::before {
  width:100%;
}
    `}</style>
    </div>
  );
}
