fetch('http://dotnet-rooster.herokuapp.com/')
.then(function (response) {
  // console.log(response)
  return response.json()
})
.then (function (id){
    console.log("ando jalando")
})
.catch(function() {
  console.log('algo falló')
});