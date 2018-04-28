'use strict';
import Chart from "chart.js";

function section_3_createDiagram(country) {
    let ctx = $('#company-canvas'),
        colors = [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 206, 86)',
        'rgb(75, 192, 192)',
        'rgb(153, 102, 255)',
        'rgb(255, 159, 64)'
    ],
        data = {
        labels: getNames(),
        datasets: [{
            data: getData(),
            backgroundColor: colors,
            borderColor: colors,
            borderWidth: 1
        }]
    },
        options = {
        legend: {
            display: false,
            position: 'bottom',
            labels: {
                fontColor: 'rgb(255, 99, 132)'
            },
        }
    };

    new Chart(ctx, {
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
    })();

    //Создаю массив имен из массива объектов-стран
    function getNames() {
        let names = [],
            i = 0;
        for (let key in country)
            names[i++] = key;
        return names;
    }

    //Создаю массив значений, сколько раз повторяется каждая страна
    function getData() {
        let data = [],
            i = 0;
        for (let key in country)
            data[i++] = country[key];
        return data;
    }
}

export default section_3_createDiagram;
