import React from 'react'
import Header from './_components/Header'

export default function Provider({children}:{children:React.ReactNode}) {
    return (
        <div>
            <Header/>
            {children}
        </div>
    )
}
