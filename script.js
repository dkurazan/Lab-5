const langLink = document.getElementById('langLink');
const studLink = document.getElementById('studLink');

const loadData = (dataType) => {
    fetch(dataType === "languages" ? "1.txt" : "2.txt")
        .then((response) => response.text())
        .then((data) => displayData(dataType, data))
        .catch((error) => console.error("Error fetching data:", error));
}

const displayData = (dataType, data) => {
    var yellowBlock = document.getElementById("results");
    yellowBlock.innerHTML = "";

    var jsonData = JSON.parse(data);
    var ul = document.createElement("ul");

    jsonData[dataType].forEach(function (item) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(item));
        ul.appendChild(li);
    });

    yellowBlock.appendChild(ul);
}

langLink.addEventListener('click', e => {
    e.preventDefault();
    loadData('languages');
});
studLink.addEventListener('click', e => {
    e.preventDefault();
    loadData('students');
});