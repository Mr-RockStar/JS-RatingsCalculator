//const { replaceWith } = require("cheerio/lib/api/manipulation");

console.log(1);

// 2 Create Ratings Function
function collect_ratings(){
    // 3 create object ratings
    let ratings = {
        'count'  : 0,
        'sum'    : 0,
        'average': 0
    };
    // 4 create variable rating
    let rating = 0;

    // 5 Select HTML elements
    let elements = []; 
    elements = document.querySelectorAll.ratings;

    // 6 Loop elements array
    elements.forEach(element => {
        console.log(element.value);
        rating = parseInt(element.id.replace('star', ' '));
        ratings.count += parseInt(element.value);
        ratings.sum   += parseInt(element.value) * rating;
    });

    if(ratings.count !== 0){
        ratings.average = ratings.sum / ratings.count;
    }
    
    return ratings;

    // Event Handler
    document.addEventListener('change', () => {
        const ratings = collect_ratings();
        document.querySelector('#average').value = ratings.average.toFixed(2);
    });
}