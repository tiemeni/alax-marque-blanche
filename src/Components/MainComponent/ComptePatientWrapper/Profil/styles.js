import colors from "../../../../Constants/colors";

const styles = {
    pageTitle: {
        fontWeight: 'bold',
        fontSize: 24,
        color: colors.primaryColor
    },

    form: {
        backgroundColor: '#fff',
        padding: 2,
        marginTop: 2,
    },

    save: {
        textTransform: 'none',
        color: '#fff',
        backgroundColor: colors.primaryColor,
        borderRadius: 2,
    },

    sectionTitle: {
        fontSize: 14,
        color: colors.grey
    },

    flexEnd: {
        display: 'flex',
        justifyContent: 'end',
        alignItems: 'center'
    },
    
    flex: {
        display: 'flex',
        alignItems: 'center',
        gap: 2
    },

    avatar: {
        height: 150,
        width: 150,
        backgroundColor: colors.secondary
    }
}

export default styles;