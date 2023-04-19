import colors from "../../../../Constants/colors";


const styles = {
    container: {
        backgroundColor: 'rgba(248, 248, 248, 0.95)',
        borderRadius: '50px 0 0 50px',
    },

    pageTitle: {
        fontWeight: 'bold',
        fontSize: 24,
        color: colors.primaryColor
    },

    settings: {
        display: 'flex',
    },

    search: {
        float: 'right',
        backgroundColor: "#fff"
    },

    filter: {
        textTransform: 'none',
        color: colors.grey
    },

    filterItem: {
        display: 'flex',
        gap: 1,
    },

    item: {
        textTransform: 'none',
        backgroundColor: '#fff',
        color: '#000',
        paddingTop: 0.5,
        paddingBottom: 0.5,
        paddingLeft: 2,
        paddingRight: 2,
        borderRadius: 2,
    },

    input: {
        display: 'flex',
        alignItems: 'end',
        justifyContent: 'end',
    },

    statut: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'end',
        gap: 1
    },

    label: {
        color: colors.succes,
        fontSize: 14,
        fontWeight: 'normal'
    },

    indicator: {
        height: 5,
        width: 5,
        border: '1px solid ' + colors.succes,
        borderRadius: 50,
    }
}

export default styles;