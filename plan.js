function generate(date, cl) {
    var request = new XMLHttpRequest();
    if ("withCredentials" in request) {
        // Firefox 3.5 and Safari 4
        request.open('GET', "https://www.stundenplan24.de/10196133/mobil/mobdaten/Klassen.xml?_=1632390645641", true);
        request.onreadystatechange = function () {
            console.log(request)
            if (request.readyState === request.DONE && request.status === 200) {
                const parser = new DOMParser();
                var xml = parser.parseFromString(request.response, "application/xml");
                console.log(xml)
                //createTable(xml.querySelectorAll('Pl')[cl].querySelectorAll('Std'))
            }
        };
        request.send();
    }
    //.done();
    // var xhr = new XMLHttpRequest();
    // xhr.open("GET", "https://www.stundenplan24.de/10196133/mobil/mobdaten/Klassen.xml?_=1632390645641"/* + date + ".xml"*/, !1);
    // xhr.setRequestHeader("Authorization", "Basic c2NodWVsZXI6Uzc0dDkxNQ==");
    // xhr.withCredentials = true;
    // xhr.onreadystatechange = function () {
    //     if (xhr.readyState === xhr.DONE && xhr.status === 200) {
    //         const parser = new DOMParser();
    //         var xml = parser.parseFromString(xhr.response, "application/xml");
    //         createTable(xml.querySelectorAll('Pl')[cl].querySelectorAll('Std'))
    //     }
    // }
    // xhr.send();
}
function createTable(data) {
    var body = document.querySelector('body');
    tbl = document.createElement('table');
    tbl.style.border = '1px solid black';
    for (var i = 0; i < data.length; i++) {
        var tr = tbl.insertRow();
        createRow(tr, data[i].childNodes)
    }
    body.appendChild(tbl);
}

function createRow(tr, data) {
    for (var j = 0; j < 5; j++) {
        var td = tr.insertCell();
        td.appendChild(document.createTextNode(data[j].innerHTML));
        td.style.border = '1px solid black';
    }
}
