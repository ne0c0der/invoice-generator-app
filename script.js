function addItem() {
  const table = document.getElementById('items');
  const row = table.insertRow();
  
  const descCell = row.insertCell(0);
  const qtyCell = row.insertCell(1);
  const priceCell = row.insertCell(2);
  const totalCell = row.insertCell(3);
  
  descCell.innerHTML = `<input type="text" placeholder="Description">`;
  qtyCell.innerHTML = `<input type="number" min="1" value="1" onchange="updateTotal()">`;
  priceCell.innerHTML = `<input type="number" min="0" value="0" onchange="updateTotal()">`;
  totalCell.innerHTML = `$0.00`;
}

function updateTotal() {
  const table = document.getElementById('items');
  let grandTotal = 0;
  
  for (let i = 1; i < table.rows.length; i++) {
    const row = table.rows[i];
    const qty = parseFloat(row.cells[1].querySelector('input').value || 0);
    const price = parseFloat(row.cells[2].querySelector('input').value || 0);
    const total = qty * price;
    
    row.cells[3].textContent = `$${total.toFixed(2)}`;
    grandTotal += total;
  }
  
  document.getElementById('grandTotal').textContent = `Total: $${grandTotal.toFixed(2)}`;
}