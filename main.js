// 1. Fetch your users data
// 2. Loop over the data
// 3. Display it in the `.customers` element
(function () {

  'use strict';

  // Your Code Goes Here
  fetch("https://randomuser.me/api/?results=12").then(function(response){
      response.json().then(function(data){
      let customers = document.querySelector(".customers");
      let objArr = data.results;
      let custData = "";
      console.log(objArr);

      for(let i = 0;i<objArr.length;i++){

        custData += "<div class='picture'><img src=" + objArr[i].picture.large + "></div>";
        custData += "<div class='fullname'>" + objArr[i].name.title + " " + objArr[i].name.first + " " + objArr[i].name.last + "</div>";
        custData += "<div class='email'>" + objArr[i].email + "</div>";
        custData += "<div class='address'>" + objArr[i].location.street + " " +objArr[i].location.city
        + " " + objArr[i].location.state + " " + objArr[i].location.postcode + "</div>";
        custData += "<div class='phone'>" + objArr[i].phone+"</div>";
      };

      customers.innerHTML = custData;

    });
  });

})();

// picture, name, email,location,phone
//Object {street: "3415 blumenstraße", city: "braunschweig", state: "bayern", postcode: 46363}
