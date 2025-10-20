import { useT } from "@/context/LanguageContext";
import { useEffect } from "react";
const LanguageButtons = () =>{
    const {switchLanguage, text} = useT()
    const handleClick = (l : 'es' |'en') =>{
        if(l ==='es'){
            switchLanguage('es')
        }
        if(l ==='en'){
            switchLanguage('en')
        }
    }
    useEffect(() => {
}, [text]);
  return(
    <>
        <button onClick={() => handleClick('en')}
          className=" px-3 py-1 rounded transition duration-300 cursor-pointer hover:bg-white hover:text-black hover:bg-opacity-10"
        >
        En   

        </button>
      <button onClick={() =>  handleClick('es')}
        className=" px-3 py-1 rounded transition duration-300 cursor-pointer hover:bg-white hover:text-black hover:bg-opacity-10" 
      >
        Es
      </button>
    </>

  )
}

export default LanguageButtons;