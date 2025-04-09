export default function setupFormHandler () {

    const form = document.getElementById('survey-form');
    const messageContainer = document.getElementById('messange-container');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const age = document.getElementById('number').value;
        const dropdown = document.getElementById('dropdown').values;
        const radioButtons = document.querySelectorAll('imput[type="radio"]:checked');
        const checkboxes = document.querySelectorAll('imput[type="radio"]:checked');

        if (name && email && age && dropdown && radioButtons && checkboxes.lenth > 0 && Comment) {
            messageContainer.textContent = 'FORMULARIO ENVIADO CON EXITO';
            messageContainer.style.color = 'green';
        }else{
            messageContainer.textContent = 'Por favor, complete todos los campos requeridos.';
            messageContainer.style.color = 'red'; 
        }
    });
}