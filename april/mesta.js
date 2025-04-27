// Filtrování tabulky
document.getElementById('filterTableInput').addEventListener('input', function() {
  let filter = this.value.toLowerCase();
  let rows = document.querySelectorAll('#dataTable tbody tr');

  rows.forEach(row => {
      let city = row.cells[1].textContent.toLowerCase();
      if (city.includes(filter)) {
          row.style.display = '';
      } else {
          row.style.display = 'none';
      }
  });
});

// Filtrování výběrového menu
document.getElementById('filterSelectInput').addEventListener('input', function() {
  let filter = this.value.toLowerCase();
  let select = document.getElementById('citySelect');
  let options = select.options;

  for (let i = 0; i < options.length; i++) {
      let optionText = options[i].text.toLowerCase();
      if (optionText.includes(filter) || filter === '') {
          options[i].style.display = '';
      } else {
          options[i].style.display = 'none';
      }
  }
});

// Odeslání formuláře
document.getElementById('cityForm').addEventListener('submit', function(e) {
  e.preventDefault();
  let selectedCity = document.getElementById('citySelect').value;
  document.getElementById('result').textContent = `Vybrali jste město: ${selectedCity}`;
  console.log(`Vybrali jste město: ${selectedCity}`);
});
