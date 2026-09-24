import computerStore from "./data.js";

// Navbar 
  const navbar=document.getElementById("navbar"); 
  const logOutLink=document.getElementById("logOut-link")
  const logInLink=document.getElementById("logIn-link");
  const signUpLink=document.getElementById("signUp-link");  
  const mainHomeLink=document.getElementById("main-home-link");
  const houseIconLink=document.getElementById("house-icon-link");
  const navLinks=document.querySelectorAll(".nav-link");
  const searchIconLink=document.getElementById("search-icon-link");  
  const shoppingCartLink=document.getElementById("shopping-cart-link");
  const productsCounter=document.getElementById("Products-counter");

  // cart page //
  const cartPage =document.getElementById('cart-page')
  const cartProducts= document.getElementById("cart-products");
  const totalPrice = document.getElementById("total-price");
  const checkOutBtn = document.getElementById("checkOut-btn");

  // CheckOut //
  const checkOutPage=document.getElementById("checkOut-page");
  const purchaseData=document.getElementById("purchase-data");

 // Authentication //
/* LogIn Page */
  const logInPage=document.getElementById("logIn-page");
  const logInEmail=document.querySelectorAll(".logIn-email");
  const logInPassword=document.querySelectorAll(".logIn-password");
  const inputClear=document.querySelectorAll(".input-clear");
  const logInError=document.querySelectorAll(".logIn-error");
  const logInBtn= document.querySelectorAll(".login-btn");
  const registerBtn=document.querySelectorAll(".register-btn");
  
/* SignUp Page */
  const signUpPage=document.getElementById("signUp-page")
  const firstName=document.getElementById("first-name");
  const phone=document.getElementById("phone");
  const rePassword=document.getElementById("rePassword");
  const signUpEmail=document.getElementById("signUp-email");
  const signUpBtn=document.getElementById("signUp-btn");
  const haveAccountBtn =document.getElementById("have-account-btn");
  const logInModal=document.getElementById("logIn-modal");

  /* Modals */
 // Search Modal // 
  const searchModal=document.getElementById("search-modal");
  const searchModalContent=document.getElementById("search-modal-content");
  const productModalField=document.getElementById("product-modal-field");
  const priceModalField=document.getElementById("price-modal-field");
  const searchModalBtn=document.getElementById("search-modal-btn");
 
 // Slider Modal //
  const sliderModal = document.getElementById("slider-modal");
  const sliderModalItem = document.getElementById("slider-modal-item");
  const sliderModalNextIcon = document.getElementById("slider-modal-next-icon");
  const sliderModalPrevIcon = document.getElementById("slider-modal-prev-icon");
  const sliderModalCloseIcon = document.getElementById("slider-modal-close-icon");
  
/* Toast */
 const toastLiveExample = document.getElementById('liveToast')
 const toastBody= document.getElementById("toast-body")
 /* Home page */
  const homeSlider=document.getElementById("home-slider");
  const productSearch=document.getElementById("product-search");
  const productSearchField=document.getElementById("product-search-field");
  const searchIcon=document.getElementById("search-icon");
  const productsPreview = document.getElementById("products-preview");
  const productPreviewImage=document.querySelectorAll(".product-preview-image");
  const storeProducts=document.getElementById("store-products"); 
  const notFound= document.getElementById("not-found");
  const footer=document.getElementById("footer");

  /* Store Products */
  let ShowSomeProducts = computerStore.filter((element, i) => i < 52);  
  let homePageProducts= computerStore;    
  let indexs;
  let shoppingCartItems = [];
  let arr = "";  
  let height=$("#main-navbar").outerHeight() + $(".sub-navbar").outerHeight();

  /* LocalStorage */
  if(JSON.parse(localStorage.getItem("itemsCartsShopping")!==null)){
    shoppingCartItems=JSON.parse(localStorage.getItem("itemsCartsShopping")) 
  }
 

