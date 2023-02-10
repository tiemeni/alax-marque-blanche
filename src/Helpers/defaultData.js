import OmLogo from '../Assets/svgs/logo-orange-money.svg';
import MtnLogo from '../Assets/Images/logo_momo.jpg';
import VisaLogo from '../Assets/Images/visa_logo.jpg';
import MasterCardLogo from '../Assets/Images/Mastercard_logo.jpg';

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