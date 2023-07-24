import { hover } from "@testing-library/user-event/dist/hover";
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
        justifyContent: "space-between",
        alignItems:'center'
    },

    search: {
        backgroundColor: "#fff"
    },

    filter: {
        textTransform: 'none',
        color: colors.grey,
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
        maginLeft:2,
        
    },

    statut: {
        display: 'flex',
        gap: 1
    },

    rowItem: {
        color: 'black',
    },

    label: {
        fontSize: 14,
        fontWeight: 'normal'
    },

    indicator: {
        height: 5,
        width: 5,
        borderRadius: 50,
    },

    textSuccess: {
        height: 5,
        width: 5,
        borderRadius: 5,
    },

    noTransactions:{
     color: colors.danger
    },

    gridContent:{
    height: "45vh",
    justifyContent:"center",
    alignItems:"center"
    },

    itemIcon:{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
}
}

export default styles;