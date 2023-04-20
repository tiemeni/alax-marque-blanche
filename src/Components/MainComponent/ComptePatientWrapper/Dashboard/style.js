import colors from "../../../../Constants/colors";

const styles = {
    pageTitle: {
        fontWeight: 'bold',
        fontSize: 24,
        color: colors.primaryColor
    },

    divider: {
        backgroundColor: colors.secondary,
        width: 20,
        height: 2
    },

    listes: {
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 2,
        height: '40vh',
    },

    notifications: {
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 2,
        height: '35vh',
    },

    flex: {
        display: 'flex',
        alignItems: 'center',
        gap: 3
    },

    title: {
        fontSize: 18
    },

    size: {
        fontSize: 14,
    },

    details: {
        color: colors.grey,
        textDecoration: 'underline'
    },

    messages: {
        color: colors.grey
    },
    card: {
        marginBottom: 1
    },

    label: {
        color: colors.grey,
        fontSize: 14
    },

    number: {
        fontSize: 24,
        fontWeight: 'bold'
    },

    stat: {
        textAlign: 'center',
    },

    rdvCard: {
        border: '1px solid ' + colors.inputBorder,
        borderRadius: 5,
        padding: 1.5,
    },

    nom: {
        fontWeight: 'bold'
    },

    specialite: {
        color: colors.grey
    },

    next: {
        color: colors.grey,
        fontWeight: 'bold'
    }
}

export default styles;