records = [
    {
    imageUrl: "photos/cake5.jpg",
    title: "Strawberry Cake",
    about: "Enjoy your evening with your loved ones with delicious cake"
  },
  {
    imageUrl: "photos/cake4.jpg",
    title: "Chocolate Cake",
    about: "Indulge in the richness of chocolate."
  },
  {
    imageUrl: "photos/cake3.jpg",
    title: "Vanilla Cake",
    about: "A classic flavor for all occasions."
  },
  {
    imageUrl: "photos/cake2.jpg",
    title: "Red Velvet Cake",
    about: "A delight with a hint of cocoa."
  },
  {
    imageUrl: "photos/cake1.jpg",
    title: "Lemon Cake",
    about: "A tangy twist for your taste buds."
  },
  {
    imageUrl: "photos/cake6.jpg",
    title: "Carrot Cake",
    about: "A healthy choice with a sweet touch."
  }
];

// now we need to iterate on this
let idx = 0;

const imageS= document.querySelector("img")
const titleS = document.querySelector(".flavour")
const detailsS = document.querySelector(".details")

updateCakeSlider();

function updateCakeSlider(){
    const{imageUrl, title, about} = records [idx];
    imageS.src = imageUrl;
    titleS.innerText = title
    detailsS.innerText = about

    idx++;
    if(idx === records.length){
        idx= 0;
    }
    setTimeout(() => {
        updateCakeSlider();
    }, 2000 );
}