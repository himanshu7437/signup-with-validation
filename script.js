function allGoodToGO() {
    let emailAns = checkEmail();
    let passwordAns = checkPassword();

    if(emailAns && passwordAns) {
        document.querySelector(".green").style.display = "block"
    } else {
        document.querySelector(".green").style.display = "none"
    }
}

function checkEmail() {
    let emailVal = document.querySelector(".email").value;
    let para1 = document.querySelector("#para1")

    if(emailVal.length > 2  && emailVal.includes('@') && emailVal.includes(".")) {
        para1.style.display = "none";
        return true;
    } else {
        para1.style.display = "block";
        return false;
    }
}

function checkPassword() {
    let passwordVal = document.querySelector(".password").value;
    let para2 = document.querySelector("#para2")

    if(passwordVal.length > 7) {
        para2.style.display = "none";
        return true;
    } else {
        para2.style.display = "block";
        return false;
    }
}

function confirmSubmit(event) {
    event.preventDefault();
    let ans = window.confirm("Do you want to Submit?");

    if(ans) {
        alert("form submitted");
    } else {
        window.location.reload();
    }
}