// Initialize all lists -- Format [Name]|[Link]|[Image]
// Video Games
const professionalProjectsCategory = [
    "Assassin's Creed Mirage|vg-acmirage.html|images/scrolley/vg/scrolley-vg-acmirage.jpg",
    "Matt vs Aliens|vg-mattvsaliens.html|images/scrolley/vg/scrolley-vg-mattvsaliens.jpg",
    "Skull and Bones|vg-snb.html|images/scrolley/vg/scrolley-vg-skullandbones.jpg"
]

// Game Jams
const gameJamCategory = [
    "Keep the Ball Rolling|gj-keeptheballrolling.html|images/scrolley/gj/scrolley-gj-keeptheballrolling.jpg",
    "Parasomnia|gj-parasomnia.html|images/scrolley/gj/scrolley-gj-parasomnia.jpg",
    "Print Sprinter|gj-printsprinter.html|images/scrolley/gj/scrolley-gj-printsprinter.jpg",
    "Refuse or Defuse|gj-refordef.html|images/scrolley/gj/scrolley-gj-refordef.jpg",
    "Mga Salitang Nasagip sa Hangin|gj-msnsh.html|images/scrolley/gj/scrolley-gj-msnsh.jpg",
    "Nailed It!!!|gj-nailedit.html|images/scrolley/gj/scrolley-gj-nailedit.jpg"
]

// Tabletop Games
const schoolProjectsCategory = [
    "The Yellow Boat Reimagined|vg-tybr.html|images/scrolley/vg/scrolley-vg-theyellowboat.jpg",
    "Nutrimania|vg-nutrimania.html|images/scrolley/vg/scrolley-vg-nutrimania.jpg",
    "Rebelyon|vg-rebelyon.html|images/scrolley/vg/scrolley-vg-rebelyon.jpg",
    "Nostalgia|vg-nostalgia.html|images/scrolley/vg/scrolley-vg-nostalgia.jpg",
    "Connected: Summmer of '09|vg-cs09.html|images/scrolley/vg/scrolley-vg-cs09.jpg",
    "Ludens Dei|tg-ludensdei.html|images/scrolley/tg/scrolley-tg-ludensdei.jpg"
]

// Art
const artCategory = [
    "90's Japanese Setting|art-90sjapan.html|images/scrolley/art/scrolley-art-90sJapan.jpg",
    "Uhk' Anar|art-uhkanar.html|images/scrolley/art/scrolley-art-uhkanar.jpg",
    "Nutrimania Art Compilation|art-nutriui.html|images/scrolley/art/scrolley-art-nutrimaniaui.jpg"
]

// Video Editing
const videoEditingCategory = [
    "Team Comp or Meme Comp|vid-tcomc.html|images/scrolley/vid/scrolley-vid-tcomc.jpg"
]

// Initialize all categories
const categories = ["Professional Projects", "Game Jams", "School Projects", "Art", "Video Editing"]


function loadRandomGames(fillerContentCount, sameContentCount, exclusions){
    // Get page title and page category
    var pageTitle = document.title.split("-")
    var pageCategory = pageTitle[0].slice(0, -1)

    // Initialize final value of inner html
    var categoriesPicked = "";

    // Check exclusions
    if (typeof exclusions !== "undefined"){
        exclusions.forEach(element => {
            for(let i = 0; i < categories.length; i++){
                if (element === categories[i]){
                    categories.splice(i, 1);
                }
            }
        });
    }

    // Get current category (-1 if no category found)
    let indexToRemove = categories.indexOf(pageCategory)
    // If same content count is defined then populate with same content based on number provided
    if(typeof sameContentCount !== "undefined" && sameContentCount > 0){
        var mainArray = GetArrayFromName(pageCategory);
        var fileName = location.href.split("/").slice(-1);         
        // Remove instance of page displayed
        RemoveInstance(mainArray, fileName)

        for(let i = 0; i < sameContentCount; i++){
            var mainItem = GetRandomItemFromArray(mainArray);
            var mainInfo = mainItem.split("|")

            categoriesPicked += "<div class=\"col-4\"> <a href=\"" + mainInfo[1] + "\" class=\"image fit\"><img src=\"" + mainInfo[2] +"\" alt=\"\" /></a></div>"
            categoriesPicked += "<div class=\"col-8\"><h4>" + pageCategory + "</h4><p><a href=\"" + mainInfo[1] + "\">" + mainInfo[0] +"</a></p></div>"

            if (mainArray.length <= 0){
                break
            }
        }
    }

    if (indexToRemove >= 0){
        // Remove current category
        categories.splice(indexToRemove, 1)
    }
    

    // Add filler content
    for(let i = 0; i < fillerContentCount; i++){
        var randCategoryIndex = Math.floor(Math.random() * categories.length);
        console.log(randCategoryIndex + " " + categories.length);
        var targetArray = GetArrayFromName(categories[randCategoryIndex])
        var targetItem = GetRandomItemFromArray(targetArray)
        var splittedInfo = targetItem.split("|")
        
        categoriesPicked += "<div class=\"col-4\"> <a href=\"" + splittedInfo[1] + "\" class=\"image fit\"><img src=\"" + splittedInfo[2] +"\" alt=\"\" /></a></div>"
        categoriesPicked += "<div class=\"col-8\"><h4>" + categories[randCategoryIndex] + "</h4><p><a href=\"" + splittedInfo[1] + "\">" + splittedInfo[0] +"</a></p></div>"

        if (targetArray.length <= 0){
            categories.splice(randCategoryIndex, 1)
        }
    }

    //alert(categoriesPicked);
    //var targetHTML = "<div class=\"col-4\"> <a href=\"#\" class=\"image fit\"><img src=\"images/pic10.jpg\" alt=\"\" /></a></div>
    //<div class=\"col-8\"><h4>Art</h4><p>Amet nullam fringilla nibh nulla convallis tique ante proin.</p></div>"
    document.querySelector('#sample').innerHTML += categoriesPicked;
}

function RemoveInstance(targetArray, pageName){
    for(let i = 0; i < targetArray.length; i++){
        var info = targetArray[i].split("|");
        console.log(pageName + " " + info[1]);

        if (pageName == info[1]){
            targetArray.splice(i, 1);
        }
    }
}

function GetArrayFromName(name){
    var targetArray = null;
    if(name == "Professional Projects"){
        targetArray = professionalProjectsCategory;
    } 
    else if (name == "School Projects"){
        targetArray = schoolProjectsCategory;
    }
    else if (name == "Game Jams"){
        targetArray = gameJamCategory;
    }
    else if (name == "Art"){
        targetArray = artCategory;
    }
    else if (name == "Video Editing"){
        targetArray = videoEditingCategory;
    }

    return targetArray;
}

function GetRandomItemFromArray(targetArray){
    var randIndex = Math.floor(Math.random() * targetArray.length);
    var itemToReturn = targetArray[randIndex];

    targetArray.splice(randIndex, 1);
    
    return itemToReturn;
}