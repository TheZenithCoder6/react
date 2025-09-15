import React, { createContext, useState } from 'react'
export const NavbarContaxt = createContext()
const NavContext = ({children}) => {
  
  const [navOpen, setnavOpen] = useState(false  )
  return (
    <div>
       <NavbarContaxt.Provider value={[navOpen, setnavOpen]}>
         {children}
       </NavbarContaxt.Provider>
    </div>
  )
}

export default NavContext