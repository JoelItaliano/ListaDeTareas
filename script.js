const btnAgregar = document.querySelector("[data-form-btn]");


const createTask = (evento) => {
    evento.preventDefault(); //previene el duncionamiento por defecto del formulario (refescar pag)
    const input = document.querySelector('[data-form-input]');
    const list = document.querySelector('[data-list]')
    const task = document.createElement('li');
         
    task.classList.add('card');

    const contenido = agregaHTML(input.value);
    input.value = '';

    task.innerHTML = contenido; //agrega contenido a html
    list.appendChild(task) 
}

btnAgregar.addEventListener('click', createTask);

function agregaHTML(valor) {
   return `<div>
    <i class="far fa-check-square icon"></i>
    <span class="task">${valor}</span>
    </div>
    <i class="fas fa-trash-alt trashIcon icon"></i>`
}