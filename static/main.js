document.addEventListener('DOMContentLoaded', ()=>{
    const navButton = document.getElementById('icon');
    const navBar = document.getElementById('nav');
    // let isClickable = true;

    navButton.addEventListener('click', () => {
        // if (!isClickable) return;
        // isClickable = false; // Disable further clicks temporarily


        if (navBar.style.display == 'none'){
            navButton.setAttribute('src', '/static/pane-close.svg')
            navBar.style.display = 'block'
        } else{
            navButton.setAttribute('src', '/static/pane-open.svg')
            navBar.style.display = 'none'
        }


        // // Re-enable clicks after 0.5 seconds
        // setTimeout(() => {
        //     isClickable = true;
        // }, 500);
    });


    function handleResize() {
        if (window.innerWidth <= 1000) {
            navButton.setAttribute('src', '/static/pane-open.svg')
            navBar.style.display = 'none'
        }
    }
    
    // Run on page load
    handleResize();
    // Run on window resize
    window.addEventListener('resize', handleResize);
})


document.addEventListener("DOMContentLoaded", function () {
    let links = document.querySelectorAll("a");
    let contents = {};

    async function fetchHTML(url) {
        try {
            let response = await fetch(url);
            return await response.text();
        } catch (err) {
            console.error("Error fetching page:", err);
            return null;
        }
    }

    links.forEach(link => {
        let href = link.getAttribute("href");

        if (href && (href.startsWith(location.origin) || href.startsWith("/"))) {
            let resolvedPath = new URL(href, location.origin).pathname;
            
            if (resolvedPath.startsWith("/")) {
                let hoverTimeout;

                link.addEventListener("mouseenter", function () {
                    hoverTimeout = setTimeout(() => {
                        if (!contents[resolvedPath]) {
                            fetchHTML(resolvedPath).then(htmlContent => {
                                if (htmlContent) {
                                    contents[resolvedPath] = htmlContent;
                                }
                            });
                        }
                    }, 200);
                });

                link.addEventListener("mouseleave", function () {
                    clearTimeout(hoverTimeout);
                });

                link.addEventListener("click", function (e) {
                    e.preventDefault();
                    if (contents[resolvedPath]) {
                        document.body.innerHTML = new DOMParser().parseFromString(contents[resolvedPath], "text/html").body.innerHTML;
                        history.pushState(null, "", resolvedPath);
                    } else {
                        location.href = resolvedPath; // Fallback if not prefetched
                    }
                });
            }
        }
    });

    window.addEventListener("popstate", function () {
        let currentPath = location.pathname;
        if (contents[currentPath]) {
            document.body.innerHTML = new DOMParser().parseFromString(contents[currentPath], "text/html").body.innerHTML;
        } else {
            location.reload();
        }
    });
});
