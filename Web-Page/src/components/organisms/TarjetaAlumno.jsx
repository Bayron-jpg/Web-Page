import DatosAlumno from "../molecules/DatosAlumno";
import BotonFavorito from "../atoms/BotonFavorito";

const TarjetaAlumno = (props) => {
    return (
        <div className="tarjeta-alumno">
            <DatosAlumno
            nombre={props.nombre}
            carrera={props.carrera}/>
            <BotonFavorito/>
            
        </div>
    );
}

export default TarjetaAlumno;
