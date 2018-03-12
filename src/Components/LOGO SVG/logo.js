import React from 'react';

const logo = (props) => {
    const style1 = {fill:'#333',stroke:'#333',strokeWidth:.5};
    const style2 = {fill:'rgba(41,137,216,1)',stroke:'rgba(41,137,216,1)',strokeWidth:1};
    const style3 = {fill:'white',stroke:'white',strokeWidth:1};
    

    const h = props.logoHeight;
    
    const height = h/2.825; 
    const thikness = height/5;
    const width = h/2.825*1.2;
    const x0 = 0, y0 = 0; 
    const x1 = x0, y1 = y0 + height*1.11765, y11 = y0 + height*1.11765 - h/500*130;
    const y12 = y0 + thikness/2; 
    const x3 = x0, y3 = y0 + height*2.825 ;

    const poly1 = [[x1, y1], 
                   [x1, y1 + thikness*0.8 ], 
                   [x1 + width, y1 + height*7/17 + thikness*0.8], 
                   [x1 + width, y1 + height*7/17  ]]; // < "/" >
    const poly11 = [[x1 + h/25, y11], 
                   [x1, y11 + thikness*0.8 ], 
                   [x1 + width + h/25, y11 + height*4/17 + thikness*0.8], 
                   [x1 + width , y11 + height*4/17  ]]; // < "/" >

    const poly2 =  [[x0 + width/2, thikness + y0], 
                    [x0, y0 + height], 
                    [x0, y0 + height - thikness],
                    [x0 + width/2, y0], 
                    [x0 + width, y0 + height - thikness], 
                    [x0 + width, y0 + height]]; // "<" / >

    const poly21 =  [[x0 + width/2, thikness + y12], 
                    [x0, y12 + height], 
                    [x0, y12 + height - 1.2*thikness],
                    [x0 + width/2, y12], 
                    [x0 + width, y12 + height - thikness/2.2], 
                    [x0 + width, y12 + height]]; // "<<" / >

    const poly3 =  [[x3 + width/2, - thikness + y3], 
                    [x3, y3 - height], 
                    [x3, y3 - height + thikness],
                    [x3 + width/2, y3], 
                    [x3 + width, y3 - height + thikness], 
                    [x3 + width, y3 - height]]; // < / ">"                    

    return (
    <svg height={210} width={width+h/25} >
        <polygon points={poly2} style={style2}/>
        <polygon points={poly11} style={style3}/>
        <polygon points={poly21} style={style2}/>

    </svg>
    );
}

//<polygon points={poly3} style={style2}/>
//<polygon points={poly1} style={style3}/>
export default logo;