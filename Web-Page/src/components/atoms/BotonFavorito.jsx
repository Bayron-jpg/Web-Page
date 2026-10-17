import { useState } from "react";

function BotonFavorito(){
    const [contador, setContador] = useState(10);

    function alHacerClick(){
        setContador(contador/2)
    }

    return (
        <button className="contador" onClick={alHacerClick}>
            Pulsadas: {contador}
        </button>
    );
}

export default BotonFavorito;
