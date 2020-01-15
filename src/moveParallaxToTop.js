const parallaxWrapper = document.getElementsByClassName("parallax__wrapper")[0];

const addTopClassToParallax = () => {
  const sectionBiruta = document.getElementsByClassName("section--biruta")[0];
  const parallaxBiruta = document.getElementsByClassName(
    "parallax__image--biruta"
  )[0];

  const sectionOffsetTop = sectionBiruta.offsetTop;
  const windowOffsetTop = parallaxWrapper.scrollTop;

  const sectionIsInView = windowOffsetTop >= sectionOffsetTop + 500;

  if (sectionIsInView) {
    parallaxBiruta.classList.add("parallax__image--top");
  } else {
    parallaxBiruta.classList.remove("parallax__image--top");
  }
};

const throttle = (fn, wait) => {
  var time = Date.now();
  return () => {
    if (time + wait - Date.now() < 0) {
      fn();
      time = Date.now();
    }
  };
};

const moveParallaxToTop = () => {
  document.onreadystatechange = () => {
    if (document.readyState === "complete") {
      addTopClassToParallax();
    }
  };

  parallaxWrapper.addEventListener(
    "scroll",
    throttle(addTopClassToParallax, 1000)
  );
};

export default moveParallaxToTop;
