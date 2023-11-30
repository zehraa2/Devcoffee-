// Daten speichern
document.getElementById('costForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Daten aus den Formularfeldern erfassen
  const description = document.getElementById('description').value;
  const date = document.getElementById('date').value;
  const category = document.getElementById('category').value;
  const amount = document.getElementById('amount').value;

  // Objekt erstellen, um die Kosteninformationen zu speichern
  const costData = {
    description,
    date,
    category,
    amount
  };

  // Daten als JSON im localStorage speichern
  localStorage.setItem('costEntry', JSON.stringify(costData));
  
  // Optional: Rückmeldung an den Benutzer oder andere Aktionen nach dem Speichern
  console.log('Daten gespeichert:', costData);
});

const savedData = localStorage.getItem('costEntry');
console.log('Gespeicherte Daten:', JSON.parse(savedData));

// Funktion zum Generieren der Tabelle mit gespeicherten Daten
function generateTable() {
  const savedData = localStorage.getItem('costEntry');
  const costTableBody = document.getElementById('costTableBody');

  if (savedData) {
    const parsedData = JSON.parse(savedData);

    // Eintrag in die Tabelle einfügen
    const row = costTableBody.insertRow();
    const descriptionCell = row.insertCell(0);
    const dateCell = row.insertCell(1);
    const categoryCell = row.insertCell(2);
    const amountCell = row.insertCell(3);

    descriptionCell.textContent = parsedData.description;
    dateCell.textContent = parsedData.date;
    categoryCell.textContent = parsedData.category;
    amountCell.textContent = parsedData.amount;
  } else {
    // Nachricht, falls keine Daten vorhanden sind
    const row = costTableBody.insertRow();
    const messageCell = row.insertCell();
    messageCell.colSpan = 4;
    messageCell.textContent = 'Keine gespeicherten Daten vorhanden';
  }
}

// Tabelle generieren, wenn die Seite geladen wird
window.onload = function() {
  // Hier können Sie Ihre anderen Funktionen oder Initialisierungen einfügen
  
  // Tabelle generieren
  generateTable();
};
