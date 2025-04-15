

function displayInformation() {
    
    var now = new Date();
    var dateTimeString  =now.toLocaleString();
	document.getElementById("p1").textContent = dateTimeString ;

    var currentURL = window.location.href;
    document.getElementById("url").textContent = "URL: " + currentURL;

    navigator.geolocation.getCurrentPosition(function(position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        document.getElementById("location").textContent = "Latitude: " + latitude + ", Longitude: " + longitude;
    });
    var browserName = navigator.appName;
    var browserVersion = navigator.appVersion;
    document.getElementById("browser").textContent = "Browser: " + browserName + " (Version: " + browserVersion + ")";

    var operatingSystem = navigator.platform;
    document.getElementById("os").textContent = "Operating System: " + operatingSystem;
}
function initialLoad() {
    window.savedInterval = setInterval(() => {
        document.getElementById('p1').innerHTML =  new Date().toLocaleString();
    }, 1000);
    displayInformation();
}


function schimbaContinut(resursa,jsFisier,jsFunctie) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if(xhttp.readyState === XMLHttpRequest.DONE)
        {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("continut").innerHTML = this.responseText;
            if (jsFisier) 
            {
                var elementScript = document.createElement('script');
                elementScript.onload = function () {
                console.log("hello");
                if (jsFunctie) {
                window[jsFunctie]();
                }
                };
                elementScript.src = jsFisier;
                document.head.appendChild(elementScript);
               } else {
                if (jsFunctie) {
                window[jsFunctie]();
                }
            } 
        }
    }
    else{
        document.getElementById("continut").innerHTML ='Eroare';
    }
    };
    xhttp.open('GET', resursa + '.html', true);
    xhttp.send();
}

function verificaUtilizator() {
    var utilizator = document.getElementById("utilizator").value;
    var parola = document.getElementById("parola").value;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var utilizatori = JSON.parse(this.responseText);
            var gasit = false;
            for (var i = 0; i < utilizatori.length; i++) {
                if (utilizatori[i].utilizator === utilizator && utilizatori[i].parola === parola) {
                    gasit = true;
                    break;
                }
            }
            if (gasit) {
                document.getElementById("rezultat").innerHTML = "Utilizator și parolă corecte!";
            } else {
                document.getElementById("rezultat").innerHTML = "Utilizator sau parolă incorecte!";
            }
        }
    };
    xhttp.open("GET", "utilizatori.json", true);
    xhttp.send();
}
function inregistrareUtilizator() {
    var utilizator = document.getElementById('nickname').value;
    var parola = document.getElementById('psw').value;
    
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            alert("Utilizatorul a fost înregistrat cu succes!");
        }
    };
    xhttp.open("POST", "/api/utilizatori", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    var data = JSON.stringify({
        "utilizator": utilizator,
        "parola": parola
    });
    xhttp.send(data);
}



//canvas 
{
    const canvas = document.getElementById('myCanvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
    const strokeColorPicker = document.getElementById('strokeColorPicker');
    const fillColorPicker = document.getElementById('fillColorPicker');
    let isDrawing = false;
    let startX, startY;

    function drawRectangle(x1, y1, x2, y2) {
        const width = x2 - x1;
        const height = y2 - y1;
        ctx.strokeStyle = strokeColorPicker.value;
        ctx.fillStyle = fillColorPicker.value;
        ctx.fillRect(x1, y1, width, height);
        ctx.strokeRect(x1, y1, width, height);
    }

    canvas.addEventListener('mousedown', (e) => {
        startX = e.offsetX;
        startY = e.offsetY;
        isDrawing = true;
    });

    canvas.addEventListener('mouseup', (e) => {
        if (isDrawing) {
            const endX = e.offsetX;
            const endY = e.offsetY;
            drawRectangle(startX, startY, endX, endY);
            isDrawing = false;
        }
    });

    function clearCanvas() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    } else {
        console.error('Canvas element not found.');
    }
}

//tabel

{
    function insertRow() {
        const table = document.getElementById('myTable');
        const positionInput = document.getElementById('position');
        const colorPicker = document.getElementById('colorPicker').value;
    
        const position = parseInt(positionInput.value);
        const newRow = table.insertRow(position);
        const cellsCount = table.rows[0].cells.length;
    
        for (let i = 0; i < cellsCount; i++) {
            const cell = newRow.insertCell(i);
            cell.textContent = `Row ${position}, Col ${i + 1}`;
            cell.style.backgroundColor = colorPicker;
        }
    }
    
    function insertColumn() {
        const table = document.getElementById('myTable');
        const positionInput = document.getElementById('position');
        const colorPicker = document.getElementById('colorPicker').value;
    
        const position = parseInt(positionInput.value);
        const rowsCount = table.rows.length;
    
        for (let i = 0; i < rowsCount; i++) {
            const cell = table.rows[i].insertCell(position);
            cell.textContent = `Row ${i + 1}, Col ${position}`;
            cell.style.backgroundColor = colorPicker;
        }
    }
}