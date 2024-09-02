import React from 'react'

const ComponenteDisco = () => {
    const dummyData =[
        {
            "Id": 1,
            "artista": "artista1",
            "titulo": "el mejor disco",
            "duracion": 30,
            "codigo": "abc123"
        },
        {

            "Id": 2,
            "artista": "artista2",
            "titulo": "disco no tan bueno",
            "duracion": 30,
            "codigo": "bca123"
        },
        {
            "Id": 3,
            "artista": "artista3",
            "titulo": "mas o menos bueno el disco",
            "duracion": 46,
            "codigo": "sdg123"
        }
        
    ]      


  return (
    <div>Componen
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Artista</th>
                    <th>titulo</th>
                    <th>duracion</th>
                    <th>codigo</th>
                </tr>
            </thead>
            <tbody>
            {
               dummyData.map(disco =>
                <tr key= {disco.Id}>
                    <td>{disco.id} </td>
                    <td>{disco.artista}</td>
                    <td>{disco.titulo}</td>
                    <td>{disco.duracion}</td>
                    <td>{disco.codigo}</td>                   
                </tr>
               )
            }
            </tbody>

           
        </table>
    </div>
  )
}
 export default ComponenteDisco