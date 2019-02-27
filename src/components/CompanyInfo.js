import React from 'react';
import styled from 'styled-components';

const CompanyInfoWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`;
const MainInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
`;
const DescriptionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
`;
const TagsWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
    flex-grow: 3;
`;
const CompanyName = styled.div`

`;
const BasicInfo = styled.div``;
const BasicInfoElement = styled.div`
    display: flex;
    width: 100%;
    .info-key {
        width: 30%;
        text-align: end;
        padding-right: 1em;
    }
    .info-key:first-letter {
        text-transform:capitalize;
    }
    .info-value {
        width: 70%;
    }
`;
const Description = styled.div``;
const Tag = styled.div`
    padding: 1em;
    span::before {
        content: '#'
    }
`;
const CompanyLogo = styled.div`
    img {
        width: 100%;
    }
`;
const CompanyInfo = ({ data, isFetching, isLogged, companyLogoUrl }) => {
    const { companyName,
            tags } = data;
    const basicInfo = () => {
        return ['industry', 'sector', 'CEO', 'exchange'].map(infoKey => {
            if(!data[infoKey]) return '';
            return(
                <BasicInfoElement key={infoKey}>
                    <div className='info-key'>{infoKey}</div>
                    <div className='info-value'>{data[infoKey]}</div>
                </BasicInfoElement>
            );
        }) 
    }
    const website = () => {
        const website = data['website'];
        if(!website) return '';
        return(
            <BasicInfoElement>
                <div className='info-key'>Website</div>
                <div className='info-value'>
                    <a href={website}>{website}</a>
                </div>
            </BasicInfoElement>
        );
    }
    const description = () => {
        const descriptionText = data['description'];
        if(descriptionText) return(
            <Description>
                <h4>Description</h4>
                <p>{descriptionText}</p>
            </Description>
        );
    }
    const tagsCollection = () => {
        if(tags && tags.length > 0) {
            return tags.map((tag, index) => (
                <Tag key={index}>
                    <span>{tag}</span>
                </Tag>
            ));
        }
    }
    const companyLogo = () => {
        if (isLogged && companyLogoUrl) {
            return(
                <CompanyLogo>
                    <img src={companyLogoUrl} alt="company logo"></img>
                </CompanyLogo>
            )
        }
    }
    return (
        <CompanyInfoWrapper>
            <MainInfo>
                {companyLogo()}
                <CompanyName>
                    <h2>
                        {companyName}
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
            <TagsWrapper>
                {tagsCollection()}
            </TagsWrapper>
        </CompanyInfoWrapper> 
    )
}

export default CompanyInfo;