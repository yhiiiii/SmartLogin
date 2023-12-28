var username=document.getElementById('username');
var userpassword=document.getElementById('userpassword');
var useremail=document.getElementById('Email');

var login=document.getElementById('login');
var register=document.getElementById('register');
var signup=document.querySelector('#signup')
var signin=document.getElementById('signin');
var inputs=document.querySelector('.smartlogin');
var alertdanger=document.querySelector('.alert-danger');
// var logout=document.getElementById('logout');
var successmsg=document.querySelector('.successmsg');
var faildmsg=document.querySelector('.faildmsg');


var msg=document.querySelector('.msg');


var userslist=[];

if(localStorage.getItem('users') !=null){
    userslist=JSON.parse(localStorage.getItem('users'));
}


signup.addEventListener("click",function(){
   
        changeitem();
   
   
})

function changeitem(){
    login.classList.add('d-none');
    signup.classList.add('d-none');
    signin.classList.remove('d-none')
    username.classList.remove('d-none')
    register.classList.remove('d-none');
    alertdanger.classList.add('d-none');
}

register.addEventListener('click',function(){


    if(validation()){
        var user={
            name:username.value,
            email:useremail.value,
            password:userpassword.value
        }
        userslist.push(user);
    
        localStorage.setItem('users',JSON.stringify(userslist));
        faildmsg.classList.add('d-none');
        successmsg.classList.remove('d-none')
        setTimeout(() => {
            successmsg.classList.add('d-none')
            signupClearValues();

        }, 2000);
    
        
    }
    else{
     
        faildmsg.classList.remove('d-none');
        successmsg.classList.add('d-none')
    }


   

})

function validation(){

    if(username.value !='' &&useremail.value !='' && userpassword.value !='' ){
         return true;
    }
}

function signupClearValues(){
    username.value="";
    useremail.value="";
    userpassword.value="";
    register.classList.add('d-none');
    username.classList.add('d-none');
    login.classList.remove('d-none');
    signup.classList.add('d-none');
    signin.classList.remove('d-none');
    alertdanger.classList.add('d-none');

}

// function signInClearValue(){
//     username.value="";
//     useremail.value="";
//     userpassword.value="";
//     register.classList.add('d-none')
// }

signin.addEventListener('click',function(){
    signin.classList.add('d-none');
    signup.classList.remove('d-none');
    username.classList.add('d-none');
    register.classList.add('d-none');
    login.classList.remove('d-none');
    useremail.classList.remove('d-none');
})


login.addEventListener('click',function(){
  
var msg=document.querySelector('.msg');
    if(Check()){
        window.location.href='././home.html';

       
    }
    else{
        alertdanger.classList.remove('d-none');
    }
})


function Check(){
    for(var i=0;i<userslist.length;i++){
      
        if(userslist[i].email==useremail.value && userslist[i].password==userpassword.value){

          return true;
        }
    }
}




(function (){
    var inputs=document.querySelectorAll('input');
    console.log(inputs);
    

    for(i=0;i<inputs.length;i++){
        inputs[i].addEventListener('focus',function(){
            faildmsg.classList.add('d-none');
        })
    }
}());

// logout.addEventListener('click',function(){
// console.log('welcome');
// window.location.href='././index.html';
// })