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

// Funktion zum Generieren der Tabelle mit gespeicherten Kosten
function generateTable() {
  const costTableBody = document.getElementById('costTableBody');
  const savedCosts = JSON.parse(localStorage.getItem('gespeicherteKosten')) || [];

  if (savedCosts.length > 0) {
    savedCosts.forEach(cost => {
      const row = costTableBody.insertRow();
      const descriptionCell = row.insertCell(0);
      const dateCell = row.insertCell(1);
      const categoryCell = row.insertCell(2);
      const amountCell = row.insertCell(3);

      descriptionCell.textContent = cost.description;
      dateCell.textContent = cost.date;
      categoryCell.textContent = cost.category;
      amountCell.textContent = cost.amount;
    });
  } else {
    // Nachricht, falls keine Daten vorhanden sind
    const row = costTableBody.insertRow();
    const messageCell = row.insertCell();
    messageCell.colSpan = 4;
    messageCell.textContent = 'Keine gespeicherten Kosten vorhanden';
  }
}

// Tabelle generieren, wenn die Seite geladen wird
window.onload = function() {
  generateTable();
};
