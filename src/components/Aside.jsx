import React from 'react';
import '../styles/Aside.css';

export default function Aside(){
    return (
        <aside className="aside">
            <ul>
                <li><a href="#section1">Aside 1</a></li>
                <li><a href="#section2">Aside 2</a></li>
                <li><a href="#section3">Aside 3</a></li>
                <li><a href="#section4">Aside 4</a></li>
            </ul>
        </aside>
    );
};