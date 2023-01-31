import React from 'react'
import './style.css'

const Motif = ()=>{

    return(
        <div className='centerLayout'>
            <div className='LeftLayout'>
                <h2 className='title-h2'>Motif du rendez-vous</h2>
                <div className='box '>
                    <ul>
                        <li>Motif de rendez-vous N°1</li>
                    </ul>
                </div>

            </div>
            <div className='RightLayout'>
                <h2 className='title-h3'>Lieu  du rendez-vous</h2>
                <div className='box '>
                    <h3 className='title-h3'>Région</h3>

                    <ul>
                        <li></li>
                    </ul>
                </div>
                <div className='box '>
                    <h3 className='title-h3'>Ville</h3>
                    <div>

                    </div>
                </div>
            </div>
        </div>  
    )
}
export default Motif;