const ourlist = [];

const ourInput = document.getElementById("id_input");
const ourButton = document.getElementById("id_button");
ourButton.addEventListener('click', function () {
  //esto se ejecuta cada vez que el usuario hace click en el boton
  ourlist.push(ourInput.value);
  const li = document.createElement('li');
  li.textContent= ourInput.value;
  const list = document.getElementById("id_list");
  list.appendChild(li);
  ourInput.value= "";

});


// function addToList (value,arr){
//   //añadir el valor a la lista
   


//   //ourlist.push(ourInputText);
//   //return ourlist;
// }

// function createList(){
//     const li = document.createElement('li');
//     li.textContent= addToList();


//     const list = document.getElementById("id_list");
//     list.appendChild(li);

    


//     return list;

// }
// document.body.appendChild(list);










