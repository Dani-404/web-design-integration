const searchIcon = document.querySelector('header .search'),
    burgerIcon = document.querySelector('header .burger');

if(searchIcon != null)
    searchIcon.addEventListener("click", toggleSearchForm);

if(burgerIcon != null)
    burgerIcon.addEventListener("click", toggleMenu)

function toggleSearchForm() {
    const searchForm = document.querySelector('header form#searchForm');
    if(searchForm == null)
        return;

    if(searchForm.style.display == "flex")
        searchForm.style.display = "none";
    else {
        // show form
        searchForm.style.display = "flex";

        const searchInput = document.querySelector('header form#searchForm input[type="text"]');
        if(searchInput != null)
            searchInput.focus();

        // animation
        const maxHeight = searchForm.offsetHeight;

        searchForm.style.height = 0;
        const intervalAnimation = setInterval(() => {
            searchForm.style.height = parseInt(searchForm.offsetHeight) + 10 + "px";

            if(parseInt(searchForm.style.height) >= maxHeight) {
                searchForm.style.height = maxHeight + "px";
                clearInterval(intervalAnimation);
            }
        }, 1000/60);
    }
}

function toggleMenu() {
    const menu = document.querySelector('header ul');
    if(menu == null)
        return;

    if(menu.style.display == "block")
        menu.style.display = "none";
    else {
        // hide search form
        const searchForm = document.querySelector('header form#searchForm');
        if(searchForm == null)
            return;

        if(searchForm.style.display == "flex")
            searchForm.style.display = "none";

        // show menu
        menu.style.display = "block";

        // animation
        const maxWidth = menu.offsetWidth;
        menu.style.right = -maxWidth + "px";

        const intervalAnimation = setInterval(() => {
            menu.style.right = parseInt(menu.style.right) + 20 + "px";

            if(parseInt(menu.style.right) >= 10) {
                menu.style.right = 10;
                clearInterval(intervalAnimation);
            }
        }, 1000/60);
    }
}