function companyList(company) {
    /*Секция 2*/
    //Заполнение списка с названиями во второй секции
    let list = $('#company-list-scrollbox');
    for (let i = 0; i < company.length; i++) {
        list.append('<p><a>' + (company[i].name) + '</a></p>');
        if (i % 2 === 0)
            list.children().last().addClass('company-list_bgc');
    }
}

export default companyList;