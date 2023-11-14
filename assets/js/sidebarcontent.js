// Get page title and page category
var pageTitle = document.title.split("-")
var pageCategory = pageTitle[0].slice(0, -1)

// Initialize all categories
const categories = ["Video Games", "Game Jams", "Tabletop Games", "Art", "Video Editing"]

// Remove current category
let indexToRemove = categories.indexOf(pageCategory)
categories.splice(indexToRemove, 1)

// Initialize all lists -- Format [Name]|[Link]|[Image]
// Video game category
const videoGameCategory = [
    "Assassin's Creed Mirage|vg-acmirage.html|images/scrolley/scrolley-vg-acmirage.jpg",
    "The Yellow Boat Reimagined|#|images/scrolley/scrolley-vg-theyellowboat.jpg",
    "Nutrimania|#|images/scrolley/scrolley-vg-nutrimania.jpg",
    "Matt vs Aliens|#|images/scrolley/scrolley-vg-mattvsaliens.jpg",
    "Rebelyon|#|images/scrolley/scrolley-vg-rebelyon.jpg",
    "Nostalgia|#|images/scrolley/scrolley-vg-nostalgia.jpg",
    "Connected: Summmer of '09|#|images/scrolley/scrolley-vg-cs09.jpg"
]

// Game Jams
const gameJamCategory = [
    "Keep the Ball Rolling|gj-keeptheballrolling.html|images/scrolley/scrolley-gj-keeptheballrolling.jpg",
    "Parasomnia|#|images/scrolley/scrolley-gj-parasomnia.jpg",
    "Print Sprinter|#|images/scrolley/scrolley-gj-printsprinter.jpg",
    "Mga Salitang Nasagip sa Hangin|#|images/scrolley/scrolley-gj-msnsh.jpg",
    "Nailed It!!!|#|images/scrolley/scrolley-gj-nailedit.jpg"
]

const tabletopGameCategory = [
    "Ludens Dei|#|images/scrolley/scrolley-tg-ludensdei.jpg"
]

const artCategory = [
    "90's Japanese Setting|#|images/pic10.jpg",
    "Uhk Aran|#|images/pic11.jpg",
    "Nutrimania UI Compilation|#|images/pic12.jpg"
]

const videoEditingCategory = [
    "Team Comp or Meme Comp|#|images/pic10.jpg"
]

var categoriesPicked = "";
for(let i = 0; i < 5; i++){
    var randCategoryIndex = Math.floor(Math.random() * categories.length);

    var targetArray = null;
    if(categories[randCategoryIndex] == "Video Games"){
        targetArray = videoGameCategory;
    } 
    else if (categories[randCategoryIndex] == "Game Jams"){
        targetArray = gameJamCategory;
    }
    else if (categories[randCategoryIndex] == "Tabletop Games"){
        targetArray = tabletopGameCategory;
    }
    else if (categories[randCategoryIndex] == "Art"){
        targetArray = artCategory;
    }
    else if (categories[randCategoryIndex] == "Video Editing"){
        targetArray = videoEditingCategory;
    }

    var targetItem = GetRandomItemFromArray(targetArray)
    var splittedInfo = targetItem.split("|")
    
    categoriesPicked += "<div class=\"col-4\"> <a href=\"" + splittedInfo[1] + "\" class=\"image fit\"><img src=\"" + splittedInfo[2] +"\" alt=\"\" /></a></div>"
    categoriesPicked += "<div class=\"col-8\"><h4>" + categories[randCategoryIndex] + "</h4><p>" + splittedInfo[0] +"</p></div>"

    if (targetArray.length <= 0){
        categories.splice(randCategoryIndex, 1)
    }
}

//alert(categoriesPicked);
//var targetHTML = "<div class=\"col-4\"> <a href=\"#\" class=\"image fit\"><img src=\"images/pic10.jpg\" alt=\"\" /></a></div>
//<div class=\"col-8\"><h4>Art</h4><p>Amet nullam fringilla nibh nulla convallis tique ante proin.</p></div>"
document.querySelector('#sample').innerHTML = categoriesPicked;

function GetRandomItemFromArray(targetArray){
    var randIndex = Math.floor(Math.random() * targetArray.length);
    var itemToReturn = targetArray[randIndex];

    targetArray.splice(randIndex, 1);
    
    return itemToReturn;
}