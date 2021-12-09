document.querySelector("#link").addEventListener("click", () => {

    const features = "menubar=no, scrollbars=yes, width=500, height=500, status=no, toolbar=no"
    const myWindow = window.open("https://www.google.com/",'', features);
    myWindow.resizeTo(300, 300)
    myWindow.moveTo(500, 200)

    document.querySelector("#closeLink").addEventListener("click", () => {
        myWindow.close();
    })

})