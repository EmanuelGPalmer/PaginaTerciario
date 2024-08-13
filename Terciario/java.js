document.addEventListener('DOMContentLoaded', function() {
    const userInfo = document.querySelector('.user-info');
    const userMenu = document.querySelector('.user-menu');
    const sidebarItems = document.querySelectorAll('.sidebar ul li');

    userInfo.addEventListener('click', function(event) {
        event.stopPropagation();
        userMenu.style.display = userMenu.style.display === 'block' ? 'none' : 'block';
    });

    document.addEventListener('click', function() {
        if (userMenu.style.display === 'block') {
            userMenu.style.display = 'none';
        }
    });

    userMenu.addEventListener('click', function(event) {
        event.stopPropagation();
    });

    sidebarItems.forEach(function(item) {
        item.addEventListener('click', function() {
            // Elimina la clase 'selected' de todos los elementos
            sidebarItems.forEach(function(i) {
                i.classList.remove('selected');
            });

            // Añade la clase 'selected' al elemento que fue clickeado
            item.classList.add('selected');
        });
    });
});
