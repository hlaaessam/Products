
// CRUDS
// create retraive update deleta search

//keda ana mskt el input nfso
var productNameInput= document.getElementById('productName');
var productPriceInput= document.getElementById('productPrice');
var productCategoryInput= document.getElementById('productCategory');
var productDescInput= document.getElementById('productDesc');
//solution one
var addUpdateButton= document.getElementById('addproduct');
// //anthor update function solution 
// var addproduct=document.getElementById('addproduct');
// var updateproductinput=document.getElementById('updateproduct');

//array
var productsContainer =[];
// console.log(productsContainer);

//object
var product

//check every time i open brower
if(localStorage.getItem('product') != null){
  //Converts a [JavaScript Object Notation (JSON) ] string into an object.
   productsContainer = JSON.parse(localStorage.getItem('product'));
  //call displayProduct function to display products in table
   displayProduct(productsContainer);
}

//search function
function searchProduct(item) 
{
  var matchedproducts=[];
  for (let index = 0; index < productsContainer.length; index++) {
    if(productsContainer[index].nname.toLowerCase().includes(item.toLowerCase()))
    {
      matchedproducts.push( productsContainer[index]);
    } 
  }

  displayProduct(matchedproducts);
  
}


//function add product
//mynf3sh  n3ml dah nname :document.getElementById(productName).value ,  gwa el fun.. 3shan hyb2a local w 3shan kol mara h call el fun js htro7 tdwar 3ala element mn awal tani w law 7tet el va lue fo2 htta5d awal mft7 el website w hyb2a el string fadi
function addProduct(){

  if(addUpdateButton.innerHTML == 'Update Product')
  {
    updatep();
    // addUpdateButton.innerHTML='Add Product';
  }
  else
  {
    product = {
      //productNameInput.value  m3nha an ana 5adt eli gwa el input
      nname :productNameInput.value,
      price : productPriceInput.value,
      category : productCategoryInput.value,
      descrption : productDescInput.value,
  
    }
    //push product in productsContainer array
    productsContainer.push(product);



  }

  
    //in localStorage bn-save string // we use JSON.stringify() to convert productsContainer to string
    localStorage.setItem('product' , JSON.stringify(productsContainer));

    //call displayProduct function to display products in table
    displayProduct(productsContainer);

    // clear form
    clear();


}

//function display products in table 
function displayProduct(array){
  var cartona=``;
  for (let i = 0; i < array.length; i++) {

// `` -> ynf3 gwaha a7ot string aktar mn line // bfsl b ${item} aw `+ item +` //btsm7 b "" , '' gwaha
    cartona +=
  `            
   <tr>
   <td>`+ array[i].nname +`</td>
   <td>${array[i].price}</td>
   <td>${array[i].category}</td>
   <td>${array[i].descrption}</td>
   <td><button onclick="updateProduct(${i});"  class="btn btn-outline-warning">update</button></td>
   <td><button onclick="deleteProduct(${i});" class="btn btn-outline-danger ">delete</button></td>
</tr>`;
  }

  document.getElementById('body').innerHTML=cartona;


}

//clear function
function clear() {
  productNameInput.value="";
  productPriceInput.value="";
  productCategoryInput.value="";
  productDescInput.value="";
}

//delete function
function deleteProduct(index){
  productsContainer.splice(index,1);
  localStorage.setItem('product' , JSON.stringify(productsContainer));
  displayProduct(productsContainer);
}

// //update product
function updateProduct(index){
    
productNameInput.value=productsContainer[index].nname;
productPriceInput.value=productsContainer[index].price;
productCategoryInput.value=productsContainer[index].category;
productDescInput.value=productsContainer[index].descrption;
//attrbute shael el index
//solution one
addUpdateButton.setAttribute('data-index', index);
addUpdateButton.innerHTML='Update Product';

}


function updatep(index) {

  var index = addUpdateButton.getAttribute('data-index');
  if (index !== null) {
    productsContainer.splice(index,1, product = {
      nname :productNameInput.value,
      price : productPriceInput.value,
      category : productCategoryInput.value,
      descrption : productDescInput.value,
    
    });

  }

  // localStorage.setItem('product', JSON.stringify(productsContainer));
  // clear();
  // displayProduct(productsContainer);

  //solution one
  // Reset the button text and remove the stored index
  addUpdateButton.innerHTML = 'Add Product';
  addUpdateButton.removeAttribute('data-index');



}


//anthor update function solution 
//update product
// function updateProduct(index){
//   //replace display block b display none
//   addproduct.classList.replace('d-block','d-none');
//   updateproductinput.classList.replace('d-none' ,'d-block');  
//   productNameInput.value=productsContainer[index].nname;
//   productPriceInput.value=productsContainer[index].price;
//   productCategoryInput.value=productsContainer[index].category;
//   productDescInput.value=productsContainer[index].descrption;
  
//   }





// function updatep(itemm)
// {
//   console.log("uuuuuuuuuuuuuuuuuuuuuuuuuuu");
//   product = {
//     //productNameInput.value  m3nha an ana 5adt eli gwa el input
//     nname :productNameInput.value,
//     price : productPriceInput.value,
//     category : productCategoryInput.value,
//     descrption : productDescInput.value,

//   }
//   productsContainer.splice(itemm,1,product);

//   displayProduct(productsContainer);


//   localStorage.setItem('product' , JSON.stringify(productsContainer));
//   displayProduct(productsContainer);

//    updateproductinput.classList.replace('d-block','d-none');
//    addproduct.classList.replace('d-none' ,'d-block');


// }


// solid principles مبادئ
//s->  Single Responsibility Principle (SRP) // function ms2ola 3n 7aga wa7da
// Open-Closed Principle (OCP):
// Liskov Substitution Principle (LSP):
// Interface Segregation Principle (ISP):
// Dependency Inversion Principle (DIP):


// local storage -> to save data f el browser lma ykon application so8yr w msh mstahl server 
//key -> name , value -> hla
// localStorage.setItem('name' , 'hla');
// localStorage.setItem('age' , '23');
// localStorage.getItem('name');//hla
// localStorage.key(0);//name
// localStorage.key(1);//age
// localStorage.removeItem('name');
// localStorage.clear();
// localStorage.length();


// save data in browser bs law aflt el browser el data htro7 bs msh htro7 m3 el rfresh
// sessionStorage.setItem('name' , 'hla');

// local storage  , sessionStorage ms7thom around 10mb //el save f nfs el browser eli da5l feh el data

