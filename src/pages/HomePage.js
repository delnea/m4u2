import React from "react";
import "../styles/components/pages/HomePage.css";

const HomePage = (props) => {
    return (
        <main>
            <div>
                <img src="images/bienvenidos.jpg" alt="Bienvenidos" className="responsive" />
            </div>
            <div className="holder">
                <div className="columnas">
                    <section className="bienvenidos">
                        <h2>Bienvenidos</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt illum minima explicabo, molestias
                            quibusdam eos! Deleniti consequatur cupiditate voluptates ducimus, animi aliquam sit perferendis
                            quae inventore similique molestias, repudiandae iste?</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam mollitia molestiae in laudantium
                            harum a iure aperiam. Soluta, et qui ad adipisci repellat sapiente animi similique numquam,
                            maiores, iusto labore.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero iusto asperiores ex? Quam vitae
                            totam, quasi maxime voluptatem eos mollitia deserunt facilis quia, quis quaerat modi sint
                            excepturi similique a.</p>
                    </section>
                    <section className="reservas">
                        <h2>Reserve ahora</h2>
                        <div className="reserva">
                            <form className="form-reserva">
                                <p>
                                    <label for="arribo">Arribo</label>
                                    <input type="date" id="arribo" name="arribo" />
                                </p>
                                <p>
                                    <label for="salida">Salida</label>
                                    <input type="date" id="salida" name="salida" />
                                </p>
                                <p>
                                    <label for="apartamento">Tipo de apartamento</label>
                                    <select name="apartamento" id="apartamento">
                                        <option value="1">Single</option>
                                        <option value="2">Doble</option>
                                        <option value="3">Triple</option>
                                        <option value="4">Cuádruple</option>
                                    </select>
                                </p>
                                <p><input type="submit" value="Ver disponibilidad" /></p>
                            </form>
                        </div>
                    </section>
                </div>

            </div>
        </main>
    );
}

export default HomePage;