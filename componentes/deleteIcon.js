const icoDelete = () => {
    const icoBorrar = document.createElement('i');
    icoBorrar.classList.add('fas', 'fa-trash-alt', 'trashIcon', 'icon');
    icoBorrar.addEventListener('click', deleteTask)
    return icoBorrar;
}

const deleteTask = (event) => {
    const parent = event.target.parentElement;
    parent.remove();
}

export default icoDelete;