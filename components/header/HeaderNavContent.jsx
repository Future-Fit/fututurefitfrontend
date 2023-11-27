"use client";

import Link from "next/link";
import {
  blogItems,
  candidateItems,
  employerItems,
  findJobItems,
  homeItems,
  pageItems,
  shopItems,
} from "../../data/mainMenuData";
import {
  isActiveParent,
  isActiveLink,
  isActiveParentChaild,
} from "../../utils/linkActiveChecker";
import { usePathname } from "next/navigation";

const HeaderNavContent = () => {
  return (
    <>
      <nav className="nav main-menu">
        <ul className="navigation" id="navbar">
          {/* current dropdown */}
          <li
            className={`${isActiveParent("/", usePathname()) ? "current" : ""
              }`}
          >
            {/* <span>Home</span>
            <div className="mega-menu">
              <div className="mega-menu-bar row pt-0">
                {homeItems.map((item) => (
                  <div
                    className="column col-lg-3 col-md-3 col-sm-12"
                    key={item.id}
                  >
                    <ul>
                      {item.items.map((menu, i) => (
                        <li
                          className={
                            isActiveLink(menu.routePath, usePathname())
                              ? "current"
                              : ""
                          }
                          
                          key={i}
                        > */}
            <Link href="/">Home</Link>
            {/* <Link href={menu.routePath}>{menu.name}</Link> */}
            {/* </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div> */}
          </li>
          {/* End homepage menu items */}

          <li
            className={`${isActiveParent("/about", usePathname()) ? "current" : ""
              }`}
          >

            <Link href="/about">About Us</Link>

          </li>
          <li className={`nav-item dropdown ${isActiveParent("/service", usePathname()) ? "current" : ""}`}>
            <a className="nav-link dropdown-toggle" href="#" id="serviceDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Service
            </a>
            <ul className="dropdown-menu" aria-labelledby="serviceDropdown">
              <li><Link href="/service/job-seekers">Job Seekers</Link></li>
              <li><Link href="/service/businesses">Businesses</Link></li>
              <li><Link href="/service/students">Students</Link></li>
              <li><Link href="/service/universities-colleges">Universities/Colleges</Link></li>
              <li><Link href="/service/training">Training</Link></li>
              <li><Link href="/service/other">Other</Link></li>
              {/* Add more dropdown items as needed */}
            </ul>
          </li>

          {/* <li
            className={`${isActiveParent("/service", usePathname()) ? "current" : ""
              }`}
          >
            <span>Service</span>
            <ul className="dropdown-menu">
              <li>
                <Link href="/service/job-seekers">Job Seekers</Link>
              </li>
              <li>
                <Link href="/service/businesses">Businesses</Link>
              </li>
              <li>
                <Link href="/service/students">Students</Link>
              </li>
              <li>
                <Link href="/service/universities-colleges">Universities/Colleges</Link>
              </li>
              <li>
                <Link href="/service/training">Training</Link>
              </li>
              <li>
                <Link href="/service/other">Other</Link>
              </li>
              {/* Add more dropdown items as needed 
            </ul>
          </li> */}
          {/* <Link href="/service">Service</Link> */}
          {/* End homepage menu items */}

          {/* <li
            className={`${
              isActiveParent(findJobItems, usePathname()) ? "current" : ""
            } dropdown has-mega-menu`}
            id="has-mega-menu"
          >
            <span>Find Jobs</span>
            <div className="mega-menu">
              <div className="mega-menu-bar row">
                {findJobItems.map((item) => (
                  <div
                    className="column col-lg-3 col-md-3 col-sm-12"
                    key={item.id}
                  >
                    <h3>{item.title}</h3>
                    <ul>
                      {item.items.map((menu, i) => (
                        <li
                          className={
                            isActiveLink(menu.routePath, usePathname())
                              ? "current"
                              : ""
                          }
                          key={i}
                        >
                          <Link href={menu.routePath}>{menu.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </li> */}
          {/* End findjobs menu items */}

          {/* <li
            className={`${
              isActiveParent(employerItems, usePathname()) ||
              usePathname()?.split("/")[1] === "employers-dashboard"
                ? "current"
                : ""
            } dropdown`}
          >
            <span>Employers</span>
            <ul>
              {employerItems.map((item) => (
                <li className="dropdown" key={item.id}>
                  <span
                    className={
                      isActiveParentChaild(item.items, usePathname())
                        ? "current"
                        : ""
                    }
                  >
                    {item.title}
                  </span>
                  <ul>
                    {item.items.map((menu, i) => (
                      <li
                        className={
                          isActiveLink(menu.routePath, usePathname())
                            ? "current"
                            : ""
                        }
                        key={i}
                      >
                        <Link href={menu.routePath}>{menu.name}</Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
              <li
                className={
                  usePathname()?.includes("/employers-dashboard")
                    ? "current"
                    : ""
                }
              >
                <Link href="/employers-dashboard/dashboard">
                  Employers Dashboard
                </Link>
              </li>
            </ul>
          </li> */}
          {/* End Employers menu items */}

          {/* <li
            className={`${
              isActiveParent(candidateItems, usePathname()) ||
              usePathname()?.split("/")[1] === "candidates-dashboard"
                ? "current"
                : ""
                ? "current"
                : ""
            } dropdown`}
          >
            <span>Candidates</span>
            <ul>
              {candidateItems.map((item) => (
                <li className="dropdown" key={item.id}>
                  <span
                    className={
                      isActiveParentChaild(item.items, usePathname())
                        ? "current"
                        : ""
                    }
                  >
                    {item.title}
                  </span>
                  <ul>
                    {item.items.map((menu, i) => (
                      <li
                        className={
                          isActiveLink(menu.routePath, usePathname())
                            ? "current"
                            : ""
                        }
                        key={i}
                      >
                        <Link href={menu.routePath}>{menu.name}</Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
              <li
                className={
                  usePathname()?.includes("/candidates-dashboard/")
                    ? "current"
                    : ""
                }
              >
                <Link href="/candidates-dashboard/dashboard">
                  Candidates Dashboard
                </Link>
              </li>
            </ul>
          </li> */}
          {/* End Candidates menu items */}
          <li
            className={`${isActiveParent("/job-list-v6", usePathname()) ? "current" : ""
              }`}
          >
            {/* <span>Home</span>
            <div className="mega-menu">
              <div className="mega-menu-bar row pt-0">
                {homeItems.map((item) => (
                  <div
                    className="column col-lg-3 col-md-3 col-sm-12"
                    key={item.id}
                  >
                    <ul>
                      {item.items.map((menu, i) => (
                        <li
                          className={
                            isActiveLink(menu.routePath, usePathname())
                              ? "current"
                              : ""
                          }
                          
                          key={i}
                        > */}
            <Link href="/job-list-v6">Jobs</Link>
            {/* <Link href={menu.routePath}>{menu.name}</Link> */}
            {/* </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div> */}
          </li>

          <li
            className={`${isActiveParent("/blog-list-v1", usePathname()) ? "current" : ""
              }`}
          >
            {/* <span>Home</span>
            <div className="mega-menu">
              <div className="mega-menu-bar row pt-0">
                {homeItems.map((item) => (
                  <div
                    className="column col-lg-3 col-md-3 col-sm-12"
                    key={item.id}
                  >
                    <ul>
                      {item.items.map((menu, i) => (
                        <li
                          className={
                            isActiveLink(menu.routePath, usePathname())
                              ? "current"
                              : ""
                          }
                          
                          key={i}
                        > */}
            <Link href="/blog-list-v1">Blog</Link>
            {/* <Link href={menu.routePath}>{menu.name}</Link> */}
            {/* </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div> */}
          </li>

          <li
            className={`${isActiveParent("/contact", usePathname()) ? "current" : ""
              }`}
          >
            {/* <span>Home</span>
            <div className="mega-menu">
              <div className="mega-menu-bar row pt-0">
                {homeItems.map((item) => (
                  <div
                    className="column col-lg-3 col-md-3 col-sm-12"
                    key={item.id}
                  >
                    <ul>
                      {item.items.map((menu, i) => (
                        <li
                          className={
                            isActiveLink(menu.routePath, usePathname())
                              ? "current"
                              : ""
                          }
                          
                          key={i}
                        > */}
            <Link href="/contact">Contact</Link>
            {/* <Link href={menu.routePath}>{menu.name}</Link> */}
            {/* </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div> */}
          </li>


          {/* <li
            className={`${
              isActiveParentChaild("/blog-list-v1", usePathname()) ? "current" : ""
            } dropdown`}
          >
            <span>Blog</span>
            <ul>
              {blogItems.map((item, i) => (
                <li
                  className={
                    isActiveLink(item.routePath, usePathname()) ? "current" : ""
                  }
                  key={i}
                >
                          <Link href="/blog-list-v1">Blog</Link>

                  <Link href={item.routePath}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </li> */}
          {/* End Blog menu items */}

          {/* <li
            className={`${
              isActiveParentChaild(pageItems, usePathname()) ||
              isActiveParentChaild(shopItems[0].items, usePathname())
                ? "current "
                : ""
            } dropdown`}
          >
            <span>Pages</span>
            <ul>
              {shopItems.map((item) => (
                <li className="dropdown" key={item.id}>
                  <span
                    className={`${
                      isActiveParentChaild(shopItems[0].items, usePathname())
                        ? "current "
                        : ""
                    }`}
                  >
                    {item.title}
                  </span>
                  <ul>
                    {item.items.map((menu, i) => (
                      <li
                        className={
                          isActiveLink(menu.routePath, usePathname())
                            ? "current"
                            : ""
                        }
                        key={i}
                      >
                        <Link href={menu.routePath}>{menu.name}</Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
              {pageItems.map((item, i) => (
                <li
                  className={
                    isActiveLink(item.routePath, usePathname()) ? "current" : ""
                  }
                  key={i}
                >
                  <Link href={item.routePath}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </li> */}
          {/* End Pages menu items */}
        </ul>
      </nav>
    </>
  );
};

export default HeaderNavContent;
