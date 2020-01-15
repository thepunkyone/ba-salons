import telefons from "../svgs/icons/telefons.svg";
import epasts from "../svgs/icons/epasts.svg";

import masazas from "../svgs/icons/masazas.svg";
import kalendars from "../svgs/icons/kalendars.svg";
import terapeite from "../svgs/icons/terapeite.svg";
import karte from "../svgs/icons/karte.svg";

const appendSvg = () => {
  const phoneIcons = document.getElementsByClassName("telefons");

  for (let i = 0; i < phoneIcons.length; i++) {
    phoneIcons[i].innerHTML = telefons;
  }

  const emailIcons = document.getElementsByClassName("epasts");

  for (let i = 0; i < emailIcons.length; i++) {
    emailIcons[i].innerHTML = epasts;
  }

  document.getElementById("masazas").innerHTML = masazas;
  document.getElementById("kalendars").innerHTML = kalendars;
  document.getElementById("terapeite").innerHTML = terapeite;
  document.getElementById("karte").innerHTML = karte;
};

export default appendSvg;
