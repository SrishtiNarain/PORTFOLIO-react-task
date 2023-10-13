// About.js
import React from 'react';

function About() {
  return (
    
    <section className="about-container">
      <img class="image" src="https://cdn3d.iconscout.com/3d/premium/thumb/freelancer-working-from-home-3079946-2569229.png"/>
        
      <div className="translucent-box">
        
        <div className="box-content">
          <div className="about-heading">
            <h2>About Me</h2>
          </div>
          <div className="about-content">
            <p>
              I'm Srishti, and I'm on a creative journey that began with a
              passion for Web Development.<br />
              It's this fascination that drives me to wake up every morning with
              enthusiasm, ready to take on new challenges and push the
              boundaries of what's possible.<br />
              I am doing graduation in BTech from VIT, Vellore.<br />Every
              project, every collaboration, is an opportunity to harness this
              drive and create something extraordinary. <br />My goal is to not
              only meet but exceed expectations, and I approach each endeavor
              with a level of passion that ensures I pour my heart and soul into
              every detail.
            </p>
          </div>
          <br/>
          <div className="about-heading">
            <h2>SKILLS</h2>
          </div>
          <div className='buttons'>
          <button type="button" class="btn  btn-outline-dark ">HTML</button>
          <button  type="button"class="btn  btn-outline-dark b" >CSS</button>
          <button type="button"class="btn  btn-outline-dark b" >JAVASCRIPT</button>
          <button type="button"class="btn  btn-outline-dark b">BOOTSTRAP</button>
          <button type="button"class="btn  btn-outline-dark b" >REACT JS</button>
          <button type="button"class="btn btn-outline-dark b" >C</button>
          <button type="button"class="btn  btn-outline-dark b" >C++</button>
          <button type="button"class="btn btn-outline-dark b" >JAVA</button>
          <button type="button"class="btn  btn-outline-dark b" >PYTHON</button>
          </div>
          


        </div>
        
        
      </div>
      
    </section>
  );
}

export default About;
