let outputElement = document.getElementById('outputElement');
let outputParagraph = document.getElementById('outputParagraph');
let contentGridElement = document.getElementById('contentGrid');

let jsonDatabase = [
  {
    "product_image" : "alex.png",
    "product_name" : "product one",
     "price" : "100USD",
     "description" : "product description blah blah blah",
  },
  {
    "product_image" : "anri.png",
    "product_name" : "product two",
    "price" : "100USD",
    "description" : "product description blah blah blah",
  },
  {
    "product_image" : "brandon.png",
    "product_name" : "product three",
    "price" : "100USD",
    "description" : "product description blah blah blah",
  },
  {
    "product_image" : "conan.png",
    "product_name" : "product four",
    "price" : "100USD",
    "description" : "product description blah blah blah",
  },
  {
    "product_image" : "eric.png",
    "product_name" : "product five",
    "price" : "100USD",
    "description" : "product description blah blah blah",
  },
  {
    "product_image" : "julian.png",
    "product_name" : "product six",
    "price" : "100USD",
    "description" : "product description blah blah blah",
  },
  {
    "product_image" : "julie.png",
    "product_name" : "product seven",
    "price" : "100USD",
    "description" : "product description blah blah blah",
  },
  {
    "product_image" : "kahlil.png",
    "product_name" : "product eight",
    "price" : "100USD",
    "description" : "product description blah blah blah",
  },
  {
    "product_image" : "kane.png",
    "product_name" : "product nine",
    "price" : "100USD",
    "description" : "product description blah blah blah"
  }
]

for (var i = 0; i < jsonDatabase.length; i++ ) {
  createElementProper(jsonDatabase[i]);
}

function createElementMessy(incomingJSON) {
  var incompleteHTML = "<div class=\"contentItem\"><h3 class=\"contentTitle\">" + incomingJSON['product_name'] + "</h3><h4>price:>";
  for (var i = 0; i < incomingJSON['price'].length; i++) {
    var cityString = incomingJSON['price'][i];
    incompleteHTML += cityString;
  }
}

function createElementProper(incomingJSON) {
let newContentElement = document.createElement("DIV");

let newImage = document.createElement("IMG");
newImage.classList.add("profilePicture");
newImage.src = incomingJSON['product_image'];
newContentElement.appendChild(newImage);
contentGridElement.appendChild(newContentElement);

// add event listener to rotate images on mouseover
// newImage.addEventListener("mouseover", function(){
//   newImage.style.transform = "rotate(360deg)";
//   newImage.style.transition = "3s";
// })
//
//   newImage.addEventListener("mouseout", function(){
//     newImage.style.transform = "rotate(0deg)";
//   })

let newContentHeading = document.createElement("H3");
 // newContentHeading.classList.add('contentTitle');
 newContentHeading.innerHTML = incomingJSON['product_name'];
 newContentElement.appendChild(newContentHeading);

 // newContentHeading.addEventListener("mouseover", function(){
 //   newContentHeading.style.color = "rgb(62, 181, 110)";
 //   newContentHeading.style.transition = "0.5s";
 // })
 //
 // newContentHeading.addEventListener("mouseout", function(){
 //   newContentHeading.style.color = "rgb(23, 128, 66)";
 // })

 let newContentSubheading = document.createElement("H5");
  // newContentHeading.classList.add('contentTitle');
  newContentSubheading.innerHTML = incomingJSON['price'];
  newContentElement.appendChild(newContentSubheading);

  // newContentSubheading.addEventListener("mouseover", function(){
  //   newContentSubheading.style.color = "rgb(255, 194, 217)";
  //   newContentSubheading.style.transform = "scale(1.3)";
  //   newContentSubheading.style.transition = "1s";
  // })
  //
  // newContentSubheading.addEventListener("mouseout", function(){
  //   newContentSubheading.style.color = "rgb(23, 128, 66)";
  //   newContentSubheading.style.transform = "scale(1)";
  // })

  let newContentSubheading2 = document.createElement("H6");
   // newContentHeading.classList.add('contentTitle');
   newContentSubheading2.innerHTML = incomingJSON['description'];
   newContentElement.appendChild(newContentSubheading2);

}
