export default function Contact(req, res) {
  require("dotenv").config();

  let nodemailer = require("nodemailer");
  const PASSWORD = process.env.password;
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "ssukr2022.noreply@gmail.com",
      pass: PASSWORD,
    },
    secure: true,
  });
  const mailDataRegister = {
    from: "ssukr2022.noreply@gmail.com",
    to: req.body.email,
    subject: `Recieve donation confirmation`,
    text: "Confirmation email from SSUKR team ",
    html: `<!DOCTYPE html>
    <html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <meta name="x-apple-disable-message-reformatting">
        <title></title>
        <!--[if mso]>
        <noscript>
            <xml>
                <o:OfficeDocumentSettings>
                    <o:PixelsPerInch>96</o:PixelsPerInch>
                </o:OfficeDocumentSettings>
            </xml>
        </noscript>
        <![endif]-->
        <style>
            table, td, div, h1, p {font-family: Arial, sans-serif;}
        </style>
    </head>
    <body style="margin:0;padding:0;">
        <table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;background:#ffffff;">
            <tr>
                <td align="center" style="padding:0;">
                    <table role="presentation" style="width:602px;border-collapse:collapse;border:1px solid #cccccc;border-spacing:0;text-align:left;">
                        <tr>
                            <td align="center" style="padding:40px 0 30px 0;background:#126CA8;">
                            </td>
                        </tr>
                        <tr>
                            <td style="padding:36px 30px 42px 30px;">
                                <table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;">
                                    <tr>
                                        <td style="padding:0 0 36px 0;color:#153643;">
                                            <h1 style="font-size:24px;margin:0 0 20px 0;font-family:Arial,sans-serif;">Registration Confirmation</h1>
                        <p style="margin:0 0 12px 0;font-size:16px;line-height:24px;font-family:Arial,sans-serif;">Dear ${req.body.firstname},<p/>
                                            <p style="margin:0 0 12px 0;font-size:16px;line-height:24px;font-family:Arial,sans-serif;">Thank you for registering to receive financial support from Support Ukrainian Students in the US. You will receive weekly donations as soon as we attain confirmation from your educational institution via your provided email. We will keep you updated. </p>
                         <p style="margin:0 0 12px 0;font-size:16px;line-height:24px;font-family:Arial,sans-serif;">Please email us directly at ssukr2022@gmail.com if you have any questions or wish to cancel this registration. 
    <p/>
                        <p style="margin:0 0 12px 0;font-size:16px;line-height:24px;font-family:Arial,sans-serif;"> Best, <br/>SSUKR team
    <p/>
    
    
                                            <p style="margin:0;font-size:16px;line-height:24px;font-family:Arial,sans-serif;"><a href="http://www.example.com" style="color:#2B5ECB;text-decoration:underline;">Visit our website</a></p>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding:30px;background:#CBB32B;">
                                <table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;font-size:9px;font-family:Arial,sans-serif;">
                                    <tr>
                                        <td style="padding:0;width:50%;" align="left">
                                            <p style="margin:0;font-size:14px;line-height:16px;font-family:Arial,sans-serif;color:#ffffff;">
                                                Support Ukrainian Students in the US 2022<br/>
                                            </p>
                                        </td>
                                        <td style="padding:0;width:50%;" align="right">
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </body>
    </html>`,
  };
  const mailDataConfirm = {
    from: "ssukr2022.noreply@gmail.com",
    to: req.body.admsEmail,
    subject: `Request verification for a student to recieve donation`,
    text: "Auto email from SSUKR team ",
    html: `<!DOCTYPE html>
    <html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <meta name="x-apple-disable-message-reformatting">
        <title></title>
        <!--[if mso]>
        <noscript>
            <xml>
                <o:OfficeDocumentSettings>
                    <o:PixelsPerInch>96</o:PixelsPerInch>
                </o:OfficeDocumentSettings>
            </xml>
        </noscript>
        <![endif]-->
        <style>
            table, td, div, h1, p {font-family: Arial, sans-serif;}
        </style>
    </head>
    <body style="margin:0;padding:0;">
        <table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;background:#ffffff;">
            <tr>
                <td align="center" style="padding:0;">
                    <table role="presentation" style="width:602px;border-collapse:collapse;border:1px solid #cccccc;border-spacing:0;text-align:left;">
                        <tr>
                            <td align="center" style="padding:40px 0 30px 0;background:#126CA8;">
                            </td>
                        </tr>
                        <tr>
                            <td style="padding:36px 30px 42px 30px;">
                                <table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;">
                                    <tr>
                                        <td style="padding:0 0 36px 0;color:#153643;">
                                            <h1 style="font-size:24px;margin:0 0 20px 0;font-family:Arial,sans-serif;">Registration Confirmation</h1>
                        <p style="margin:0 0 12px 0;font-size:16px;line-height:24px;font-family:Arial,sans-serif;">To ${req.body.schoolname},<p/>
                                            <p style="margin:0 0 12px 0;font-size:16px;line-height:24px;font-family:Arial,sans-serif;">We are a student-run nonprofit that aims to support Ukrainian students in the US who may be financially struggling. We hope to provide students in need with weekly vouchers, sourced from donations, to help support their cost of living. 
 </p>
                         <p style="margin:0 0 12px 0;font-size:16px;line-height:24px;font-family:Arial,sans-serif;">Recently, a student name ${req.body.firstname} ${req.body.lastname} class of ${req.body.gradYear} has register to recieve this donation. Please kindly confirm that  ${req.body.firstname}  is eligible to receive this donation via this 
                           <a href="https://docs.google.com/forms/d/e/1FAIpQLScN_fOiafAKcJT0cIn197bGJ3G5j6-qne2qa6xTUCUB4ZVaew/viewform?usp=sf_link" target="_blank"
                           rel="noopener noreferrer">google form.<a/>
    <p/>
                        <p style="margin:0 0 12px 0;font-size:16px;line-height:24px;font-family:Arial,sans-serif;"> Best, <br/>SSUKR team
    <p/>
    
    
                                            <p style="margin:0;font-size:16px;line-height:24px;font-family:Arial,sans-serif;"><a href="http://www.example.com" style="color:#2B5ECB;text-decoration:underline;">Visit our website</a></p>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding:30px;background:#CBB32B;">
                                <table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;font-size:9px;font-family:Arial,sans-serif;">
                                    <tr>
                                        <td style="padding:0;width:50%;" align="left">
                                            <p style="margin:0;font-size:14px;line-height:16px;font-family:Arial,sans-serif;color:#ffffff;">
                                                Support Ukrainian Students in the US 2022<br/>
                                            </p>
                                        </td>
                                        <td style="padding:0;width:50%;" align="right">
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </body>
    </html>`,
  };
  const mailDataInternal = {
    from: "ssukr2022.noreply@gmail.com",
    to: "ssukr2022@gmail.com",
    subject: "Confirm new user data",
    text: "Auto email from SSUKR team ",
    html: `<!DOCTYPE html>
    <html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <meta name="x-apple-disable-message-reformatting">
        <title></title>
        <!--[if mso]>
        <noscript>
            <xml>
                <o:OfficeDocumentSettings>
                    <o:PixelsPerInch>96</o:PixelsPerInch>
                </o:OfficeDocumentSettings>
            </xml>
        </noscript>
        <![endif]-->
        <style>
            table, td, div, h1, p {font-family: Arial, sans-serif;}
        </style>
    </head>
    <body style="margin:0;padding:0;">
        <table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;background:#ffffff;">
            <tr>
                <td align="center" style="padding:0;">
                    <table role="presentation" style="width:602px;border-collapse:collapse;border:1px solid #cccccc;border-spacing:0;text-align:left;">
                        <tr>
                            <td align="center" style="padding:40px 0 30px 0;background:#126CA8;">
                            </td>
                        </tr>
                        <tr>
                            <td style="padding:36px 30px 42px 30px;">
                                <table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;">
                                    <tr>
                                        <td style="padding:0 0 36px 0;color:#153643;">
                                            <h1 style="font-size:24px;margin:0 0 20px 0;font-family:Arial,sans-serif;">New User Data</h1>
                        <p style="margin:0 0 12px 0;font-size:16px;line-height:24px;font-family:Arial,sans-serif;">First Name: ${req.body.firstname}, Last Name:  ${req.body.lastname}
                        Email:  ${req.body.email}, School Name:  ${req.body.schoolname}, Graduation Year:   ${req.body.gradYear}, School Type:  ${req.body.schoolType}, 
                        ${req.body.gradYear}, School Email:  ${req.body.admsEmail}, Payment Method:  ${req.body.paymentMethod}, Payment Name/id:  ${req.body.paymentname}<p/>
                                     </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding:30px;background:#CBB32B;">
                                <table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;font-size:9px;font-family:Arial,sans-serif;">
                                    <tr>
                                        <td style="padding:0;width:50%;" align="left">
                                            <p style="margin:0;font-size:14px;line-height:16px;font-family:Arial,sans-serif;color:#ffffff;">
                                                Support Ukrainian Students in the US 2022<br/>
                                            </p>
                                        </td>
                                        <td style="padding:0;width:50%;" align="right">
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </body>
    </html>`,
  };
  transporter.sendMail(mailDataRegister, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });
  transporter.sendMail(mailDataConfirm, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });
  transporter.sendMail(mailDataInternal, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });
  res.status(200);
  res.send();
}
