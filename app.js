const btnAgregar = document.getElementById("agregarTareaBtn");
const btnEliminar = document.getElementById("eliminarTareaBtn");
const listaTareas = document.querySelector(".listaTareas");
const textArea = document.getElementById("tareaInput");


btnAgregar.addEventListener("click", (e)=>{
    if (document.getElementById("tareaInput").value=="") return;
    const newElementLi = document.createElement("li");
    newElementLi.textContent = document.getElementById("tareaInput").value;
    listaTareas.prepend(newElementLi);
    document.getElementById("tareaInput").value = "";
    textArea.focus();
})

btnEliminar.addEventListener("click", (e)=>{
    const deleteElement = document.querySelector("li");
    deleteElement.remove();
    textArea.focus();
})