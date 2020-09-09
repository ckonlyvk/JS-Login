//Khi nhấn vào nút sign up
function onSignUp() {
    var signUp = document.getElementById("signUp");
    var logIn = document.getElementById("logIn");
    var divSignUp = document.getElementById("box_signUp");
    var divLogIn = document.getElementById("box_logIn");
    //Đổi màu nút
    signUp.style.backgroundColor = "#AAAAAA";
    logIn.style.backgroundColor = "#DDDDDD";

    //Hiện box form đăng ký 
    divSignUp.style.display = "block";
    divLogIn.style.display = "none";
}

//Khi nhấn vào nút log in 
function onLogIn() {
    var signUp = document.getElementById("signUp");
    var logIn = document.getElementById("logIn");
    var divSignUp = document.getElementById("box_signUp");
    var divLogIn = document.getElementById("box_logIn");

    //Đổi màu nút
    signUp.style.backgroundColor = "#DDDDDD";
    logIn.style.backgroundColor = "#AAAAAA";

    //Hiện box form đăng nhập
    divSignUp.style.display = "none";
    divLogIn.style.display = "block";
}

function CheckEmptyInput(id) {
    var tag = document.getElementById(id);
    if (tag.value == "")
        return true;
    return false;
}

function CheckName(id_name) {
    var name = document.getElementById(id_name);
    if (name.value.length <= 30)
        return true;
    return false;
}

function CheckMail(id_mail) {
    var mail = document.getElementById(id_mail);
    var regex = /^([\w\.])+@([a-zA-Z0-9\-])+\.([a-zA-Z]{2,4})(\.[a-zA-Z]{2,4})?$/;
    if (mail.value.match(regex)) {
        return true;
    }
    return false;
}

function CheckAge(id_age) {
    var tagage = document.getElementById(id_age);
    age = tagage.value;
    if (age == "" || isNaN(age) || parseInt(age) < 18 || parseInt(age) > 40)
        return false;
    return true;
}

function CheckSignUp() {
    var notification = document.getElementById("notification1");

    notification.innerHTML = "";
    notification.style.display = "block";

    if (CheckEmptyInput("inp_name1") || !CheckName("inp_name1")) {
        notification.innerHTML += "Tên không được bỏ trống và không quá 30 ký tự<br>";
    }
    if (CheckEmptyInput("inp_password1"))
        notification.innerHTML += "Mật khẩu không được bỏ trống<br>";
    if (!CheckMail("inp_email")) {
        notification.innerHTML += "Mail không hợp lệ <br>";
    }
    if (!CheckAge("inp_age")) {
        notification.innerHTML += "Tuổi phải là số, lớn hơn 17 và nhỏ hơn 41<br>";
    }
    if (CheckEmptyInput("dropdown")) {
        notification.innerHTML += "Nghề nghiệp không được bỏ trống";
    }

    if (notification.innerHTML == "") {
        notification.style.display = "none";
        return true;
    }
    return false;
}

function CheckLogIn() {
    var notification = document.getElementById("notification2");

    notification.innerHTML = "";
    notification.style.display = "block";

    if (CheckEmptyInput("inp_name2") || !CheckName("inp_name2")) {
        notification.innerHTML += "Tên không được bỏ trống và không quá 30 ký tự<br>";
    }
    if (CheckEmptyInput("inp_password2"))
        notification.innerHTML += "Mật khẩu không được bỏ trống";


    if (notification.innerHTML == "") {
        notification.style.display = "none";
        return true;
    }
    return false;
}