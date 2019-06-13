

var areglo = [];
// const $paginador = document.getElementById(paginator);



fetch('http://dotnet-rooster.herokuapp.com/')
.then(function (response) {
    // console.log(response)
    return response.json()
    
    
})
.then (function (user){
            for(i=0; i<=3496; i++ ){ 
        //    console.log(user[i].id +' '+user[i].name +' '+ user[i].age);
           areglo.push(`${user[i].id}  ${user[i].name}  ${user[i].age}`);
        // areglo.push(i)

        };
           
    })
    .catch(function() {
      console.log('algo falló')
    });

function escribir() {
    
    for( e=0 ; e>=areglo.lenght; e++){
        document.write(areglo[e]);
    }
}

escribir();