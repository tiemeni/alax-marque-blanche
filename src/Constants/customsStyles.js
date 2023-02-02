import { colors } from "./colors";

export const customStyles = {
    customRadioStyle: {
        '&.Mui-checked': {
            color: colors.primaryColor
        }
    },
    customFieldStyle: {
        '& label.Mui-focused': {
            color: colors.primaryColor,
        },
        '& .MuiOutlinedInput-root': {
            '&:hover fieldset': {
                borderColor: colors.inputBorder,
            },
            '&.Mui-focused fieldset': {
                borderColor: colors.primaryColor,
            },
        },
    },
    customCheckBoxSyles: {
        '&:hover': {
            color: colors.primaryColor,
            bgcolor: 'transparent'
        },
        '&.Mui-checked': {
            color: colors.primaryColor
        }
    }
}