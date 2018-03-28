// We can make use of function based component
import { Sparklines, SparklinesLine, SparklinesReferenceLines } from 'react-sparklines';
import React from 'react';
import _ from 'lodash';

export default (props) => {
    return (
        <div>
            <Sparklines height={120} width={180} data={props.data}>
                <SparklinesLine color={props.color} />
                
            </Sparklines>
            <div>
                {average(props.data)}
            </div>
        </div>
    )   
}

function average(data){
    return _.round(_.sum(data)/data.length);
}