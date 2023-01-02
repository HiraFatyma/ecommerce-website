// const categories =[...card set(product.map((item)=>
//     {return item}))]
//     let i=0;
//     document.getElementById('root').innerHTML=categories.map((item)=>
//     {
//         document.getElementsByClassName('money')=var (price)
//     })
var found = false;
function adduser() {
    var useremail = document.forms["clientform"]['femail'].value;
    var pass = document.forms['clientform']['fpass'].value;

    var usererror = document.getElementsByClassName('username-error')[0];
    var paseror = document.getElementsByClassName('pass-error')[0];


    if (useremail == null || useremail == '') {
        usererror.innerHTML = "email field can't be empty"
        // return false;
    }
    if (pass == null || pass == '') {
        paseror.innerHTML = "password can't be empty"
        return false;
    }

    var user = {
        useremail: document.forms["clientform"]['femail'].value,
        pass: document.forms['clientform']['fpass'].value,
    }
    var found = false;
    var data = (JSON.parse(localStorage.getItem("user")));
    if (data) {
        for (var i = 0; i < data.length; i++) {
            console.log(data);
            if (data[i].email1 == user.useremail) {
                if (data[i].pass1 == user.pass) {
                    found = true;
                    localStorage.setItem("UserName", data[i].username)
                    alert("user logged in")
                    break;
                }
            }

        }
        if (!found) {
            alert("user not found please signup")
        }
    }
}



function signupuser() {
    var username = document.forms["cform"]["fname"].value;
    var email1 = document.forms["cform"]["fsemail"].value;
    var phonenum = document.forms["cform"]["fphone"].value;
    var pass1 = document.forms["cform"]["fspass"].value;
    var pass2 = document.forms["cform"]["fcpass"].value;
    var error = document.getElementsByClassName('error-type')[0];
    var error1 = document.getElementsByClassName('error-type1')[0];
    var error2 = document.getElementsByClassName('error-type2')[0];
    var error3 = document.getElementsByClassName('error-type3')[0];
    var error4 = document.getElementsByClassName('error-type4')[0];

    if (username < 3 && username == '') {
        error.innerHTML = "Fill out the user name"
        //   return false;
    }
    if (phonenum == '' && phonenum < 11) {
        error1.innerHTML = "fill the correct phone number"
        // return false;

    }
    if (email1 == '') {
        error2.innerHTML = "fill out the email"
        // return false;

    }
    if (pass1 == '') {
        error3.innerHTML = "fill the pass word field"
        // return false;

    }
    if (pass2 == '' || pass1 !== pass2) {
        error4.innerHTML = "fill the correct password"
        return false;
    }

    var user = {
        username: document.forms["cform"]["fname"].value,
        email1: document.forms["cform"]["fsemail"].value,
        phonenum: document.forms["cform"]["fphone"].value,
        pass1: document.forms["cform"]["fspass"].value,
        pass2: document.forms["cform"]["fcpass"].value,
    }

    var data = JSON.parse(localStorage.getItem("user")) || [];
    if (data) {
        for (var i = 0; i < data.length; i++) {
            if (data[i].email1 == user.email1) {
                found = true;
            } 
        }
    }
    if(!found) {
        data.push(user);
        localStorage.setItem("user", JSON.stringify(data));
    } else {
        alert("User Already Exist")
    }






}