//* clear functions *
const clear=(element)=>element.innerHTML="";
const clearInputs=()=>inputClear.forEach(element=>element.value="");

// * display functions *
const displayPage=( showPage , optionShow2='', hidePage1 , hidePage2 , optionHide3='', optionHide4='' )=>{  
  clearInputs();
  showPage !== '' ? showPage.style.display="flex" : '';
  optionShow2 !== '' ? optionShow2.style.display="inline-block" : '';
  hidePage1.style.display="none";
  hidePage2.style.display="none";
  optionHide3 !== '' ? optionHide3.style.display="none" : '';
  optionHide4 !== '' ? optionHide4.style.display="none" : '';

  logInError.forEach((error)=>{
    error.style.display="none";
  })
}

const displayLogInModal=()=>{
  $("#logIn-modal").css("display","flex");
}

window.displayLogInModal = displayLogInModal

const displayProductDetails=(index)=>{
  $(".loading").fadeIn(()=>$(".loading").fadeOut(2000));
  displayPage(footer, '' , notFound , homeSlider , productsPreview , productSearch)
 
    clear(storeProducts);

   storeProducts.innerHTML+=`
   <div class='container-fluid mt-5'>
     <div class='row'>
       <div class='col-12 d-flex flex-wrap justify-content-between'>
        <div class="col-11 col-md-6">
           <img class="w-100" src="${homePageProducts[index]?.images}" alt="${homePageProducts[index]?.name}">
        </div>
        <div class="col-11 col-md-6 p-3">
            <h1>${homePageProducts[index]?.name}</h1>
            <P class="description">${homePageProducts[index]?.type} 
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae animi excepturi, eaque itaque dolorem labore quibusdam alias veritatis illum numquam quis ipsa, incidunt necessitatibus debitis nostrum sint aliquam! Est ut libero deleniti voluptatum culpa cupiditate ipsa odit blanditiis, eos, nisi, labore magnam exercitationem alias omnis? Qui dolore dolorum ut labore.
            </p>
            <h5 class="price w-100"> price : ${homePageProducts[index]?.price} EGP</h5> 
            <div class='w-100 d-flex justify-content-between'>
              <button class="button-shrink previous-page-btn" onclick="displayAllProducts()">Previous page </button>
              <button class="button-shrink previous-page-btn" onclick="addProducts(${homePageProducts[index]?.id} , ${index})">buy product</button></div> 
            </div>         
        </div>

       </div>
     </div>
   </div>
  `
}
window.displayProductDetails = displayProductDetails

const displayAllProducts=()=>{
  storeProducts.innerHTML="" ;
  productSearch.style.display= 'block';
  displayProduct(homePageProducts);
}
window.displayAllProducts = displayAllProducts

const displaySliderModalItem=element=>sliderModalItem.style.backgroundImage=`url("${element}")`;
const displayProductImage=i=>{
  sliderModal.style.display="flex"
  displaySliderModalItem(homePageProducts[i].images); 
  indexs=i;
}
window.displayProductImage = displayProductImage
const displayDataAfterLoginIn=(data)=>{
  $(".loading").fadeIn(()=>$(".loading").fadeOut(1000));
      storeProducts.innerHTML="";     
      displayProduct(homePageProducts);
        purchaseData.innerHTML+=`
        <h1 class="mt-2 text-center fs-5">Check Out</h1>
        <form class="text-center">
            <input class="checkout-field-inputs input-clear" name="card-number" type="text" placeholder="card number"> 
            <input class="checkout-field-inputs input-clear" name="number-phone" type="text" placeholder="number phone"> 
            <img src="img/card-mastercard.svg" class="mt-3" width="7%">
            <img src="img/card-visa.svg" class="mt-3" width="7%">
            <img src="img/card-discover.svg" class="mt-3" width="7%">
            <img src="img/card-amex.svg" class="mt-3" width="7%">
            <input class="checkout-field-inputs input-clear" name="card-number" type="number" placeholder="Discount coupon"> 
            <button class="checkOut-buy-btn">buy</button>
         </form>
         <h4 class="ms-3">name : ${data.data.user.name}</h4>
         <h4 class="ms-3">email : ${data.data.user.email}</h4>
         `;
         
         displayPage(navbar , searchModalContent , logInPage , signUpPage);
         displayPage(logOutLink , productsPreview , logInLink , signUpLink);
         displayPage(storeProducts , productSearch , mainHomeLink , logInModal );
         checkOutPage.style.display ="none";
         footer.style.display='block';
         shoppingCartLink.style.display="block";
         homeSlider.style.display="block";   
}


