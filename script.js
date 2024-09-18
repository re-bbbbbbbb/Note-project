listaNote = {elenco:[]};

function SalvaNota(){
    let titolo = document.getElementById("titolo").value;
    let testo = document.getElementById("testo").value;
    let colore = document.getElementById("colore").value;
    let sfondo = document.getElementById("sfondo").value;

    let nota = {};
    nota.titolo = titolo;
    nota.testo = testo;
    nota.colore=colore;
    nota.sfondo = sfondo;


    listaNote.elenco.push(nota);

    let stringaNote = JSON.stringify(listaNote);

    localStorage.setItem("listaNote", stringaNote);

    document.getElementById("stampa").innerHTML = "";

        for(i = 0; i < listaNote.elenco.length; i ++)
        {        
            htmlStampa="";
            htmlStampa += "<div id='nota"+i+"'>";
            htmlStampa += "<div id='nota"+i+"'>";
            htmlStampa += "<b>titolo: </b>" + "<br>" + listaNote.elenco[i].titolo + "<br>";
            htmlStampa += "<b>testo: </b>" + "<br>" + listaNote.elenco[i].testo + "<br>" + "<br>" + "<br>";
            htmlStampa += "</div>";
            htmlStampa += "</div>";
            document.getElementById("stampa").innerHTML += htmlStampa;


            document.getElementById("nota"+i).style.color = listaNote.elenco[i].colore;
            document.getElementById("nota"+i).style.backgroundColor = listaNote.elenco[i].sfondo; 

        }
}

function EliminaNote(){
    let titolo = document.getElementById("titolo").value;
    let testo = document.getElementById("testo").value;

    let nota = {};
    nota.titolo = titolo;
    nota.testo = testo;

    listaNote.elenco.pop(nota);

    let stringaNote = JSON.stringify(listaNote);

    localStorage.setItem("listaNote", stringaNote);

    document.getElementById("stampa").innerHTML = "";

    for(i = 0; i < listaNote.elenco.length; i ++)
    {        
        htmlStampa="";
        htmlStampa += "<div id='nota"+i+"'>";
        htmlStampa += "<div id='nota"+i+"'>";
        htmlStampa += "<b>titolo: </b>" + "<br>" + listaNote.elenco[i].titolo + "<br>";
        htmlStampa += "<b>testo: </b>" + "<br>" + listaNote.elenco[i].testo + "<br>" + "<br>" + "<br>";
        htmlStampa += "</div>";
        htmlStampa += "</div>";
        document.getElementById("stampa").innerHTML += htmlStampa;


        document.getElementById("nota"+i).style.color = listaNote.elenco[i].colore;
        document.getElementById("nota"+i).style.backgroundColor = listaNote.elenco[i].sfondo; 

    }
}

function init(){
    let notaStringa = localStorage.getItem("listaNote");

    if (notaStringa != null)
    {
        listaNote = JSON.parse(notaStringa);

        document.getElementById("stampa").innerHTML = "";

        for(i = 0; i < listaNote.elenco.length; i ++)
        {        
            htmlStampa="";
            htmlStampa += "<div id='nota"+i+"'>";
            htmlStampa += "<div id='nota"+i+"'>";
            htmlStampa += "<b>titolo: </b>" + "<br>" + listaNote.elenco[i].titolo + "<br>";
            htmlStampa += "<b>testo: </b>" + "<br>" + listaNote.elenco[i].testo + "<br>" + "<br>" + "<br>";
            htmlStampa += "</div>";
            htmlStampa += "</div>";
            document.getElementById("stampa").innerHTML += htmlStampa;


            document.getElementById("nota"+i).style.color = listaNote.elenco[i].colore;
            document.getElementById("nota"+i).style.backgroundColor = listaNote.elenco[i].sfondo; 

        }
    }
}