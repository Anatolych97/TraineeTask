'use strict';
import Chart from "chart.js";

function createChart(country) {
    let ctx = $('#company-canvas');
    let data = {
        labels: getNames(),
        datasets: [{
            data: getData(),
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    };
    let options = {
        legend: {
            display: false,
            position: 'bottom',
            labels: {
                fontColor: 'rgb(255, 99, 132)'
            }
        }
    };
    let chart = new Chart(ctx, {
            type: 'pie',
            data: data,
            options: options
        });


    function getNames() {
        let names = [];
        let i = 0;
        for (let key in country)
            names[i++] = key;
        return names;
    }

    function getData() {
        let data = [];
        let i = 0;
        for (let key in country)
            data[i++] = country[key];
        return data;
    }
}

export default createChart;
