import React from 'react';

const logo = () => {

    return (
    <svg height="610" width="600">
        <line x1="300" y1="10" x2="300" y2="600" style="stroke:rgb(0,0,0);stroke-width:.5" />

        <line x1="200" y1="200" x2="400" y2="200" style="stroke:rgb(0,0,0);stroke-width:.5" />
        <line x1="200" y1="30" x2="400" y2="30" style="stroke:rgb(0,0,0);stroke-width:.5" />

        <polygon points="300,60 200,200 200,170 300,30 400,170 400,200" style="fill:rgb(70, 70, 70);stroke:rgb(99, 99, 99);stroke-width:1" />
        <polygon points="200,220 200,240 400,320 400,300 " style="fill:rgb(49, 49, 49);stroke:rgb(99, 99, 99);stroke-width:1" />
        <polygon points="300,60 200,200 200,170 300,30 400,170 400,200" style="fill:rgb(70, 70, 70);stroke:rgb(99, 99, 99);stroke-width:1" />

    </svg>
    );
}

export default logo;