const songsData= [

  //SONGS
  {
   name: "Leave-the-Door-Open",
   file: "/Canciones/SilkSonic.mp3",
   img: "/Imagenes/SK.jpg"
  },
  {
    name: "Bohemian-Rhapsody",
    file: "/Canciones/PATD1.mp3 ",
    img:  "/Imagenes/BH.jpg",
 },
  {
    name: "Bad",
    file: "/Canciones/MichaelJ.mp3",
    img:  "/Imagenes/MJ.jpg"
  },
  {
    name: "Emperors-New-Clothes",
    file: "/Canciones/PATD2.mp3",
    img: "/Imagenes/ENC.jpg"

  },

/*________________________________*/

  //PLAYLIST 1
  {
    name: "This-is-Gospel",
    file: "/Canciones/PATD3.mp3",
    img: "/Imagenes/TIG.jpg",
 
  },
  {
    name: "Smoking-Out-The Windown",
    file: "/Canciones/SK2.mp3",
    img: "/Imagenes/SOTW.jpg",
  
  },
  {
    name: "Bliding-Lights",
    file:  "/Canciones/TW.mp3",
    img: "/Imagenes/BL.jpg",
   
  },

/*________________________________*/

  //PLALIST 2
  {
    name: "Diamonds",
    file:  "/Canciones/MN.mp3",
    img: "/Imagenes/DBOP.jpg",
 
  },
  {
    name: "Save-Your-Tears",
    file: "/Canciones/TW2.mp3",
    img: "/Imagenes/SYT.jpg",
  
  },
  {
    name: "Sway-With-me",
    file: "/Canciones/BOP.mp3",
    img: "/Imagenes/SWM.jpg",
   
  },

/*________________________________*/

    //PLALIST 3
  {
    name: "Dont-Stop-Me-Now",
    file: "/Canciones/Queen.mp3",
    img: "/Imagenes/DSTM.jpg"
 
  },
  {
    name: "Heathens",
    file: "/Canciones/21P.mp3",
    img:  "/Imagenes/HT.jpg"
  
  },
  {
    name: "Power-Power",
    file: "/Canciones/DS.mp3",
    img:  "/Imagenes/PP.jpg"
   
  },


];

/*________________________________*/

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
