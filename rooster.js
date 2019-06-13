

var areglo = [];



fetch('http://dotnet-rooster.herokuapp.com/')
.then(function (response) {
    // console.log(response)
    return response.json()
    
    
})
.then (function (user){
            for(i=0; i<=3496; i++ ){ 
        //    console.log(user[i].id +' '+user[i].name +' '+ user[i].age);
           arreglo.push(user[i].id +' '+user[i].name +' '+ user[i].age);

        };
           
    })
    .catch(function() {
      console.log('algo falló')
    });