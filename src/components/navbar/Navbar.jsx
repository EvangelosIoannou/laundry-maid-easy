import React, { useEffect, useRef } from "react";
import styled from "styled-components";
// import navbarData from "../sidebar/navbarData";

export default function Navbar() {
  // let menuIcon = document.querySelector("#menu-icon");
  // let navbar = document.querySelector(".navbar");
  // let sections = document.querySelector("section");
  // let navLinks = document.querySelector("header nav a");

  // window.onscroll = () => {
  //   sections.forEach((sec) => {
  //     let top = window.scrollY;
  //     let offset = sec.offsetTop - 150;
  //     let height = sec.offsetHeight;
  //     let id = sec.getAttribute("id");

  //     if (top >= offset && top < offset + height) {
  //       navLinks.forEach((links) => {
  //         links.ClassList.remove("active");
  //         document
  //           .querySelector("nav a [href*=" + id + " ]")
  //           .classList.add("active");
  //       });
  //     }
  //   });
  // };

  // menuIcon.onclick = () => {
  //   menuIcon.classList.toggle("bx-x");
  //   navbar.classList.toggle("active");
  // };

  // useEffect(() => {
  //   // const sections = sectionsRef.current
  //   //   ? [...sectionsRef.current.querySelectorAll(":scope > section")]
  //   //   : [];
  //   const navLinks = navbarRef.current
  //     ? [...navbarRef.current.querySelectorAll(":scope > a")]
  //     : [];
  //   // console.log(sections);
  //   console.log(navLinks);
  //   window.onscroll = () => {
  //     let sections = document.querySelector("section");
  //     console.log(sections);
  //     sections.forEach((sec) => {
  // let top = window.scrollY;
  // let offset = sec.offsetTop - 150;
  // let height = sec.offsetHeight;
  // let id = sec.getAttribute("id");

  //       console.log("id", id);

  // if (top >= offset && top < offset + height) {
  //   navLinks.forEach((links) => {
  //     links.ClassList.remove("active");
  //     document
  //       .querySelector("nav a [href*=]" + id + " ]")
  //       .classList.add("active");
  //   });
  // }
  //     });
  //   };
  // });

  // useEffect(() => {
  //   console.log("hello");
  //   console.log(window.scrollY);
  // }, [navbarRef]);

  // const navLinks = sectionsRef.current
  //   ? [
  //       ...sectionsRef.current.querySelectorAll(
  //         ":scope > nav a [href*=]" + id + " ]"
  //       ),
  //     ]
  //   : [];
  const menuIconRef = useRef(null);
  const navbarRef = useRef(null);
  const sectionsRef = useRef(null);
  const navLinksRef = useRef(null);
  const navbarData = [
    {
      title: "About Us",
      href: "#about",
      className: "",
    },
    {
      title: "How It Works",
      href: "#howitworks",
      className: "",
    },
    {
      title: "Pricing",
      href: "#pricing",
      className: "",
    },
    {
      title: "Services",
      href: "#services",
      className: "",
    },
    {
      title: "Contact",
      href: "#contact",
      className: "",
    },
  ];

  const sections = sectionsRef.current
    ? [...sectionsRef.current.querySelectorAll(":scope > section")]
    : [];

  function toggleMenu() {
    menuIconRef.current.classList.toggle("bx-x");
    navbarRef.current.classList.toggle("active");
  }

  function toggleActive(e) {
    let navLinks = navbarRef.current.children;
    // for (let link of navLinks) {
    //   link.classList.remove("active");
    // }
    //To work with older browsers like IE
    for (var i = 0; i < navLinks.length; i++) {
      navLinks[i].classList.remove("active");
    }
    e.target.classList.add("active");
    menuIconRef.current.classList.toggle("bx-x");
    navbarRef.current.classList.toggle("active");
  }

  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     console.log("entries", entries);
  //   });
  //   observer.observe(sections.current);
  // }, []);

  const aComponents = navbarData.map(({ title, href, className }) => (
    <a
      href={href}
      className={className}
      key={title}
      ref={navLinksRef}
      onClick={toggleActive}
    >
      {title}
    </a>
  ));

  return (
    <NavbarContainer>
      <div className="left">
        <a href="#home" className="logo">
          <span>Laundry Maid Easy</span>
          {/* <span>Ioannou</span> */}
        </a>
      </div>
      <div className="right">
        <i
          ref={menuIconRef}
          className="bx bx-menu"
          id="menu-icon"
          onClick={toggleMenu}
        ></i>

        <nav ref={navbarRef} className="navbar">
          {aComponents}
        </nav>
      </div>
    </NavbarContainer>
  );
}
const NavbarContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 2rem 4rem;
  /* background: transparent; */
  background: rgba(255, 255, 255, 0.8);
  /* backdrop-filter: blur(10px); */
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 5;
  /* scroll-behavior: smooth; */
  overflow: hidden;

  .logo {
    font-size: 3rem;
    color: var(--text-color);
    font-weight: 800;
    cursor: pointer;
    transition: 0.3s ease;
  }
  .logo:hover {
    transform: scale(1.1);
  }
  .logo span {
    text-shadow: 0 0 15px var(--main-color);
  }
  .navbar a {
    font-size: 1.8rem;
    color: black;
    margin-left: 4rem;
    font-weight: 500;
    transition: 0.3s ease;
    scroll-behavior: smooth;
    border-bottom: 3px solid transparent;
  }
  .navbar a:hover,
  .navbar a.active {
    color: var(--main-color);
    border-bottom: 3px solid var(--main-color);
  }
  #menu-icon {
    font-size: 3.6rem;
    color: var(--main-color);
    cursor: pointer;
    display: none;
  }
  @media (max-width: 895px) {
    padding: 2rem 2.5rem;
    #menu-icon {
      display: block !important;
    }
    .navbar {
      position: absolute;
      top: 100%;
      right: 0;
      width: 50%;
      padding: 1rem 3%;
      /* background: rgba(0, 0, 0, 0.8);
      backdrop-filter: blur(20px); */
      border-bottom-left-radius: 2rem;
      border-left: 2px solid var(--main-color);
      border-bottom: 2px solid var(--main-color);
      display: none;
    }
    .navbar.active {
      display: block !important;
    }
    .navbar a {
      display: block;
      font-size: 2rem;
      margin: 3rem 0;
      color: white;
    }
  }
`;
