var button = document.querySelector('#button');
var modal = document.querySelector('#modal');
var close = document.querySelector('#close');
function closer() {
	modal.classList.remove('modal_active');
}
button.addEventListener('click', function() {
	modal.classList.add('modal_active');
	setTimeout(closer, 5000);
});

close.addEventListener('click', function closer() {
	modal.classList.remove('modal_active');
});