const displayProduct =(elements)=>{  
  checkOutPage.style.display='none';
  if(elements.length===52) {
    for(let i=0; i<elements.length;i++){        
    storeProducts.innerHTML+=`
      <div class="product-card p-1 position-relative col-11 col-md-4 col-lg-3">
       <div class="card-content m-2">
        <div class="card-image-cover w-100">
           <img class="card-image" src="${elements[i]?.images}" width="100%" height="100%" alt="${elements[i]?.name}">
       </div>
        <h3>${elements[i]?.name} </h3>
        <p class="card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae animi excepturi eaque itaque dolorem labore quibusdam alias veritatis illum numquam quis ipsa, incidunt necessitatibus debitis nostrum sint aliquam! Est ut libero deleniti voluptatum culpa cupiditate ipsa odit blanditiis, eos, nisi, labore magnam exercitationem alias omnis? Qui dolore dolorum ut labore.</p>
        <h3 class="price">${elements[i]?.price} EGP</h3>
        <button id="card-logIn-btn" onclick="displayLogInModal()" class="button-shrink">buy</button>
    </div>
    
  </div>
   ` 
   // Content=document.querySelectorAll(".error-login");
   }
  }
  
  else  for(let i=0; i<elements.length ;i++){   
                 
      storeProducts.innerHTML+= `
        <div class="product-card p-1 position-relative col-11 col-md-4 col-lg-3">
          <div class="card-content m-2">
                <div class="card-image-cover w-100">
                  <img class="card-image" onclick="displayProductImage(${i})" src="${elements[i]?.images}" width="100%" height="100%" alt="${elements[i]?.name}">
                </div>
                <i class="fa-solid fa-eye card-details-btn-icon" onclick="displayProductDetails(${i})"></i>
                <img class="card-add-btn-icon" onclick="addProducts(${elements[i]?.id } , ${i})" src="img/icon-add-cart.png" width="35px">
                <h3 class="name">${elements[i]?.name} </h3>
                <p class="card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae animi excepturi eaque itaque dolorem labore quibusdam alias veritatis illum numquam quis ipsa, incidunt necessitatibus debitis nostrum sint aliquam! Est ut libero deleniti voluptatum culpa cupiditate ipsa odit blanditiis, eos, nisi, labore magnam exercitationem alias omnis? Qui dolore dolorum ut labore.</p>
                <h3 class="price">${elements[i]?.price} EGP</h3>
            </div>
          </div>
          `
}}
const displayCartPage=(element)=>{
  cartPage.style.display ='block'
   const totalProductsCounter= shoppingCartItems.reduce((totalNumberOfItems, CartItem) => {
    return totalNumberOfItems + CartItem.count    
   }, 0);
 
   if(totalProductsCounter !== 0 ) productsCounter.innerHTML = totalProductsCounter
     homeSlider.style.display='none';
     checkOutPage.style.display='none';
     clear(cartProducts);
     clear(storeProducts);
     let total=Number();
     for(let i=0; i<element.length;i++){
       total+=element[i]?.price * element[i]?.count; 
       cartProducts.innerHTML+=`
       <div class="col-md-12 mt-5 d-flex justify-content-between cart-product">
           <img class="img ms-3" src="${element[i]?.images}" width="10%" class="m-4 inputs" alt="${element[i]?.name}"></img> 
           <div><h3 class='product-name'>${element[i]?.name} </h3>
           <h6>price : ${element[i]?.price} EGP</h6>
           <i onclick="incrementproducts(${i})" class="increment text-dark plus fa-sharp-duotone fa-solid fa-plus"></i>
           <span class="text-dark">${element[i]?.count}</span>
           <i onClick="decrementProducts(${i})" class="decrement text-dark minus fa-solid fa-minus"></i>
           <button onclick="removeProduct(${i})" class="remove-btn ms-3 button-shrink">remove</button>
           <h6 class='mt-2'>price : ${element[i]?.price * element[i]?.count} EGP</h6>
       </div> 
       </div>
       `
     } 
 
     totalPrice.innerHTML=`Total price : ${total} EGP`;
 }  


