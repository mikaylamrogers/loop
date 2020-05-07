// name variables for event listeners
let outputElement = document.getElementById('outputElement');
let outputParagraph = document.getElementById('outputParagraph');
let contentGridElement = document.getElementById('contentGrid');

// jsonDatabase for all products
let jsonDatabase = [
  {
     "product_image" : "plates.jpg",
     "product_name" : "hawaiian lava & black sand plate set",
     "price" : "350USD",
     "description" : "sourced directly from the big island of hawaii, this plate set is enriched with volcanic materials proven by loop witches to boost your digestive system",
  },
  {
    "product_image" : "book.jpg",
    "product_name" : "eating nothing & thriving, the loop way",
    "price" : "35USD",
    "description" : "in-depth how-to guide for the most environmentally conscious diet on the planet by loop's very own pwyneth galtrow",
  },
  {
    "product_image" : "ticket.jpg",
    "product_name" : "your ticket to paradise",
    "price" : "980USD",
    "description" : "your weekend package and all-access pass to loop's exclusive wellness retreat, 'loop to health.' enter into a 2-hour workshop spent in your favorite yoga pose, try superfoods developed in our loop lab, and meet your community of fellow galtrow-worshippers",
  },
  {
    "product_image" : "mat.jpg",
    "product_name" : "yoga mat made from goddess breath",
    "price" : "110USD",
    "description" : "this 1-inch platform instantly elevates you into a peaceful state of mind to support you during your practice",
  },
  {
     "product_image" : "oil.jpg",
     "product_name" : "get in the loop toe oil",
     "price" : "100USD",
     "description" : "slather this luxurious matcha-based oil on the tips of your toes as soon as you begin to feel negative energy. trust us, you'll want to get in the loop",
  },
  {
    "product_image" : "qtips.jpg",
    "product_name" : "egg white infused q-tips ",
    "price" : "55USD",
    "description" : "clean your ears (and anything else) with the healing benefits of egg whites, which have also been proven to improve hearing in meditation classes",
  },
  {
    "product_image" : "pen.jpg",
    "product_name" : "two-in-one writing instrument & needle",
    "price" : "210USD",
    "description" : "for when you need to jot down an ingredient for your grocery list or need to take a quick shot of kombucha derived probiotics",
  },
  {
    "product_image" : "bowl.jpg",
    "product_name" : "cauldron to heal your leaky gut",
    "price" : "180USD",
    "description" : "stir up your gut-healing positions and release your inner witchery energy"
  },
  {
    "product_image" : "dream.jpg",
    "product_name" : "mushroom oil energy dreamcatcher",
     "price" : "110USD",
     "description" : "radiates positive energy for a beautiful wake up while hanging above your bed overnight. also ensures meditative, peaceful dreams",
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
newImage.classList.add("productPhoto");
newImage.src = incomingJSON['product_image'];
newContentElement.appendChild(newImage);
contentGridElement.appendChild(newContentElement);

// add event listener to add text images on mouseover (NOT WORKING)
// newImage.addEventListener("mouseover", function(){
//   newImage.getElementById("productPhoto").innerText = "HELLO";
//   newImage.getElementById("productPhoto").style.opacity = "3s";
// })

  // newImage.addEventListener("mouseout", function(){
  //   newImage.getElementById("productPhoto").style.opacity = "1";
  // })

let newContentHeading = document.createElement("H3");
 // newContentHeading.classList.add('contentTitle');
 newContentHeading.innerHTML = incomingJSON['product_name'];
 newContentElement.appendChild(newContentHeading);

 let newContentSubheading = document.createElement("H5");
  // newContentHeading.classList.add('contentTitle');
  newContentSubheading.innerHTML = incomingJSON['price'];
  newContentElement.appendChild(newContentSubheading);

  let newContentSubheading2 = document.createElement("H6");
   newContentSubheading2.innerHTML = incomingJSON['description'];
   newContentElement.appendChild(newContentSubheading2);
}
