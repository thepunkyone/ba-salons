const parallaxWrapper = document.getElementsByClassName("parallax__wrapper")[0];

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
  document.onreadystatechange = () => {
    if (document.readyState === "complete") {
      addTopClassToParallax();
    }
  };

  let last_known_scroll_position = 0;
  let ticking = false;

  parallaxWrapper.addEventListener("scroll", function(e) {
    last_known_scroll_position = parallaxWrapper.scrollTop;

    if (!ticking) {
      window.requestAnimationFrame(function() {
        addTopClassToParallax(last_known_scroll_position);
        ticking = false;
      });

      ticking = true;
    }
  });
};

export default moveParallaxToTop;
