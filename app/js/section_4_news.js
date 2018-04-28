'use strict';

function section_4_news() {
    let newsURL = 'http://codeit.pro/codeitCandidates/serverFrontendTest/news/getList';
    /* {
          author: "",
          date: "",
          link: "",
          description: "",
          img: "'
    }*/
    let news = [];
    let img = $('#slider-img');
    let author = $('#slider-author');
    let date = $('#slider-date');
    let text = $('#slider-text');
    let title = $("#slider-title");
    let currentSlide = 0;

    $.ajax({
        type: 'POST',
        url: newsURL,
        success: function (data) {
            if (data.status === 'OK') {
                news = data.list;
                newsShow();
            }
            else
                alert('Не удалось получить свежие новости');
        },
        error: function (data) {
            console.log('Error: ' + data);
        }
    });

    function newsShow() {
        $('.company-news .preloader-wrap').hide();
        $('.company-news .section__content').show();
        createNav();
        fillSlider(0);
        selectNewsItem();
    }

    //Convert Unixtime to date-time string
    function timeConverter(UNIX_timestamp) {
        let a = new Date(UNIX_timestamp * 1000);
        //let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        let year = a.getFullYear();
        let month = a.getMonth();
        let date = a.getDate();
        // let hour = a.getHours();
        // let min = a.getMinutes();
        // let sec = a.getSeconds();

        let time = date + '.' + month + '.' + year;
        return time;
    }

    //Show new information on slider
    function fillSlider(num) {
        img.attr('src', news[+num].img);
        img.attr('alt', news[+num].link);
        title.children().eq(0).attr('href', news[+num].link);
        author.text(news[+num].author);
        date.text(timeConverter(news[+num].date));
        text.text(function () {
            if (news[+num].description.length > 200)
                return news[+num].description.slice(0, 200) + "...";
            else
                return news[+num].description;
        });
    }

    function createNav() {
        let nav = $("#slider-nav");
        nav.append(`<li><a href = "#" class = "news-slider__nav-item" data-value="-1"></a></li>`);
        nav.append(`<li><a href = "#" class = "news-slider__nav-item" data-value="0"></a></li>`);
        nav.append(`<li><a href = "#" class = "news-slider__nav-item" data-value="+1"></a></li>`);
    }

    function selectNewsItem() {
        let item = $("#slider-nav a");
        item.on('click', function (e) {
            e.preventDefault();
            currentSlide = currentSlide + +$(this).data('value');

            if (currentSlide >= news.length)
                currentSlide = news.length - 1;
            else if (currentSlide <= 0)
                currentSlide = 0;

            fillSlider(currentSlide);
        });
    }
}

export default section_4_news;