document.getElementById("updateBtn").addEventListener("click", function() {
    let name = prompt("Enter new name:");
    let id = prompt("Enter new ID:");

    if(name) document.getElementById("name").innerText = name;
    if(id) document.getElementById("id").innerText = id;
});
