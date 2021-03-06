import React, {useEffect, useState, useContext} from 'react';
import data from './data.json'

const AppContext = React.createContext()

// Filter and display short teams name
const shortNames = [...new Set(data.map((item) => {
    if(item.short !== null){
        return item.short
    }
} ))]

const AppProvider = ({children}) =>{
    const [shortTeams, setshortTeams] = useState(shortNames)
    const [openPageMenu, setOpenPageMenu] = useState(false)

    return <AppContext.Provider value={{
        shortTeams,
        openPageMenu,
        setOpenPageMenu
      }}>
          {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}