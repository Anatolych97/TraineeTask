function section_5_partners(event) {
    let company = event.data,
        partners = [];

    $('#company-partners__list').empty();
    for (let i = 0; i < company.length; i++) {
        if (company[i].name === $(this).text()) {
            for (let j = 0; j < company[i].partners.length; j++)
            {
                partners[j] = { name: company[i].partners[j].name, value: company[i].partners[j].value };
                render(partners[j]);
            }
        }
    }

    function render(item) {
        $('#company-partners__list').append(`<p>${item.name}  ${item.value}</p>`)
    }
}
export default section_5_partners;