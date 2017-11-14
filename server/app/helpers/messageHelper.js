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
    secure: true
  }));
  const mailOptions = {
    from: 'Post It App',
    subject: 'A new message from Post It',
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
