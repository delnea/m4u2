import React from "react";

const ApartamentosPage = (props) => {
    return (
        <main>
            <div>
                <img src="images/bienvenidos.jpg" alt="Bienvenidos" className="responsive" />
            </div>
            <div className="holder">
                <div className="apartamentos">
                    <h2>Un apartamento para cada tipo de huesped</h2>
                    <div className="apartamento">
                        <img src="images/bienvenidos.jpg" alt="" />
                        <div className="info">
                            <h3>Mercurio</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ab cupiditate, suscipit
                                delectus doloribus consequuntur facilis eius quidem reprehenderit perferendis nisi, soluta
                                totam, exercitationem incidunt debitis animi laudantium similique aperiam.</p>
                        </div>
                    </div>
                    <div className="apartamento">
                        <img src="images/bienvenidos.jpg" alt="" />
                        <div className="info">
                            <h3>Saturno</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ab cupiditate, suscipit
                                delectus doloribus consequuntur facilis eius quidem reprehenderit perferendis nisi, soluta
                                totam, exercitationem incidunt debitis animi laudantium similique aperiam.</p>
                        </div>
                    </div>
                    <div className="apartamento">
                        <img src="images/bienvenidos.jpg" alt="" />
                        <div className="info">
                            <h3>Neptuno</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ab cupiditate, suscipit
                                delectus doloribus consequuntur facilis eius quidem reprehenderit perferendis nisi, soluta
                                totam, exercitationem incidunt debitis animi laudantium similique aperiam.</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default ApartamentosPage;