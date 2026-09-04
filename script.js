function checkform (){
    let name = document.getElementById("name")?.value || "";
    let email = document.getElementById("email")?.value || "";
    let phone= document.getElementById("phone")?.value || "";
    let subject= document.getElementById("subject")?.value || "";
    if (name.trim() === "" || email.trim() ==="" || phone.trim() === " " || subject.trim() ===" "){
        alert("Please fill all field required");
    }
    else{
        alert("Form is correct");
    }
}