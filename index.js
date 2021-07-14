let shownImage = document.querySelector('.shownImage');
let presetImages = document.querySelector('.presetImages');

let imageArray = ["images/ImageOfRoom3.webp", "images/ImageOfRoom2.webp", "images/ImageOfRoom1.webp", "images/ImageOfRoom4.webp"];

for(let element of imageArray) {
    console.log(element);
    let newImage = document.createElement('img');
    newImage.setAttribute('src', element);
    newImage.setAttribute('height', '130px');
    newImage.setAttribute('width', '190px');
    newImage.onclick = function() {
        shownImage.setAttribute('src', element);
    }
    presetImages.appendChild(newImage);


}