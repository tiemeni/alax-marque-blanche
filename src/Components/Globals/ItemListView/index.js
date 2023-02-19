import React, { useState } from 'react'
import { motifRowessai, regionRowessai } from '../../../Helpers/defaultData'
import { getWindowSize } from '../../../Hooks/dimensions';
import './style.css'


export default function ItemListView({
    forMotif = false,
    forCity = false,
    forRegion = false,
    label,
    handlePostMotif,
    handlePostVille,
    handlePostRegion,
    onPostClinique,
    onPostPraticien,
    onPostCreneau,
    preSelectedMotif,
    preSelectedRegion,
    preSelectedVille,
    preSelectedClinique,
    preSelectedPraticien,
    preSelectedCreneau
}) {
    const [motif, setMotif] = useState(
        preSelectedMotif ? preSelectedMotif :
            preSelectedRegion ? preSelectedRegion :
                preSelectedVille ? preSelectedVille :
                    preSelectedClinique ? preSelectedClinique :
                        preSelectedPraticien ? preSelectedPraticien :
                            preSelectedCreneau ? preSelectedCreneau : ""
    );
    const { innerWidth } = getWindowSize()
    const [region, setRegion] = useState();
    const row = []
    const regionLi = [];

    motifRowessai.forEach(motifL => {
        if (motifL.motif === motif) {
            row.push(<li onClick={(e) => {
                setMotif(e.target.outerText);
                handlePostMotif && handlePostMotif(e.target.outerText)
                onPostCreneau && onPostCreneau(e.target.outerText)
                onPostPraticien && onPostPraticien(e.target.outerText)
                onPostClinique && onPostClinique(e.target.outerText)
                handlePostVille && handlePostVille(e.target.outerText)
                handlePostRegion && handlePostRegion(e.target.outerText)
            }} style={{ backgroundColor: '#FDB305', color: "#fff" }}>
                {motifL.motif}
            </li>)
        } else {
            row.push(<li onClick={(e) => {
                setMotif(e.target.outerText);
                handlePostMotif && handlePostMotif(e.target.outerText)
                onPostClinique && onPostClinique(e.target.outerText)
                onPostCreneau && onPostCreneau(e.target.outerText)
                onPostPraticien && onPostPraticien(e.target.outerText)
                handlePostVille && handlePostVille(e.target.outerText)
                handlePostRegion && handlePostRegion(e.target.outerText)
            }} onChange={() => { colorMotif() }}>
                {motifL.motif}
            </li>)
        }
    })

    const colorMotif = () => {
        motifRowessai.forEach(motifL => {
            if (motifL.motif === motif) {
                row.push(
                    <li onClick={(e) => { setMotif(e.target.outerText) }}
                        style={{ backgroundColor: '#FDB305' }}>
                        {motifL.motif}
                    </li>)
            } else {
                row.push(
                    <li onClick={(e) => { setMotif(e.target.outerText) }}
                        onChange={() => { colorMotif() }}>
                        {motifL.motif}
                    </li>)
            }
        })
    }

    regionRowessai.forEach(regionL => {
        if (regionL.region === region) {
            regionLi.push(
                <li onClick={(e) => { setRegion(e.target.outerText) }}
                    style={{ backgroundColor: '#FDB305', color: "#fff" }}>
                    {regionL.region}
                </li>)
        } else {
            regionLi.push(
                <li onClick={(e) => { setRegion(e.target.outerText) }}
                    onChange={() => { colorRegion() }}>
                    {regionL.region}
                </li>)
        }
    })

    const colorRegion = () => {
        regionRowessai.forEach(regionL => {
            if (regionL.region === region) {
                regionLi.push(
                    <li onClick={(e) => { setRegion(e.target.outerText) }}
                        style={{ backgroundColor: '#FDB305', color: "#fff" }}>
                        {regionL.region}
                    </li>)
            } else {
                regionLi.push(
                    <li onClick={(e) => { setRegion(e.target.outerText) }}
                        onChange={() => { colorRegion() }}>
                        {regionL.region}
                    </li>)
            }
        })
    }

    return (
        <div>
            <div className='centerLayout'
                style={{
                    paddingTop: 50,
                    marginBottom: (innerWidth > 500) ? "5%" : "0%",
                }}>
                <div className={forMotif ? 'LeftLayout' : forCity ? "RightLayoutBottom" : "RightLayout"}
                    style={{ marginTop: innerWidth < 500 && forCity && -75 }}
                >
                    {/* {JSON.stringify(motif)} */}
                    {(!forCity || forMotif) && <h2 className='title-h2 center-text' style={{ marginTop: forRegion ? 10 : 0 }}>{label}</h2>}
                    {(forCity) && <div style={{ paddingLeft: 9, }}>
                        <p style={{ marginBottom: 5, fontWeight: "bold" }}>{"Ville"}</p>
                    </div>}
                    {(forRegion) && <div style={{ paddingLeft: 9 }}>
                        <p style={{ marginBottom: 5, fontWeight: "bold" }}>{"Region"}</p>
                    </div>}
                    <div className='box ' style={{}}>
                        {row}
                    </div>

                </div>
                {/* <div className='RightLayout'>
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
                </div> */}
            </div>
        </div >
    )
}
