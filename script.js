const btnAgregar = document.querySelector("[data-form-btn]");


const createTask = ((evento) => {
    evento.preventDefault; //previene el duncionamiento por defecto del formulario (refescar pag)
    const input = document.querySelector("[data-form-input]");
    console.log(input.value)
})

btnAgregar.addEventListener(createTask)