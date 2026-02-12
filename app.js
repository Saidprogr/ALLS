const filterButtons = document.querySelectorAll('.btn');
const galleryItems = document.querySelectorAll('.item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');

        galleryItems.forEach(item => {
            if (filterValue === 'all' || item.classList.contains(filterValue)) {
                item.classList.remove('hide');
            } else {
                item.classList.add('hide');
            }
        });
    });
});