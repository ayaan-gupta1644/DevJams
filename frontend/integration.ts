fetch('http://localhost:8000/transactions', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    date: '2025-09-21',
    description: 'Coffee',
    amount: 2.5
  }),
})
.then(response => response.json())
.then(data => console.log(data))
