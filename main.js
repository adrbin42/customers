// 1. Fetch your users data
// 2. Loop over the data
// 3. Display it in the `.customers` element
(function () {

  'use strict';

  // Your Code Goes Here
  fetch("https://randomuser.me/api/?results=12").then(function(response){
      response.json().then(function(data){
      let customers = document.querySelector(".customers");
      let pictures = document.querySelector("#pictures");
      let name = document.querySelector("#name");
      let email = document.querySelector("#email");
      let location = document.querySelector("#location");
      let phone = document.querySelector("#phone");


      let objArr = data.results;
      console.log(objArr);

      for(let i = 0;i<objArr.length;i++){

        pictures.innerHTML += "<img src=" + objArr[i].picture.large + "><br>";
        name.innerHTML +=
        objArr[i].name.title + " " + objArr[i].name.first + " " + objArr[i].name.last+"<br>";
        email.innerHTML += objArr[i].email+"<br>";
        location.innerHTML += objArr[i].location.street + " " +
        objArr[i].location.city + " " + objArr[i].location.state + " " + objArr[i].location.postcode+"<br>";
        phone.innerHTML += objArr[i].phone+"<br>";

      };

    });
  });

})();

// picture, name, email,location,phone
//Object {street: "3415 blumenstraße", city: "braunschweig", state: "bayern", postcode: 46363}
