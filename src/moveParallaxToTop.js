const parallaxWrapper = document.getElementsByClassName("parallax__wrapper")[0];
const windowTop = parallaxWrapper.scrollTop;

const addTopClassToParallax = offsetTop => {
  const sectionBiruta = document.getElementsByClassName("section--biruta")[0];
  const parallaxBiruta = document.getElementsByClassName(
    "parallax__image--biruta"
  )[0];

  const sectionOffsetTop = sectionBiruta.offsetTop;
  const windowOffsetTop = offsetTop;

  const sectionIsInView = windowOffsetTop >= sectionOffsetTop + 500;

  if (sectionIsInView) {
    parallaxBiruta.classList.add("parallax__image--top");
  } else {
    parallaxBiruta.classList.remove("parallax__image--top");
  }
};

const moveParallaxToTop = () => {
  let lastKnownScrollPosition = 0;
  let ticking = false;

  document.onreadystatechange = () => {
    if (document.readyState === "complete") {
      lastKnownScrollPosition = parallaxWrapper.scrollTop;

      addTopClassToParallax(lastKnownScrollPosition);
    }
  };

  parallaxWrapper.addEventListener("scroll", function(e) {
    lastKnownScrollPosition = parallaxWrapper.scrollTop;

    if (!ticking) {
      window.requestAnimationFrame(function() {
        addTopClassToParallax(lastKnownScrollPosition);
        ticking = false;
      });

      ticking = true;
    }
  });
};

export default moveParallaxToTop;
