// @flow strict
import './navbar.scss';
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faBriefcase,
  faCogs,
  faGraduationCap,
  faBlog,
  faProjectDiagram
} from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  return (
    <nav className="bg-transparent">
      <div className="flex items-center justify-between py-5">
        <nav>
        <ul className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100" id="navbar-default">
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#about">
              <div className="nav-item">
                <FontAwesomeIcon icon={faUser} className="nav-icon" />
                <span className="nav-text">ABOUT</span>
              </div>
            </Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#experience">
              <div className="nav-item">
                <FontAwesomeIcon icon={faBriefcase} className="nav-icon" />
                <span className="nav-text">EXPERIENCE</span>
              </div>
            </Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#skills">
              <div className="nav-item">
                <FontAwesomeIcon icon={faCogs} className="nav-icon" />
                <span className="nav-text">SKILLS</span>
              </div>
            </Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#education">
              <div className="nav-item">
                <FontAwesomeIcon icon={faGraduationCap} className="nav-icon" />
                <span className="nav-text">EDUCATION</span>
              </div>
            </Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#projects">
              <div className="nav-item">
                <FontAwesomeIcon icon={faProjectDiagram} className="nav-icon" />
                <span className="nav-text">PROJECTS</span>
              </div>
            </Link>
          </li>
        </ul>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;