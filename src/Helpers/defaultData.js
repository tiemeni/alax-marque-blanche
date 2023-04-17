import OmLogo from '../Assets/svgs/logo-orange-money.svg';
import MtnLogo from '../Assets/Images/logo_momo.jpg';
import VisaLogo from '../Assets/Images/visa_logo.jpg';
import MasterCardLogo from '../Assets/Images/Mastercard_logo.jpg';

import { ReactComponent as HomeIcon } from '../Assets/svgs/Home_2.svg';
import { ReactComponent as WalletIcon } from '../Assets/svgs/Wallet.svg';
import { ReactComponent as ProfileIcon } from '../Assets/svgs/Profile.svg';
import { ReactComponent as SettingsIcon } from '../Assets/svgs/Settings.svg';
import { ReactComponent as LogoutIcon } from '../Assets/svgs/Logout.svg';
import { ReactComponent as DocumentIcon } from '../Assets/svgs/Document.svg'

export const mobilePayment = {
    title: 'Paiements mobiles',
    data: [{
        title: 'Orange Money',
        logo: OmLogo
    },
    {
        title: 'MTN',
        logo: MtnLogo
    },]
}

export const regionRowessai = [
    {
        "region": "Centre",
    },
    {
        "region": "Ouest",

    },
    {
        "region": "Nord",
    },
    {
        "region": "Sud",
    },
    {
        "region": "Est",
    },
    {
        "region": "Adamaoua",
    },
    {
        "region": "Extreme-nord",
    },
    {
        "region": "Littoral",
    },
    {
        "region": "Sud-ouest",
    },
    {
        "region": "Nord-ouest",
    }
]

export const motifRowessai = [
    {
        "motif": "Motif de rendez-vous N°1",
    },
    {
        "motif": "Motif de rendez-vous N°2",

    },
    {
        "motif": "Motif de rendez-vous N°3",
    },
    {
        "motif": "Motif de rendez-vous N°4",
    },
    {
        "motif": "Motif de rendez-vous N°5",
    },
    {
        "motif": "Motif de rendez-vous N°6",
    },
    {
        "motif": "Motif de rendez-vous N°7",
    },
    {
        "motif": "Motif de rendez-vous N°8",
    },
    {
        "motif": "Motif de rendez-vous N°2",
    }
]

export const creditCard = {
    title: 'CARTES DE CREDIT',
    data: [{
        title: 'Visa',
        logo: VisaLogo
    },
    {
        title: 'Master Card',
        logo: MasterCardLogo
    },]
}

export const messages = {
    mailMsg: 'Veuillez entrez une adresse mail valide',
    emptyMail: 'Veuillez renseigner votre adresse mail',
    emptyPass: 'Veuillez renseigner votre mot de passe',
    passMsg: 'La taille du mot de passe est inférieur à 8.',
    confirmMsg: 'Les deux adresses ne sont pas identiques.',
    newPass: 'Votre nouveau mot de passe vous a été envoyé par email.'
}

export const navItems = [
    {
        id: 1,
        icon: <HomeIcon />,
        label: 'Accueil'
    },
    {
        id: 2,
        icon: <DocumentIcon />,
        label: 'Rendez-vous'
    },
    {
        id: 3,
        icon: <WalletIcon />,
        label: 'Transactions'
    },
    {
        id: 4,
        icon: <ProfileIcon />,
        label: 'Profil'
    },
    {
        id: 5,
        icon: <SettingsIcon />,
        label: 'Paramètres'
    },
    {
        id: 6,
        icon: <LogoutIcon />,
        label: 'Déconnexion'
    }
]