
import LogoDev from 'public/Logodev.png'
const backgroundImageUrl = LogoDev.src;
import ScrollButton from '../components/ScrollButton';
import LanguageButtons from "../components/LanguageButton"
import { useT } from '@/context/LanguageContext';


const Welcome = () =>{ 
  const {t} = useT()
  return(
<section
  className="w-full h-full m-auto flex justify-center align-middle my-8 sm:-mx-0 lg:-mx-0 md:w-auto md:h-96 lg:w-full lg:h-[calc(100vh-112px)]
    bg-[#101922] relative 
  "
>
    <div className="absolute top-0 right-0 m-4 z-20">
      <LanguageButtons />
    </div>
  <div className="w-72 mt-20 sm:mt-12 rounded-2xl gap-6 md:w-auto p-8 lg:w-4/5 relative z-10 flex flex-col items-center justify-center h-full text-center">
    
    <img 
      className="max-w-32 max-h-32 rounded-full border-4 border-white mb-6" 
      src={`${backgroundImageUrl}`} 
      alt="Developer Logo"
    />
    
    <h1 className=" text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold">
      {t.Welcome.title}
    </h1>
    
    <p className="font-Inter sm:xl mt-4">
      {t.Welcome.description}
    </p>
    
    <ScrollButton />
  </div>
</section>

  )
}

export default Welcome;