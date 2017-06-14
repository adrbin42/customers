// 1. Fetch your users data
// 2. Loop over the data
// 3. Display it in the `.customers` element
(function () {

  'use strict';

  // Your Code Goes Here
  fetch("https://randomuser.me/api/?results=12").then(function(response){
      response.json().then(function(data){
      let customers = document.querySelector(".customers");
      let retObj = data;
      let objArr = retObj.results;
      console.log(objArr);
      for(let i = 0;i<objArr.length;i++){
        customers.innerHTML = objArr[i].email;
        customers.innerHTML = objArr[i].picture.thumbnail;

        //console logging all of user data
        console.log(objArr[i].picture.thumbnail);
        console.log(objArr[i].name.title);
        console.log(objArr[i].name.first);
        console.log(objArr[i].name.last);
        console.log(objArr[i].email);
        console.log(objArr[i].location.street);
        console.log(objArr[i].location.city);
        console.log(objArr[i].location.state);
        console.log(objArr[i].location.postcode);
        console.log(objArr[i].phone);
      };
    });
  });

})();

// picture, name, email,location,phone
//Object {street: "3415 blumenstraße", city: "braunschweig", state: "bayern", postcode: 46363}
