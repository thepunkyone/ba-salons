import telefons from '../svgs/icons/telefons.svg'
import epasts from '../svgs/icons/epasts.svg'
import chevronDown from '../svgs/icons/chevron-down.svg'

import time from '../svgs/icons/time.svg'
import money from '../svgs/icons/money.svg'

import masazas from '../svgs/icons/masazas.svg'
import kalendars from '../svgs/icons/kalendars.svg'
import terapeite from '../svgs/icons/terapeite.svg'
import karte from '../svgs/icons/karte.svg'

import facebook from '../svgs/icons/facebook.svg'
import twitter from '../svgs/icons/twitter.svg'
import draugiem from '../svgs/icons/draugiem.svg'

const appendSvg = () => {
    const phoneIcons = document.getElementsByClassName('telefons')

    for (let i = 0; i < phoneIcons.length; i++) {
        phoneIcons[i].innerHTML = telefons
    }

    const emailIcons = document.getElementsByClassName('epasts')

    for (let i = 0; i < emailIcons.length; i++) {
        emailIcons[i].innerHTML = epasts
    }

    const chevronDownIcons = document.getElementsByClassName('chevron-down')

    for (let i = 0; i < chevronDownIcons.length; i++) {
        chevronDownIcons[i].innerHTML = chevronDown
    }

    const timeIcons = document.getElementsByClassName('time')

    for (let i = 0; i < timeIcons.length; i++) {
        timeIcons[i].innerHTML = time
    }

    const moneyIcons = document.getElementsByClassName('money')

    for (let i = 0; i < moneyIcons.length; i++) {
        moneyIcons[i].innerHTML = money
    }

    document.getElementById('masazas').innerHTML = masazas
    document.getElementById('kalendars').innerHTML = kalendars
    document.getElementById('terapeite').innerHTML = terapeite
    document.getElementById('karte').innerHTML = karte
    document.getElementById('facebook').innerHTML = facebook
    document.getElementById('twitter').innerHTML = twitter
    document.getElementById('draugiem').innerHTML = draugiem
}

export default appendSvg