/* CART Functions */
  //* add functions *
  const addProducts=( id , index )=>{  
    let item = shoppingCartItems.findIndex( item => item.id === id ); 
    
    if( item === -1 ){
      const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
      toastBody.innerHTML = "Successfully Added To Cart";
      toastBootstrap.show()
      shoppingCartItems.push(homePageProducts[index]);
    } else{
     // shoppingCartItems[index].count++;
    //  homePageProducts[index].count++ ;
      const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
      toastBody.innerHTML = "This Product Is Already In Your Cart";
      toastBootstrap.show();
    }
    const totalProductsCounter = shoppingCartItems.reduce((totalNumberOfItems, CartItem) => {
      return totalNumberOfItems + CartItem.count    
      }, 0);
      console.log(totalProductsCounter);
      
      productsCounter.innerHTML= totalProductsCounter 
      shoppingCartLink.style.color="#052a74ff";
      localStorage.setItem("itemsCartsShopping",JSON.stringify(shoppingCartItems))
  }
  window.addProducts = addProducts
  // * increment *
  const incrementproducts=(index)=>{
    shoppingCartItems[index].count++;
    displayCartPage(shoppingCartItems);  
    localStorage.setItem("itemsCartsShopping",JSON.stringify(shoppingCartItems))
  }
  window.incrementproducts = incrementproducts
  // * decrement *
  const decrementProducts=(index)=>{
    shoppingCartItems[index].count <= 1 ?
    removeProduct(index) :  shoppingCartItems[index].count -- ;
    displayCartPage(shoppingCartItems);
    localStorage.setItem("itemsCartsShopping",JSON.stringify(shoppingCartItems))
  }
  window.decrementProducts = decrementProducts
  // * remove functions *
  const removeProduct=(i)=>{
      shoppingCartItems.splice(i,1);
      if(shoppingCartItems.length===0){
        displayPage(notFound , '' , cartPage , footer)
     }
      else {
        notFound.style.display='none';
        footer.style.display="flex"
        displayCartPage(shoppingCartItems);
      }
      clear(storeProducts);
      if(shoppingCartItems.length<=0)[productsCounter.innerHTML="",shoppingCartLink.style.color="rgb(22, 23, 24)"]
      localStorage.setItem("itemsCartsShopping",JSON.stringify(shoppingCartItems))     
  }
  window.removeProduct = removeProduct

 

// * functions next and prev and close and iconColor and onKeydown *
const getNext=()=>{ 
  indexs++
  if(indexs===homePageProducts.length)indexs=0;
  displaySliderModalItem(homePageProducts[indexs].images);  
};
const getPrev=()=>{
  indexs--
  console.log(homePageProducts.length );
  
  if(indexs<0)indexs=homePageProducts.length;
  displaySliderModalItem(homePageProducts[indexs].images)
}
const getClose=()=>$("#slider-modal").hide();

// * functions onKeyboard*
firstName.onkeyup=()=>errorsTexts(firstName,logInError);

logInPassword.forEach((error)=>{  
  error.onkeyup=()=>errorsNumbers(error , logInError)
}) 
//logInError.onkeyup=()=>errorsNumbers(logInError,logInError)

