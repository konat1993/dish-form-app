import React, { useEffect } from 'react'

const SelectedInputs = ({ children, unregister, names }) => {
    useEffect(() => {

        return () => {
            return names.map(name => unregister(name))
        }
    }, [unregister])
    return (
        <div>
            {children}
        </div>
    )
}

export default SelectedInputs
