
// CAREFUL!  DEPENDENCY IS UNINSTALLED - THIS COMPONENT IS CURRENTLY NOT USED 
// add this before you start:   "react-onclickoutside": "^6.9.1",

// DOCUMENTATION   OutsideAlerter -  would need adjustments when used with Functional Components  
// see OutsideAlerter.js for a better solution
 
 
 
// I decided to skip the approach entirely after reading some Stackoverflow Articles
// https://codesandbox.io/s/vn66kq7mml?file=/package.json
// https://github.com/Pomax/react-onclickoutside/issues/327
// https://www.google.com/search?q=TypeError%3A+Cannot+read+property+%27isReactComponent%27+of+undefined&rlz=1C1ONGR_deDE932DE932&oq=TypeError%3A+Cannot+read+property+%27isReactComponent%27+of+undefined&aqs=chrome..69i57j69i58&sourceid=chrome&ie=UTF-8

 
import React, { useState } from "react";
import "./click_outside_test.css";
import onClickOutside from "react-onclickoutside";
 
export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  Menu.handleClickOutside = () => setIsOpen(false);
  return (
    <li className={isOpen ? "m-menu -active" : "m-menu "} onClick={toggle}>
      <div> Open Menu </div>
      <ul className="m-menu__list">
        <li className="m-menu__item">
          <div className="m-menu__link">Log Out</div>
        </li>
      </ul>
    </li>
  );
};

const clickOutsideConfig = {
  handleClickOutside: () => Menu.handleClickOutside
};

  onClickOutside(Menu, clickOutsideConfig);  