

const DOMSelectors = {
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
function create() {

    const Profile = {
        firstName: DOMSelectors.firstName.value,
        lastName: DOMSelectors.firstName.value,
        class: DOMSelectors.class.value,
        pic: DOMSelectors.pic.value
    }
    return Profile
};
function divCreater() {
    form.insertAdjacentHMTL(
        "afterend",
        `<div id=box><p id=firstNameoutput>${firstName}</p><p id=lastNameoutput>${lastName}</p><img id=picoutput>${pic}</img</div><button id="btn">Clear Profile</button>`
    );

}

divCreater();
function output(firstName, lastName, pic) {
    document.getElementById("firstNameoutput").innerText = firstName
    document.getElementById("lastNameoutput").innerText = lastName
    document.getElementById("picoutput").src = pic
}
output(Profile.firstName, Profile.lastName, Profile.pic)

};

