import nodemailer from 'nodemailer';
import smtpTransport from 'nodemailer-smtp-transport';
import Nexmo from 'nexmo';

require('dotenv').config();

/**
 * @description: function that send email
 *
 * @param {Object} emailObject request object
 *
 * @return {Object} response containing the error or success
 */
export const sendEmail = (emailObject) => {
  const transporter = nodemailer.createTransport(smtpTransport({
    service: 'gmail',
    auth: {
      user: process.env.user,
      pass: process.env.pass,
    },
  }));
  const mailOptions = {
    from: 'Post It App',
    subject: 'A new message from Post It',
    html: `<head>
            <style>
              #body-wrapper{
                background-color: #E0F2F1;
                margin-right: 15%;
                margin-left: 15%;
                border-radius: 10px;
              }
              #header{
                background-color: #008975;
                padding: 10px 0 10px 30px;
                color: #ffffff;
              }
              #inner-body{
                padding: 0 30px 10px 30px;
              }
              #notify-header{
                color: #000;
              }
              #complementary{
                padding-left: 15px
              }
      
              #signin {
                width: 150px;
                padding:10px 0; text-decoration: none; cursor: pointer !important;
                display: block; border: 1px solid #263647; background-color: #008975;
                color: #fff; font-size: 18px; margin: auto; text-align: center}
            </style>
          </head>
          <body>
            <div id="body-wrapper">
            <h2 id="header"><span>Post It</span></h2>
            <div id="inner-body">
                <h5 id="notify-header">Hey,</h5>
              <p>This is to notify you that you have a message on PostIt.</p>
                Kindly click on the link below to access your account.
              <div style="width: 100%; margin-top: 20px">
        <a id="signin" href="https://post-it-app-2.herokuapp.com/">Sign in</a>
            </div>
            </div>
        </div>
        </body>`,
    to: emailObject.To,
    text: emailObject.text,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return error;
    } return info.response;
  });
};

/**
 * @description: function that send email
 *
 * @param {Object} smsObject request object
 *
 * @return {Object} response containing the error or success
 */

export const sendSMS = (smsObject) => {
  const nexmo = new Nexmo({
    apiKey: process.env.nexmoApiKey,
    apiSecret: process.env.nexmoApiSecret,
  });
  nexmo.message.sendSms(
    'PostIt', smsObject.phoneNumber, `A critical message: ${smsObject.message}`,
    (error, responseData) => {
      if (error) {
        return error;
      } return responseData;
    });
};
