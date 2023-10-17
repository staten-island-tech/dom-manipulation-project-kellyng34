

const DOMSelectors= {
    form: document.querySelector("#form"),
    firstName: document.querySelector("#firstName"),
    lastName: document.querySelector("#lastName"),
    class: document.querySelector("#class"),
    firstNameoutput: document.querySelector("#firstNameoutput"),
    lastNameoutput: document.querySelector("#lastNameoutput"),
    classoutput: document.querySelector("#classoutput"),
    //select the text box
    //select all the h2 in one property
};
/* console.log(DOMSelectors.firstName); */
DOMSelectors.form.addEventListener("submit", function(event){
    event.preventDefault();
    const firstName = DOMSelectors.firstName.value
    const lastName = DOMSelectors.lastName.value
    const student_class = DOMSelectors.class.value
    DOMSelectors.firstNameoutput.innerText = firstName
    DOMSelectors.lastNameoutput.innerText = lastName
    DOMSelectors.classoutput.innerText = student_class



});

console.log(DOMSelectors.lastName);
DOMSelectors.form.addEventListener("submit", function(event){
    event.preventDefault();

});

console.log(DOMSelectors.class);
DOMSelectors.form.addEventListener("submit", function(event){
    event.preventDefault();

});


