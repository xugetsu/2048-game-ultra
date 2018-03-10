import React from 'react';

const logo = () => {
    const style1 = {stroke:'rgba(125,185,232,1)',strokeWidth:.5};
    const style2 = {fill:'rgba(41,137,216,1)',stroke:'rgba(41,137,216,1)',strokeWidth:1};



    const h = 100;
    
    const height = h/2.825; 
    const thikness = height/5;
    const width = h/2.825*1.2;
    const x0 = 0, y0 = 0; 
    const x1 = x0, y1 = y0 + height*1.11765;
    const x3 = x0, y3 = y0 + height*2.825;

    const poly1 = [[x1, y1], 
                   [x0, y1 + thikness*0.6 ], 
                   [x1 + width, y1 + height*7/17 + thikness*0.6], 
                   [x1 + width, y1 + height*7/17  ]]; // < "/" >

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
    <svg height={h} width={width}>
        <polygon points={poly1} style={style2}/>
        <polygon points={poly2} style={style2}/>
        <polygon points={poly3} style={style2}/>
    </svg>
    );
}

export default logo;