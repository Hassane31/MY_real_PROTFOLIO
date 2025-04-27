const mainBackgrounds = [
    "BackGraound.png",   
    "BackGraound2.png"   
];

let mainIndex = 0; 

function changeMainBackground() {
    
    document.querySelector(".main").style.backgroundImage = url('${mainBackgrounds[mainIndex]}');
    

    mainIndex = (mainIndex + 1) % mainBackgrounds.length;
}


document.getElementById("changeBackgroundBtn").addEventListener("click", changeMainBackground);