import React, { useState } from 'react';
// import onClickOutside from 'react-onclickoutside';   // DOES NOT WORK ON FUNCTIONAL COMPONENTS , see Component called ClickOutsideTest.js
import './dropdown.css'; 
import OutsideClickHandler from 'react-outside-click-handler';
 
// DOCUMENTATION  DropDown Select-Menu 
// https://www.youtube.com/watch?v=t8JK5bVoVBw
// https://github.com/karlhadwen/react-dropdown-menu/tree/master/src
  

// THIS IS OUR COMPONENT - Multi-Select is NOT yet established 
function Dropdown({ userArray, userInformation, triggering, title, multiSelect = false }) {
  

            const [open, setOpen] = useState(false);
            const [selection, setSelection] = useState([]);
            const toggle = () => setOpen(!open);
            Dropdown.handleClickOutside = () => setOpen(false);

       
            function handleOnClick(item) {
        
              if (!selection.some(current => current.id === item.id)) {
                if (!multiSelect) {
                  setSelection([item]);
                } else if (multiSelect) {
                  setSelection([...selection, item]); 
                }
              } else {
                  let selectionAfterRemoval = selection;
                  selectionAfterRemoval = selectionAfterRemoval.filter(
                    current => current.id !== item.id
                  );
                  setSelection([...selectionAfterRemoval]); 
              }
            }
        
            function isItemInSelection(item) { 
              if (selection.some(current => current.id === item.id)) {
                return true;
              }
              return false;
            } 
 

  return (
    <>   
 
     <OutsideClickHandler
      onOutsideClick={() => {  
        console.log('open', open) 
        if (open) {
        toggle(); 
        }

      }}
    >    
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
 
            {/*   
            the below Dropdown must have a different State  than  "userArray"        
            the below Dropdown Component cannot use the same userArray due to the State: 
            the dropdown-Elements would otherwise be filtered undesiredly, (test this with userArray)
            this DropDown Component currently relies on the State-Value: "userInformation"      
            there is no other reason than the below Select-Element to use the  State-Variable userInformation inside of this app 
            */}
              {userInformation.data.items.map((item, index) => {  
                return (  
                <li className="dd-list-item" key={item.sys.id}>
                  <button type="button" onClick={() => {handleOnClick(item); triggering(item.sys.id);   }     }>
                    <span>{item.fields.firstname} {item.fields.lastname} </span>
                    <span>{isItemInSelection(item) && 'Selected'}</span>
                  </button>
                </li>
             )} )} 

        </ul>
      )}
    </div>
  
   </OutsideClickHandler>

  
  </>  
  );
}



/*const clickOutsideConfig = {
  handleClickOutside: () => Dropdown.handleClickOutside,
};*/

//export default onClickOutside(Dropdown, clickOutsideConfig);
export default  Dropdown ; 