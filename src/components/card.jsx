import React, { Component } from 'react';
export default function Card(props){
        return (
            <React.Fragment>
            <div className='naziv'>
            <h2 className='nnaziv'>{props.naziv}</h2>
            </div>
            <div className='sadrzaj'>
            <div className='izgled'>
                  <img className='slika1' src={props.slika} alt="slikaPrva"/> 
                </div>
                <div className='opis'>
                   <p>{props.opis}</p>
                   <h2>{props.lokacija}</h2>
                   <span className='pocetak'>OD  {props.start}</span>
                   <span className='kraj'>DO  {props.kraj}</span>
                   <div className='ravno'>
                   <h3>Rating: {props.ocena}</h3><button className='dugme'>Detaljnije</button>
                   </div>
                </div>
             </div>
             </React.Fragment>
        );
    }

 