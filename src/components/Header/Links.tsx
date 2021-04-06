import React from "react";
import { GitHub } from "react-feather";
import { LINKS } from "@constants/index";
import { NavLink } from "react-router-dom";

const Links: React.FC = () => {
  return (
    <>
      {LINKS.map((link) => (
        <NavLink key={link.url} className="nav-link" to={link.url} exact>
          {link.text}
        </NavLink>
      ))}
      <a
        className="ml-auto self-center"
        href="https://github.com/alex-safian/xendit-assessment"
        target="_blank"
        rel="noreferrer"
      >
        <GitHub size={24} />
      </a>
    </>
  );
};

export default Links;
