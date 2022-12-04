//main page

function NavBar() {
    let div = document.createElement("div");
    div.classList.add("hamburger");

    let lab = document.createElement("label");
    lab.classList.add("hamburger-icon");
    lab.setAttribute("for", "hamburger-checkbox");
    div.appendChild(lab);

    let ul = document.createElement("ul");
    ul.setAttribute("class", "nav-set");
    ul.setAttribute("id", "menu");

    let li = document.createElement("li");
    let a = document.createElement("a");
    a.innerHTML = "Experience";
    a.classList.add("navtex");
    a.setAttribute("href", "history.html");
    li.appendChild(a);
    ul.appendChild(li);

    li = document.createElement("li");
    a = document.createElement("a");
    a.innerHTML = "Achievement";
    a.classList.add("navtex");
    a.setAttribute("href", "achievement.html");
    li.appendChild(a);
    ul.appendChild(li);

    li = document.createElement("li");
    a = document.createElement("a");
    a.innerHTML = "Photos";
    a.classList.add("navtex");
    a.setAttribute("href", "photos.html");
    li.appendChild(a);
    ul.appendChild(li);

    li = document.createElement("li");
    a = document.createElement("a");
    a.innerHTML = "Home Page";
    a.classList.add("navtex");
    a.setAttribute("href", "index.html");
    li.appendChild(a);
    ul.appendChild(li);

    div.appendChild(ul);
    nav.appendChild(div);
}
NavBar();


function Footer() {
    let ft = document.getElementById("footer");
    ft.classList.add("footer");
    
    let con = document.createElement("div");
    con.innerHTML = "More information here";
    con.classList.add("contact");
    ft.appendChild(con);

    //tlgrm
    let soc = document.createElement("div");
    let a = document.createElement("a");
    let tlgrm = "<i class='fa-brands fa-telegram'></i>";
    a.innerHTML = tlgrm;
    a.classList.add("social");
    a.classList.add("tlgrm");
    a.setAttribute("href", "https://www.t.me/thesarus");
    soc.appendChild(a);
    ft.appendChild(soc);

    // inst
    soc = document.createElement("div");
    a = document.createElement("a");
    let inst = "<i class='fa-brands fa-instagram'></i>";
    a.innerHTML = inst;
    a.classList.add("social");
    a.classList.add("inst");
    a.setAttribute("href", "https://www.instagram.com/kumbayev.01/");
    soc.appendChild(a);
    ft.appendChild(soc);
  
    // git
    soc = document.createElement("div");
    a = document.createElement("a");
    let git = "<i class='fa-brands fa-github'></i>";
    a.innerHTML = git;
    a.classList.add("social");
    a.classList.add("git");
    a.setAttribute("href", "https://www.github.com/IslamKumbayev");
    soc.appendChild(a);
    ft.appendChild(soc);
  
}
Footer();

//history page
window.addEventListener("scroll", gapAnimate);

function gapAnimate() {
    let bgrid = document.querySelectorAll(".grid-container")[0];
    let wh = 13
    let top = 2
    let show_point = 10;
    if (bgrid) {
        if (show_point < wh - top) {
            bgrid.classList.add("active");
        } else {
            bgrid.classList.remove("active");
        }
    }
}