document.addEventListener("keydown",e=>{
  if(e.key=='ArrowRight')getNext(); 
  else if(e.key=="ArrowLeft")getPrev();
  else if(e.key=='Escape')getClose();
  ;    
})

// * Change Style Navbar Links function*
const changeStyle=( mainStyle='' , foucsStyle='' , option='')=>{
  mainStyle.style.fontWeight ="100",
  foucsStyle.style.fontWeight = "700" ,
  option !== '' ? option.style.fontWeight ="100" :'' ;
}
logInLink.addEventListener("click" , ()=> changeStyle( signUpLink , logInLink))
signUpLink.addEventListener("click" , ()=> changeStyle( logInLink , signUpLink ))
 
//* hide functions*
const hide=element=>element.style.display="none";
//const hideError=(errors=[])=> 

// * Restore the data after refresh *
let local= JSON.parse(localStorage.getItem("products")) ;

if(local==="success"){
     const data = JSON.parse(localStorage.getItem("email"));    
     displayDataAfterLoginIn(data);
}
else $(".loading").fadeIn(()=>$(".loading").fadeOut(1000));

searchIconLink.addEventListener("click",()=>{
  homeSlider.style.display="none";  
  searchModal.style.display="flex";
  productModalField.value='';
  priceModalField.alue='';
})

// *scroll navbar *
const scroll = element => {
  window.onscroll = () => {
    if (window.scrollY <= height)
      $(element).css({
        position: "",
        height: "100px"
      });
    else if (window.scrollY >= height)
      $(element).css({
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        height: "82px"
      });
  };
};

scroll(".navbar");

//*function changing colors and background *
const changingStyle=(element,i,background,color)=>[element[i].style.backgroundColor=background,element[i].style.color=color];
//*changing colors and backgound btn-nav*
for (let i = 0; i < navLinks.length; i++){
     navLinks[i].addEventListener("click",()=>{
     $(".loading").fadeIn(()=>$(".loading").fadeOut(1000));
      displayPage('' , productSearch , cartPage , homeSlider);
     for (let i = 0; i < navLinks.length; i++)changingStyle(navLinks,i,"transparent","#04090f")
     changingStyle(navLinks,i,"transparent","#033472")})
}
const errorsNumbers=(elementOne,elementTwo)=>{  
  //console.log(elementOne , elementTwo);
  //console.log(elementOne, elementOne.value);
  //hideError(elementTwo) //hide(elementTwo);
//alert("P")
 let passwordRejex=/^[A-Za-z0-9@]{6}/
  if(elementOne.value==="")elementTwo.forEach(error=>{ error.style.display ='none'}) 
  else if(!passwordRejex.test(elementOne.value)){
    elementTwo.forEach(error=>{
      error.style.display="flex";
      error.innerHTML="must start with at least six letters or number";
    })    
    
  } else elementTwo.forEach(error=>{
    error.style.display = 'none' ;
    error.innerHTML ='' ;
  }) //hideError(elementTwo)
}
const errorsTexts=(elementOne,elementTwo)=>{
  let nameRejex=/^[a-zA-Z]{4,15}$/
   if(elementOne.value==="")hide(elementTwo)//hideError(elementTwo) //
   else if(!nameRejex.test(elementOne.value)){
  // elementTwo.style.display="flex";
  // elementTwo.innerHTML="must begin with at least four letters and not begin with a number";
  elementTwo.forEach((error)=>{
    error.style.display="flex";
    error.innerHTML="must begin with at least four letters and not begin with a number";
  })   
  }else elementTwo.forEach((error)=>{
    error.innerHTML='';
    error.style.display ="none";
  })
  return nameRejex;
}

