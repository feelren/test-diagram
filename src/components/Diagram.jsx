import React from 'react'
import s from '../styles/dist/Diagram.module.css'

const Diagram = (props) => {
    let values = props.data.map(item => item.value);
    let maxValue = Math.max(...values);
    let precentsOfMaxValue = values.map(item => (item / maxValue) * 100);



    return (
        <div className={s.wrapper}>
            {
                precentsOfMaxValue.map(item => {
                    return <div className={s.column} style={{ height: item + '%' }}></div>
                })
            }
        </div>
    );
}

export default Diagram;
