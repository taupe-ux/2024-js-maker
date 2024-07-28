const bgimagList = ["0012341.png", "124324.jpg", "13234.jpg", "213123.jpg"];
const button = document.querySelector("button");
function autonImage() {
  const dayofImage = bgimagList[Math.floor(Math.random() * bgimagList.length)];
  let backImage = "url('imgs/" + dayofImage + "')";
  document.body.style.backgroundImage = backImage;
}

autonImage();

setInterval(autonImage, 5000);
