

const DOMSelectors= {
    form: document.querySelector("#form"),
    firstName: document.querySelector("#firstName"),
    lastName: document.querySelector("#lastName"),
    class: document.querySelector("#class"),
    pic: document.querySelector("#pic"),
    firstNameoutput: document.querySelector("#firstNameoutput"),
    lastNameoutput: document.querySelector("#lastNameoutput"),
    classoutput: document.querySelector("#classoutput"),
    picoutput: document.querySelector("#picoutput"),
    box: document.querySelector("#box"),
    button: document.querySelector("#button")
};
/* console.log(DOMSelectors.firstName); */
function create(){

    const Profile
    const firstName = DOMSelectors.firstName.value
    const lastName = DOMSelectors.lastName.value
    const student_class = DOMSelectors.class.value
    const pic= DOMSelectors.pic.value
    return {}
};
    function divCreater(){
    form.insertAdjacentHMTL(
        "afterend",
        "<div id=box><p id=firstNameoutput></p><p id=lastNameoutput></p><img id=picoutput></img</div><button id=button>Clear Profile</button"
    );


    DOMSelectors.firstNameoutput.innerTexts = firstName
    DOMSelectors.lastNameoutput.innerText = lastName
    DOMSelectors.classoutput.innerText = student_class
    document.getElementById("picoutput").src = pic

}; 

