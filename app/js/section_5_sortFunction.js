function section_5_sortFunction() {

    if ($(this).text().indexOf('Name')) {
        if ($(this).attr('data-sort') === '1') {
            $(this).children('span').removeClass('fa-arrow-down').addClass('fa-arrow-up');
            $(this).attr('data-sort', 0);
        }
        else {
            $(this).children('span').removeClass('fa-arrow-up').addClass('fa-arrow-down');
            $(this).attr('data-sort', 1);
        }
    }
    else
    {
        if( $(this).attr('data-sort') === '0') {
            $(this).children('span').removeClass('fa-arrow-up').addClass('fa-arrow-up');
        }
        else {
            $(this).children('span').removeClass('fa-arrow-down').addClass('fa-arrow-down');
        }
    }
}

export default section_5_sortFunction;