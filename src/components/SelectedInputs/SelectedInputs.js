import React, { useEffect } from 'react'

import "./SelectedInputs.scss"
const SelectedInputs = ({ children, unregister, names }) => {
    useEffect(() => {
        return () => {
            return names.map(name => unregister(name))
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [unregister])
    return (
        <div className="selectedInputs">
            {children}
        </div>
    )
}

export default SelectedInputs
