$(document).ready(() => {
    $("#mainContainer").css({ "background": "url('../images/Register.jpg') no-repeat", "background-size": "cover", "background-position": "center" })
});

$("#registerBtn").on('click', () => {
    let regForm = document.getElementById("regForm");
    if (regForm.checkValidity()) {
        if (!fnValidatePass()) { return; }
        fnSendData();
    } else {
        regForm.reportValidity();
    }
});

function fnValidatePass() {
    let isSamePass = fnGetValById("pass") === fnGetValById("rPass") ? true : false;
    if (!isSamePass) {
        let passwords = $("#pass,#rPass");
        if (!passwords.next().is('p'))
            passwords.after("<p style='color:red' class='passWarning'>Password must be same.</p>")
    }
    else { $(".passWarning").hide(); }
    return isSamePass;
}
function fnGetValById(id) { return $("#" + id).val(); }

function fnGetData() {
    let registerModel = {};
    registerModel.Name = fnGetValById("name");
    registerModel.UserId = fnGetValById("uId");
    registerModel.Gender = fnGetValById("gender");
    registerModel.Email = fnGetValById("emailId");
    registerModel.DOB = fnGetValById("dob");
    registerModel.Password = fnGetValById("pass");
    return registerModel;
}

function fnSendData() {
    let ajaxObj = {};
    ajaxObj.url = "/Register/GetRegisterData";
    ajaxObj.data = fnGetData();
    ajaxObj.success = function (response) {
        window.location.href = response.message;
    }
    __Ajax(ajaxObj);
}