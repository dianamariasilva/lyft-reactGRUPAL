import React, { Component } from 'react';
import logo from './logo.svg';
import './app1.css';

// class App extends Component {
//     render() {
//         return (
//             <div id="fondoMovil">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-md-12">
//                             <img className="image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Lyft_logo.svg/2000px-Lyft_logo.svg.png"></img>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="container botones ">
//                     <div className="row ">
//                         <div className="col-md-12 ">
//                             <a type="button" className="buttonMovil1">Log in</a>
//                             <a href="index1.html"type="button"className="buttonMovil2">Sign up</a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

class App extends Component {
    render() {
        return (
            <form>
            <div id="contacto">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-3">
                            <a href="index.html"><span className="glyphicon glyphicon-chevron-left" /></a>
                        </div>
                        <div className="col-md-9">
                            <h2 className="Sign1">Sign Up</h2>
                        </div>
                        <div className="col-md-12">
                            <h5>Join now for tree ride Credit</h5>
                        </div>
                        
                        <div className="row vacio">
                            <div className="col-lg-6">
                                <div className="input-group">
                                    <div className="input-group-btn">
                                        <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Paises<span className="caret" /></button>
                                        <ul className="dropdown-menu">
                                            <li><a href="http://www.yoursite.co.uk">+71-United Kingdom</a></li>
                                            <li><a href="http://www.yoursite.de">+51-Perú</a></li>
                                            <li><a href="http://www.yoursite.fr">+81-France</a></li>
                                            <li role="separator" className="divider" />
                                            <li><a href="http://www.yoursite.com">+54-Germany</a></li>
                                            <li><a href="http://www.yoursite.nl">+31-Netherlands</a></li>
                                        </ul>
                                    </div>
                                    {/* /btn-group */}
                                    <input type="number" className="form-control" required/>
                                </div>
                                {/* /input-group */}
                                <h5> We'll send a text to verity your phone</h5>
                            </div>
                            {/* /.col-lg-6 */}
                        </div>
                        
                        <div className="col-md-12">
                            {/* <button class="btnNext">Nex</button> */}
                            <a  href="index2.html" type="button" className="btn btn-default btnNext">Next</a>
                        </div>
                    </div>
                </div>
            </div>
            </form>
        );
    }
}

export default App;