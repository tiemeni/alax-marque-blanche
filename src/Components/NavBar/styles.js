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
        gap: 3,
        padding: 2,
        borderRadius: 5,
        marginLeft: 2,
        marginRight: 2,
        cursor: 'pointer'
    },

    nomPatient: {
        fontWeight: 'bold'
    },

    infoPatient: {
        color: colors.grey
    }
}

export default styles;