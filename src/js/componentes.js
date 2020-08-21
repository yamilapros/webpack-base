import '../css/componentes.css';

export const saludar = ( nombre ) => {
    console.log('Saludando desde console');
    const h1 = document.createElement('h1');
    h1.innerText = `Mi nombre es ${ nombre }`;
    document.body.append(h1);
}