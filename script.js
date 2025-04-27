const mainBackgrounds = [
    "BackGraound.png",   
    "BackGraound2.png"   
];

let mainIndex = 0; 

function changeMainBackground() {
    if(mainIndex == 1){
       
        document.querySelector("#projects").style.backgroundColor = "#000"

    }
    else {

        document.querySelector("#projects").style.backgroundColor = "#060523"

    }
    document.querySelector(".main").style.backgroundImage = `url('${mainBackgrounds[mainIndex]}')`;
    mainIndex = (mainIndex + 1) % mainBackgrounds.length;
}


document.getElementById("changeBackgroundBtn").addEventListener("click", changeMainBackground);