function sub() {
    // console.log("test");
    let uname = document.querySelector("#uname").value;
    let pwd = document.querySelector("#pwd").value;
    let email = document.querySelector("#email").value;

    uname = uname.trim();
    pwd = pwd.trim();
    email = email.trim();

    if (email == "^[a-z0-9]+[@]\w+{2,3}$") {
        window.alert("Please enter mandetory fields");
        return;
    }

    if (uname == "" || pwd == "" || email == "") {
        window.alert("Please enter mandetory fields");
        return;
    }


    let dispBox = document.querySelector("#clone").cloneNode(true);

    dispBox.removeAttribute("id");
    dispBox.style.visibility = "visible";
    //dispBox.children[0]

    dispBox.children[0].innerHTML = dispBox.children[0].innerHTML + uname;
    dispBox.children[1].innerHTML = dispBox.children[1].innerHTML + pwd;
    dispBox.children[2].innerHTML = dispBox.children[2].innerHTML + email;

    let parentEle = document.querySelector("#clone").parentElement;

    //console.log(parentEle);
    parentEle.insertBefore(dispBox, parentEle.firstChild);

    document.querySelector("#uname").value = "";
    document.querySelector("#pwd").value = "";
    document.querySelector("#email").value = ""



}