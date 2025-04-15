{
    function adaugaProdus() {
    const numeProdusInput = document.getElementById('numeProdus');
    const cantitateInput = document.getElementById('cantitate');

    const numeProdus = numeProdusInput.value.trim();
    const cantitate = parseInt(cantitateInput.value);

    if (numeProdus !== '' && !isNaN(cantitate) && cantitate > 0) {
        const produs = new Produs(numeProdus, cantitate);
        salvareLocalStorage(produs);
        alert('Produsul a fost adăugat în lista de cumpărături.');
        numeProdusInput.value = '';
        cantitateInput.value = '';
    } else {
        alert('Vă rugăm să completați corect toate câmpurile.');
    }
}

class Produs {
    constructor(nume, cantitate) {
        this.id = Date.now(); // Generare id unic pentru fiecare produs
        this.nume = nume;
        this.cantitate = cantitate;
    }
}

function salvareLocalStorage(produs) {
    let listaCumparaturi = JSON.parse(localStorage.getItem('cumparaturi')) || [];
    listaCumparaturi.push(produs);
    localStorage.setItem('cumparaturi', JSON.stringify(listaCumparaturi));
}
}