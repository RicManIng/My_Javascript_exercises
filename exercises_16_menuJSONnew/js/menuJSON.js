function queryString(name) {
    let value = null;

    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.has(prop) ? searchParams.get(prop) : null
    });
    value = params[name];
    console.log(`Value of ${name}: ${value}`);
    return value;
}


function createMenu(menu){
    const selected = queryString("selected") || 1;
    const body = document.querySelector("body");
    const ul = document.createElement("ul");

    for (let i = 0; i < menu.length; i++) {
        const text = document.createTextNode(menu[i].nome);
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = menu[i].link + "?selected=" + (i + 1);
        a.title = menu[i].title + " " + (i);
        if(selected == menu[i].id){
            console.log("sono qui");
            li.className = "selected";
        }
        a.appendChild(text);
        li.appendChild(a);  
        ul.appendChild(li);
    }
    body.appendChild(ul);
}


async function loadMenu(){
    const url = "./database/lateralMenu.json";
    let response = await fetch(url);
    let menu = await response.json();

    await new Promise((resolve, reject) => setTimeout(resolve, 3000));
    console.log(menu);
    createMenu(menu);
}

window.onload = function(){
    loadMenu();
};