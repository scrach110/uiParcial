import { Carta } from "../types/Carta";


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
                        <input type="checkbox"/>
                        <i className="bi bi-bookmark-plus-fill"></i>
                    </p>
                 </div>
            </div>
        </div>
    </div>
    </>
    )
}