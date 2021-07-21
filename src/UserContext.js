import React, { useContext } from 'react';

const AuthorContext = React.createContext(null);


export const UserContext = ({ children }) => {
    return (
        <div>
            <AuthorContext.Provider value={}>
            
            </AuthorContext.Provider>
        </div>
    )
}
