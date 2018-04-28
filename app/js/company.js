'use strict';
import companyTotal from './section_1_companyTotal.js';
import companyList from './section_2_companyList.js';
import createDiagram from './section_3_createDiagram.js';
import diagramFunc from './section_3_diagramFunction.js';
import partners from './section_5_partners.js';
import sortType from './section_5_sortFunction';

function company() {

    let companyURL = 'http://codeit.pro/codeitCandidates/serverFrontendTest/company/getList';
    let company = [];

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

        companyTotal(company.length);

        companyList(company);
        $('#company-list-scrollbox').children('p').on('click', company, partners);

        createDiagram(checkCountryCount());
        $('#company-canvas-legend a').on('click', company, diagramFunc);
        //Кнопка скрывает список стран и включает диаграмму
        $('#button-back').on('click', returnDiagram);

        $('#company-partners__filters a').on('click', sortType);
    }

    //Функционал кнопки, которая скрывает список стран и показывает диаграмму
    function returnDiagram(e) {
        e.preventDefault();
        $('#company-location-scrollbox').hide().empty();
        $('.company-canvas-container').show();
        $('#company-canvas-legend').show();
        $('#button-back').hide();
    }

    /*Вспомогательные функции*/

    //Создаю объект, который хранит количество компаний в каждой стране
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