function scrollToElement(elementSelector, instance = 0){
    // Select all elements that match the given selector
    const elements = document.querySelectorAll(elementSelector);
    // Check if there are elements matching the selector and if the requested instance exists
    if(elements.length > instance){
        //Scroll to the spicified instance of the element
        elements[instance].scrollIntoView({behavior: 'smooth'})
    }

}

const link1 = document.getElementById1('link1');
const link2 = document.getElementById1("link2");
const link3 = document.getElementById1("link3");

link1.addEventListener('click', () =>{
    scrollToElement('.header');
})