import { Carta } from "../Types/Carta";


export const  Components = (carta: Carta) => {
    return (
    <>
    <div className="container text-center">
        <div className="row">
            <div className="col-3">
                <div className="card">
                    <img src={carta.imagen} className="card-img-top" alt="Imagen del producto"/>
                    <h5 className="card-title">{carta.nombre}</h5>
                    <p className="card-text">
                        <i className="bi bi-star"></i>
                    </p>
                 </div>
            </div>
        </div>
    </div>
    </>
    )
}