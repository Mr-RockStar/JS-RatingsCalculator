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
        // 7 - Set up rating
        rating = parseInt(element.id.replace('star',''));
        //8 - Set up object value
        ratings.count += parseInt(element.value);
        //9 - Set object value sum
        ratings.sum   += parseInt(element.value) * rating;
    });

    //10 - Prevent divide by zero
    if (ratings.count !== 0) {
      //11 - Calculate Average Rating
      ratings.average = rating.sum / ratings.count;
    }

//12 - Return Rating
return ratings;

}

//13 - Change Event - Handler
document.addEventListener("change", () => {
    let ratings = collect_ratings(); 
});

