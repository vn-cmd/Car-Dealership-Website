var kosarica = new Array();

function validate() {
    const ime = document.forms["myForm"]["ime"].value;
    const priimek = document.forms["myForm"]["priimek"].value;

    const geslo = document.forms["myForm"]["geslo"].value;
    const geslo1 = document.forms["myForm"]["geslo1"].value;
    if (ime == "") {
        alert("Prosimo, vpišite ime");
        return false;
    }

    if (priimek == "") {
        alert("Prosimo, vpišite priimek");
        return false;
    }

    if (geslo == "" || geslo1 == "") {
        alert("Prosimo, vpišite geslo");
        return false;
    } else {
        if (geslo != geslo1) {
            alert("Gesli se ne ujemata");
            return false;
        }
    }

    return true;
}

function dodaj(izdelek, cena, kolicina, popust) {
    kosarica = JSON.parse(localStorage.getItem("kosarica"));

    if (kosarica == null) {
        kosarica = new Array();
    }

    const produkt = new Object();
    produkt.id = generirajId();
    produkt.izdelek = izdelek;
    produkt.cena = cena;
    produkt.kolicina = kolicina;
    produkt.popust = popust;

    kosarica.push(produkt);

    console.log(kosarica);

    localStorage.setItem("kosarica", JSON.stringify(kosarica));
}

function generirajId() {
    const newId = kosarica.length + 1;

    return newId;
}

function generirajKosarico() {
    kosarica = JSON.parse(localStorage.getItem("kosarica"));

    if (kosarica == null) {
        kosarica = new Array();
    }

    const table = document.createElement("TABLE");
    const attribute = document.createAttribute("class");        
    attribute.value = "table table-bordered table-striped table-dark table-hover";  
    table.setAttributeNode(attribute);

    var row = table.insertRow(-1);
    var headerCell = document.createElement("TH");
    headerCell.innerHTML = "Izdelek";
    row.appendChild(headerCell);

    headerCell = document.createElement("TH");
    headerCell.innerHTML = "Cena";
    row.appendChild(headerCell);

    headerCell = document.createElement("TH");
    headerCell.innerHTML = "Količina";
    row.appendChild(headerCell);

    headerCell = document.createElement("TH");
    headerCell.innerHTML = "Popust";
    row.appendChild(headerCell);

    for (var i = 0; i < kosarica.length; i++) {
        row = table.insertRow(-1);
        var cell = row.insertCell(-1);
        cell.innerHTML = kosarica[i].izdelek;

        cell = row.insertCell(-1);
        cell.innerHTML = kosarica[i].cena + "€";

        cell = row.insertCell(-1);
        cell.innerHTML = kosarica[i].kolicina;

        cell = row.insertCell(-1);
        cell.innerHTML = kosarica[i].popust + "\%";
    }

    const dvTable = document.getElementById("table");
    dvTable.innerHTML = "";
    dvTable.appendChild(table);
}

function pocistiKosarico() {
    localStorage.clear();
    generirajKosarico();
}

function generirajIzdelke() {
    
    const table = document.createElement("TABLE");
    const attribute = document.createAttribute("class");       
    attribute.value = "table table-bordered table-striped table-dark table-hover";  
    table.setAttributeNode(attribute);

    var row = table.insertRow(-1);
    var headerCell = document.createElement("TH");
    headerCell.innerHTML = "Artikel";
    row.appendChild(headerCell);

    headerCell = document.createElement("TH");
    headerCell.innerHTML = "Opis";
    row.appendChild(headerCell);

    headerCell = document.createElement("TH");
    headerCell.innerHTML = "Cena";
    row.appendChild(headerCell);

    headerCell = document.createElement("TH");
    headerCell.innerHTML = "Št. kosov na voljo";
    row.appendChild(headerCell);

    headerCell = document.createElement("TH");
    headerCell.innerHTML = "Slika";
    row.appendChild(headerCell);

    headerCell = document.createElement("TH");
    headerCell.innerHTML = "";
    row.appendChild(headerCell);

    const izdelki = preberiXML("xml/seznam.xml");

    for (var i = 0; i < izdelki.length; i++) {
        const izdelek = izdelki[i];

        row = table.insertRow(-1);
        var cell = row.insertCell(-1);
        cell.innerHTML = izdelek.izdelek;

        cell = row.insertCell(-1);
        cell.innerHTML = izdelek.opis;

        cell = row.insertCell(-1);
        cell.innerHTML = izdelek.cena + "€";

        cell = row.insertCell(-1);
        cell.innerHTML = izdelek.kolicina;

        cell = row.insertCell(-1);
        cell.innerHTML = "<img src=" + izdelek.src + " width=\"100px\" height=\"100px\" />";

        cell = row.insertCell(-1);
        cell.innerHTML = "<button onclick=dodaj('"+izdelek.izdelek+"',"+izdelek.cena+","+
                            1 + "," + izdelek.popust +")>Dodaj v košarico</button>";
    }

    const dvTable = document.getElementById("tablePodrobnosti");
    dvTable.innerHTML = "";
    dvTable.appendChild(table);
}

function preberiXML(pot) {
    const izdelki = new Array();

    const xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", pot, false);
    xmlhttp.send();

    const xmlDoc = xmlhttp.responseXML;
    
    const artikelNodes = xmlDoc.getElementsByTagName("artikel");

    for (artikel of artikelNodes) {
        const artikelObj = new Object();
        artikelObj.id = artikel.getAttribute('id');
        artikelObj.src = artikel.getAttribute('src');

        artikelObj.izdelek = artikel.childNodes[1].textContent;
        artikelObj.opis = artikel.childNodes[3].textContent;
        artikelObj.cena = artikel.childNodes[5].textContent;
        artikelObj.kolicina = artikel.childNodes[7].textContent;
        artikelObj.popust = artikel.childNodes[9].textContent;

        izdelki.push(artikelObj);
    }

    return izdelki;
}