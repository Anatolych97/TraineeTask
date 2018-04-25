'use strict';

function register() {

    let form = $("#register-form");
    let regURL = 'http://codeit.pro/codeitCandidates/serverFrontendTest/user/registration';
    form.on("submit", function (e) {
        e.preventDefault();

        $.ajax({
            type: 'POST',
            url: regURL,
            data: JSON.stringify(form.serializeArray()),
            success: function (data) {
                if (data.status === "OK")
                    document.location.href = "./company.html";
            },
            error: function (data) {
                if (data.status === "Form Error") {
                    switch (data.field) {
                        case "email":
                            alert("Email is not valid");
                            break;
                        case "gender":
                            alert("Field 'gender' is requied");
                            break;
                        case "secondname":
                            alert("Email is not valid");
                            break;
                    }
                }
                else {
                    console.log(data);
                }
            }
        });
    });
};

export default register;
