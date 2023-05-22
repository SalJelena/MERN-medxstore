import React from 'react'
import {useSelector} from "react-redux";

const Loader = () => {
    const {visible} = useSelector(state => state.loaderStore)

    return (
        <>
            {visible &&
                <div className="loader">
                    <div className="lds-ripple">
                        <div></div>
                        <div></div>
                    </div>
                </div>
            }
        </>
    )
}
export default Loader
