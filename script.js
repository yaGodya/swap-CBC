const links = document.querySelectorAll("a");

links.forEach((link) => {
    link.addEventListener("click", function (event) {
        event.preventDefault();

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });

        this.blur();
    });
});
