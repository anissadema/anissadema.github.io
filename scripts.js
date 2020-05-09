var teilnehmerliste = [];
knopf.addEventListener("click", function(){
		// feld holen
    var eingabefeld = document.getElementById("teilnehmer");
    var wert = eingabefeld.value;
    // feld leeren
    eingabefeld.value = "";
    // wenn wert nicht leer, in liste eintragen!
    if (wert != "") {
    	 teilnehmerliste.push(wert);
    }
    // liste darstellen
    stelleListedar();
});


var loeschenknopf = document.getElementById("loeschen");
loeschenknopf.addEventListener("click", function(){
    listeLeeren();
});

var loeschenknopf = document.getElementById("loeschen");
loeschenknopf.addEventListener("click", function(){
    listeLeeren();
});

function listeLeeren() {
  teilnehmerliste = [];
  sichtbareListeLeeren();
}

function sichtbareListeLeeren () {
	var guiTeilnehmerliste = document.getElementById("teilnehmerliste");
  while (guiTeilnehmerliste.firstChild) {
      guiTeilnehmerliste.removeChild(guiTeilnehmerliste.firstChild);
  }
}

function loescheEintrag (index) {
	teilnehmerliste.splice(index, 1);
  stelleListedar();
}

unction stelleListedar() {
    // ul liste holen
   var guiTeilnehmerliste = document.getElementById("teilnehmerliste");
   // ul liste leeren
   while (guiTeilnehmerliste.firstChild) {
     guiTeilnehmerliste.removeChild(guiTeilnehmerliste.firstChild);
     }
   // ul liste füllen
   for (var i=0; i < teilnehmerliste.length; i++) {
         var li = document.createElement("li");
         var textKnoten = document.createTextNode(teilnehmerliste[i]);
          li.appendChild(textKnoten);
     // remove x an li hängen
     var span = document.createElement("span");
     var txt = document.createTextNode("x");
     span.className = "delete";
     span.appendChild(txt);
     li.appendChild(span);
     // li mit data index ausstatten
     li.setAttribute('data-array-index', i);
     // li in gui platzieren
     guiTeilnehmerliste.appendChild(li);
    }
    
    // deletes funktion anhängen
    var deletes = document.getElementsByClassName("delete");
  	for (var j = 0; j < deletes .length; j++) {
    	deletes [j].onclick = function() {
    	var eintrag = this.parentElement;  // auf das LI zugreifen
    	var referenz = eintrag.getAttribute('data-array-index');
        loescheEintrag(referenz);
    };
}
}


var ermittelnKnopf = document.getElementById("ermitteln");
ermittelnKnopf.addEventListener("click", function(){
var anzahlGewinner = document.getElementById("anzahlGewinner");
var wert = anzahlGewinner.value;
var gewinnerString = "";
for (var i = 0; i < wert; i++) {
    var gewinner = giveRandomItem(teilnehmerliste);
      gewinnerString += gewinner;
}
window.alert("Die oder der Gewinner ist: " + gewinnerString + "");
console.log(gewinnerString);
});

function giveRandomItem (array) {
return array[Math.floor(Math.random() * array.length)];
}

