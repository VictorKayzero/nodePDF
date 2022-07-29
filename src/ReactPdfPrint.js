import React, { useRef } from "react";
import {useReactToPrint} from "react-to-print";

const ReactPdfPrint = () => {
    const componentRef = useRef();
const handlePrint = useReactToPrint({

    content: () => componentRef.current,
    documentTitle: 'proyectoProveedores',
    onAfterPrint: ()=>alert('Descarga OK!')

});

    return (
        <>
            <div  ref={componentRef}>
                <h1>Data de proveedores</h1>
            </div>
            <button onClick={handlePrint}>Genera PDF</button>
        </>
    );

}

export default ReactPdfPrint;