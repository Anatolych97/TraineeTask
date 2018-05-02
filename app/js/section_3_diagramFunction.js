function section_3_diagramFunction(event) {
    /*Секция 3*/
    //Список, который открывается после нажатия на легенду диаграммы
    let name = $(this).text(), //Текст ссылки, которая указывает на страну
        list = $('#company-location-scrollbox');
    list.append(`<li>${name}</li>`);
    for (let i = 0; i < event.data.length; i++) {
        if (event.data[i].location.name === name) {
            list.append('<li>' + event.data[i].name + '</li>');
        }
    }

    $('.company-canvas-container').hide();
    $('#company-canvas-legend').hide();
    $('#button-back').show();
    list.show();
}

export default section_3_diagramFunction;