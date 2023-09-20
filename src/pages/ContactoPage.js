import React from "react";
import "../styles/components/pages/ContactoPage.css";

const ContactoPage = (props) => {
    return (
        <main>
            <div>
                <img src="images/bienvenidos.jpg" alt="Bienvenidos" className="responsive" />
            </div>
            <div className="holder">
                <div className="contacto">
                    <div>
                        <h2>Contacto rápido</h2>
                        <form className="formulario">
                            <p>
                                <label for="nombre">Nombre</label>
                                <input type="text" name="nombre" />
                            </p>
                            <p>
                                <label for="email">Email</label>
                                <input type="text" name="email" />
                            </p>
                            <p>
                                <label for="tel">Telefono</label>
                                <input type="text" name="tel" />
                            </p>
                            <p>
                                <label for="mensaje">Mensaje</label>
                                <textarea name="mensaje"></textarea>
                            </p>
                            <p><input type="submit" value="Enviar" /></p>
                        </form>
                    </div>
                    <div className="datos">
                        <h2>Otras vías de comunicación</h2>
                        <p>También puede contactarse con nosotros usando los siguientes medios</p>
                        <ul>
                            <li>Teléfono: 379-4000000</li>
                            <li>Email: contacto@hotel.com</li>
                            <li>Instagram</li>
                            <li>Booking</li>
                            <li>Whatsapp</li>
                        </ul>

                    </div>
                </div>

            </div>
        </main>
    );
}

export default ContactoPage;