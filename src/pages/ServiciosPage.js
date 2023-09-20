import React from "react";

const ServiciosPage = (props) => {
    return (
        <main>
            <div>
                <img src="images/bienvenidos.jpg" alt="Bienvenidos" className="responsive" />
            </div>
            <div className="holder">
                <div className="servicio-descripcion">
                    <h2>Nuestros servicios</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, voluptas ad. Facere ipsa perferendis aliquam laudantium dolor quis quibusdam soluta mollitia adipisci dolore vel iure unde ullam quos, dolores cupiditate!</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut omnis, explicabo reprehenderit corrupti libero dolorem ratione exercitationem quidem id corporis, repellendus eum beatae incidunt ipsam soluta magnam repellat consequuntur. Incidunt.</p>
                </div>
                <div className="servicios">
                    <div className="servicio">
                        <span className="material-symbols-outlined">local_cafe</span>
                        <h3>Desayuno continental</h3>
                    </div>
                    <div className="servicio">
                        <span className="material-symbols-outlined">local_laundry_service</span>
                        <h3>Lavandería a disposición</h3>
                    </div>
                    <div className="servicio">
                        <span className="material-symbols-outlined">kettle</span>
                        <h3>Utensilios de cocina</h3>
                    </div>
                    <div className="servicio">
                        <span className="material-symbols-outlined">directions_car</span>
                        <h3>Estacionamiento gratuito</h3>
                    </div>
                    <div className="servicio">
                        <span className="material-symbols-outlined">info</span>
                        <h3>Información turística</h3>
                    </div>
                </div>



            </div>
        </main>
    );
}

export default ServiciosPage;