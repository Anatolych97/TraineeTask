'use strict';
let partners = [];

function section_5_partners(event) {
    event.preventDefault();
    let company = event.data,
        companyID = $(this).attr('data-id');

    $('#partners-row').show();
    partners = [];
    for (let j = 0; j < company[companyID].partners.length; j++) {
        partners[j] = {name: company[companyID].partners[j].name, value: company[companyID].partners[j].value};
    }
    render();
}

function sortByName(direct) {
    if(direct === '1')
        partners.sort((a, b) => {
            return (a.name > b.name);
        });
    else
        partners.sort((a, b) => {
            return (a.name < b.name);
        });
}
function sortByValue(direct) {
    if (direct === '1')
        partners.sort((a, b) => {
            return (a.value - b.value);
        });
    else
        partners.sort((a, b) => {
            return (b.value - a.value);
        });
}

function render() {

    let sortName = $('#sortName'),
        sortValue = $('#sortValue');

    if (sortName.attr('data-active') === '1') {
        sortByName(sortName.attr('data-sort'));
    }
    if (sortValue.attr('data-active') === '1') {
        sortByValue(sortValue.attr('data-sort'));
    }
    $('#company-partners__list').empty();
    for (let item in partners)
        $('#company-partners__list').append(`<li class = 'company-partners__item'>` +
            `<span class = 'company-partners__item-name'>${partners[item].name}</span>` +
            `<span class = 'company-partners__item-value'>${partners[item].value}%</span>` +
            `</li>`);
}


export {section_5_partners as partnersList, render as list};