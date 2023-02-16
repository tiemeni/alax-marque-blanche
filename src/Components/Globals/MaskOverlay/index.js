import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';

export default function MaskOverlay({ show, component }) {
    const [open, setOpen] = React.useState(show);
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
                onClick={handleClose}
            >
                {component}
            </Backdrop>
        </div>
    )
}
