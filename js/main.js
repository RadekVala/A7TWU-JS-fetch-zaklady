function myclickfunction() {
  fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(function (response) {
      return response.json();
    })
    .then(function (myJson) {
      console.log(myJson);

      document.getElementById("myp1").innerHTML = myJson.address.city;

      console.log("Username: " + JSON.stringify(myJson.username));
      console.log("E-mail: " + JSON.stringify(myJson.email));
      console.log(JSON.stringify(myJson));
    });
}
