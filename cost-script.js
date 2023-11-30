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
