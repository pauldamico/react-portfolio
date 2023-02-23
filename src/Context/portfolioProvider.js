import React,{useState, createContext} from "react";


export const portfolioContext = createContext();

export const PortfolioProvider = (props) => {
    const [toggle, setToggle] = useState({hello:false, name:false, developer:false})

    function toggleHello(){
        setToggle({...toggle, hello:!toggle.hello})
    }
    function toggleName(){
        setToggle({...toggle, name:!toggle.name})
    }
    function toggleDeveloper(){
        setToggle({...toggle, developer:!toggle.developer})
    }



    return (
        <portfolioContext.Provider value={{toggle, toggleHello,toggleName, toggleDeveloper}}>
            {props.children}
        </portfolioContext.Provider>
    )
}