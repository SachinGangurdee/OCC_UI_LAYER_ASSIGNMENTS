
function validate(event){
    const firstName=document.getElementById("firstName").value;
    const lastName=document.getElementById("lastName").value;
    const city=document.getElementById("city").value;
    if(firstName==""){
        const errFirstName=document.getElementById("errFirstName");
        errFirstName.innerText="Please enter the First Name";
        event.preventDefault();
        return false;
    }else if(lastName==""){
            const errLastName=document.getElementById("errLastName");
            errLastName.innerText="Please enter the Last Name";
            event.preventDefault();
            return false;
    }else if(city==""){
        const errCity=document.getElementById("errCity");
        errCity.innerText="Please enter the City";
        event.preventDefault();
        return false;
    }
    
    return true;
} 