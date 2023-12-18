"use client";

import Link from "next/link";

import {
  isActiveParent,
  isActiveLink,
  isActiveParentChaild,
} from "../../utils/linkActiveChecker";
import { usePathname } from "next/navigation";

const HeaderNavContent = () => {
  return (
    <>
      <nav className="nav main-menu" >
        <ul className="navigation" id="navbar" style={{ color: '#fff' }}>
          {/* current dropdown */}
          <li
            className={`${isActiveParent("/", usePathname()) ? "current" : ""
              }`}
          >
            <Link href="/" style={{ color: '#fff' }}>Home</Link>
          </li>
          {/* End homepage menu items */}

          <li
            className={`${isActiveParent("/about", usePathname()) ? "current" : ""
              }`}
          >
            <Link style={{ color: '#fff' }} href="/about">About Us</Link>
          </li>
          <li className={`nav-item dropdown ${isActiveParent("/service", usePathname()) ? "current" : ""}`}>
            <a
              style={{ color: '#fff' }}
              className="nav-link dropdown-toggle"
              href="#"
              id="serviceDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false">
              Services
            </a>
            <ul className="dropdown-menu" aria-labelledby="serviceDropdown">
              <li><Link href="/service/job-seekers">Job Seekers</Link></li>
              <li><Link href="/service/businesses">Businesses</Link></li>
              <li><Link href="/service/students">Students</Link></li>
              <li><Link href="/service/universities-colleges">Universities & Colleges</Link></li>
              <li><Link href="/service/training">Training</Link></li>
              <li><Link href="/service/other">Travel & Visa</Link></li>
              {/* Add more dropdown items as needed */}
            </ul>
          </li>

          <li
            className={`${isActiveParent("/blog-list-v1", usePathname()) ? "current" : ""
              }`}
          >
            <Link style={{ color: '#fff' }} href="/blog-list-v1">Blog</Link>
          </li>
          <li
            className={`${isActiveParent("/contact", usePathname()) ? "current" : ""
              }`}
          >
            <Link style={{ color: '#fff' }} href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default HeaderNavContent;
