// We can make use of function based component
import { Sparklines, SparklinesLine } from 'react-sparklines';
import React from 'react';

export default (props) => {
    return (
        <div>
            <Sparklines height={120} width={180} data={props.data}>
                <SparklinesLine color={props.color} />
            </Sparklines>
        </div>
    )   
}