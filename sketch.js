/*let playlistArray;


console.log(playlistArray);*/
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
let main;
let pantalla;
let pic;
let pic2;
let pic3;
let pic4;
let pic5;
let pic6;
let pic7;


function setup() {
  createCanvas(1280,720);
  preload();
  //main = new Main(songsData, songFiles);
  pantalla = 0;
  
}
  
function preload() {
 
  pic = loadImage("Imagenes/Inicio.jpg")
  pic2 = loadImage("Imagenes/Pantalla2.jpg")
  pic3 = loadImage("Imagenes/Pantalla3.jpg")
  pic4 = loadImage("Imagenes/Pantalla4.jpg")
  pic5 = loadImage("Imagenes/Pantalla5.jpg")
  pic6 = loadImage("Imagenes/Pantalla6.jpg")
  pic7 = loadImage("Imagenes/Pantalla7.jpg")

  /*new Playlist("Alisson", [
    {
      name: "This-is-Gospel",
      file: loadSound("Canciones/ PATD3.mp3"),
      img: "/Imagenes/TIG.jpg",
   
    },
    {
      name: "Smoking-Out-The Windown",
      file: loadSound("Canciones/SK2.mp3"),
      img: "/Imagenes/SOTW.jpg",
    
    },
    {
      name: "Bliding-Lights",
      file:  loadSound("Canciones/TW.mp3"),
      img: "/Imagenes/BL.jpg",
     
    }
  ])

  new Playlist("Klaus", [

    {
      name: "Diamonds",
      file: loadSound("Canciones/MN.mp3"),
      img: "/Imagenes/DBOP.jpg",
   
    },
    {
      name: "Save-Your-Tears",
      file: loadSound("Canciones/TW2.mp3"),
      img: "/Imagenes/SYT.jpg",
    
    },
    {
      name: "Sway-With-me",
      file: loadSound("Canciones/BOP.mp3"),
      img: "/Imagenes/SWM.jpg",
     
    },
    ])

    new Playlist("Five", [
      {
        name: "Dont-Stop-Me-Now",
        file: loadSound("Canciones/Queen.mp3"),
        img: "/Imagenes/DSTM.jpg"
     
      },
      {
        name: "Heathens",
        file: loadSound("Canciones/21P.mp3"),
        img:  "/Imagenes/HT.jpg"
      
      },
      {
        name: "Power-Power",
        file: loadSound("Canciones/DS.mp3"),
        img:  "/Imagenes/PP.jpg"
       
      },
    
    ])

  /*songFiles = songsData.map(data => {
    return {
      songFile: loadSound(data.file),
      imgFile: loadImage(data.img)
    }
  })*/
}



function draw() {

  switch (pantalla) {
    case 0:
      background(pic,0);
      
      break;
    case 1:
      image(pic2,0,0,1280,720)

      
      break;
      case 2:
      image(pic3,0,0,1280,720)
      
     
      break;
      case 3:
      image(pic4,0,0,1280,720)

      break;
      case 4:
      image(pic5,0,0,1280,720)

      break;
      case 5:
      image(pic6,0,0,1280,720)

    
      break;
      case 6:
      image(pic7,0,0,1280,720)

    

  }

}

function mousePressed() {
  console.log('x: ' +mouseX + 'y: ' + mouseY)
  
  switch (pantalla) {
    case 0:
    if (mouseX>116 && mouseY > 555 && mouseX < 439 && mouseY < 626) {
    pantalla=1    

  }  
      break;
  case 1:
    if (mouseX>99 && mouseY > 570 && mouseX < 491 && mouseY < 641) {
      pantalla=2    
    }  
    if (mouseX>785 && mouseY > 575 && mouseX < 1168 && mouseY < 639) {
      pantalla=3   
  
      
    }  

    break;
  case 2:
    if (mouseX>1219 && mouseY > 38 && mouseX < 1247 && mouseY < 63) {
      pantalla=1  
      
    }  
 
  
    break;
  case 3:
    if (mouseX>58 && mouseY > 274 && mouseX < 392 && mouseY < 518) {
      pantalla=4 
    }  
    if (mouseX>457 && mouseY > 274 && mouseX < 793 && mouseY < 519) {
      pantalla=5 
    }  
    if (mouseX>851 && mouseY > 276 && mouseX < 1194 && mouseY < 516) {
      pantalla=6 
    }  
    if (mouseX>1216 && mouseY > 41 && mouseX < 1243 && mouseY < 70) {
      pantalla=0 
       } 
    
   
       break;
    case 4:
      if (mouseX>1216 && mouseY > 41 && mouseX < 1243 && mouseY < 70) {
        pantalla=3 

      }  

   
      break;
    case 5:
      if (mouseX>1216 && mouseY > 41 && mouseX < 1243 && mouseY < 70) {
      pantalla=3 
       }  
  
    
       break;
    case 6:
      if (mouseX>1216 && mouseY > 41 && mouseX < 1243 && mouseY < 70) {
        pantalla=3 
         } 
      


  }
  
}
