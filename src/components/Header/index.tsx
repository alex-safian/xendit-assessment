import React from "react";
import Links from "./Links";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import { ReactComponent as Logo } from "@assets/img/xendit.svg";

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 right-0 left-0 bg-white shadow z-20">
      <div className="container">
        <nav className="flex items-end py-6">
          <Link className="mr-auto md:mr-28" to="/">
            <Logo className="w-auto h-11 lg:h-14" />
          </Link>
          <div className="hidden md:flex flex-1 desktop">
            <Links />
          </div>
          <div className="md:hidden">
            <Menu right className="mobile-menu">
              <Links />
            </Menu>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
