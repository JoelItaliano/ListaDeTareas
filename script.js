// Immediately invoked function expression IIFE 
import checkComplete from "./componentes/checkComplete.js";
import icoDelete from "./componentes/deleteIcon.js";
    
    
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
        div.appendChild(span);
        
         
        task.appendChild(div);
        task.appendChild(icoDelete())
        list.appendChild(task);
     

        input.value = '';
    
    }


    btnAgregar.addEventListener('click', createTask);
