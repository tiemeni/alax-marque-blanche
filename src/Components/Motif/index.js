import React from 'react'
import './style.css'
import { useState } from 'react'
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { changeStep } from '../../REDUX/Step/actions';
import { STEP0, STEP1 } from '../../Constants/steps';
import { motifRowessai, regionRowessai } from '../../Helpers/defaultData';

const Motif = () => {
    const dispatcher = useDispatch();
    const [motif, setMotif] = useState();
    const [region, setRegion] = useState();
    const row = []
    const regionLi = []

    motifRowessai.forEach(motifL => {
        if (motifL.motif === motif) {
            row.push(<li onClick={(e) => { setMotif(e.target.outerText) }} style={{ backgroundColor: '#FDB305', color: "#fff" }}>{motifL.motif}</li>)
        } else {
            row.push(<li onClick={(e) => { setMotif(e.target.outerText) }} onChange={() => { colorMotif() }}>{motifL.motif}</li>)
        }
    })

    const colorMotif = () => {
        motifRowessai.forEach(motifL => {
            if (motifL.motif === motif) {
                row.push(<li onClick={(e) => { setMotif(e.target.outerText) }} style={{ backgroundColor: '#FDB305' }}>{motifL.motif}</li>)
            } else {
                row.push(<li onClick={(e) => { setMotif(e.target.outerText) }} onChange={() => { colorMotif() }}>{motifL.motif}</li>)
            }
        })
    }

    regionRowessai.forEach(regionL => {
        if (regionL.region === region) {
            regionLi.push(<li onClick={(e) => { setRegion(e.target.outerText) }} style={{ backgroundColor: '#FDB305', color: "#fff" }}>{regionL.region}</li>)
        } else {
            regionLi.push(<li onClick={(e) => { setRegion(e.target.outerText) }} onChange={() => { colorRegion() }}>{regionL.region}</li>)
        }
    })

    const colorRegion = () => {
        regionRowessai.forEach(regionL => {
            if (regionL.region === region) {
                regionLi.push(<li onClick={(e) => { setRegion(e.target.outerText) }} style={{ backgroundColor: '#FDB305', color: "#fff" }}>{regionL.region}</li>)
            } else {
                regionLi.push(<li onClick={(e) => { setRegion(e.target.outerText) }} onChange={() => { colorRegion() }}>{regionL.region}</li>)
            }
        })
    }

    return (
        <div>
            <div className='centerLayout' style={{ paddingTop: 50 }}>
                <div className='LeftLayout'>
                    {/* {JSON.stringify(motif)} */}
                    <h2 className='title-h2 center-text'>Motif du rendez-vous</h2>
                    <div className='box '>
                        {row}
                    </div>

                </div>
                <div className='RightLayout'>
                    {/* {JSON.stringify(region)} */}
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
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                <Button className='btn-submit' variant='contained' onClick={() => {
                    // let step = {
                    //     subStep: "sub-step-0",
                    //     outputs: {
                    //         firstTitle: "Selectionnez le creaneau qui vous convient",
                    //     },
                    //     inputs: {
                    //         selectedMotif: null,
                    //         selectedRegion: null,
                    //         selectedVille: null,
                    //     }
                    // }
                    // dispatcher(createStep({ key: "step-2", step }))
                    dispatcher(changeStep({ step: STEP0, subStep: STEP1 }))
                }}>
                    <p className='login-text'>Suivant</p>
                </Button>
            </div>
        </div >
    )
}
export default Motif;