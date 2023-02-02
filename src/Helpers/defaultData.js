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

export const creditCard = {
    title: 'Paiements mobiles',
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