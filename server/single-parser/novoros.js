const unirest = require('unirest');
const cheerio = require('cheerio');

// ToDo найти нормальный сайт с просмотрами

//* парсер сайта новороссийск
function novorossiysk() {
    //! Нет просмотров
    unirest.get('https://ofnvrsk.ru/news/item/5114').end(function (response) {
        const body = response.body; // сохраняем html-код страницы
        const $ = cheerio.load(body);

        const title = $('.news-detail__header h1').text();
        const image = $('.news-detail-content img').attr('src');
        const text = $('.decor p').text().trim();
        // const views;

        const post = {
            title: title,
            image: image,
            text: text,
            // views: views,
        };

        console.log(post);
    });
};

novorossiysk();