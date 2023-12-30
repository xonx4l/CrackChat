'use client'
import React from 'react'

interface SocketProviderProps {
    children?: React.ReactNode
}

interface IsocketContext {
    sendMessage: (msg: string)=> any;
}

const SocketContext = React.createContext<ISocketContext| null>(null);

export const SocketProvider: React.FC<SocketProviderProps> = ({children}) => {

    const sendMessage:ISocketContext['sendMessage'] =useCallback((msg) => {})
         console.log("Send Message", msg);
    return (
        <SocketContext.Provider value ={null}>
            {children}
        </SocketContext.Provider>
    );
};