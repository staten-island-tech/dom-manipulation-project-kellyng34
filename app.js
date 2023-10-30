

const DOMSelectors = {
    form: document.querySelector("#form"),
    firstName: document.querySelector("#firstName"),
    lastName: document.querySelector("#lastName"),
    class: document.querySelector("#student_class"),
    pic: document.querySelector("#pic"),
    firstNameoutput: document.querySelector("#firstNameoutput"),
    lastNameoutput: document.querySelector("#lastNameoutput"),
    classoutput: document.querySelector("#classoutput"),
    picoutput: document.querySelector("#picoutput"),
    box: document.querySelector("#box"),
    button: document.querySelector("#button"),
};

/* console.log(DOMSelectors.firstName); */
let count=0;
DOMSelectors.form.addEventListener("submit", function(event){
    event.preventDefault();
    const firstName = DOMSelectors.firstName.value
    const lastName = DOMSelectors.lastName.value
    const student_class = DOMSelectors.class.value
    const pic = DOMSelectors.pic.value
    function divCreater(){
        DOMSelectors.container.insertAdjacentHTML(
        "afterend",
        `<div id=box><p id=firstNameoutput>${firstName}</p><p id=lastNameoutput>${lastName}</p><p id=classoutput>${student_class}</p><img id=picoutput>${pic}</img</div><button id="button">Clear Profile</button>`
        )};
        divCreater()
       
    });

   
function output(firstName, lastName, pic) {
    document.getElementById("firstNameoutput").innerText = firstName
    document.getElementById("lastNameoutput").innerText = lastName
    document.getElementById("classoutput").innerText = student_class
    document.getElementById("picoutput").src = pic
}


function remove(){
    let btns = document.querySelectorAll("button");
     btns.forEach((button)=> 
        button.addEventListener("click",function(remove){
      })
    );
}
remove();


