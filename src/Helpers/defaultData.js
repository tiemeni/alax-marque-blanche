import OmLogo from '../Assets/svgs/logo-orange-money.svg';
import MtnLogo from '../Assets/Images/logo_momo.jpg';
import VisaLogo from '../Assets/Images/visa_logo.jpg';
import MasterCardLogo from '../Assets/Images/Mastercard_logo.jpg';

import { ReactComponent as HomeIcon } from '../Assets/svgs/Home_2.svg';
import { ReactComponent as WalletIcon } from '../Assets/svgs/Wallet.svg';
import { ReactComponent as ProfileIcon } from '../Assets/svgs/Profile.svg';
import { ReactComponent as SettingsIcon } from '../Assets/svgs/Settings.svg';
import { ReactComponent as LogoutIcon } from '../Assets/svgs/Logout.svg';
import { ReactComponent as DocumentIcon } from '../Assets/svgs/Document.svg';
import { ReactComponent as SpeakerIcon } from '../Assets/svgs/Megaphone.svg'
import { ReactComponent as NotificationIcon } from '../Assets/svgs/Notification_1.svg'
import { ReactComponent as MessageIcon } from '../Assets/svgs/Message_Align_Left.svg'
import { ReactComponent as LeftIcon } from '../Assets/svgs/Left Right_1.svg'
import { ReactComponent as WebsiteIcon } from '../Assets/svgs/Website.svg'

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

export const rdv = [
    {
        id: 1,
        motif: 'Première consultation',
        praticien: 'Dr. Tiemeni Happi',
        specialite: 'Ophtalmologie',
        centre: 'Clinique FOUDA',
        date: '17-04-2023',
        heure: '14h45',
        statut: 'Enregistré'
    },
    {
        id: 2,
        motif: 'Première consultation',
        praticien: 'Dr. Tiemeni Happi',
        specialite: 'Ophtalmologie',
        centre: 'Clinique FOUDA',
        date: '17-04-2023',
        heure: '14h45',
        statut: 'Enregistré'
    },
    {
        id: 3,
        motif: 'Première consultation',
        praticien: 'Dr. Tiemeni Happi',
        specialite: 'Ophtalmologie',
        centre: 'Clinique FOUDA',
        date: '17-04-2023',
        heure: '14h45',
        statut: 'Enregistré'
    },
    {
        id: 4,
        motif: 'Première consultation',
        praticien: 'Dr. Tiemeni Happi',
        specialite: 'Ophtalmologie',
        centre: 'Clinique FOUDA',
        date: '17-04-2023',
        heure: '14h45',
        statut: 'Enregistré'
    },
    {
        id: 5,
        motif: 'Première consultation',
        praticien: 'Dr. Tiemeni Happi',
        specialite: 'Ophtalmologie',
        centre: 'Clinique FOUDA',
        date: '17-04-2023',
        heure: '14h45',
        statut: 'Enregistré'
    },
    {
        id: 6,
        motif: 'Première consultation',
        praticien: 'Dr. Tiemeni Happi',
        specialite: 'Ophtalmologie',
        centre: 'Clinique FOUDA',
        date: '17-04-2023',
        heure: '14h45',
        statut: 'Enregistré'
    },
    {
        id: 7,
        motif: 'Première consultation',
        praticien: 'Dr. Tiemeni Happi',
        specialite: 'Ophtalmologie',
        centre: 'Clinique FOUDA',
        date: '17-04-2023',
        heure: '14h45',
        statut: 'Enregistré'
    },
    {
        id: 8,
        motif: 'Première consultation',
        praticien: 'Dr. Tiemeni Happi',
        specialite: 'Ophtalmologie',
        centre: 'Clinique FOUDA',
        date: '17-04-2023',
        heure: '14h45',
        statut: 'Enregistré'
    },
    {
        id: 9,
        motif: 'Première consultation',
        praticien: 'Dr. Tiemeni Happi',
        specialite: 'Ophtalmologie',
        centre: 'Clinique FOUDA',
        date: '17-04-2023',
        heure: '14h45',
        statut: 'Enregistré'
    },
    {
        id: 10,
        motif: 'Première consultation',
        praticien: 'Dr. Tiemeni Happi',
        specialite: 'Ophtalmologie',
        centre: 'Clinique FOUDA',
        date: '17-04-2023',
        heure: '14h45',
        statut: 'Enregistré'
    },
    {
        id: 11,
        motif: 'Première consultation',
        praticien: 'Dr. Tiemeni Happi',
        specialite: 'Ophtalmologie',
        centre: 'Clinique FOUDA',
        date: '17-04-2023',
        heure: '14h45',
        statut: 'Enregistré'
    },
    {
        id: 12,
        motif: 'Première consultation',
        praticien: 'Dr. Tiemeni Happi',
        specialite: 'Ophtalmologie',
        centre: 'Clinique FOUDA',
        date: '17-04-2023',
        heure: '14h45',
        statut: 'Enregistré'
    },
    {
        id: 13,
        motif: 'Première consultation',
        praticien: 'Dr. Tiemeni Happi',
        specialite: 'Ophtalmologie',
        centre: 'Clinique FOUDA',
        date: '17-04-2023',
        heure: '14h45',
        statut: 'Enregistré'
    },
    {
        id: 14,
        motif: 'Première consultation',
        praticien: 'Dr. Tiemeni Happi',
        specialite: 'Ophtalmologie',
        centre: 'Clinique FOUDA',
        date: '17-04-2023',
        heure: '14h45',
        statut: 'Enregistré'
    },
    {
        id: 15,
        motif: 'Première consultation',
        praticien: 'Dr. Tiemeni Happi',
        specialite: 'Ophtalmologie',
        centre: 'Clinique FOUDA',
        date: '17-04-2023',
        heure: '14h45',
        statut: 'Enregistré'
    }
]

export const settings = [
    {
        id: 1,
        icon: <WebsiteIcon />,
        label: 'Choix de la langue',
        lang: true
    },
    {
        id: 2,
        icon: <SpeakerIcon />,
        label: 'Recevoir les rappels de rendez-vous'
    },
    {
        id: 3,
        icon: <MessageIcon />,
        label: 'Recevoir les newletters'
    },
    {
        id: 4,
        icon: <LeftIcon />,
        label: 'Partager mes informations entre mes centres'
    },
    {
        id: 5,
        icon: <NotificationIcon />,
        label: 'Recevoir des notifications des tiers partenaires des centres'
    }
]

export const notifications = [
    {
        id: 1,
        text: "Un rendez-vous vient d’être annulé",
        message: "Cher(e) patient(e), Nous sommes désolés de vous informer que votre rendez-vous médical prévu avec le Dr [nom du médecin] a été annulé en raison de circonstances imprévues. Nous comprenons que cela peut être une source d'inconvénient pour vous et nous nous excusons sincèrement pour cela. ",
        type: 'cancel'
    },
    {
        id: 2,
        text: "Alerte, rendez-vous à venir",
        message: "Cher(e) patient(e), Nous vous rappelons que vous avez un rendez-vous médical avec le Dr [nom du médecin] dans [nombre de jours] jours, le [date et heure du rendez-vous]. Nous espérons que vous êtes prêt(e) pour votre rendez-vous et que vous avez préparé toutes les informations nécessaires.",
        type: 'rappel'
    }
]