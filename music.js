console.log("this is  music tutorial");
let divlenght = document.querySelectorAll('.song').length;
console.log(divlenght);
for (var i = 0; i <= divlenght; ++i) {


    let demo = document.querySelectorAll('.song')[i];
    demo.addEventListener('click', playsong);
     demo = document.querySelectorAll('.song')[i];
    demo.addEventListener('dblclick', pausesong);


    let song1 = new Audio();
    song1.src = "music1.mp3";

    let song2 = new Audio();
    song2.src = "music2.mp3";

    let song3 = new Audio();
    song3.src = "music3.mp3";

    let song4 = new Audio();
    song4.src = "music4.mp3";

    function playsong() {
        var songid = this.innerHTML;
        console.log(songid);

        switch (songid) {
            case "a":
                song4.play();
                break;
            case "b":
                song1.play();
                break;
            case "c":
                song3.play();
                break;
            case "d":
                song4.play();
                break;
            case "e":
                song1.play();
                break;
            case "f":
                song2.play();
                break;
            case "g":
                song3.play();
                break;
            case "h":
                song2.play();
                break;
            case "i":
                song4.play();
                break;
            default:
                console.log('wrong selection');
                break;
        }


    }
    function pausesong() {
        var songid = this.innerHTML;
        console.log(songid);

        switch (songid) {
            case "a":
                song4.pause();
                break;
            case "b":
                song1.pause();
                break;
            case "c":
                song3.pause();
                break;
            case "d":
                song4.pause();
                break;
            case "e":
                song1.pause();
                break;
            case "f":
                song2.pause();
                break;
            case "g":
                song3.pause();
                break;
            case "h":
                song2.pause();
                break;
            case "i":
                song4.pause();
                break;
            default:
                console.log('wrong selection');
                break;
        }


    }
}