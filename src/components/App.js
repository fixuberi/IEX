import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom';
import ChartsContainer from '../containers/ChartsContainer';
import SearchForm from '../components/SearchForm';

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
// const App = () => (
//     <div>
//         <ChartsContainer />
//     </div>
// )
// const onSearchSubmit = (str) => {
//     this.
//     // if we on home - redirect to Charts
//     // if we on Charts - invoke onSearchSubmit method
// }
export default class App extends React.Component {
    constructor(props) {
        super(props);
    }
    onSearchSubmit(str) {
        debugger;
        console.log(this.props.history)
        console.log(str)
    }
    render() {
        return (
            <BrowserRouter>
                <div>
                    <HeaderWrapper>
                        <GoBackButton />
                        <HeaderContent>
                            <Navigation>
                                <Link to="\charts">Charts</Link>
                            </Navigation>
                            <Search>
                                <SearchForm onSubmit={this.onSearchSubmit} />
                            </Search>
                        </HeaderContent>
                    </HeaderWrapper>
                    <Route exact path='\' component={ChartsContainer} />
                    {/* <Route path='\charts\:symbol' component={ChartsContainer} /> */}
                </div>
            </BrowserRouter>
        )
    }
};
