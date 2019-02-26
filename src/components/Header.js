import React, { Component } from 'react';
import SearchForm from './SearchForm';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { withRouter } from 'react-router';

const HeaderWrapper = styled.div`
    width: 100vw;
    height: 10vh;
    background: #555;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    z-index: 99;
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
    flex-grow: 10;
`;
const Navigation = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    a {
        color: white;
        text-decoration: none;
        padding-right: 1em;
    }
`;
const Search = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

class Header extends Component {
    constructor(props) {
        super(props);
    }

    onHeaderSearchSubmit = (str) => {
        this.props.history.push(`/search/${str}`);
    }
    render() {
        return(
            <HeaderWrapper>
                <GoBackButton />
                <HeaderContent>
                    <Navigation>
                        <Link to='/'>Home</Link>
                        <Link to='/search'>Charts</Link>
                    </Navigation>
                    <Search>
                        <SearchForm onSubmit={this.onHeaderSearchSubmit} />
                    </Search>
                    <Navigation>
                        <Link to='/signup'>SignUp</Link>
                    </Navigation>
                </HeaderContent>
            </HeaderWrapper>
        ) 
    }
}

const HeaderWithRouter = withRouter(Header);
export default HeaderWithRouter; 
