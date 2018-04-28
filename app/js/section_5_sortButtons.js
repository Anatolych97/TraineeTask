'use strict';
import {list} from './section_5_partners.js';

function section_5_sortType() {

    let sortName = $('#sortName'),
        sortValue = $('#sortValue');
    sortName.on('click', sortByName);
    sortValue.on('click', sortByValue);

    function sortByName(e) {
        e.preventDefault();
        sortName.attr('data-active', '1');

        if ($(this).attr('data-sort') === '1') {
            $(this).children('span').removeClass('fa-arrow-down').addClass('fa-arrow-up');
            $(this).attr('data-sort', 0);
            sortValue.attr('data-active', '0');
        }
        else {
            $(this).children('span').removeClass('fa-arrow-up').addClass('fa-arrow-down');
            $(this).attr('data-sort', 1);
            sortValue.attr('data-active', '0');
        }
        list();
    }

    function sortByValue(e) {
        e.preventDefault();
        sortValue.attr('data-active', '1');
        if ($(this).attr('data-sort') === '0') {
            $(this).children('span').removeClass('fa-arrow-up').addClass('fa-arrow-down');
            $(this).attr('data-sort', 1);
            sortName.attr('data-active', '0');
        }
        else {
            $(this).children('span').removeClass('fa-arrow-down').addClass('fa-arrow-up');
            $(this).attr('data-sort', 0);
            sortName.attr('data-active', '0');
        }
        list();
    }
}

export default section_5_sortType;