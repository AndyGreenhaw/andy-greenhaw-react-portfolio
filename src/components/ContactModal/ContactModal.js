import React, {Component} from "react";
import { useForm, ValidationError } from '@formspree/react';
import { Link, useLocation } from "react-router-dom";
import "../../style.css"

import {
  AiOutlineCloseCircle,
} from "react-icons/ai"

console.log("CCCCCC")

function ContactModal(props) {

  const [state, handleSubmit] = useForm('{xbjpejbw}')
  if (state.succeeded) {
    return<div>Thank you! I'll be in touch shortly.</div>
  }

  // const submitMessage = ({message,setMessage}) => {

  //   var message = "";

  //   $("#sendMessage").on("click", function() {
  //     message = $("#contactform").serialize();
  //     $.ajax({
  //         url: "//formspree.io/dynamicrealities@gmail.com", 
  //         method: "POST",
  //         data: {message: message},
  //         dataType: "json"
  //     });
  //     alert('Thanks for the email, we\'ll be in touch promptly.');
  //     return false;
  //   });

  // }

  return(
    <div id="contactModalBox">
            
      <div className="row">
        
        <div className="col-12" >

          <AiOutlineCloseCircle 
            className="closeX"
            type="button"
            onClick={props.clickcb}
            size={60}
          />
          
        </div>
        <div className="col-12 modalTitle">
          Contact Andy
        </div>
      </div>

      <div className="row">
        <div className="col modalContainer">
            

          <div className="row">
            <div className="col-md-12"> 

              <h3 id="contact-copy">Need help on an upcoming project?</h3>
            
              <div id="contact-copy" >Whether you need content for your digital strategy, an animation that explains your mission, or you'd like to consider hiring me full-time, enter your name, email, and whatever you need in the form below and I'll respond as soon as I can.
              </div>
              
            </div>
          </div>
                    
          <div className="row">
            <div className="col-md-5">
              <form className="form"
                // onSubmit={handleSubmit}
                action="https://formspree.io/f/xbjpejbw"
                method="POST"
              >
                {/* <div className="form-group">
                        <h4>
                          <label or="formGroupExampleInput">
                          Name
                          </label>
                        </h4>
                        <input type="text" name="name" id="name" className="form-control" placeholder="George Washington"/>
                </div> */}
                <div className="form-group">
                        <h4>
                          <label htmlFor="email">
                            Email
                          </label>
                        </h4>
                        <input type="email" name="_replyto" id="email" className="form-control" placeholder="gwash@gmail.com"/>
                </div>
                <div className="form-group">
                  <h4>
                    <label htmlFor="formGroupExampleInput2">
                      How Can I Help?
                    </label>
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                    />
                  </h4>
                  <textarea type="message" name="message" id="message" errors={state.errors} className="form-control" placeholder="Message"/>
                  <ValidationError 
                  prefix="Message" 
                  field="message"
                  errors={state.errors}
                  />
                </div>
                {/* <Link href={useLocation}> */}
                {/* <button type="submit" value="Send" className="sendMessage"> */}
                <button id="sendMessage">
                  Submit
                </button>
                {/* </Link> */}
              </form>
            </div> 
          </div>

          <div className="row">
            <div className="col">   
              <div className="social-container">
                <a href="https://www.linkedin.com/in/andygreenhaw/" target="blank" className="fa fa-linkedin"></a>
                <a href="https://www.youtube.com/user/TheAndyGreenhaw" target="blank" className="fa fa-youtube"></a>
                <a href="https://twitter.com/andygreenhaw" target="blank" className="fa fa-twitter"></a>
              </div>
            </div>
          </div>  
              
        </div>
      </div>
    </div>
  )  

  // submitForm(ev) {
  //   ev.preventDefault();
  //   const form = ev.target;
  //   const data = new FormData(form);
  //   const xhr = new XMLHttpRequest();
  //   xhr.open(form.method, form.action);
  //   xhr.setRequestHeader("Accept", "application/json");
  //   xhr.onreadystatechange = () => {
  //     if (xhr.readyState !== XMLHttpRequest.DONE) return;
  //     if (xhr.status === 200) {
  //       form.reset();
  //       this.setState({ status: "SUCCESS" });
  //     } else {
  //       this.setState({ status: "ERROR" });
  //     }
  //   };
  //   xhr.send(data);
  // }
  
}

export default ContactModal;