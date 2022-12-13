import { useState } from "react"
import reverse_triangle from "../Images/reverse_triangle.svg"

type Props = {}

const Contact = (props: Props) => {
    const [handleStory, setHandleStory] = useState<boolean>(false)
  return (
    <>
    <div className="flex justify-center flex-col h-96">
        <div className="bg-gradient-to-b text-black via-[#C0CCCE] from-[#C0CCCE] border pb-10 rounded-xl block text-center">
            <div className="text-xl">Florian Ponte</div>
            <div className="text-lg">florian.ponte@gmail.com</div>
            <div className="text-lg">06.23.27.12.40</div>
        </div>
        <div className="flex justify-center">
            <button className="rounded-md p-1 mb-5 text-white text-base border-[1px] bg-gradient-to-b mt-32 from-[#C0CCCE] border-white" onClick={() => setHandleStory(!handleStory)}>
                <div className="inline">
                    <p className="inline mx-1">Mon histoire </p>
                        <svg className="inline" width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.8971 0.4783C17.8207 0.334136 17.7061 0.213393 17.5656 0.129101C17.425 0.0448096 17.2639 0.000169805 17.0997 0H0.898159C0.734203 0.000671413 0.573533 0.0456407 0.433428 0.130072C0.293323 0.214503 0.179085 0.335201 0.102997 0.479186C0.0269091 0.623171 -0.0081486 0.784996 0.00159387 0.947258C0.0113363 1.10952 0.0655103 1.26608 0.15829 1.4001L8.25904 13.0007C8.34162 13.1196 8.45211 13.2168 8.58099 13.2839C8.70988 13.3511 8.8533 13.3862 8.99891 13.3862C9.14452 13.3862 9.28794 13.3511 9.41683 13.2839C9.54572 13.2168 9.65621 13.1196 9.73878 13.0007L17.8395 1.4001C17.9332 1.26635 17.9881 1.1097 17.9983 0.947181C18.0084 0.784659 17.9735 0.622487 17.8971 0.4783ZM8.99891 10.925L2.61552 1.7847H15.3823L8.99891 10.925Z" fill="white"/>
                        </svg>
                </div>
            </button>
        </div>
        
    </div>
        {
            handleStory &&
            <p className="text-center ">
                Je m’appelle Florian.<br/>
                J’ai eu la chance de m’ouvrir tôt dans mon enfance au fait que la magie, ça existe. Cette certitude, je la tiens de mon jumeau, qui n’est jamais arrivé à terme mais qui m’a pourtant fait revivre ma gestation (et sa disparition) bousculant mes certitudes de gamin de 5 ans.<br/>
                Quand 3 jours plus tard , mon père m’a annoncé que j’avais bien un frère jumeau qui n’était pas arrivé… Le contrat était pour moi scellé : je serai un messager entre cet espace de matière et cet autre espace, de lumière, de conscience et d’amour ou nous sommes vie, ou nous sommes un.
                <br />
                <br />
                Pendant 5 ans j’ai fait des expériences avec cette énergie omniprésente, puis j’ai dû y renoncer par besoin d’inclusion à l’entrée au collège. Je me suis fait cependant la promesse que si je rencontrais un adulte à la fois censé, être responsable et doté de la même sensibilité, je rouvrirai cette porte.
                C’est à 20 ans, durant une initiation Reiki avec Patrice Gros, que j’eus la sensation de « rentrer à la maison », la ré immersion dans cette vibration du cœur me rappelant ce que les affres de l’adolescence et l’identification à l’ego obscurci. <br />
                Je me suis alors formé avec ce nouveau jouet qui s’appelle le mental, qui n’était pas bien compatible avec la disquette de l’éducastration nationale, mais beaucoup plus avec ces enseignements qui parlent d’unité et de relation, à nous-même, à toute chose.
                <br />
                <br />
                J’ai également accumulé les connaissances, entre le regard scientifique et ésotérique, et une compréhension s’est fait jour, liant tous ces niveaux de lecture.
                C’est ainsi que cette entreprise est née, d’une quête de sens et d’un désir de retour. Offrir à chacun de se rencontrer pour vibrer qui il est, dans la danse de ce qui est, Présent… Du développement personnel au développement impersonnel.
            </p>
        }
        
    </>
  )
}

export default Contact