import React from "react";

function Contact() {
  return (
    <>
    <div className="row">
        <div className="col-md-12"> 
            <h3 id="contact-copy">Need help on an upcoming project?</h3>
        </div>
            
            <main id="contact-copy" >Whether you need content for your digital strategy, an animation that explains your mission, or you'd like to consider hiring me full-time, enter your name, email, and whatever you need in the form below and I'll respond as soon as I can.
            </main>
        </div>
                
        <div className="row">
            <div className="col-md-5">
                <form className="form">
                    <div className="form-group">
                        <h4><label for="formGroupExampleInput">Name</label></h4>
                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="George Washington"/>
                    </div>
                    <div className="form-group">
                        <h4><label for="formGroupExampleInput2">Email</label></h4>
                        <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="gwash@gmail.com"/>
                    </div>
                    <div className="form-group">
                        <h4><label for="formGroupExampleInput2">How Can I Help?</label></h4>
                        <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Message"/>
                    </div>
                </form>
            </div> 
        </div>

        <div class="row">
            <div class="col">   
                <div class="social-container">
                    <a href="https://www.linkedin.com/in/andygreenhaw/" target="blank" class="fa fa-linkedin"></a>
                    <a href="https://www.youtube.com/user/TheAndyGreenhaw" target="blank" class="fa fa-youtube"></a>
                    <a href="https://twitter.com/andygreenhaw" target="blank" class="fa fa-twitter"></a>
                </div>
            </div>
        </div>
    
      
    </>
  );
}

export default Contact;