import React, { useState } from 'react';
// import onClickOutside from 'react-onclickoutside';   // DOES NOT WORK ON FUNCTIONAL COMPONENTS , see Component called ClickOutsideTest.js
import './dropdown.css';

 

  
// DOCUMENTATION 
// https://www.youtube.com/watch?v=t8JK5bVoVBw
// https://github.com/karlhadwen/react-dropdown-menu/tree/master/src
 



// THIS IS OUR COMPONENT 
function DropdownTest({ title, items, multiSelect = false, userArray, triggering }) {

    //  console.log('userArray');
    //  console.log(userArray);
    // console.log('triggering');
    // console.log(triggering);



     const userTest = userArray ? userArray.data.includes.Entry.map((arrayOfUserData, index) => {
          
            let firstname = arrayOfUserData.fields.firstname;
            let lastname = arrayOfUserData.fields.lastname;
            let email = arrayOfUserData.fields.email;
            let id = arrayOfUserData.sys.id;
            
            //HERE I DO HAVE THE IDs 
            //  console.log('id');
            //  console.log(id);
 
          // ARIA-QUESTION  ONCLICK IS INVISIBLE IN THE DOM !?!? 
          // IT STILL WORKS  OCCASIONALLY  ,  NO IDEA WHY IT DID NOT PREVIOUSLY 
          // 
          return  <div onClick={() => triggering(id)}  key={index} className={id}>{firstname} {lastname} </div>   
    }) 
     : 'pending userTest '  ; 

 




      const [open, setOpen] = useState(false);
      const [selection, setSelection] = useState([]);
      const toggle = () => setOpen(!open);
      DropdownTest.handleClickOutside = () => setOpen(false);




      const callAPI = () => {  console.log('test '); }  

 

            // console.log('userArray');
            // console.log({userArray});
 
      //  ARIA-QUESTION : UNABLE TO ENSURE THIS FUNCTION IS CALLED ONLY AFTER THE STATE_VARIABLE is available 
      // const handleOnClick = arrayOfUserData ? arrayOfUserData.data.includes.Entry.map((arrayOfUserData, index) => { 

      // in this Func arrayOfUserData  seems to be out of Scope 
      // 



      const checkForPending = (item) => {
        userArray ? 
           ( 
           // handleOnClick(item);
           // console.log('item yiha');
           handleOnClick(item) ) 

        : 
          console.log('pending userTest '); 
        }



        //checkForPending(item); 
 


      // why is arrayOfUserData not available?  At the time the USER will call this Event,  it should be available
      function handleOnClick(item) {

            console.log('userArray');
            console.log(userArray);  // IT IS UNDEFINED 
            // console.log('userArray.data.includes.Entry');
            // console.log(userArray.data.includes.Entry);
            // let firstname = userArray.data.includes.Entry.fields.firstname;
            // console.log('firstname');
            // console.log(firstname);
            // let lastname = userArray.fields.lastname;
            // let email = userArray.fields.email;
            // let id = userArray.sys.id;

            // const firstname = userArray.fields.firstname;
            // console.log('firstname');
            // console.log(firstname);
            // const lastname = userArray.fields.lastname; 
            // const id = userArray.sys.id;

        if (!selection.some(current => current.id === item.id)) {
          if (!multiSelect) {
            setSelection([item]);
          } else if (multiSelect) {
            setSelection([...selection, item]);
            console.log('item.id A');
            callAPI();
          }
        } else {
            let selectionAfterRemoval = selection;
            selectionAfterRemoval = selectionAfterRemoval.filter(
              current => current.id !== item.id
            );
            setSelection([...selectionAfterRemoval]); 
            console.log('item.id B')
            callAPI();
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
   Static Example triggering a USER-ID-API-CALL   <br/> 


        <div onClick={() => triggering('4CrLLnhKykpOV9fu2v7Odg')}>Yo Go </div>  
        <div onClick={() => triggering('14U1y0dzbaaqOkvjr9kW4T')}>Waldemar</div>  
        <div onClick={() => triggering('6eCJKi4fMxQPQZCBRUF1dh')}>Janis Merkel</div>  
        <div onClick={() => triggering('7gusLBhWbTDHN2ax00HnEk')}>ClimbingCat </div>  
       {/* <div onClick={() => triggering('YrNbyp3ac9ibMecerzmv1')} >MonPoke </div>  */}

 
     <br/> 
     <br/> 
     <div> the below will render the object = userTest  </div> 
     <div>{userTest} </div>  
     <br/> 
     <br/> 
     <br/> 
     <br/> 


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
          {items.map(item => (
            <li className="dd-list-item" key={item.id}>
              <button type="button" onClick={() => {handleOnClick(item);   }}>
                <span>{item.value}</span>
                <span>{isItemInSelection(item) && 'Selected'}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  </>  
  );
}

/*const clickOutsideConfig = {
  handleClickOutside: () => DropdownTest.handleClickOutside,
};*/

//export default onClickOutside(DropdownTest, clickOutsideConfig);
export default  DropdownTest ; 