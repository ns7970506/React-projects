import React, { createContext } from 'react'


export const ThemeDataContext = createContext()
const Theme_context = (props) => {
  return (
    <div>
        <ThemeDataContext.Provider value='Nikhil'>
        {props.children}
        </ThemeDataContext.Provider>
    </div>
  )
}

export default Theme_context
