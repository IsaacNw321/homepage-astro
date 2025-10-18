
import {
  SiLinkedin,
  SiGithub,
  SiGmail
} from "react-icons/si";
import { useT } from "@/context/LanguageContext";
import SplitText from "../components/SplitText";
const githubText = "IsaacNw321";
const linkedinText = "Isaac Pereira";
const emailText = "i3170245@gmail.com";

const About = () =>{
  const {t} = useT()
  
  return(

<section className="m-auto flex-row min-h-screen flex justify-center items-center py-16 px-4">
  <div className="w-full max-w-4xl shadow-xl rounded-2xl p-8 md:p-12 space-y-8">
    <h2 className="text-5xl lg:text-6xl font-extrabold text-center border-b-4 border-indigo-200 pb-4">
      <SplitText
  text={t.about.title}
  className="text-4xl font-semibold text-center"
  delay={100}
  duration={2}
  ease="power3.out"
  splitType="chars"
  from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}
  threshold={0.1}
  rootMargin="-100px"
  textAlign="center"
/>
    </h2>

    <div className="space-y-6">
      <p className="text-xl leading-relaxed">
        {t.about.paragraphs[0]}
      </p>
      <p className="text-xl leading-relaxed">
        {t.about.paragraphs[1]}
      </p>

      <div className="flex items-center gap-2">
        <SiGithub />
        <a href="https://github.com/IsaacNw321" target="_blank"
        rel="noopener noreferrer" className="hover:text-blue-500 text-lg">
        {t.contact.information.github}
        </a>
      </div>

      <div className="flex items-center gap-2">
        <SiLinkedin  />
        <a href="https://www.linkedin.com/in/isaac-pereira-271a66285/" target="_blank"
          rel="noopener noreferrer" className="hover:text-blue-500 text-lg">
          {t.contact.information.linkedin}
        </a>
      </div>
 
      <div className="flex items-center gap-2">
        <SiGmail  />
          <a className="hover:text-blue-500 text-lg">
            {t.contact.information.email}
          </a>
      </div>
    </div>
  </div>
</section>
  )

}

export default About;