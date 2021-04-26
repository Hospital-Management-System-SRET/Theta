import React, { Component } from 'react';
import './Toggle.css';

class Toggle extends Component {
    constructor(props) {
        super(props)
        this.state = { show: true };
        this.showHide = this.showHide.bind(this)
    }
    render() {
        return (
            <section id="content">
                <div className="container">
                    <div className = 'doc'>
                        <button onClick={this.showHide} className="tog">WHO WE ARE</button>
                        {this.state.show &&
                            <div>
                                <img src={require('../assets/lens.jpg').default} alt="loading" ></img>
                                <img src={require('../assets/check.jpg').default} alt="loading" ></img>
                                <div className='context'>
                                <h2>We are a recognized leader in high-tech ophthalmology services</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt </p>
                                <p>
                                    Ut labore et dolore magna aliqua. Aliquam nulla facilisi cras fermentum odio eu feugiat pretium. Nam aliquam sem et tortor consequat id porta.
                                    In metus vulputate eu scelerisque felis imperdiet.Ut etiam sit amet nisl purus. Egestas egestas fringilla phasellus faucibus scelerisque eleifend. Aliquet lectus proin nibh nisl condimentum id venenatis a condimentum.
                                </p>
                                </div>
                                <div className = 'btn'>
                                    <button>Our Doctors</button>
                                </div>
                            </div>
                        }
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    
                    <div>
                        <button onClick={this.showHide} className="tog">ADVANTAGES</button>
                        {this.state.show &&
                            <div className= "col">
                                <h2>We offer a whole range of treatments for you and your family.</h2>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam nulla facilisi cras fermentum odio eu feugiat pretium. Nam aliquam sem et tortor consequat id porta. In metus vulputate eu scelerisque felis imperdiet.
                                </p>
                                <p>
                                Ut etiam sit amet nisl purus. Egestas egestas fringilla phasellus faucibus scelerisque eleifend. Aliquet lectus proin nibh nisl condimentum id venenatis a condimentum.
                                </p>
                                <div className = 'btn'>
                                    <button>Book Appointment</button>
                                </div>
                            </div>  
                        }
                    </div>
                </div>
            </section >
        );
    }

    showHide() {
        const { show } = this.state;
        this.setState({ show: !show })
    }
}
export default Toggle;



// import React from 'react';
// import './Toggle.css';

// class Toggle extends React.Component{
//   constructor(){
//       super();
//       this.state={
//           show:true
//       }
//   }
//   render(){
//     return (
//       <div className="App">
//         <header className="App-header">
//         <button className='tog' onClick={()=>{this.setState({show:!this.state.show})}}>
//                   { this.state.show? 'Hide' : 'WHO WE ARE'}</button>
//           <div>
//               {
//                   this.state.show? 
//                   <div className= 'doc'>
//                       <img src={require('../assets/lens.jpg').default} alt="loading" ></img>
//                       <img src={require('../assets/check.jpg').default} alt="loading" ></img>
//                       <img src={require('../assets/read.jpg').default} alt="loading" ></img>
//                       <h2>We are a recognized leader in high-tech ophthalmology services</h2>
//                       <p>
//                       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt </p>
//                       <p>
//                       Ut labore et dolore magna aliqua. Aliquam nulla facilisi cras fermentum odio eu feugiat pretium. Nam aliquam sem et tortor consequat id porta.
//                       In metus vulputate eu scelerisque felis imperdiet.Ut etiam sit amet nisl purus. Egestas egestas fringilla phasellus faucibus scelerisque eleifend. Aliquet lectus proin nibh nisl condimentum id venenatis a condimentum.
//                       </p>
//                       <div className = 'btn-grp-1'>
//                           <button>Our Doctors</button>
//                       </div>
//                     </div> : null
//               }
//           </div>
//         </header>
//       </div>
//     );
//   }
// }

// export default Toggle;