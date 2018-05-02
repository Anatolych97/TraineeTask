'use strict';
import companyTotal from './section_1_companyTotal.js';
import companyList from './section_2_companyList.js';
import createDiagram from './section_3_createDiagram.js';
import diagramFunc from './section_3_diagramFunction.js';
import sortType from './section_5_sortButtons.js';
import {partnersList} from './section_5_partners.js';

function company() {

    let companyURL = 'http://codeit.pro/codeitCandidates/serverFrontendTest/company/getList',
        company = [];

    $.ajax({
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
        //Привязывю отображение партнеров по нажатию на элемент списка
        $('#company-list-scrollbox').children('li').on('click', company, partnersList);

        createDiagram(checkCountryCount());
        $('#company-canvas-legend a').on('click', company, diagramFunc);
        //Кнопка скрывает список стран и включает диаграмму
        $('#button-back').on('click', returnDiagram);
        sortType();
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