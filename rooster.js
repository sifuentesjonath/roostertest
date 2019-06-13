

var areglo = [];


fetch('http://dotnet-rooster.herokuapp.com/')
.then(function (response) {
  // console.log(response)
  return response.json()
  
          
})
.then (function (user){
       console.log(user[0].name +' '+ user[0].age)
       
})
.catch(function() {
  console.log('algo falló')
});