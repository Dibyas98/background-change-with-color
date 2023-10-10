const btn = document.getElementById("btn");
const btnimg = document.getElementById("btnimg");
let color = [
    "blue",
    "red",
    "green",
    "pink",
    "cyan",
    "purple",
    "beig",
    "aqua",
    "marroon",
    '#3498db', '#e74c3c', '#1abc9c', '#f39c12', '#9b59b6',
    '#2ecc71', '#f1c40f', '#e67e22', '#95a5a6', '#34495e',
    '#7f8c8d', '#d35400', '#c0392b', '#16a085', '#8e44ad',
    '#27ae60', '#d35400', '#2980b9', '#f39c12', '#bdc3c7'
];
let image = [
    "url('./Assects/1.jfif')",
    "url('./Assects/2.jfif')",
    "url('./Assects/3.jfif')",
    "url('./Assects/4.jfif')",
    "url('./Assects/5.jfif')",
];







if (btn.addEventListener("click", change_color)) {
} else if (btnimg.addEventListener("click", change_img)) {
}


function change_img() {
    const anib=document.getElementById('btnimg').classList;
        anib.add('change-background-animation')

        setTimeout(() => {
            anib.remove('change-background-animation');
        }, 500);
    let randomIndex = Math.floor(Math.random() * image.length);
    document.getElementById("cont").style.backgroundImage = image[randomIndex];
    document.getElementById("cont").style.backgroundRepeat ="no-repeat"
    document.getElementById("cont").style.backgroundSize = "cover"
    
}
function change_color() {
    document.getElementById("cont").style.backgroundImage = "none";
    document.getElementById("cont").style.backgroundColor =
        color[Math.floor(Math.random() * color.length)];
        const ani=document.getElementById('btn').classList;
        ani.add('change-background-animation')

        setTimeout(() => {
            ani.remove('change-background-animation');
        }, 500);
}




