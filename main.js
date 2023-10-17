const primaryNav = document.querySelector("nav");
const scrollWatcher = document.createElement("div");

scrollWatcher.setAttribute("data-scroll-watcher", "");
primaryNav.before(scrollWatcher);

const navObserver = new IntersectionObserver(
  (entries) => {
    primaryNav.classList.toggle("sticking", !entries[0].isIntersecting);
  },
  { rootMargin: `${window.innerHeight}px 0px 0px 0px` },
);

navObserver.observe(scrollWatcher);
