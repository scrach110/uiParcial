import { Carta } from "../types/Carta"
import { Components } from "./Components"

type cartaProps = {
    cartas: Carta[]
}


export const BodyApp: React.FC<cartaProps> = ( { cartas }  ) => {
    return (
            <>
               {cartas.map( carta => <Components {...carta}/>)}
  
            </>
    )
}