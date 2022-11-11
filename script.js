const btnAgregar = document.querySelector("[data-form-btn]");


const createTask = (evento) => {
    evento.preventDefault(); //previene el duncionamiento por defecto del formulario (refescar pag)
    const input = document.querySelector('[data-form-input]');
    const list = document.querySelector('[data-list]')
    const task = document.createElement('li');
    const div = document.createElement('div');
    const span = document.createElement('span');

    task.classList.add('card');    

    span.classList.add('task');
    span.innerText = input.value;

    div.appendChild(checkComplete());
    div.appendChild(span)
         
    
    list.appendChild(task)
    task.appendChild(div);

    input.value = '';
    
}


btnAgregar.addEventListener('click', createTask);

const checkComplete = () => {
    const firstI = document.createElement('i');
    firstI.classList.add('far', 'fa-check-square', 'icon');
    firstI.addEventListener('click', completeTask);
    return firstI;
  };

  // Immediately invoked function expression IIFE
  const completeTask = (event) => {
    const element = event.target;
    element.classList.toggle('fas');
    element.classList.toggle('completeIcon');
    element.classList.toggle('far');
  };
