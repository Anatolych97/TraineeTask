'use strict';
let form = $("#register-form");
let regURL = 'http://codeit.pro/codeitCandidates/serverFrontendTest/user/registration';
form.on("submit", function (e) {
   e.preventDefault();

    $.ajax({
        type: 'POST',
        url: regURL,
        data: JSON.stringify(form.serializeArray()),
        dataType: "json",
        contentType: "application/json",
        success: function(data) {
            if(data.status === "OK")
                document.location.href += "company";
            else if(data.status === "Form Error")
            {
                switch (data.field)
                {
                    case "email": alert("Email is not valid"); break;
                    case "gender": alert("Email is not valid"); break;
                    case "secondname": alert("Email is not valid"); break;
                }
            }

        },
        error: function (data) {
            alert(data);
        }


    });
});

function ValidateName() {

}