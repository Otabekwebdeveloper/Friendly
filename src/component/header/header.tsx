"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import NavMenu from "../nav-menu/nav-menu";
import Link from "next/link";

const Header = (): JSX.Element => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${
        scrolled && " bg-white/80 shadow-lg"
      } transition duration-200`}
    >
      <div className="container mx-auto flex p-3 flex-row items-center">
          <Link href="/">
            <Image
              src={"/logo.png"}
              alt={"logo"}
              width={120}
              height={120}
              className={""}
            />
          </Link>

        <div className={`max-[768px]:ml-auto`}>
          <NavMenu scrolled={scrolled} />
        </div>

        <nav className="md:ml-auto text-base">
          <ul
            className={`space-x-7 md:flex hidden ${
              scrolled ? "text-black" : "text-white"
            }`}
          >
            <li className="navLink"><a href="#home">Home</a></li>
            <li className="navLink" id="Statistic">Statistic</li>
            <li className="navLink" id="about">About</li>
            <li className="navLink" id="contact">Contact</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
