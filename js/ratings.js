//const { replaceWith } = require("cheerio/lib/api/manipulation");

//2 - Create Ratings Function
function collect_ratings(){

    //3 - Create Ratings Object
    const ratings = {
        count:0, 
        sum:0,
        average:0
    };

    //4 - let binding
    let rating = 0;

    //5 - select html elements
    const elements = document.querySelectorAll('.rating');

    //6 - Use for each Function
    elements.forEach(element => {
        rating = parseInt(element.id.replace('star',''));
        console.log(rating);
    });


}

collect_ratings();