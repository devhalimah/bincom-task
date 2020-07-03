var images = ["picture1.jpg", "picture2.jpg",
    "picture3.jpg", "picture4.jpg", "picture5.jpg",
    "picture6.jpg", "picture7.jpeg", "picture8.jpeg",
    "picture9.jpeg", "picture10.jpeg", "picture11.jpg",
    "picture12.jpg", "picture13.jpg", "picture14.jpg",
    "picture15.jpg", "picture16.jpg", "picture17.jpg"
];

var a = document.getElementsByTagName("img");
var b = 0;

function func() {
    if (b < images.length + 1) {
        a[0].setAttribute("src", images[b]);
        b++;
        if (b == images.length) {
            b = 0;
        }
    }
}
var c = setInterval(func, 3000);

var d = document.getElementsByClassName("previous")[0];
var e = document.getElementsByClassName("next")[0];

function previous() {
    clearInterval(func);
    b--;
    a[0].setAttribute("src", images[b]);
    if (b == 0 || b < 0) {
        b = images.length - 1;
        a[0].setAttribute("src", images[b]);
    }
}

function forward() {
    clearInterval(func);
    b++;
    a[0].setAttribute("src", images[b]);
    if (b == images.length) {
        b = 0;
        a[0].setAttribute("src", images[b]);
        b++;
    }
}
d.addEventListener("click", previous);
e.addEventListener("click", forward);