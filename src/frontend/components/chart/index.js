import React, { PropTypes } from 'react'
import { Sparklines, SparklinesLine } from 'react-sparklines';

function Chart(props) {
    let {data, color} = props;

    return (
        <Sparklines data={data}>
            <SparklinesLine color={color} />
        </Sparklines>
    );
}

Chart.propTypes = {
    data : PropTypes.array.isRequired,
    color: PropTypes.string
};

export default Chart;

