const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const signingPad = document.getElementById('signingPad');

signUpButton.addEventListener('click', () => 
signingPad.classList.add('right-panel-active'));

signInButton.addEventListener('click', () => 
signingPad.classList.remove('right-panel-active'));