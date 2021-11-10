const formEl = document.querySelector('#expenseForm');
const submitButton = document.querySelector('.submitButton');
const emptyRow = document.querySelector('.emptyRow');
const tbodyEl = document.querySelector('tbody');
const tableEl = document.querySelector('table');

expenseForm.addEventListener('submit', (event) => {
	event.preventDefault(event);
	emptyRow.classList.add('hide');

	const datePurchased = document.querySelector('.datePurchased').value;
	const expense = document.querySelector('.expense').value;
	const amount = `$${document.querySelector('.amount').value}`;

	tbodyEl.innerHTML += `
	  <tr>
	    <td class="newDate">${datePurchased}</td>
      <td class="newExpense">${expense}</td>
      <td class="newAmount">${amount}</td>
      <td><button class="deleteButton">Delete</button></td>
	  </tr>
	`;

});

tableEl.addEventListener('click', (event) => {
  if (!event.target.classList.contains('deleteButton')) {   
    return;
  }
  const btn = event.target;
  btn.closest('tr').remove();
})

//Another way:
// const classList = event.target.classList;
// const containsDelete = classList.contains('deleteButton');
// if (!containsDelete) { ... }
