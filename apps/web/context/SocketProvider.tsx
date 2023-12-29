'use client'
import React from 'react'

interface SocketProviderProps {
    children?: React.ReactNode
}

const SocketContext = React.createContext(null);

export const SocketProvider: React.FC = () => {
    return (
        <SocketContext.Provider>
            {}
        </SocketContext.Provider>
    )
}