
// CAREFUL!  DEPENDENCY IS UNINSTALLED - THIS COMPONENT IS CURRENTLY NOT USED 
// add this before you start:   "prop-types": "^15.7.2",   

// DOCUMENTATION   OutsideAlerter 
// GREAT SOLUTION potentially  
// https://stackoverflow.com/questions/32553158/detect-click-outside-react-component


// https://blog.logrocket.com/validating-react-component-props-with-prop-types-ef14b29963fc/
// https://codesandbox.io/s/outside-alerter-hooks-lmr2y?module=/src/OutsideAlerter.js&file=/src/OutsideAlerter.js
// https://stackoverflow.com/questions/32553158/detect-click-outside-react-component

 



import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";

/**
 * Hook that alerts clicks outside of the passed ref
 */
function UseOutsideAlerter(ref) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        alert("You clicked outside of me!");
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

/**
 * Component that alerts if you click outside of it
 */
function OutsideAlerter(props) {
  const wrapperRef = useRef(null);
  UseOutsideAlerter(wrapperRef);

  return <div ref={wrapperRef}>{props.children} TEST_THIS_HERE</div>;
}

OutsideAlerter.propTypes = {
  children: PropTypes.element.isRequired
};

export default OutsideAlerter;
