$(document).ready(function () {
    // Función para abrir el diálogo y añadir una nueva tarea
    $("#addTask").on("click", function () {
        $("#taskDialog").dialog({
            buttons: {
                "Añadir": function () {
                    let taskText = $("#taskInput").val();
                    if (taskText) {
                        // Añadir la nueva tarea a la lista
                        $("#tasklist").append(`<li>${taskText}</li>`);
                        $("#taskInput").val("");  // Limpiar el input después de añadir
                    }
                    $(this).dialog("close");
                },
                "Cancelar": function () {
                    $(this).dialog("close");
                }
            }
        });
    });
});
