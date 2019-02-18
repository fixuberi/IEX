import React, { Component } from 'react';
import ChangeChart from './ChangeChart';
import CloseChart from './CloseChart';

// const CompanyChartsCollection = (chartData) => {
//     return (
//         <div>
//             <ChangeChart data={chartData.data} 
//                          isFetching={chartData.isFetching} />
//             <CloseChart data={chartData.data} 
//                         isFetching={chartData.isFetching} />
//         </div>
//     )
// };

export default class CompanyChartsCollection extends Component {
    constructor(props) {
        super(props);
    }
    shouldComponentUpdate() {
        return true;
    }
    render() {
        return(
            <div>
                <ChangeChart data={this.props.data} 
                            isFetching={this.props.isFetching} />
                <CloseChart data={this.props.data} 
                            isFetching={this.props.isFetching} />
            </div> 
        )
    }
}

// export default CompanyChartsCollection;