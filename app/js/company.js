'use strict';

let preloaders = $(".section-loader-circle");

window.onload = function() {
    $.ajax({
        type: 'POST',
        url: '/company',
        dataType: "json",
        contentType: "application/json",
        success: function(data) {
            console.log(data);
        },
        error: function (data) {
            alert(data);
        }

    });
};
