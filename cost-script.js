// Daten speichern
document.getElementById('costForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const description = document.getElementById('description').value;
  const date = document.getElementById('date').value;
  const category = document.getElementById('category').value;
  const amount = document.getElementById('amount').value;

  const costData = {
    description,
    date,
    category,
    amount
  };

  // Hier können Sie den Cache (z.B. localStorage) verwenden, um Daten zu speichern
  // Beispiel: localStorage.setItem('costEntry', JSON.stringify(costData));
  console.log('Daten gespeichert:', costData);
});
