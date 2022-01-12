import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Head.css';
import { HashLink as Link } from 'react-router-hash-link';

function Head () {
    return (
        <div className="head-container" id='header'>
            <img className='head-background' src='images/img-bckgr.jpg' />
            <h1>Meta Platforms</h1>
            <p>Newsy dotyczące Meta, zarządu i właścicieli</p>
        </div>
    );
}

export default Head;