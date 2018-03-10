import React from 'react';

const logo = () => {
    const style1 = {stroke:'rgba(125,185,232,1)',strokeWidth:.5};
    const style2 = {fill:'rgba(41,137,216,1)',stroke:'rgba(41,137,216,1)',strokeWidth:1};

    const scale = 1;
    const height = 170*scale*scale;
    const thikness = height/5;
    const width = height*1.2*scale;

    const x0 = 20;
    const y0 = 30; 
    const x1 = x0;
    const y1 = y0 + 190;
    const x3 = x0;
    const y3 = y0 + 450;

    const poly1 = [[x1, y1], 
                   [x0, y1 + thikness*0.8 ], 
                   [x1 + width, y1 + 50 + thikness*0.8], 
                   [x1 + width, y1 + 50 ]]; // < "/" >

    const poly2 =  [[x0 + width/2, thikness + y0], 
                    [x0, y0 + height], 
                    [x0, y0 + height - thikness],
                    [x0 + width/2, y0], 
                    [x0 + width, y0 + height - thikness], 
                    [x0 + width, y0 + height]]; // "<" / >
    const poly3 =  [[x3 + width/2, - thikness + y3], 
                    [x3, y3 - height], 
                    [x3, y3 - height + thikness],
                    [x3 + width/2, y3], 
                    [x3 + width, y3 - height + thikness], 
                    [x3 + width, y3 - height]]; // < / ">"                    

    return (
    <svg height="500" width="250">
        <polygon points={poly1} style={style2}/>
        <polygon points={poly2} style={style2}/>
        <polygon points={poly3} style={style2}/>
    </svg>
    );
}

export default logo;