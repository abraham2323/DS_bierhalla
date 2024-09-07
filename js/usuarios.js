$(document).ready(function() {
    const table = $('#usersTable').DataTable();

    // Filtro de búsqueda
    const searchInput = document.getElementById('userSearch');

    searchInput.addEventListener('keyup', () => {
        const query = searchInput.value.toLowerCase();
        table.search(query).draw();
    });

    // Función para establecer los detalles del usuario en el modal de edición
    window.setEditUserDetails = function(userId, userName, userEmail) {
        document.getElementById('editUserId').value = userId;
        document.getElementById('editUserName').value = userName;
        document.getElementById('editUserEmail').value = userEmail;
        // Aquí deberías adaptar esto para mostrar la información real del usuario
    };

    // Función para configurar el modal de eliminación
    window.setDeleteUserDetails = function(userId) {
        document.getElementById('confirmDeleteButton').onclick = function() {
            // Aquí puedes agregar la lógica para eliminar el usuario
            console.log('Eliminar usuario con ID:', userId);
        };
    };
});