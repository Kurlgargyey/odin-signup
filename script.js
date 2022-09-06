let password = document.getElementById('password');
let passwordConfirm = document.getElementById('password-confirm');
let message = document.getElementById('match-message');

passwordConfirm.addEventListener('input', () => {
 if (passwordConfirm.value == "") {
  hideWarning();
  return;
 }
 if (password.value != passwordConfirm.value) {
  showWarning();
 } else {
  hideWarning();
 }
})

password.addEventListener('input', () => {
 if (passwordConfirm.value == "") {
  hideWarning();
  return;
 }
 if (password.value != passwordConfirm.value) {
  showWarning();
 } else {
  hideWarning();
 }
})

function showWarning() {
 password.setCustomValidity(" ");
 passwordConfirm.setCustomValidity(" ");
 message.style.height = "16px";
};

function hideWarning() {
 password.setCustomValidity("");
 passwordConfirm.setCustomValidity("");
 message.style.height = "0";
}