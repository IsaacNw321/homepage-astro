import { useT } from "@/context/LanguageContext";

const LanguageButtons = () =>{
    const {switchLanguage, language} = useT()
    const handleClick = (l : 'es' |'en') =>{
      if(l ==='es'){
        switchLanguage('es')
      }
      if(l ==='en'){
        switchLanguage('en')
      }
      return console.log(l , language)
    }
  return(
    <>
        <button onClick={() => handleClick('en')}
          className=" px-3 py-1 rounded transition duration-300 cursor-pointer hover:bg-white hover:text-black hover:bg-opacity-10"
        >
        En   

        </button>
      <button onClick={() => {console.log("imgetting clicked") , handleClick('es')}}
        className=" px-3 py-1 rounded transition duration-300 cursor-pointer hover:bg-white hover:text-black hover:bg-opacity-10" 
      >
        Es
      </button>
    </>

  )
}

export default LanguageButtons;