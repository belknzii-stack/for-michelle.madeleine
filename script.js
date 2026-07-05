function openGift(){

    document.getElementById("giftButton").style.display = "none";

    const letter = document.getElementById("letter");
    const music = document.getElementById("music");

    letter.style.display = "block";

    // mulai musik
    music.volume = 0;
    music.play();

    // fade in volume
    let volume = 0;
    const fade = setInterval(() => {

        if(volume < 0.35){
            volume += 0.02;
            music.volume = volume;
        }else{
            clearInterval(fade);
        }

    }, 200);

    letter.scrollIntoView({
        behavior: "smooth"
    });

}
setInterval(createLily, 1800);

function createLily(){

    const lily = document.createElement("img");

    lily.src = "lily.png";

    lily.classList.add("lily");

    lily.style.left = Math.random()*100+"vw";

lily.style.width =
    (15+Math.random()*18)+"px";

    lily.style.animationDuration =
        (8+Math.random()*6)+"s";

lily.style.opacity =
    0.15+Math.random()*0.15;

const lilies = document.getElementById("lilies");

if(lilies){
    lilies.appendChild(lily);
}

    setTimeout(()=>{
        lily.remove();
    },14000);

}
