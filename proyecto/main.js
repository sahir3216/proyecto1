let objetos = [
    {producto: 'Manzana', precio: 25, cantidad: 100, id: 1, descripcion: "Fruta"},
    {producto: 'Sandía', precio: 30, cantidad: 100, id: 2, descripcion: "Fruta"},
    {producto: 'Papaya', precio: 20, cantidad: 100, id: 3, descripcion: "Fruta"},
    {producto: 'Uva', precio: 20, cantidad: 150, id: 4, descripcion: "Fruta"},
    {producto: 'Maracuyá', precio: 20, cantidad: 120, id: 5, descripcion: "Fruta"}
];

let agregar = document.getElementById('agregarProducto');
let tbodyproductos = document.getElementById('tbodyproducto');
let buscar = document.getElementById('buscar');
let buscador = document.getElementById('buscador');

const agregarproductos = () => {
    let producto = document.getElementById('producto').value;
    let descripcion = document.getElementById('descripcion').value;
    let precio = document.getElementById('precio').value;
    let cantidad = document.getElementById('cantidad').value;
    let id = objetos.length + 1;
    objetos.push({id, producto, descripcion, precio, cantidad});
    rendertabla();
}
agregar.addEventListener('click', agregarproductos);


const rendertabla = () => {
    tbodyproductos.innerHTML =  
    objetos.map(objeto => 
        `<tr> 
            <td> ${objeto.id}  </td>
            <td> ${objeto.producto}  </td>
            <td> ${objeto.descripcion}  </td>
            <td> ${objeto.precio}  </td>
            <td> ${objeto.cantidad}  </td>
            <td> 
                <button data-action="edit" data-id="${objeto.id}">Editar</button>
                <button data-action="delete" data-id="${objeto.id}">Borrar</button>
            </td>
        </tr>`
    ).join("");
}
rendertabla();

tbodyproductos.addEventListener('click', (e) => {
    const action = e.target.getAttribute("data-action");
    const id = e.target.getAttribute("data-id");
    if (action === 'delete') {
        eliminarproducto(id);
        rendertabla();
    }
});
const eliminarproducto = (id) => {
const index = objetos.findIndex(objeto => objeto.id == id);
const borrar = objetos.splice(index, 1);
}


