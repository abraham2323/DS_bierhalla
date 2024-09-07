$(document).ready(function() {
    const table = $('#ticketsTable').DataTable();

    // Filtro de búsqueda
    const searchInput = document.getElementById('ticketSearch');

    searchInput.addEventListener('keyup', () => {
        const query = searchInput.value.toLowerCase();
        table.search(query).draw();
    });

    // Función para establecer los detalles del ticket en el modal de edición
    window.setEditTicketDetails = function(ticketId, ticketTitle, ticketDescription) {
        document.getElementById('editTicketId').value = ticketId;
        document.getElementById('editTicketTitle').value = ticketTitle;
        document.getElementById('editTicketDescription').value = ticketDescription;
        // Aquí deberías adaptar esto para mostrar la información real del ticket
    };

    // Función para configurar el modal de eliminación
    window.setDeleteTicketDetails = function(ticketId) {
        document.getElementById('confirmDeleteButton').onclick = function() {
            // Aquí puedes agregar la lógica para eliminar el ticket
            console.log('Eliminar ticket con ID:', ticketId);
        };
    };
});
