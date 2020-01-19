const parallaxWrapper = document.getElementsByClassName("parallax__wrapper")[0];

const addTopClassToParallax = offsetTop => {
  const sectionAbout = document.getElementsByClassName("section--about")[0];
  const parallaxAbout = document.getElementsByClassName(
    "parallax__image--about"
  )[0];

  const sectionBiruta = document.getElementsByClassName("section--biruta")[0];
  const parallaxBiruta = document.getElementsByClassName(
    "parallax__image--biruta"
  )[0];

  const sectionAboutOffsetTop = sectionAbout.offsetTop;
  const sectionBirutaOffsetTop = sectionBiruta.offsetTop;
  const windowOffsetTop = offsetTop;

  const sectionAboutIsInView =
    windowOffsetTop >= sectionAboutOffsetTop + 500 &&
    windowOffsetTop < sectionBirutaOffsetTop + 500;
  const sectionBirutaIsInView = windowOffsetTop >= sectionBirutaOffsetTop + 500;

  if (sectionAboutIsInView) {
    parallaxAbout.classList.add("parallax__image--top");
  } else {
    parallaxAbout.classList.remove("parallax__image--top");
  }

  if (sectionBirutaIsInView) {
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
