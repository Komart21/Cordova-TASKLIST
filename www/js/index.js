$(document).ready(function () {

    // Función para cargar tareas desde localStorage
    function loadTasks() {
        let storedTasks = localStorage.getItem('tasks');  // Obtener las tareas almacenadas
        if (storedTasks) {
            let tasks = JSON.parse(storedTasks);  // Convertirlas a objeto
            tasks.forEach(function (task) {
                $("#tasklist").append(`<li>${task} <button class="edit">edit</button><button class="delete">X</button></li>`);
            });
        }
    }

    // Función para guardar tareas en localStorage
    function saveTasks() {
        let tasks = [];
        $("#tasklist li").each(function () {
            let taskText = $(this).text().replace("editX", "").trim();  
            tasks.push(taskText);  
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));  
    }

    // Cargar tareas al inicio
    loadTasks();

    // Añadir una nueva tarea
    $("#addTask").on("click", function () {
        $("#taskDialog").dialog({
            buttons: {
                "Add": function () {
                    let taskText = $("#taskInput").val();
                    if (taskText) {
                        $("#tasklist").append(`<li>${taskText} <button class="edit">edit</button><button class="delete">X</button></li>`);
                        $("#taskInput").val(""); 
                        saveTasks();  
                    }
                    $(this).dialog("close");
                },
                "Cancel": function () {
                    $(this).dialog("close");
                }
            }
        });
    });

    // Eliminar una tarea
    $(document).on("click", ".delete", function () {
        $(this).parent().remove();  
        saveTasks();  
    });

    // Editar una tarea
    $(document).on("click", ".edit", function () {
        let li = $(this).parent(); 
        let taskText = li.text().replace("editX", "").trim(); 
        let newTaskText = prompt("Edit Task:", taskText);
        if (newTaskText) {
            li.html(`${newTaskText} <button class="edit">edit</button><button class="delete">X</button>`);
            saveTasks(); 
        }
    });
});
