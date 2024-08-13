let navLinks = document.getElementById('nav-links')
let toggler = document.getElementById("toggler")
toggler.addEventListener('click', () => {
    navLinks.classList.toggle("active");
})