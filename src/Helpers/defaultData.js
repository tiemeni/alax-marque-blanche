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
import * as screens from '../Constants/steps';

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
        label: 'Accueil',
        step: screens.ACCUEIL
    },
    {
        id: 2,
        icon: <DocumentIcon />,
        label: 'Rendez-vous',
        step: screens.RDV
    },
    {
        id: 3,
        icon: <WalletIcon />,
        label: 'Transactions',
        step: screens.TRANSACTION
    },
    {
        id: 4,
        icon: <ProfileIcon />,
        label: 'Profil',
        step: screens.PROFIL
    },
    {
        id: 5,
        icon: <SettingsIcon />,
        label: 'Paramètres',
        step: screens.PARAMETRE
    },
    {
        id: 6,
        icon: <LogoutIcon />,
        label: 'Déconnexion',
        step: screens.DECONNEXION
    }
]

export const rdv = [
    {
      id: 1,
      motif: 'Bilan sanguin',
      praticien: 'Dr. Tiemeni Happi',
      specialite: 'Ophtalmologie',
      centre: 'Main du Secour',
      date: '2023/6/15',
      heure: '14h45',
      statut: 'Enregistré'
    },
    {
      id: 2,
      motif: 'Radiographie',
      praticien: 'Dr. Tiemeni Happi',
      specialite: 'Dentiste',
      centre: 'Main du Secour',
      date: '2023/6/16',
      heure: '14h45',
      statut: 'Enregistré'
    },
    {
      id: 3,
      motif: 'Échographie',
      praticien: 'Dr. Tiemeni Happi',
      specialite: 'Cardiologie',
      centre: 'Croix Rouge',
      date: '2023/6/17',
      heure: '14h45',
      statut: 'Terminé'
    },
    {
      id: 4,
      motif: 'Électrocardiogramme',
      praticien: 'Dr. Tiemeni Happi',
      specialite: 'Pédiatrie',
      centre: 'Croix Rouge',
      date: '2023/6/17',
      heure: '14h45',
      statut: 'Terminé'
    },
    {
      id: 5,
      motif: 'Mammographie',
      praticien: 'Dr. Tiemeni Happi',
      specialite: 'Gynécologie',
      centre: 'Nicolas BARRE',
      date: '2023/6/17',
      heure: '14h45',
      statut: 'Terminé'
    },
    {
      id: 6,
      motif: 'Coloscopie',
      praticien: 'Dr. Tiemeni Happi',
      specialite: 'Dermatologie',
      centre: 'Nicolas BARRE',
      date: '2023/7/18',
      heure: '14h45',
      statut: 'Reporté'
    },
    {
      id: 7,
      motif: 'Coloscopie',
      praticien: 'Dr. Tiemeni Happi',
      specialite: 'Dermatologie',
      centre: 'Nicolas BARRE',
      date: '2023/7/18',
      heure: '14h45',
      statut: 'Reporté'
    },
    {
      id: 8,
      motif: 'Coloscopie',
      praticien: 'Dr. Tiemeni Happi',
      specialite: 'Dermatologie',
      centre: 'Nicolas BARRE',
      date: '2023/7/19',
      heure: '14h45',
      statut: 'Enregistré'
    },
    {
      id: 9,
      motif: 'Coloscopie',
      praticien: 'Dr. Tiemeni Happi',
      specialite: 'Dermatologie',
      centre: 'Nicolas BARRE',
      date: '2023/7/19',
      heure: '14h45',
      statut: 'Enregistré'
    },
    {
      id: 10,
      motif: 'Coloscopie',
      praticien: 'Dr. Tiemeni Happi',
      specialite: 'Dermatologie',
      centre: 'Nicolas BARRE',
      date: '2023/7/19',
      heure: '14h45',
      statut: 'Enregistré'
    },
  ];  

export const Transactions = [
    {
        id: 1,
        motif: 'Echographie',
        praticien: 'Dr. Tiemeni Happi',
        centre: 'Clinique Main du Secour',
        montant: '12500 XAF',
        date: '2023/6/9',
        statut: 'Réussi',
        moyen: 'Visa'
    },
    {
        id: 2,
        motif: 'Consultation',
        praticien: 'Dr. Tiemeni Happi',
        centre: 'Nicolas BARRE',
        montant: '2000 XAF',
        date: '2023/7/11',
        statut: 'Réussi',
        moyen: 'Master Card'
    },
    {
        id: 3,
        motif: 'Examen Typhoide',
        praticien: 'Dr. Tiemeni Happi',
        centre: 'Clinique FOUDA',
        montant: '3000 XAF',
        date: '2023/7/16',
        statut: 'Réussi',
        moyen: 'Visa'

    },
    {
        id: 4,
        motif: 'Dialyse',
        praticien: 'Dr. Fossi Arsène',
        centre: 'Niamey',
        montant: '15000 XAF',
        date: '2023/7/17',
        statut: 'Réussi',
        moyen: 'Orange Money'
    },
    {
        id: 5,
        motif: 'Test Paludisme',
        praticien: 'Dr. Embolo Emmanuel',
        centre: 'FONDATION',
        montant: '1500 XAF',
        date: '2023/7/17',
        statut: 'Echoué',
        moyen: 'Mobile Money'
    },
    {
        id: 6,
        motif: 'Examen Typhoide',
        praticien: 'Dr. Bessala Joel',
        centre: 'Clinique FOUDA',
        montant: '3000 XAF',
        date: '2023/7/18',
        statut: 'Réussi',
        moyen: 'Visa'

    },
    {
        id: 7,
        motif: 'Electrophorèse',
        praticien: 'Dr. Bessala Joel',
        centre: 'Niamey',
        montant: '10000 XAF',
        date: '2023/7/18',
        statut: 'Echoué',
        moyen: 'Orange Money'
    },
    {
        id: 8,
        motif: 'Test VIH',
        praticien: 'Dr. Mbeck Davalor',
        centre: 'FONDATION',
        montant: '1200 XAF',
        date: '2023/7/19',
        statut: 'Réussi',
        moyen: 'Master Card'
    },
   
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

export const Specialite = [
    {
      specialite: "Ophtalmologie",
    },
    {
      specialite: "Dentiste",
    },
    {
      specialite: "Cardiologie",
    },
    {
      specialite: "Pédiatrie",
    },
    {
      specialite: "Gynécologie",
    },
    {
      specialite: "Dermatologie",
    },
    {
      specialite: "Orthopédie",
    },
    {
      specialite: "Neurologie",
    },
    {
      specialite: "Oncologie",
    },
  ];

  export const Statut = [
    {
      label: "Enregistré",
    },
    {
      label: "Terminé",
    },
    {
      label: "Reporté",
    },
  ];

  export const MoyenPay = [
    {
      pay: "Master Card",
    },
    {
      pay: "Mobile Money",
    },
    {
        pay: "Orange Money",
      },
      {
          pay: "Visa",
        },
  ];

  export const tableHeaders = ["Motifs", "Praticiens", "Centres", "Date", "Statut"];

  