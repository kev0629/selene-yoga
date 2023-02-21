import StarButton from "./StarButton"
import Link from "next/link"

const Yogastro = () =>{
    return(
        <div className="flex flex-col justify-center items-center">
            <div className="text-white text-3xl m-5 md:text-5xl lg:text-8xl">YOGASTROLOGIE</div>
            <div>
                <Link href="/Yogastrologie">
                    <StarButton title='En savoir plus' className=" border border-white px-11 py-2"/>
                </Link>
            </div>
           
        </div>
    )
}

export default Yogastro