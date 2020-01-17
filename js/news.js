/*eslint-env browser*/
"use strict";




function callFiles(news) {

    var request = new XMLHttpRequest();
    request.open("GET", "js/news.json", false);
    request.send(null)
    var jsonResults = JSON.parse(request.responseText);
    jsonResults = jsonResults.news;
    return jsonResults;
}





let more = "... </br></br>Lue lisää tästä!";


function newsText() {

    var news = callFiles();
    console.log(news);
    var path = window.location.pathname;
    var page = path.split("/").pop();



    for (let i = 0; i < news.length; i++) {
        if (news[i].id === page) {
            news = news[i];
        }
    }

    //Picture
    let img = news.picture;
    let imgId = document.getElementsByClassName('textImage');
    imgId[0].setAttribute("src", img);

    //Heading
    let heading = news.head;
    let headingId = document.getElementsByClassName('textHeading');
    headingId[0].innerHTML = heading;

    //textNews
    let newsIds = [];
    for (let i in news) {
        newsIds.push(news[i]);
    }
    newsIds.splice(0, 4);

    let newsText = document.getElementsByClassName('textNews');
    if (newsText.length > 0) {
        for (let i = 0; i < newsIds.length - 1; i++) {

            let textPara = document.createElement("p");
            let node = document.createTextNode(newsIds[i]);
            textPara.appendChild(node);
            newsText[0].appendChild(textPara);
        }

        document.getElementById('teamTag').innerHTML = news.teamTag;
    }





}

function indexPictures() {

    let news = callFiles();
    let sliced = [];


    for (let i = 0; i < news.length - 2; i++) {
        sliced[i] = news[i + 2];
    }


    function firstNews() {

        //Picture
        let img = sliced[2].picture;
        let imgId = document.getElementsByClassName('firstImage');

        //Link to news
        let href = sliced[2].id;
        let newsLink = document.getElementsByClassName('firstNews');
        for (let i = 0; i < newsLink.length; i++) {
            newsLink[i].setAttribute("href", href);
        }


        for (let i = 0; i < imgId.length; i++) {
            imgId[i].setAttribute("src", img);
        }
    }

    function secondNews() {
        //Picture
        let img = sliced[1].picture;
        let imgId = document.getElementsByClassName('secondImage');

        //Link to news
        let href = sliced[1].id;
        let newsLink = document.getElementsByClassName('secondNews');
        for (let i = 0; i < newsLink.length; i++) {
            newsLink[i].setAttribute("href", href);
        }


        for (let i = 0; i < imgId.length; i++) {
            imgId[i].setAttribute("src", img);
        }
    }

    function thirdNews() {
        //Picture
        let img = sliced[0].picture;
        let imgId = document.getElementsByClassName('thirdImage');

        //Link to news
        let href = sliced[0].id;
        let newsLink = document.getElementsByClassName('thirdNews');
        for (let i = 0; i < newsLink.length; i++) {
            newsLink[i].setAttribute("href", href);
        }


        for (let i = 0; i < imgId.length; i++) {
            imgId[i].setAttribute("src", img);
        }
    }

    firstNews();
    secondNews();
    thirdNews();

}

function newsSite() {


    function first() {

        let news = callFiles();
        news = news[news.length - 1];


        //Picture
        let img = news.picture;
        let imgId = document.getElementsByClassName('firstImage');


        for (let i = 0; i < imgId.length; i++) {
            imgId[i].setAttribute("src", img);
        }

        //Link to news
        let href = news.id;
        let newsLink = document.getElementsByClassName('firstNews');
        for (let i = 0; i < newsLink.length; i++) {
            newsLink[i].setAttribute("href", href);
        }

        //Heading

        let heading = news.head;
        let headingId = document.getElementsByClassName('firstHeading');


        for (let i = 0; i < headingId.length; i++) {
            headingId[i].innerHTML = heading;
        }

        //frontText

        let frontText = news.frontText + more;
        let frontTextId = document.getElementsByClassName('firstFrontText');


        for (let i = 0; i < frontTextId.length; i++) {
            frontTextId[i].innerHTML = frontText;
        }

    }

    function second() {
        let news = callFiles();
        news = news[news.length - 2];

        //Picture
        let img = news.picture;
        let imgId = document.getElementsByClassName('secondImage');


        for (let i = 0; i < imgId.length; i++) {
            imgId[i].setAttribute("src", img);
        }

        //Link to news
        let href = news.id;
        let newsLink = document.getElementsByClassName('secondNews');
        for (let i = 0; i < newsLink.length; i++) {
            newsLink[i].setAttribute("href", href);
        }

        //Heading

        let heading = news.head;
        let headingId = document.getElementsByClassName('secondHeading');


        for (let i = 0; i < headingId.length; i++) {
            headingId[i].innerHTML = heading;
        }

        //frontText

        let frontText = news.frontText + more;
        let frontTextId = document.getElementsByClassName('secondFrontText');


        for (let i = 0; i < frontTextId.length; i++) {
            frontTextId[i].innerHTML = frontText;
        }


    }

    function third() {
        let news = callFiles();
        news = news[news.length - 3];

        //Picture
        let img = news.picture;
        let imgId = document.getElementsByClassName('thirdImage');

        for (let i = 0; i < imgId.length; i++) {
            imgId[i].setAttribute("src", img);
        }

        //Link to news
        let href = news.id;
        let newsLink = document.getElementsByClassName('thirdNews');
        for (let i = 0; i < newsLink.length; i++) {
            newsLink[i].setAttribute("href", href);
        }

        //Heading

        let heading = news.head;
        let headingId = document.getElementsByClassName('thirdHeading');


        for (let i = 0; i < headingId.length; i++) {
            headingId[i].innerHTML = heading;
        }

        //frontText

        let frontText = news.frontText + more;
        let frontTextId = document.getElementsByClassName('thirdFrontText');


        for (let i = 0; i < frontTextId.length; i++) {
            frontTextId[i].innerHTML = frontText;
        }
    }

    function fourth() {
        let news = callFiles();
        news = news[news.length - 4];

        //Picture
        let img = news.picture;
        let imgId = document.getElementsByClassName('fourthImage');


        for (let i = 0; i < imgId.length; i++) {
            imgId[i].setAttribute("src", img);
        }

        //Link to news
        let href = news.id;
        let newsLink = document.getElementsByClassName('fourthNews');
        for (let i = 0; i < newsLink.length; i++) {
            newsLink[i].setAttribute("href", href);
        }

        //Heading

        let heading = news.head;
        let headingId = document.getElementsByClassName('fourthHeading');


        for (let i = 0; i < headingId.length; i++) {
            headingId[i].innerHTML = heading;
        }

        //frontText

        let frontText = news.frontText + more;
        let frontTextId = document.getElementsByClassName('fourthFrontText');


        for (let i = 0; i < frontTextId.length; i++) {
            frontTextId[i].innerHTML = frontText;
        }
    }
    first();
    second();
    third();
    fourth();


}

