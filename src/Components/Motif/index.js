import React from 'react'
import './style.css'
import { useState} from 'react'

const Motif = ()=>{

    const [motif, setMotif]= useState();
    const [region, setRegion]= useState();

    const row=[]
    const regionLi=[]
    
    const motifRowessai=[
        {
            "motif": "Motif de rendez-vous N°1",
        },
        {
            "motif": "Motif de rendez-vous N°2",

        },
        {
            "motif": "Motif de rendez-vous N°3",
        },
        {
            "motif": "Motif de rendez-vous N°4",
        },
        {
            "motif": "Motif de rendez-vous N°5",
        },
        {
            "motif": "Motif de rendez-vous N°6",
        },
        {
            "motif": "Motif de rendez-vous N°7",
        },
        {
            "motif": "Motif de rendez-vous N°8",
        },
        {
            "motif": "Motif de rendez-vous N°2",
        }
    ]
    const regionRowessai=[
        {
            "region": "Centre",
        },
        {
            "region": "Ouest",

        },
        {
            "region": "Nord",
        },
        {
            "region": "Sud",
        },
        {
            "region": "Est",
        },
        {
            "region": "Adamaoua",
        },
        {
            "region": "Extreme-nord",
        },
        {
            "region": "Littoral",
        },
        {
            "region": "Sud-ouest",
        },
        {
            "region": "Nord-ouest",
        }
    ]

    motifRowessai.map(motifL=>{
        if(motifL.motif===motif){
            row.push(<li onClick={(e)=>{setMotif(e.target.outerText)}} style={{backgroundColor:'#FDB305', color: "#fff"}}>{motifL.motif}</li>)
        }else{
        row.push(<li onClick={(e)=>{setMotif(e.target.outerText)}} onChange={()=>{colorMotif()}}>{motifL.motif}</li>)
        }
    }
    )

    const colorMotif=()=>{
        motifRowessai.map(motifL=>{
            if(motifL.motif===motif){
                row.push(<li onClick={(e)=>{setMotif(e.target.outerText)}} style={{backgroundColor:'#FDB305'}}>{motifL.motif}</li>)
            }else{
            row.push(<li onClick={(e)=>{setMotif(e.target.outerText)}} onChange={()=>{colorMotif()}}>{motifL.motif}</li>)
            }
        }
    )
    }

    regionRowessai.map(regionL=>{
        if(regionL.region===region){
            regionLi.push(<li onClick={(e)=>{setRegion(e.target.outerText)}} style={{backgroundColor:'#FDB305', color: "#fff"}}>{regionL.region}</li>)
        }else{
            regionLi.push(<li onClick={(e)=>{setRegion(e.target.outerText)}} onChange={()=>{colorRegion()}}>{regionL.region}</li>)
        }
    }
    )
    const colorRegion=()=>{
        regionRowessai.map(regionL=>{
            if(regionL.region===region){
                regionLi.push(<li onClick={(e)=>{setRegion(e.target.outerText)}} style={{backgroundColor:'#FDB305', color: "#fff"}}>{regionL.region}</li>)
            }else{
                regionLi.push(<li onClick={(e)=>{setRegion(e.target.outerText)}} onChange={()=>{colorRegion()}}>{regionL.region}</li>)
            }
        }
        )
    }

    return(
        <div className='centerLayout'>
            <div className='LeftLayout'>
                {JSON.stringify(motif)}
                <h2 className='title-h2 center-text'>Motif du rendez-vous</h2>
                <div className='box '>
                    {row}
                </div>

            </div>
            <div className='RightLayout'>
                {JSON.stringify(region)}
                <h2 className='title-h3 center-text'>Lieu  du rendez-vous</h2>
                <h3 className='title-h3'>Région</h3>
                <div className='box'>
                    {regionLi}
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