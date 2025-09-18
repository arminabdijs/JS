// This method uses a button to perform an operation on the page, which can be anything, and on the html page, this function is called by the onclick attribute, which is called Events for short.

let h1Elem=document.getElementById("title")
function changeH1Color() {
    h1Elem.style.color="rgb(0,255,255)"
}

function backChangeH1Color() {
    h1Elem.style.color="rgb(236, 5, 132)"
}
