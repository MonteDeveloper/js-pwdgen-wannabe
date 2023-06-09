let thisYear = 2023;
let userName = prompt("Inserisci il tuo NOME").toLowerCase();
let userSurname = capitalizeWord(prompt("Inserisci il tuo COGNOME"));
let userfavColor = capitalizeWord(prompt("Inserisci il tuo COLORE PREFERITO"));

if (userName == "" || userSurname == "" || userfavColor == "") {
    document.getElementById("passResult").innerHTML = 
    `
    <span class="badge text-bg-danger fs-4 text-wrap mw-100">
        ERRORE: ricarica la pagina e inserisci tutti i dati
    </span>
    `;
    document.getElementById("my-boxBefore").style.backgroundColor = "red";
}else{

    alert(`Ciao ${capitalizeWord(userName)}! Sto generando la tua password...`);
    alert(`Sì esatto, era un caricamento fasullo. In realtà la tua password l'ho generata da un bel pezzo eh (che brutto colore comunque il ${userfavColor.toLowerCase()})`);

    document.getElementById("passResult").innerHTML = 
    `
    <span class="badge text-bg-success fs-4 text-wrap mw-100">
        ${userName.replace(' ', '')}${userSurname.replace(' ', '')}${userfavColor.replace(' ', '')}${thisYear}
    </span>
    `;
}

function capitalizeWord(word){
    word = word.trim();
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}
