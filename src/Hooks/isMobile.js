import { useEffect } from "react";
import { useDimension } from "./dimensions"


export const IS_MOBILE = () => {
    const {innerWidth} = useDimension(); 
    useEffect(() => {

    }, [innerWidth])

    return innerWidth <= 500
}