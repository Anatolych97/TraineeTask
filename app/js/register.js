let form = $("#register-form");

form.on("submit", function (e) {
   e.preventDefault();

    $.ajax({
        type: 'POST',
        url: '/',
        data: JSON.stringify(form.serializeArray()),
        dataType: "json",
        contentType: "application/json",
        success: function(data) {
            location.href += "company";
        },
        error: function (data) {
            alert(data);
        }


    });
});

function ValidateName() {

}