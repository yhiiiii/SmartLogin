// var list=JSON.parse(localStorage.getItem('users'));

// console.log(list);
// var x=document.getElementById('userpassword');
// var y=document.getElementById('Email');
// var c=document.getElementById('login');


// login.addEventListener('click',function(){
//     if(Check()==true){
//         console.log("welcome")
//     }
//     else{
//         console.log('wrong');
//     }
// })


// function Check(){
//     for(var i=0;i<list.length;i++){
      
//         if(list[i].email==y.value && list[i].password==x.value){
//           return true;
//         }
//     }
// }

// Check();




var logout=document.getElementById('logout');
logout.onclick=function(){
    window.location.href='././index.html';
}