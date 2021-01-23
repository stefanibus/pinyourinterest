

import React, { useState } from 'react';
import './dropdown.css';
// import onClickOutside from 'react-onclickoutside';   // DOES NOT WORK ON FUNCTIONAL COMPONENTS , see Component called ClickOutsideTest.js

 

  
// DOCUMENTATION 
// https://www.youtube.com/watch?v=t8JK5bVoVBw
// https://github.com/karlhadwen/react-dropdown-menu/tree/master/src
 



// THIS IS OUR COMPONENT 
function DropdownTest({ title, items, multiSelect = false, userArray, triggering }) {
  

      const [open, setOpen] = useState(false);
      const [selection, setSelection] = useState([]);
      const toggle = () => setOpen(!open);
      DropdownTest.handleClickOutside = () => setOpen(false);

 
      const callAPI = (testing) => {  console.log(testing); }  
  
      function handleOnClick(item) {
 
            // let idUser = userArray.data.includes.Entry;  
            //   console.log('idUser[0].sys.id'); 
            //   console.log(idUser[0].sys.id);

            // let firstname = userArray.data.includes.Entry;
            //   console.log('firstname');
            //   console.log(firstname);
            //   console.log('firstname');
            //   console.log(firstname[0].fields.firstname); 


        if (!selection.some(current => current.id === item.id)) {
          if (!multiSelect) {
            setSelection([item]);
          } else if (multiSelect) {
            setSelection([...selection, item]);
            console.log('item.id A');
            callAPI('stefano');
          }
        } else {
            let selectionAfterRemoval = selection;
            selectionAfterRemoval = selectionAfterRemoval.filter(
              current => current.id !== item.id
            );
            setSelection([...selectionAfterRemoval]); 
            console.log('item.id B')
            callAPI('stefano');
        }
      }



      function isItemInSelection(item) { 
        if (selection.some(current => current.id === item.id)) {
          return true;
        }
        return false;
      }




  return ( 

    <div className="dd-wrapper">
      <div
        tabIndex={0}
        className="dd-header"
        role="button"
        onKeyPress={() => toggle(!open)}
        onClick={() => toggle(!open)}
      >
        <div className="dd-header__title">
          <p className="dd-header__title--bold">{title}</p>
        </div>
        <div className="dd-header__action">
          <p>{open ? 'Close' : 'Open'}</p>
        </div>
      </div>
      {open && (
        <ul className="dd-list">
          {userArray.map((ourArray, index, ) => (
            <li className="dd-list-item" key={index}>
              <button type="button" onClick={() => {triggering('14U1y0dzbaaqOkvjr9kW4T');   }}>
                <span>

                        NAME  
                        {ourArray.data.includes.Entry[index] }   

                                                NAME  
                        {ourArray.data.includes.Entry[index]}   


                        MYID
                        {ourArray.data.includes.Entry[index].sys.id}
                        </span>
                
              </button>
            </li>
          ))}
        </ul>
      )}
    </div> 
  );
}
 
/*const clickOutsideConfig = {
  handleClickOutside: () => DropdownTest.handleClickOutside,
};*/

//export default onClickOutside(DropdownTest, clickOutsideConfig);
export default  DropdownTest ; 



// <span>{isItemInSelection(item) && 'Selected'}</span>


