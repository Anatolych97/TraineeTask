'use strict';
let companyURL = 'http://codeit.pro/codeitCandidates/serverFrontendTest/company/getList';
let newsURL = 'http://codeit.pro/codeitCandidates/serverFrontendTest/news/getList';

let company = [];
let news = [];

$.ajax({
    type: 'POST',
    url: companyURL,
    success: function(data) {
        if(data.status === "OK")
        {
            company = data.list;
            CompanyShow();
        }
        else
            alert("Не удалось получить данные о компаниях");
    },
    error: function (data) {
        console.log("Error: " + data);
    }
});
$.ajax({
    type: 'POST',
    url: newsURL,
    success: function(data) {
        if(data.status === "OK")
        {
            news = data.list;
            NewsShow();
        }
        else
            alert("Не удалось получить свежие новости");
    },
    error: function (data) {
        console.log("Error: " + data);
    }
});



function CompanyShow() {
    $(".preloader-wrap").hide();
    console.log(company);
    $(".company-total__count").text(company.length);

    for(let i = 0; i < company.length; i++) {
        $("#company-list__scrollbox").append("<p>" + (company[i].name) + "</p>");
    }

}
function NewsShow() {
    $(".preloader-wrap_news").hide();
}
