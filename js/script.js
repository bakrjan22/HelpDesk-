const parent = document.getElementById("demandes-top-left-id");
const card_or_array = document.getElementById("card-or-array");
const issue_title = document.getElementById("issue_title");
const Categorie = document.getElementById("Categorie");
const Priority = document.getElementById("Priorite");
const description = document.getElementById("description");
const cartes_button = document.getElementById("card-button");
const tableau_button = document.getElementById("tableau-button");
const task_count = document.getElementById("task-count");
cartes_button.style.backgroundColor = "white";
tableau_button.style.backgroundColor = "#ccced1";

let request = [];


/*
Html structure

Card should be pushed inside of .demandes-display

<div class="issue-card">
    <div class="wrap-card">
        <div class="top-card">
            <div class="logo-card">
                <i class="fa-solid fa-wifi" style="color: rgb(250, 251, 252);"></i>
            </div>
            <h4 id="issue-id">HD-001</h4>
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
                <button><i class="fa-solid fa-pen-fancy" style="color: rgb(97, 112, 132);"></i>Modifier</button>
                <button><i class="fa-solid fa-eraser" style="color: rgb(204, 98, 106);"></i>Supprimer</button>
            </div>
        </div>
    </div>
</div>
*/

function icon_builder(icon_class,icon_style) {
    let icon = document.createElement("i");
    icon.className = icon_class;
    icon.style = icon_style;
    return icon;
}

function component_card_builder(issue_title,issue_type,priority_type,description) {
    let demandes_container = document.getElementById("id-demandes-display");

    let div_issue_card = document.createElement("div");
    div_issue_card.className = "issue-card";

    let div_wrap_card = document.createElement("div");
    div_wrap_card.className = "wrap-card";

    let div_top_card = document.createElement("div");
    div_top_card.className = "top-card";

    let div_logo_card = document.createElement("div");
    div_top_card.className = "logo-card";


    div_logo_card.appendChild(icon_builder("fa-solid fa-pen-fancy","color: rgb(240, 242, 245);"));
    div_top_card.appendChild(div_logo_card)
    div_wrap_card.appendChild(div_top_card);
    div_issue_card.appendChild(div_wrap_card);
    demandes_container.appendChild(div_issue_card);

}

component_card_builder();

let display_method = {
    cartes:1,
    tableau:0,

    toggle_cartes() {
        this.cartes = 1;
        this.tableau = 0;
        console.log("cartes " + this.cartes, " tableau " + this.tableau);
        cartes_button.style.backgroundColor = "white";
        tableau_button.style.backgroundColor = "#ccced1";
    },
    toggle_tableau() {
        this.cartes = 0;
        this.tableau = 1;
        console.log("cartes " + this.cartes, " tableau " + this.tableau);
        cartes_button.style.backgroundColor = "#ccced1";
        tableau_button.style.backgroundColor = "white";
    }
}
function get_form_input() {
    issue_title.value;
    Categorie.value;
    Priority.value;
    description.value;
    if (issue_title == "" || Categorie == "" || Priority == "" || description == "") {
        return false;
    }else {
        return {
            id:request.length,
            issue:issue_title,
            categorie:Categorie,
            priority:Priority,
            description:description
        };
    }
}
function clear_input() {
    issue_title.value = "";
    Categorie.value = "";
    Priority.value = "";
    description.value = "";
}
function request_issue() {
    let data = get_form_input();
    if (data == false) {
        return data;
    }
    request.push(get_form_input());
    clear_input();
    task_count.textContent = request.length + " demandes";
    console.log(request);
}
