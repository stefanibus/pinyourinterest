const Dropdown = ({triggering, userArray}) => {  
 
/*    const userTest = userArray ? userArray.data.includes.Entry.map((arrayOfUserData, index) => { 
        const firstname = arrayOfUserData.fields.firstname;
        const lastname = arrayOfUserData.fields.lastname;
        const email = arrayOfUserData.fields.email;
        const id = arrayOfUserData;
        console.log('id');
        console.log(id);
        // const triggerThis = (val) => triggering(val);
        // cannot  place the below line into the return statement  
        // triggerThis={() => firstname('something')} 
        return  <div className="userCklickHere">{firstname} {lastname} </div>   
    }) 
     : 'pending userTest '  ;*/
   
  
  return (
    <div> 
      
        {/*<div>{userTest} </div> */}


        <div onClick={() => triggering('4CrLLnhKykpOV9fu2v7Odg')}>Yo Go </div>  
        <div onClick={() => triggering('14U1y0dzbaaqOkvjr9kW4T')}>Waldemar</div>  
        <div onClick={() => triggering('6eCJKi4fMxQPQZCBRUF1dh')}>Janis Merkel</div>  
        <div onClick={() => triggering('7gusLBhWbTDHN2ax00HnEk')}>ClimbingCat </div>  
        <div onClick={() => triggering('YrNbyp3ac9ibMecerzmv1')} >MonPoke </div>  


     </div>
  );
};

export default Dropdown 