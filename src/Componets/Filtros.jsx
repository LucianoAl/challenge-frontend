import { useEffect, useState } from 'react'
import '../Styles/Filtros.css'


function Filtros() {

    const [filter, setFilter] = useState({ country: '', search: '' })
    function applyFilters(city) { // esta funcion nos ayuda a verificar si la ciudad cumple con los filtros de busqueda y pais es decir si coincide con el select y el input
        const cityNameNormalized = city.name
          .normalize('NFD') //convierte en cadena
          .replace(/[\u0300-\u036f]/g, '') //omite acentos
          .trim()//quita espacios
          .toLowerCase(); // lleva todo a minuscula
        const filterSearchNormalized = filter.search
          .normalize('NFD') //convierte en cadena
          .replace(/[\u0300-\u036f]/g, '') //omite acentos
          .trim()//quita espacios
          .toLowerCase(); // lleva todo a minuscula
    
          if (filter.search && !cityNameNormalized.includes(filterSearchNormalized)) {
            return false; // Si filter.search tiene un valor y el nombre de la ciudad no coincide, se devuelve false
          }else
          if (filter.country && city.country !== filter.country) {
            return false; // Si filter.country tiene un valor y el país de la ciudad no coincide, también se devuelve false para excluir esa ciudad del resultado.
          }else
          if (!filter.search && !filter.country) {
            return true; // Mostrar todas las ciudades si no hay filtros
          }else
          return true;
        }
    

    return (
        <>
            <div className="searchFilters">
            <div>
                    <input
                        type="search"
                        placeholder="Busca tu curso..."
                        value={filter.search} //filtramos por filter.sarch el cual va filtrando el texto que se va ingresando en el input y va comparando datos
                        onChange={(e) => setFilter({ ...filter, search: e.target.value })}
                    />
                </div>
                <div className='select'>
                    <select
                        name="format"
                        id="format"
                        value={filter.country} //se le da el value de filter.country en onChange para que filtre segun el pais seleccionado segun indique el value
                        onChange={(e) => setFilter({ ...filter, country: e.target.value })}>
                        <option value="">Categorías</option>
                        <option value="Desarrollo Web">Desarrollo Web</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Artes Digitales">Artes Digitales</option>
                        <option value="Informatica/Ofimatica">Informatica/Ofimatica</option>
                        <option value="Digital Proyect Manager">Digital Proyect Manager</option>
                        <option value="Programación">Programación</option>
                    </select>
                </div>
            </div>
        </>
    )
}

export default Filtros