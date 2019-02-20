import React, { Component } from 'react';
import SearchForm from '../components/SearchForm';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
    width: 100vw;
    height: 10vh;
    background: #555;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const GoBackButton = styled.div`
    height: 100%;
    width: 4em;
    margin-right: 1em;
    background: red;
`;
const HeaderContent = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Navigation = styled.div`

`;
const Search = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default class Header extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <HeaderWrapper>
                <GoBackButton />
                <HeaderContent>
                    <Navigation />
                    <Search>
                        <SearchForm onSubmit={this.props.onSearchSubmit} />
                    </Search>
                </HeaderContent>
            </HeaderWrapper>
        ) 
    }
}