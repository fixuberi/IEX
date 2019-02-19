import React from 'react';

const CompanyInfo = ({ data, isFetching }) => {
    const { copanyName, 
            description,
            tags } = data;
    const basicInfo = () => {
        return ['industry', 'sector', 'CEO', 'exchange'].map(infoKey => {
            if(!data[infoKey]) return '';
            return(
                <BasicInfoElemment>
                    <div className='info-key'>{infoKey}</div>
                    <div className='info-value'>{data[infoKey]}</div>
                </BasicInfoElemment>
            );
        }) 
    }
    const website = () => {
        const website = data['website'];
        if(data[website]) return '';
        return(
            <BasicInfoElemment>
                <div className='info-key'>Website</div>
                <div className='info-value'>
                    <a href={website} />
                </div>
            </BasicInfoElemment>
        );
    }
    const description = () => {
        const description = data['description'];
        if(data[description]) return(
            <Description>
                <h3>Description</h3>
                <p>{description}</p>
            </Description>
        );
    }
    return (
        <CompanyInfoWrapper>
            <MainInfo>
                <CompanyName>
                    <h2>
                        {copanyName}
                    </h2>
                </CompanyName>
                <BasicInfo>
                    {basicInfo()}
                    {website()}
                </BasicInfo>
            </MainInfo>
            <DescriptionWrapper>
                {description()}
            </DescriptionWrapper>
            <Tags>
                {tags}
            </Tags>
        </CompanyInfoWrapper> 
    )
}

export default CompanyInfo;