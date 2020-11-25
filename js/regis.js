function validate(){
     var username = document.getElementById("username");
     var password = document.getElementById("password");
    
     
     if(username.value.trim()=='')
     {
          alert("Blank username");
          username.style.border="solide 2px red";
          return false;

     }
     else if(password.value.trim()=='')
     {
          alert("Blank Password");
          return false;
     }
     else if(password.value.trim().length>8);{
     alert("password to short");
     return false;
     }
     
}