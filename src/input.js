import appendSvg from "./appendSvg";
import moveParallaxToTop from "./moveParallaxToTop";
import createMap from "./createMap";

appendSvg();

moveParallaxToTop();

window.createMap = createMap;

console.log(window);
