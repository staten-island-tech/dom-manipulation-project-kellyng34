

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
    //select the text box
    //select all the h2 in one property
};
/* console.log(DOMSelectors.firstName); */
DOMSelectors.form.addEventListener("submit", function(event){
    event.preventDefault();
    const firstName = DOMSelectors.firstName.value
    const lastName = DOMSelectors.lastName.value
    const student_class = DOMSelectors.class.value
    const pic= DOMSelectors.pic.value
    DOMSelectors.firstNameoutput.innerTexts = firstName
    DOMSelectors.lastNameoutput.innerText = lastName
    DOMSelectors.classoutput.innerText = student_class
    document.getElementById("picoutput").src = pic

});
