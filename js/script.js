let data = {

}
function get_form_input() {
    let issue_title = document.getElementById("issue_title").value;
    let Categorie = document.getElementById("Categorie").value;
    let Priority = document.getElementById("Priorite").value;
    let description = document.getElementById("description").value;
    if (issue_title == "" || Categorie == "" || Priority == "" || description == "") {
        return false;
    }else {
        return {
            issue:issue_title,
            categorie:Categorie,
            priority:Priority,
            description:description
        };
    }
}
