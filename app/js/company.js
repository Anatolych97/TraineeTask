'use strict';
import createChart from './createChart.js';

function company() {

    let companyURL = 'http://codeit.pro/codeitCandidates/serverFrontendTest/company/getList';
    let company = [];
    let backButton = $('#button-back'); //Кнопка скрывает список стран и включает диаграмму
    $.ajax({
        type: 'POST',
        url: companyURL,
        success: function (data) {
            if (data.status === 'OK') {
                company = data.list;
                CompanyShow();
            }
            else
                alert('Не удалось получить данные о компаниях');
        },
        error: function (data) {
            console.log('Error: ' + data);
        }
    });

    //Точка входа после загрузки данных
    function CompanyShow() {
        $('.preloader-wrap').hide();
        $('.section__content').show();
        fillCompanyTotal();
        fillCompanyList();
        createChart(checkCountryCount(), showCompanyFromCountry);
        backButton.on('click', returnDiagram);
    }

    //Функционал кнопки, которая скрывает список стран и показывает диаграмму
    function returnDiagram(e) {
        e.preventDefault();
        $('#company-location-scrollbox').hide().empty();
        $('.company-canvas-container').show();
        $('#company-canvas-legend').show();
        $('#button-back').hide();
    }

    //Список, который открывается после нажатия на легенду диаграммы
    function showCompanyFromCountry() {

        let name = $(this).text(); //Текст ссылки, которая указывает на страну
        let list = $('#company-location-scrollbox');

        list.append(`<p>${name}</p>`);
        for (let i = 0; i < company.length; i++) {
            if (company[i].location.name === name) {
                list.append('<p>' + company[i].name + '</p>');
            }
        }

        $('.company-canvas-container').hide();
        $('#company-canvas-legend').hide();
        $('#button-back').show();
        list.show();
    }

    function fillCompanyTotal() {
        $('.company-total__count').text(company.length);
    }

    function fillCompanyList() {
        let list = $('#company-list-scrollbox');
        for (let i = 0; i < company.length; i++) {
            list.append('<p><a>' + (company[i].name) + '</a></p>');
            if (i % 2 === 0)
                list.children().last().addClass('company-list_bgc');
        }
    }

    function checkCountryCount() {
        let countryCount = {};
        for (let key in company) {
            if (company[key].location.name in countryCount) {
                countryCount[company[key].location.name] += 1;
            }
            else {
                countryCount[company[key].location.name] = 0;
            }
        }
        return countryCount;
    }
}

export default company;