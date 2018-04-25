function news() {
    let newsURL = 'http://codeit.pro/codeitCandidates/serverFrontendTest/news/getList';
    let news = [];

    $.ajax({
        type: 'POST',
        url: newsURL,
        success: function (data) {
            if (data.status === "OK") {
                news = data.list;
                newsShow();
            }
            else
                alert("Не удалось получить свежие новости");
        },
        error: function (data) {
            console.log("Error: " + data);
        }
    });
    function newsShow() {
        $(".preloader-wrap_news").hide();
    }
}

export default news;