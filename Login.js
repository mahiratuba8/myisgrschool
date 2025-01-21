function validation(E){
    E.preventDefault()
    const email=document.getElementById("email").value
    const password=document.getElementById("password").value
    const genderMale=document.getElementById("male").checked
    const genderFemale=document.getElementById("female").checked
    const grade=document.getElementById("grade").value
    const error=document.getElementById("error");
    let err="";
    if(email===""){
        err="please enter an email."
        error.style.color="red"
    }
    else if(!email.endsWith("@student.isgr.se")){
    err="ISGR student email only"
    error.style.color="blue"
    }

    else if (password===""){
        err="password must be atleast 8 characters"
        error.style.backgroundColor="yellow"
    }
    else if (password.length < 8){
        err="password must be atleast 8 characters"
    }
    else if(!genderMale && !genderFemale ){
        err="Please select your gender"
    }
    else if (grade === ""){
        err="Please select your grade"
        error.style.backgroundColor="orange"
    }
    else{
        err="log in successful";
        window.location.href="index.html"
        error.style.color="green"   
        return true;
    }
    error.innerText=err
    return false;
}
