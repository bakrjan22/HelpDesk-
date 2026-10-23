const parent = document.getElementById("demandes-top-left-id");
const card_or_array = document.getElementById("card-or-array");
const issue_title = document.getElementById("issue_title");
const Categorie = document.getElementById("Categorie");
const Priority = document.getElementById("Priorite");
const description = document.getElementById("description");
const cartes_button = document.getElementById("card-button");
const tableau_button = document.getElementById("tableau-button");
const task_count = document.getElementById("task-count");
const button_submit = document.getElementById("submit");
cartes_button.style.backgroundColor = "white";
tableau_button.style.backgroundColor = "#ccced1";
const id_demandes_display = document.getElementById("id-demandes-display");
const info_submit = document.getElementById("info_submit");



/*
Html structure

Card should be pushed inside of .demandes-display

<div class="issue-card">
    <div class="wrap-card">
        <div class="top-card">
            <div class="logo-card">
                <i class="fa-solid fa-wifi" style="color: rgb(250, 251, 252);"></i>
            </div>
            <h4 id="issue-id" class="issue_id_class" >HD-001</h4>
        </div>
        <div class="middle-card">
            <h2 id="issue-title">Connexion Wi-Fi instable</h2>
            <h3 id="issue-description">Le réseau se déconnecte régulièrement.</h3>
            <div class="type-priority">
                <span class="issue-type">Réseau</span>
                <span class="priority-type">Réseau</span>
            </div>
        </div>
        <div class="end-card">
            <div class="button-container">
                <button class="edite"><i class="fa-solid fa-pen-fancy" style="color: rgb(97, 112, 132);"></i>Modifier</button>
                <button class="delete"><i class="fa-solid fa-eraser" style="color: rgb(204, 98, 106);"></i>Supprimer</button>
            </div>
        </div>
    </div>
</div>
*/

let request = [
    
];
let scope_ids = 0;
function icon_builder(icon_class,icon_style) {
    let icon = document.createElement("i");
    icon.className = icon_class;
    icon.style = icon_style;
    return icon;
}
let editing_status = [];

function component_card_builder(issue_title,issue_description,issue_type,priority_type,pos_in_array) {
    let demandes_container = document.getElementById("id-demandes-display");

    let div_issue_card = document.createElement("div");
    div_issue_card.className = "issue-card";

    div_issue_card.id = "issue-card-id";

    demandes_container.appendChild(div_issue_card);

    let div_wrap_card = document.createElement("div");
    div_wrap_card.className = "wrap-card";
    div_issue_card.appendChild(div_wrap_card);

    let div_top_card = document.createElement("div");
    div_top_card.className = "top-card";
    div_wrap_card.appendChild(div_top_card);

    let div_logo_card = document.createElement("div");
    div_logo_card.className = "logo-card";
    div_top_card.appendChild(div_logo_card);
    
    let h4_issue_id = document.createElement("h4");
    h4_issue_id.className = "issue_id_class";
    h4_issue_id.textContent = "HD-"+request[pos_in_array].id;
    div_top_card.appendChild(h4_issue_id);   


    let div_middle_card = document.createElement("div");
    div_middle_card.className = "middle-card";
    div_wrap_card.appendChild(div_middle_card);

    let h2_issue_title = document.createElement("h2");
    h2_issue_title.className = "issue-title";
    h2_issue_title.textContent = issue_title;
    div_middle_card.appendChild(h2_issue_title);


    let h3_issue_desc = document.createElement("h3");
    h3_issue_desc.className = description;
    h3_issue_desc.textContent = issue_description;
    div_middle_card.appendChild(h3_issue_desc);

    let div_type_priority = document.createElement("div");
    div_type_priority.className= "type-priority";
    div_middle_card.appendChild(div_type_priority);
    
    let span_issue_type = document.createElement("span");
    span_issue_type.className = "issue-type";
    span_issue_type.textContent = issue_type;
    span_issue_type.style.backgroundColor = "#ffffff";
    span_issue_type.style.color = "#64748B";


    switch(issue_type) {
        case "Réseau": {
            div_logo_card.appendChild(icon_builder("fa-solid fa-wifi","color: rgb(240, 242, 245);"));
            break;
        }
        case "Logiciel": {
            div_logo_card.appendChild(icon_builder("fa-solid fa-microchip","color: rgb(240, 242, 245);"));
            break;
        }
        case "Materiele": {
            div_logo_card.appendChild(icon_builder("fa-solid fa-computer-mouse","color: rgb(240, 242, 245);"));
            break;
        }
    }
    div_type_priority.appendChild(span_issue_type);

    let span_priority_type = document.createElement("span");
    span_priority_type.className = "priority-type";
    span_priority_type.textContent = priority_type;

    div_type_priority.appendChild(span_priority_type);

    switch(span_priority_type.textContent) {
        case "Haute": {
            span_priority_type.style.color = "#BA6444";
            span_priority_type.style.backgroundColor = "#FFF0E8";
            break;
        }
        case "Normale": {
            span_priority_type.style.color = "#A67A2B";
            span_priority_type.style.backgroundColor = "#FFF5DF";
            break;
        }
        case "Basse": {
            span_priority_type.style.color = "#388867";
            span_priority_type.style.backgroundColor = "#E8F6EE";
            break;
        }
    }

    let div_end_card = document.createElement("div");
    div_end_card.className = "end-card";
    div_wrap_card.appendChild(div_end_card);

    let div_button_container = document.createElement("div");
    div_button_container.className = "button-container";
    div_end_card.appendChild(div_button_container);

    let button_edite = document.createElement("button");
    button_edite.className = "edite";
    button_edite.textContent = "Modifier";
    button_edite.id = "edite_button";
    div_button_container.appendChild(button_edite);
    button_edite.prepend(icon_builder("fa-solid fa-pen-fancy","color: rgb(97, 112, 132);"));

    

    let button_delete = document.createElement("button");
    button_delete.className = "delete";
    button_delete.id = "delete_button"+scope_ids;
    button_delete.textContent = "Supprimer";
    div_button_container.appendChild(button_delete);
    button_delete.prepend(icon_builder("fa-solid fa-eraser","color: rgb(204, 98, 106);"));
    button_delete.addEventListener("click", () => {
        delete_issue(pos_in_array);
    });
    button_edite.addEventListener("click", () => {
        button_edite.textContent = "Annuler";
        button_submit.textContent = "Modification";
        button_edite.prepend(icon_builder("fa-solid fa-circle-xmark","color: rgb(255, 136, 136);"));

        if(action_type == "Modifier") {
            button_edite.textContent = "Modifier";
            button_edite.prepend(icon_builder("fa-solid fa-pen-fancy","color: rgb(97, 112, 132);"));

            console.log("annulation");
            action_type = "Ajouter";
            clear_input();
            button_submit.textContent = "＋  Ajouter la demande";
            return;
        }else{
            editing_for = pos_in_array;
            fill_form_input(pos_in_array);
        }
        action_type = "Modifier";
    });
}
let action_type = "Ajouter";
let editing_for = 0;
//component_card_builder("Connexion Wi-Fi instable","Le réseau se déconnecte régulièrement.","Réseau","Haute");

