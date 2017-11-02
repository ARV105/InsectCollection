var insects = [{
    photo: "images/carpenterbee.jpg",
    commonname: "Fig Beetle",
    genus: "Continus",
    species: "mutabilis",
    seasons: "late spring through summer",
    diet: "flowers, shrubs, leaves, and trees",
    generalinfo: "Look for them on fruit trees, fruiting cacti, and on mesquite and other trees (whose sap they feed on). They can sometimes be seen flying in large numbers around mesquite trees. Look for the larvae in compost piles."

  },{
    photo: "images/figbeetle.jpg",
    commonname: "Carpenter Bee",
    genus: "Xylocopa californica",
    species: "arizonensis",
    seasons: "spring through fall",
    diet: "feeds on flower nectar",
    generalinfo: "Xylocopa are called carpenter bees because females build nest chambers in dead wood (especially dead agave stalks, reeds, etc.). In contrast to honeybees, these large bees are native to the Tucson area, are not eusocial, and do not produce large colonies. Females are black, while males are yellow (and rarely seen)."
  }, { 
    photo: "images/westtigerswallowtail.jpg",
    commonname: "Western Tiger Swallowtail",
    genus: "Papilio",
    species: "rutulus",
    seasons: "June to July",
    diet: "larvae feed on aspen, willows, wild cherry, and ash. Adults feed on flower nectar",
    generalinfo: "Males patrol canyons or hilltops for receptive females. Females lay eggs singly on surface of host plant leaves. Caterpillars feed on leaves and rest on silken mats in shelters of curled leaves. Chrysalids hibernate." 
  }]

  
  var insectIndex = document.querySelectorAll(".list-group-item")
  var insectPicture = document.querySelector(".card-img-top")
  var insectName = document.querySelector(".card-title", ".list-group-item")
  var insectGenus = document.querySelector(".card-genus")
  var insectSeasons = document.querySelector(".card-seasons")
  var insectDiet = document.querySelector(".card-diet")
  var insectText= document.querySelector(".card-text")

  console.log(insectIndex)
for (let i = 0; i < insectIndex.length; i++) {
  insectIndex[i].addEventListener("click", function() {
    var insect = insects[i]
    insectPicture.src = insect.photo
    insectName.innerHTML = "Common Name:  " + insect.commonname
    insectGenus.innerHTML = insect.genus + " " + insect.species
    insectSeasons.innerHTML = "Seasons: " + insect.seasons
    insectDiet.innerHTML = "Diet: " + insect.diet
    insectText.innerHTML = insect.generalinfo
  })
}

function setInitalState() {

  var insect = insects[0]    
  insectPicture.src = insect.photo
  insectName.innerHTML = "Common Name:  " + insect.commonname
  insectGenus.innerHTML = insect.genus + " " + insect.species
  insectSeasons.innerHTML = "Seasons: " + insect.seasons
  insectDiet.innerHTML = "Diet: " + insect.diet
  insectText.innerHTML = insect.generalinfo
}

setInitalState()





//get object key from array
function renderCollectionViewItem(photo) {
 document.getElementsByClassName("list-group") 
        return photo
}
renderCollectionViewItem(insects)








  // Different Selectors

// document.getElementsByTagName("h1") -> returns an array of all the elements that are an h1 tag

// document.getElementsByClassName("classname") -> returns an array of all the elements with a class on classname

// document.getElementById("thereCanOnlyBeOne") -> returns a DOM object that contains that ID

// document.querySelector("h1") -> returns the first element(object) with that tag name
// document.querySelector(".classname") -> returns the first element(object) with that class
// document.querySelector("#thereCanOnlyBeOne") -> returns the first element(object) with that id

// document.querySelectorAll("h1") -> returns an array of all the elements with that tag
// document.querySelectorAll(".classname") -> returns an array of all the elements with that class
// document.querySelectorAll("#thereCanOnlyBeOne") -> returns an array of all the elements with that id (there should only be one)

// var button = document.querySelector(".addImg")
// var content = document.querySelector(".content")

// button.addEventListener("click", function() {
//   var img = document.createElement("photo")
//   img.src = "https://upload.wikimedia.org/wikipedia/commons/f/f4/Green_fruit_beetle_geranium_closeup.jpg"
//   content.appendChild(photo)
// })