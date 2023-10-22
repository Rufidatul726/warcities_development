// domain.com/verifytoken/${token}
// domain.com/verifytoken?token=${token}


import nodemailer from "nodemailer";
import bcryptjs from "bcryptjs";
import User from "@model/userModel";

var transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "06b4279eb030fc",
      pass: "6a49e0c0431ae6"
    }
});

export default async function sendMail(email: string, mailtype : string , userID: string) {
    try{
        //create a hashed token
        const hashedtoken = await bcryptjs.hash(userID.toString(), 12);

        //create a random number of 6 digits and store it in the database
        const randomNumber = Math.floor(100000 + Math.random() * 900000);
        console.log(randomNumber);


        if(mailtype === "VERIFY_EMAIL"){
            await User.findByIdAndUpdate(userID, {verificationToken : hashedtoken, verificationExpire: Date.now() + 3600000});
        }else if(mailtype === "FORGOT_PASSWORD"){
            await User.findByIdAndUpdate(userID, {forgotPasswordToken : hashedtoken, forgotPasswordExpire: Date.now() + 3600000});
        }

        var mailOptions = {
            from: 'aria@gmail.com',
            to: email,
            subject: mailtype === "VERIFY_EMAIL" ? "Verify your email" : "Reset your password",
            html: `<p>Click <a href="http://localhost:3000/${mailtype}/${hashedtoken}">
                   here</a> to ${mailtype === "VERIFY_EMAIL" ? "verify your email" : "reset your password"}</p>`
        };

        const mailresponse = await transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log("error is " + error);
            } else {
              console.log('Email sent: ' + info.response);
                return info.response;   
            }
          }
        );
        console.log(mailresponse);
        return mailresponse;
    }
    catch(error){
        console.log(error);
    }
}

