import * as React from "react";
import Mainheader from './components/layout/mainheader';
import Mainfooter from './components/layout/mainfooter';

export default function FAQ() {
  
    const style= {
        color: '#fff',
        margin: '0px',
        padding: '50px 0px 50px 0px',
        fontsSize: '30px',
        fontWeight: '600',
        textAlign: 'center'

    }

    const color ={
        color:'#fff'
    }
  
    return (
        <div>
            <Mainheader />
                <section className="innerbanner-sec" style= {{ background: "url(" + "assets/images/loginbg.jpg" + ")" }}>
                    <div className="container">
                        <div className="row">
                        <div className="col-md-12">
                            <h3 className="heading-d" style={style}>FAQ</h3>
                        </div>
                        </div>
                    </div>
                </section>




                <section className="content-sec" style= {{ background: "url(" + "assets/images/loginbg.jpg" + ")" }}>
                    <div className="container">
                        <div className="row">
                        <div className="col-md-12">
                            <div className="content-page">
                                    <h2 style={color}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h2>
                                    <p style={color}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 
                                    the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    <p style={color}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 
                                    the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
                                    but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
                                    containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                    
                                    <h2 style={color}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h2>
                                    <p style={color}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 
                                    the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    <p style={color}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 
                                    the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
                                    but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
                                    containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                    
                                    <h2 style={color}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h2>
                                    <p style={color}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 
                                    the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    <p style={color}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 
                                    the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
                                    but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
                                    containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                    <ul>
                                        <li style={color}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                                        <li style={color}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 
                                    the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</li>
                                        <li style={color}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 
                                    the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing 
                                    and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 
                                    the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</li>
                                        <li style={color}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                                    </ul>
                                        
                                    <h2 style={color}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h2>
                                    <p style={color}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 
                                    the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    <p style={color}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 
                                    the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
                                    but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
                                    containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                

                            </div>
                        </div>
                        </div>
                    </div>
                </section>
                        
            <Mainfooter />
        </div>
     
    )
  }