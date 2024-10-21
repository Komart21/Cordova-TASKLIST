$(document).ready(function () {
    $("#addTask").on("click", function () {
        $("#taskDialog").dialog({
            buttons: {
                "Add": function () {
                    let taskText = $("#taskInput").val();
                    if (taskText) {
                        // Añadir nueva tarea a la lista
                        $("#tasklist").append(`<li>${taskText} <button class="edit">edit</button><button class="delete">X</button></li>`);
                        $("#taskInput").val("");  // Limpiar el input
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
        $(this).parent().remove();  // Elimina el elemento padre <li>
    });

    // Editar una tarea
    $(document).on("click", ".edit", function () {
        let li = $(this).parent();  // Selecciona el <li> padre
        let taskText = li.text().replace("editX", "").trim();  // Obtiene el texto sin los botones
        let newTaskText = prompt("Edit Task:", taskText);
        if (newTaskText) {
            li.html(`${newTaskText} <button class="edit">edit</button><button class="delete">X</button>`);
        }
    });
});