/* Authentication Functions */
const fetchData =async(product , type)=>{
  try{
  let response = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/${type}`, product);
  return response
  }catch(error){
   return error
  }
}
const signUp=async()=>{
 let product ={
    name:firstName.value,
    email:signUpEmail.value,  
    password:logInPassword[1].value,
    rePassword:rePassword.value,
    phone:phone.value,
  }

  const message = await fetchData(product , "signup") ;   
  
  for(let i=6;i>1;i--){
      if(inputClear[i].value===''){
        logInError.forEach((error)=> error.innerHTML='')
          $(".logIn-error").show(()=>$(".logIn-error").fadeOut(4000));     
          logInError.forEach((error)=>{
            error.innerHTML=`${inputClear[i].placeholder} is required`;
          })
         // logInError.innerHTML=`${inputClear[i].placeholder} is required`;
     }  
    else if(inputClear[i].placeholder==inputClear[5].placeholder){
    if(message.status === 200 || message.status ===201) {
      $(".loading").fadeIn(()=>$(".loading").fadeOut(1000));
      displayPage(logInPage , '' , signUpPage , storeProducts , homeSlider);
    }
    else $(".logIn-error").show(()=>$(".logIn-error").fadeOut(2000));   
    logInError.forEach((error)=>{    
      message?.response?.data?.errors?.msg ? error.innerHTML= message?.response?.data?.errors.msg : 
      error.innerHTML = 'An error occurred. Please try again later' ; 
    })
    /*  
      message?.response?.data?.errors.msg ? logInError.innerHTML= message?.response?.data?.errors.msg : 
      logInError.innerHTML = 'An error occurred. Please try again later.' ;
      */
     }           
  }
}
const signIn=async(logInEmail , logInPassword)=>{
 let product={
    email:logInEmail.value,
    password:logInPassword.value,
 }

const message = await fetchData( product , "signin"); 
  if( message.status === 200){
   displayDataAfterLoginIn(message)
    localStorage.setItem("products",JSON.stringify("success"))  
    localStorage.setItem("email",JSON.stringify(message))  
    $(".logIn-error").hide()
    changeStyle( 
      mainStyle = logOutLink ,
      foucsStyle = logInLink , 
      option = signUpLink , 
    )      
} else{  
    logInError.forEach((error)=>{    
    message?.response?.data?.message ? error.innerHTML= message?.response?.data?.errors.msg : 
    error.innerHTML = 'An error occurred. Please try again later' ; 
  })
  $(".logIn-error").fadeIn(()=>$(".logIn-error").fadeOut(2000));
   }    
}
const logOut=()=>{
  $(".loading").fadeIn(()=>$(".loading").fadeOut(1000));
  for (let i = 0; i < navLinks.length; i++){    
    changingStyle(navLinks,i,"transparent","#04090f")
  }
    localStorage.removeItem("itemsCartsShopping"),
    localStorage.removeItem("email")
    localStorage.removeItem("products")
    storeProducts.innerHTML="";
    displayProduct(ShowSomeProducts);    
    displayPage( homeSlider , mainHomeLink , productsPreview , productSearch , logOutLink , cartPage );
    displayPage( footer, signUpLink , shoppingCartLink , logInModal , navbar , checkOutPage );

     logInLink.style.display ='inline-block' ;
     notFound.style.display='none';

     changeStyle( signUpLink , logOutLink , logInLink );
}

logInBtn.forEach((button , index)=>{
  button.addEventListener("click", ()=> signIn(logInEmail[index], logInPassword[index]));
})
//logInBtn.forEach((button , index)=>{
  signUpBtn.addEventListener("click", signUp);
//})
//signUpBtn.addEventListener("click", signUp);
logOutLink.addEventListener('click' , logOut);


//logInBtn.addEventListener("click",()=> signIn(logInEmail ,logInPassword));
//logInBtnLayer.addEventListener("click",()=>signIn(emailLayer ,passwordLayer));
// * onclick functions *
shoppingCartLink.addEventListener("click",()=>{
  $(".loading").fadeIn(()=>$(".loading").fadeOut(1000));
  homeSlider.style.display ='none'
  cartProducts.innerHTML="";
  productSearch.style.display='';
  for (let i = 0; i < navLinks.length; i++){    
      changingStyle(navLinks,i,"transparent","#04090f")
  }
  productsPreview.style.display='none';
  
  if (productsCounter.innerHTML===''){
    notFound.style.display='flex';
    cartPage.style.display='none';
    footer.style.display="none";
  }else {
    notFound.style.display='none';
    footer.style.display="flex"
    displayCartPage(shoppingCartItems);
  }
  clear(storeProducts);
})
const onclickProduct=element=>{
     clear(cartProducts);
       for(let i=0;i<element.length;i++){
           element[i].addEventListener("click",()=>{
            notFound.style.display='none';
            footer.style.display="flex";
            productsPreview.style.display='none';
            arr=element[i].innerHTML;
            homePageProducts=computerStore.filter(element=>element.name==arr);
            clear(storeProducts);
            displayProduct(homePageProducts)})};
}
const onclickIconProducts=element=>{
  clear(cartProducts);
    for(let i=0;i<element.length;i++){
        element[i].addEventListener("click",()=>{
          console.log(element[i].alt);
          const values = element[i].alt
          $(".loading").fadeIn(()=>$(".loading").fadeOut(1000));
          for (let i = 0; i < navLinks.length; i++){    
            if(navLinks[i].innerHTML=== values){              
              changingStyle(navLinks,i,"transparent","#033472")
            }else {
              changingStyle(navLinks,i,"transparent","#04090f")
            }
          }
          productsPreview.style.display='none';
          homeSlider.style.display='none';
         arr=element[i].alt;
         homePageProducts=computerStore.filter(element=>element.name==arr);
         clear(storeProducts);
         displayProduct(homePageProducts)})};
}
houseIconLink.addEventListener("click",()=>{
 $(".loading").fadeIn(()=>$(".loading").fadeOut(1000));
  displayPage( '' , productSearch , cartPage , notFound )
  productsPreview.style.display='block';
  homeSlider.style.display ='block';
  storeProducts.innerHTML = "";

  for (let i = 0; i < navLinks.length; i++){    
    changingStyle(navLinks,i,"transparent","#04090f");
  }
  displayProduct(homePageProducts=computerStore);
})
checkOutBtn.addEventListener("click",()=>{
    cartPage.style.display = 'none';
     if(totalPrice.innerHTML!=='total price : 0 EGP'){ 
    checkOutPage.style.display='flex' ;
  }
}) 

searchIcon.onclick=()=>{
  let values=productSearchField.value;
  homeSlider.style.display ='none'
  
  $(".loading").fadeIn(()=>$(".loading").fadeOut(1000));
 
if(values==="mouse"||values==="ram"||values==="computer monitor"||values==="keyboard"
  ||values==="mather board"||values==="head phones"||values==="graphics card"||values==="hard disk"){
      homePageProducts=computerStore.filter(element=>element.name==values);
      clear(storeProducts)
      displayProduct(homePageProducts)
  }
    
  else if(values!==""){
   clear(storeProducts)
   productSearch.style.display='none';
   notFound.style.display="flex";
   footer.style.display='none'
  }

  for (let i = 0; i < navLinks.length; i++){    
    if(navLinks[i].innerHTML===values){
      changingStyle(navLinks,i,"transparent","#033472")
    }else {
      changingStyle(navLinks,i,"transparent","#04090f")
    }
  }

  clearInputs();
}
searchModalBtn.addEventListener("click",()=>{
  $(".loading").fadeIn(()=>$(".loading").fadeOut(1000));

  let values = productModalField.value; 
  let valueSearch = priceModalField.value;
  
    cartPage.style.display ='none';
  for (let i = 0; i < navLinks.length; i++){    
      if(navLinks[i].innerHTML=== values){
        changingStyle(navLinks,i,"transparent","#033472")
      }else {
        changingStyle(navLinks,i,"transparent","#04090f")
      }
  }   
  clear(storeProducts)

  if(values!=='' && valueSearch!==''&&productModalField.value==="mouse"||productModalField.value==="ram"||productModalField.value==="computer monitor"||productModalField.value==="keyboard"||productModalField.value==="mather board"||productModalField.value==="head phones"
    ||productModalField.value==="graphics card"||productModalField.value==="hard disk"){  

    homePageProducts=computerStore.filter((element)=>element.price==priceModalField.value&&element.name==productModalField.value);
    searchModal.style.display='none';
    displayProduct(homePageProducts)
  
    if(homePageProducts.length===0){
      displayPage( notFound , '' , productSearch , footer );
    }else displayPage( '' , productSearch , notFound , productsPreview , homeSlider , footer );
  }
  
  else{
     displayPage( notFound , '' , productSearch , searchModal , productsPreview );
     footer.style.display="none";
  }
  clearInputs();
})

// Display HomePage Function
mainHomeLink.addEventListener("click",()=>{
  $(".loading").fadeIn(()=>$(".loading").fadeOut(1000));
  displayPage( homeSlider , '' , signUpPage , logInPage); 
  storeProducts.style.display ='flex';
  footer.style.display='flex';
  changeStyle( signUpLink , mainHomeLink , logInLink )});

// Display LoginPage Function
logInLink.addEventListener("click", ()=>displayPage(logInPage , '' , signUpPage , storeProducts , homeSlider , footer ));
haveAccountBtn.addEventListener("click", ()=>{
  displayPage(logInPage , '' , signUpPage , storeProducts , homeSlider , footer );
  logInModal.style.display="none";
})

// Display SignInPage Function
signUpLink.addEventListener("click", ()=>displayPage(signUpPage , '' , logInPage , storeProducts , homeSlider , footer ));
registerBtn.forEach((button)=>{
  button.addEventListener("click",()=>displayPage(signUpPage , '' , logInPage , storeProducts , homeSlider , footer ));
})

// Open Model Funcion
sliderModal.addEventListener('click',e=>{if(e.target!=sliderModalItem&&e.target!=sliderModalPrevIcon&&e.target!=sliderModalNextIcon)getClose()});

// Search A item Function
searchModal.addEventListener('click',e=>{ if(e.target!=priceModalField&e.target!=productModalField &&e.target!=searchModalBtn){
searchModal.style.display='none';
}
})



logInModal.addEventListener("click", (e)=>{
  /*
  e.target=== logInContentLayer  &&e.target!=loginTextLayer&&e.target!=emailLayer&&
  e.target!=passwordLayer&&e.target!=logInBtnLayer&&e.target!=errorLayer
   */

if(e.target === logInModal){
  logInPassword.forEach((password)=> password.value=''); 
  logInEmail.forEach((email)=> email.value='');   
  $("#logIn-modal").css("display","none"); 
}}) 

/*
  logInModal.addEventListener("click", ()=>{
    $("#logIn-modal").css("display","none");
  })
    */
sliderModalCloseIcon.addEventListener("click",getClose);
sliderModalNextIcon.addEventListener("click",getNext);
sliderModalPrevIcon.addEventListener("click",getPrev);


// * run functions *
onclickProduct(navLinks);
onclickIconProducts(productPreviewImage);

// save data in localStorage
if(JSON.parse(localStorage.getItem("products"))===null) {
  displayProduct(ShowSomeProducts);
} 

if(JSON.parse(localStorage.getItem("itemsCartsShopping")!==null)){
 const totalProductsCounter=shoppingCartItems.reduce((totalNumberOfItems, CartItem) => {
   return totalNumberOfItems + CartItem.count    
  }, 0);
  
  totalProductsCounter!==0 ? productsCounter.innerHTML= totalProductsCounter : ''
  totalProductsCounter!==0 ?shoppingCartLink.style.color="#052a74ff" : shoppingCartLink.style.color="#000";
}  
