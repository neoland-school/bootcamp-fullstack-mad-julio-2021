import React from 'react';
import Header from '../../components/header';

class HomePage extends React.Component{
    render(){
        return (
            <React.Fragment>
            <Header></Header>
            <h1>HOME</h1>
            <p>Ut sollicitudin metus nec elit rutrum, eu commodo risus tristique. Sed eget leo elit. Etiam hendrerit nisl eros, ac finibus risus tempus et. Nunc convallis, tellus nec commodo bibendum, ex neque tincidunt tortor, id facilisis arcu augue nec eros. Suspendisse ac magna justo. Duis ut enim tristique, auctor elit a, volutpat elit. Morbi gravida porta urna ut volutpat. Cras sed mi ac risus placerat viverra.</p>
            </React.Fragment>
        );
    }
}

export default HomePage;