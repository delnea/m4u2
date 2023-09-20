import React from "react";

const GaleriaPage = (props) => {
    return (
        <main>
            <div>
                <img src="images/bienvenidos.jpg" alt="Bienvenidos" className="responsive" />
            </div>
            <div className="holder">
                <div className="galerias">
                    <h2>Conozca nuestros apartamentos</h2>
                    <div className="galeria">
                        <img src="images/bienvenidos.jpg" alt="Apartamento" />
                        <img src="images/bienvenidos.jpg" alt="Apartamento" />
                        <img src="images/bienvenidos.jpg" alt="Apartamento" />
                        <img src="images/bienvenidos.jpg" alt="Apartamento" />
                        <img src="images/bienvenidos.jpg" alt="Apartamento" />
                        <img src="images/bienvenidos.jpg" alt="Apartamento" />
                        <img src="images/bienvenidos.jpg" alt="Apartamento" />
                    </div>
                </div>
            </div>
        </main>
    );
}

export default GaleriaPage;