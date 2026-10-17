import Nombre from "../atoms/Nombre";
import Carrera from "../atoms/Carrera";

const DatosAlumno = (props) => {
    return (
        <div>
            <Nombre nombre={props.nombre}/>
            <Carrera carrera={props.carrera}/>
        </div>
    );
}

export default DatosAlumno;
