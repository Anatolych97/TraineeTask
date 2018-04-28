'use strict';

function register() {
    let form = $("#register-form"),
        regURL = 'http://codeit.pro/codeitCandidates/serverFrontendTest/user/registration';
    form.on("submit", function (e) {
        e.preventDefault();

        $.ajax({
            type: 'POST',
            url: regURL,
            data: JSON.stringify(form.serializeArray()),
            success: function (data) {
                if (data.status === "OK")
                    document.location.href = "./company.html";
                else {
                    switch (data.field) {
                        case "name":
                            alert("Field 'name' is required");
                            break;
                        case "email":
                            alert("Email is not valid");
                            break;
                        case "gender":
                            alert("Field 'gender' is requied");
                            break;
                        case "secondname":
                            alert("Field 'secondname' is required");
                            break;
                    }
                }
            },
            error: function () {
                alert("Ooops! Something wrong!");
            }
        });
    });
}

export default register;