function newsSite2() {



    function fifth() {

        let news = callFiles();
        if (news.length > 4) {


            news = news[news.length - 5];


            //Picture
            let img = news.picture;
            let imgId = document.getElementsByClassName('firstImage');


            for (let i = 0; i < imgId.length; i++) {
                imgId[i].setAttribute("src", img);
            }

            //Link to news
            let href = news.id;
            let newsLink = document.getElementsByClassName('firstNews');
            for (let i = 0; i < newsLink.length; i++) {
                newsLink[i].setAttribute("href", href);
            }

            //Heading

            let heading = news.head;
            let headingId = document.getElementsByClassName('firstHeading');


            for (let i = 0; i < headingId.length; i++) {
                headingId[i].innerHTML = heading;
            }

            //frontText

            let frontText = news.frontText + more;
            let frontTextId = document.getElementsByClassName('firstFrontText');


            for (let i = 0; i < frontTextId.length; i++) {
                frontTextId[i].innerHTML = frontText;
            }
        }

    }

    function sixth() {
        let news = callFiles();
        if (news.length > 5) {

            news = news[news.length - 6];

            //Picture
            let img = news.picture;
            let imgId = document.getElementsByClassName('secondImage');


            for (let i = 0; i < imgId.length; i++) {
                imgId[i].setAttribute("src", img);
            }

            //Link to news
            let href = news.id;
            let newsLink = document.getElementsByClassName('secondNews');
            for (let i = 0; i < newsLink.length; i++) {
                newsLink[i].setAttribute("href", href);
            }

            //Heading

            let heading = news.head;
            let headingId = document.getElementsByClassName('secondHeading');


            for (let i = 0; i < headingId.length; i++) {
                headingId[i].innerHTML = heading;
            }

            //frontText

            let frontText = news.frontText + more;
            let frontTextId = document.getElementsByClassName('secondFrontText');


            for (let i = 0; i < frontTextId.length; i++) {
                frontTextId[i].innerHTML = frontText;
            }
        }


    }

    function seventh() {
        let news = callFiles();
        if (news.length > 6) {
            news = news[news.length - 7];

            //Picture
            let img = news.picture;
            let imgId = document.getElementsByClassName('thirdImage');

            for (let i = 0; i < imgId.length; i++) {
                imgId[i].setAttribute("src", img);
            }

            //Link to news
            let href = news.id;
            let newsLink = document.getElementsByClassName('thirdNews');
            for (let i = 0; i < newsLink.length; i++) {
                newsLink[i].setAttribute("href", href);
            }

            //Heading

            let heading = news.head;
            let headingId = document.getElementsByClassName('thirdHeading');


            for (let i = 0; i < headingId.length; i++) {
                headingId[i].innerHTML = heading;
            }

            //frontText

            let frontText = news.frontText + more;
            let frontTextId = document.getElementsByClassName('thirdFrontText');


            for (let i = 0; i < frontTextId.length; i++) {
                frontTextId[i].innerHTML = frontText;
            }
        }
    }

    function eigth() {
        let news = callFiles();
        if (news.length > 7) {
            news = news[news.length - 8];

            //Picture
            let img = news.picture;
            let imgId = document.getElementsByClassName('fourthImage');


            for (let i = 0; i < imgId.length; i++) {
                imgId[i].setAttribute("src", img);
            }

            //Link to news
            let href = news.id;
            let newsLink = document.getElementsByClassName('fourthNews');
            for (let i = 0; i < newsLink.length; i++) {
                newsLink[i].setAttribute("href", href);
            }

            //Heading

            let heading = news.head;
            let headingId = document.getElementsByClassName('fourthHeading');


            for (let i = 0; i < headingId.length; i++) {
                headingId[i].innerHTML = heading;
            }

            //frontText

            let frontText = news.frontText + more;
            let frontTextId = document.getElementsByClassName('fourthFrontText');


            for (let i = 0; i < frontTextId.length; i++) {
                frontTextId[i].innerHTML = frontText;
            }
        }
    }

    fifth();
    sixth();
    seventh();
    eigth();

}
