import { StaticImageData } from "next/future/image"
import pegazLogo from '../assets/images/pegaz.png'

type Team = {
    id: string,
    teamName: string,
    logo: StaticImageData,
    leaderContactData: { rankShort: string, name: string, email: string, phone: string },
    meetingTime: string,
    desc: string,
    image: string
}

export const teams: Team[] = [
    {
        id: '32-wrwdsh-pegaz',
        teamName: '32 Wrocławska Wodna Drużyna Starszoharcerska Pegaz',
        logo: pegazLogo,
        leaderContactData: { rankShort: 'pwd.', name: 'Radosław Łuckoś', email: 'radoslaw.luckos@zhp.net.pl', phone: '723 111 742' },
        meetingTime: 'Sobota godz. 10-13',
        desc: 'Sit mattis ut tristique mauris ultricies condimentum magnis. Elit aliquet neque a massa ac. At volutpat congue massa mauris eu. Nunc ante pharetra laoreet tempus pellentesque mauris. Tincidunt et, erat gravida nunc mi massa ultrices. Consectetur tortor suspendisse sit tristique elit, odio nam vitae. Ac malesuada interdum nam ut et. Varius vivamus fermentum, malesuada quisque quam auctor. Turpis quis diam nisi vehicula ut sed.',
        image: 'https://images.unsplash.com/photo-1573586709591-28cd6bb136d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80,',
    }
]