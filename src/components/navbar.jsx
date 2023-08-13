import Typewriter from 'typewriter-effect';
import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

function NavBar() {
  const [dropdown, setDropdown] = useState(false);
  const sectionEffect = 'text-white hover:text-stone-500';
  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between py-4 md:px-10 px-7 bg-gradient-to-r from-purple-600 via-blue-500 to-red-300">
        <div className="text-white text-xl font-bold">
          <Typewriter
            options={{
              strings: ['Giovan Christoffel Sihombing'],
              loop: true,
              autoStart: true,
            }}
            className="text-white text-xl font-bold"
          />
        </div>

        <div
          onClick={toggleDropdown}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {dropdown ? (
            <AiOutlineClose className="close text-white" />
          ) : (
            <AiOutlineMenu className="menu text-white" />
          )}
        </div>
        <ul className={`md:flex md:space-x-10 ${dropdown? 'block' : 'hidden'} md:mt-0 mt-3`}>
            <li className={sectionEffect}>About</li>
            <li className={sectionEffect}>Projects</li>
            <li className={sectionEffect}>Contact</li>
        </ul>
        {/* <div
          className={`md:flex md:space-x-10 ${
            dropdown ? 'block' : 'hidden'
          } md:mt-0 mt-3`}
        >
          <a href="#" className={sectionEffect}>
            About
          </a>
          <a href="#" className={sectionEffect}>
            Projects
          </a>
          <a href="#" className={sectionEffect}>
            Contact
          </a>
        </div> */}
      </div>
    </div>
  );
}

export default NavBar;
