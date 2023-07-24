import colors from "../../Constants/colors";

const styles = {
    container: {
        backgroundColor: colors.primaryColor
    },

    avatar: {
        height: 80,
        width: 80,
        marginTop: 3,
        backgroundColor: colors.avatarBg,
        color: '#000'
    },

    navItem: {
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        padding: 2,
        borderRadius: 3,
        marginLeft: 1,
        marginRight: 1,
        cursor: 'pointer',
        height: 50
    },

    nomPatient: {
        fontWeight: 'bold',
        fontSize: 14
    },

    infoPatient: {
        color: colors.grey,
        fontSize: 14
    }
}

export default styles;