// Get page title and page category
var pageTitle = document.title.split("-")
var pageCategory = pageTitle[0].slice(0, -1)

// Initialize all categories
const categories = ["Video Games", "Game Jams", "Tabletop Games", "Art", "Video Editing"]

// Remove current category
let indexToRemove = categories.indexOf(pageCategory)
categories.splice(indexToRemove, 1)

// Initialize all lists -- Format [Name]|[Link]|[Image]
// Video Games
const videoGameCategory = [
    "Assassin's Creed Mirage|vg-acmirage.html|images/scrolley/vg/scrolley-vg-acmirage.jpg",
    "The Yellow Boat Reimagined|vg-tybr.html|images/scrolley/vg/scrolley-vg-theyellowboat.jpg",
    "Nutrimania|vg-nutrimania.html|images/scrolley/vg/scrolley-vg-nutrimania.jpg",
    "Matt vs Aliens|vg-mattvsaliens.html|images/scrolley/vg/scrolley-vg-mattvsaliens.jpg",
    "Rebelyon|vg-rebelyon.html|images/scrolley/vg/scrolley-vg-rebelyon.jpg",
    "Nostalgia|vg-nostalgia.html|images/scrolley/vg/scrolley-vg-nostalgia.jpg",
    "Connected: Summmer of '09|vg-cs09.html|images/scrolley/vg/scrolley-vg-cs09.jpg"
]

// Game Jams
const gameJamCategory = [
    "Keep the Ball Rolling|gj-keeptheballrolling.html|images/scrolley/gj/scrolley-gj-keeptheballrolling.jpg",
    "Parasomnia|gj-parasomnia.html|images/scrolley/gj/scrolley-gj-parasomnia.jpg",
    "Print Sprinter|gj-printsprinter.html|images/scrolley/gj/scrolley-gj-printsprinter.jpg",
    "Mga Salitang Nasagip sa Hangin|gj-msnsh.html|images/scrolley/gj/scrolley-gj-msnsh.jpg",
    "Nailed It!!!|gj-nailedit.html|images/scrolley/gj/scrolley-gj-nailedit.jpg"
]

// Tabletop Games
const tabletopGameCategory = [
    "Ludens Dei|tg-ludensdei.html|images/scrolley/tg/scrolley-tg-ludensdei.jpg"
]

// Art
const artCategory = [
    "90's Japanese Setting|art-90sjapan.html|images/scrolley/art/scrolley-art-90sJapan.jpg",
    "Uhk Aran|art-uhkanar.html|images/scrolley/art/scrolley-art-uhkanar.jpg",
    "Nutrimania Art Compilation|art-nutriui.html|images/scrolley/art/scrolley-art-nutrimaniaui.jpg"
]

// Video Editing
const videoEditingCategory = [
    "Team Comp or Meme Comp|vid-tcomc.html|images/scrolley/vid/scrolley-vid-tcomc.jpg"
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