export const BasicTypes = () => {

    const nombre: string = 'Fernando';
    const edad: number = 35;
    const estaActivo:boolean = false;

    const poderes: (string|number)[] = []; // 'Velocidad','Volar','Respirar en el agua'
    
    return (
        <>
            <h3>Basic Types</h3>
            { nombre }, { edad }, { (estaActivo) ? 'activo' : 'no activo' }
            <br/>
            { poderes.join(', ') }
        </>
    )
}
