function visualCode(){
    var projects = document.getElementsByClassName('project');
    while (projects[0]) {
        projects[0].parentNode.removeChild(projects[0]);
    }
}
