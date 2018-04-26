'use strict';
import createChart from './createChart.js';
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

    function CompanyShow() {
        //console.log(company);

        $('.preloader-wrap').hide();
        $('.section__content').show();
        fillCompanyTotal();
        fillCompanyList();
        createChart(checkCountryCount());
    }

    function fillCompanyTotal() {
        $('.company-total__count').text(company.length);
    }
    function fillCompanyList() {
        let list = $('#company-list__scrollbox');
        for (let i = 0; i < company.length; i++) {
            list.append('<p><a>' + (company[i].name) + '</a></p>');
            if (i % 2 === 0)
                list.children().last().addClass('company-list_bgc');
        }
    }


    function checkCountryCount() {
        let countryCount = {};
        for(let key in company) {
            if (company[key].location.name in countryCount)
            {
                countryCount[company[key].location.name] +=  1;
            }
            else {
                countryCount[company[key].location.name] = 0;
            }
        }
        return countryCount;
    }


}
export default company;