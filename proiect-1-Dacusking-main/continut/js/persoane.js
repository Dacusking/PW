{
    function incarcaPersoane() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                afiseazaTabel(this.responseXML);
            }
        };
        xhttp.open("GET", "persoane.xml", true);
        xhttp.send();
    }

    function afiseazaTabel(xml) {
        var table = "<table border='1'>";
        var persoane = xml.getElementsByTagName("persoana");
        table += "<tr><th>Nume</th><th>Prenume</th><th>Varsta</th><th>Data Nasterii</th></tr>";
        for (var i = 0; i < persoane.length; i++) {
            table += "<tr>";
            table += "<td>" + persoane[i].getElementsByTagName("nume")[0].childNodes[0].nodeValue + "</td>";
            table += "<td>" + persoane[i].getElementsByTagName("prenume")[0].childNodes[0].nodeValue + "</td>";
            table += "<td>" + persoane[i].getElementsByTagName("varsta")[0].childNodes[0].nodeValue + "</td>";
            table += "<td>" + persoane[i].getElementsByTagName("cv-an-nastere")[0].childNodes[0].nodeValue + "</td>";
            table += "</tr>";
        }
        table += "</table>";
        document.getElementById("continut").innerHTML = table;
    }
}
