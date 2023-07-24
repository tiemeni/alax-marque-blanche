import { hover } from "@testing-library/user-event/dist/hover";
import colors from "../../../../Constants/colors";
import { auto } from "@popperjs/core";

const styles = {
  container: {
    minWidth: auto,
     marginTop: '40px', 
     borderRadius: '10px', 
     maxHeight:'80vh', 
     overflow:auto
  },

  pageTitle: {
    fontSize: 16, 
    fontWeight: 600,
    color: colors.primaryColor
  },

  divBloc:{
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    alignContent: "space-between"
  },


  styleSpaceCenter: {
    justifyContent: "space-between",
    alignItems: "center",
  },
};

export default styles;
