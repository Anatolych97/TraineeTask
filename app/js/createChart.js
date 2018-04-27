'use strict';
import Chart from "chart.js";

function createChart(country, showList) {
    let ctx = $('#company-canvas');
    let colors = [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 206, 86)',
        'rgb(75, 192, 192)',
        'rgb(153, 102, 255)',
        'rgb(255, 159, 64)'
    ];

    let data = {
        labels: getNames(),
        datasets: [{
            data: getData(),
            backgroundColor: colors,
            borderColor: colors,
            borderWidth: 1
        }]
    };
    let options = {
        legend: {
            display: false,
            position: 'bottom',
            labels: {
                fontColor: 'rgb(255, 99, 132)'
            },
        },
        onClick: showList,
    };
    let chart = new Chart(ctx, {
            type: 'pie',
            data: data,
            options: options
        });

    //Создаю легенду для диаграмммы, и на каждую ссылку привязываю действие
    (function createLegend() {
        let names = getNames();
        for (let i = 0; i < names.length; i++) {
            $('#company-canvas-legend').append(`<li><a><span style="background-color: ${colors[i]};"></span>${names[i]}</a></li>`);
        }
        $('#company-canvas-legend a').on('click', showList);
    })();

    //Создаю массив имен из массива объектов-стран
    function getNames() {
        let names = [];
        let i = 0;
        for (let key in country)
            names[i++] = key;
        return names;
    }
    //Создаю массив значений, сколько раз повторяется каждая страна
    function getData() {
        let data = [];
        let i = 0;
        for (let key in country)
            data[i++] = country[key];
        return data;
    }
}

export default createChart;