function delete_issue(pos) {
    console.log("pos in array",pos);
    request.splice(pos,1);
    task_count.textContent = request.length +" demandes";
    afficher();
}

function afficher() {
    id_demandes_display.textContent = "";
    for(let i = 0;i< request.length;i++) {
        component_card_builder(request[i].issue,request[i].description,request[i].categorie,request[i].priority,i);
    }
    console.log(request);
    
}

function fill_form_input(pos) {
    issue_title.value = request[pos].issue;
    description.value = request[pos].description;
    Categorie.value = request[pos].categorie;
    Priority.value = request[pos].priority;
}

function error_log(htmlelement,message,color) {
    htmlelement.textContent = message;
    htmlelement.style.color = color;
}

function get_form_input() {
    issue_title.value;
    Categorie.value;
    Priority.value;
    description.value;
    if (issue_title.value == "" || Categorie.value == "" || Priority.value == "" || description.value == "") {
        console.log("il manque une saisie");
        error_log(info_submit,"Un des champs n'as pas etais saisie !","#e73567");
        return false;
    }else {
        return {
            id:request.length + 1,
            issue:issue_title.value,
            categorie:Categorie.value,
            priority:Priority.value,
            description:description.value,
        };
    }
}
function clear_input() {
    issue_title.value = "";
    Categorie.value = "";
    Priority.value = "";
    description.value = "";
}

function modification() {
    console.log("editing");
    console.log("done");

    if (issue_title.value == "" || Categorie.value == "" || Priority.value == "" || description.value == "") {
        console.log("il manque une saisie");
        error_log(info_submit,"Un des champs n'as pas etais saisie !","#e73567");
        button_submit.textContent = "＋  Ajouter la demande"
        action_type = "Ajouter";
        return;
    }

    request[editing_for]={
        id:editing_for + 1,
        issue:issue_title.value,
        categorie:Categorie.value,
        priority:Priority.value,
        description:description.value,
    };
    error_log(info_submit,"Modifier !","#35e776");
}

function request_issue() {
    if(action_type == "Ajouter")
    {
        let data = get_form_input();
        if (data == false) {
            return false;
        }
        request.push(get_form_input());
        error_log(info_submit,"Ajouter !","#35e776");

        clear_input();
        afficher();
    }
    else {
        modification();
        clear_input();
        afficher();
    }
    task_count.textContent = request.length +" demandes";

}



