import React from 'react'
import './style.css'
import { useState } from 'react'

const Motif = ()=>{

    const [selectMotif, setSelectMotif]= useState();
    
    const handleSelectMotif= (e)=>{
        e.preventDefault()
        console.log(e)
        // setSelectMotif(e.target.outerText)
    }

    return(
        <div className='centerLayout'>
            {JSON.stringify(selectMotif)}
            <div className='LeftLayout'>
                <h2 className='title-h2 center-text'>Motif du rendez-vous</h2>
                <div className='box '>
                    <ul>
                        <li onClick={(e)=>{handleSelectMotif(e)}}>Motif de rendez-vous N°1</li>
                        <li>Motif de rendez-vous N°2</li>
                        <li>Motif de rendez-vous N°3</li>
                        <li>Motif de rendez-vous N°4</li>
                        <li>Motif de rendez-vous N°5</li>
                        <li>Motif de rendez-vous N°6</li>
                        <li>Motif de rendez-vous N°7</li>
                        <li>Motif de rendez-vous N°8</li>
                        <li>Motif de rendez-vous N°9</li>
                        <li>Motif de rendez-vous N°10</li>
                    </ul>
                </div>

            </div>
            <div className='RightLayout'>
                <h2 className='title-h3 center-text'>Lieu  du rendez-vous</h2>
                <h3 className='title-h3'>Région</h3>
                <div className='box'>

                    <ul>
                        <li>Centre</li>
                        <li>Ouest</li>
                        <li>Littoral</li>
                        <li>Nord</li>
                        <li>Nord-Ouest</li>
                        <li>Extreme-Nord</li>
                        <li>Adamoua</li>
                        <li>Est</li>
                        <li>Sud</li>
                        <li>Sud-Ouest</li>
                    </ul>
                </div>
                <h3 className='title-h3'>Ville</h3>
                <div className='box '>
                    <div className='region'>
                        <p>Veuillez sélectionnez une région</p>
                     
                    </div>
                </div>
            </div>
        </div>  
    )
}
export default Motif;