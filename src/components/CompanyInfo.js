import React from 'react';

const CompanyInfo = ({ data, isFetching }) => {
    const infoElements = [];
    for (let key in data) {
        infoElements.push({ key: key, value: data[key] })
    }
    return (
        <ul>
            {infoElements.map(el => {
                return <li key={el.key}>
                            {`${el.key} - ${el.value}`}
                        </li>
            })}
        </ul>
    )
}

export default CompanyInfo;