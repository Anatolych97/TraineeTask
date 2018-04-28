'use strict';
let partners = [];

function section_5_partners(event) {
    event.preventDefault();
    let company = event.data;
    $('#partners-row').show();
    for (let i = 0; i < company.length; i++) {
        if (company[i].name === $(this).text()) {
            for (let j = 0; j < company[i].partners.length; j++)
            {
                partners[j] = { name: company[i].partners[j].name, value: company[i].partners[j].value };
            }
        }
    }
    render();
}

function render() {
    $('#company-partners__list').empty();
    let sortName = $('#sortName'),
        sortValue = $('#sortValue');

    if(sortName.attr('data-active') === '1') {
        if(sortName.attr('data-sort') === '1') {
            partners.sort((a, b) => {
                return a.name > b.name;
            });
        }
        else {
            partners.sort((a, b) => {
                return a.name < b.name;
            });
        }
    }
    if(sortValue.attr('data-active') === '1'){
        if(sortValue.attr('data-sort') === '0') {
            partners.sort((a, b) => {
                return a.value - b.value;
            });
        }
        else {
            partners.sort((a, b) => {
                return b.value - a.value;
            });
        }
    }
    for(let item in partners)
        $('#company-partners__list').append(`<p>${partners[item].name}  ${partners[item].value}</p>`)
}


export {section_5_partners as part, render as list};