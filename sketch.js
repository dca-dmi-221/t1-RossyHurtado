const songsData= [
  {
   name: "Canción 1",
   file: "/Canciones/Queen.mp3",
   img: "/Imagenes/Number5.jpg"
  }
];
let songFiles = [];
let pic;
let main;


function preload() {

  pic = loadImage("Imagenes/Inicio.jpg")

  songFiles = songsData.map(data => {
    return {
      songFile: loadSound(data.file),
      imgFile: loadImage(data.img)
    }
  })
}


function setup() {
  createCanvas(1280,720);
 
  

  main = new Main(songsData, songFiles);
}

function draw() {
  background(pic,0);

}
