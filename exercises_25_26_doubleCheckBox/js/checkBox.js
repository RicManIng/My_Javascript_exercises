const arrFirstSelect = ["option1", "option2"];
const arrOption1 = ["option1_1", "option1_2", "option1_3", "option1_4"];
const arrOption2 = ["option2_1", "option2_2", "option2_3", "option2_4"];

const select = document.createElement("select");
const select2 = document.createElement("select");

function createSelect(){
    const form = document.getElementById("form");
    select.add(new Option("- - Select element - -", ""));
    select2.add(new Option("- - Select element - -", ""));

    for(index in arrFirstSelect){
        select.add(new Option(arrFirstSelect[index], index));
    }
    form.appendChild(select);
    form.appendChild(document.createElement("br"));
    form.appendChild(select2);
    select.addEventListener("change", changeMenu);
}

function changeMenu(){
    const valueSelect = select.value;
    if(valueSelect == 0){
        clearMenu(select2);
        for(index in arrOption1){
            select2.add(new Option(arrOption1[index], index));
        }
    } else if(valueSelect == 1){
        clearMenu(select2);
        for(index in arrOption2){
            select2.add(new Option(arrOption2[index], index));
        }
    } else {
        clearMenu(select2);
    }
}

function clearMenu(menu){
    const max = menu.options.length;
    for(let i = 1; i < max; i++){
        menu.remove(1);
    }
}

window.onload = createSelect;