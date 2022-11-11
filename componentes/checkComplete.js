const checkComplete = () => {
    const firstI = document.createElement('i');
    firstI.classList.add('far', 'fa-check-square', 'icon');
    firstI.addEventListener('click', completeTask);
    return firstI;
};


const completeTask = (event) => {
    const element = event.target;
    element.classList.toggle('fas');
    element.classList.toggle('completeIcon');
    element.classList.toggle('far');
};

export default checkComplete;