//form validation
const checkBox = document.getElementById('formCheckbox')
const sbmtBtn = document.getElementById('formSubmit');
const form = document.getElementById('contactForm');
const checkBoxContainer = document.getElementById('formCheckBox')

checkBoxContainer.style.visibility = 'hidden';
sbmtBtn.disabled = true;

function checkFormsValidity() {
	if (formName.checkValidity() && formEmail.checkValidity() && formTextArea.checkValidity()) {
		checkBoxContainer.style.visibility = 'visible'
	}else {
		!checkBox.checked ? sbmtBtn.disabled = true : false ;
		sbmtBtn.disabled = true
		checkBoxContainer.style.visibility = 'hidden'
		checkBox.checked = false
	}
}

formName.onkeyup = () => checkFormsValidity()
formEmail.onkeyup = () => checkFormsValidity()
formTextArea.onkeyup = () => checkFormsValidity()


checkBox.onclick = () => {
	!checkBox.checked ? sbmtBtn.disabled = true : sbmtBtn.disabled = false
}