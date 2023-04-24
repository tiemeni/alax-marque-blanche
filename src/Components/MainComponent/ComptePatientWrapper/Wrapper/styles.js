import colors from "../../../../Constants/colors";

const styles = {
    container: {
        backgroundColor: 'rgba(248, 248, 248, 0.95)',
        borderRadius: '50px 0 0 0',
        padding: 2,
        maxHeight: '100%'
    },

    close: {
        backgroundColor: 'red',
        height: 30,
        width: 30,
        borderRadius: 50,
        float: 'right',
    },

    add: {
        position: 'absolute',
        bottom: '0.7em',
        left: '56.4%',
        height: 40,
        width: 40,
        minWidth: 40,
        backgroundColor: colors.primaryColor,
        padding: 0,
        borderRadius: 50,
    }
}

export default styles;