import { StaticImageData } from 'next/future/image'
import img1 from '../assets/images/1.avif'
import img2 from '../assets/images/2.avif'
import img3 from '../assets/images/3.avif'
import ekisana from '../assets/images/ekisana.png'
import pegaz from '../assets/images/pegaz.png'
import hefalumpy from '../assets/images/hefalumpy.png'
import team96 from '../assets/images/96.png'

type carouselItem = {
    name: string,
    function: string,
    photo: StaticImageData
}

export const carouselContent: carouselItem[] = [
    {
        name: 'phm. Rafał Rumianowski',
        function: 'komendant ośrodka',
        photo: img1
    },
    {
        name: 'phm. Irena Dołyk',
        function: 'kierownik wychowania żeglarskiego',
        photo: img2
    },
    {
        name: 'phm. Benedykt Byś',
        function: 'bosman ośrodka',
        photo: img3
    },
]


export const teamsImages: StaticImageData[] = [
    ekisana,
    pegaz,
    hefalumpy,
    team96
]