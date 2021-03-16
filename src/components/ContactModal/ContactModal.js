import React, {Component} from "react";
import { useForm, ValidationError } from '@formspree/react';
import { Link, useLocation } from "react-router-dom";
import "./contactModalStyle.css"

import {
  AiOutlineCloseCircle,
} from "react-icons/ai"

function ContactModal(props) {

  console.log("Contact Modal Reading")

  const [state, handleSubmit] = useForm('{xbjpejbw}')
  if (state.succeeded) {
    return<div>Thank you! I'll be in touch shortly.</div>
  }

  return(
    <div id="contactModalOuterContainer">
            
      <div className="row">
        <div className="col-12">
          <div className="row">

            <div className="col-11">
              <div className="contactModalHeadline">
                Contact Me
              </div>
            </div>

            <div className="col-1">
              <div className="closeContactModal">
                <AiOutlineCloseCircle 
                // className="closeX"
                  type="button"
                  onClick={props.clickcb}
                  size={30}
                />
              </div>
            </div>
            

          </div>
        </div>
      </div>

      <div className="row">

          <div className="col-12">
            <div className="contactModalCopy" >
              Looking for a dedicated team member to add to your company or project? Describe what you need and submit your email below. I'll be in touch soon.
            </div>
          </div>
                    
          
          <div className="col-12">
            <form className="form"
              // onSubmit={handleSubmit}
              action="https://formspree.io/f/xbjpejbw"
              method="POST"
            >
              <div className="form-group">
                      <h4>
                        <label htmlFor="email">
                          Email
                        </label>
                      </h4>
                      <input type="email" name="_replyto" id="email" className="form-control" placeholder="youremail@youremail.com"/>
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
              <div className="buttonCenter">

                <button id="sendMessage" className="tryItButton">
                  Submit
                </button>

              </div>
              {/* </Link> */}
            </form>
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