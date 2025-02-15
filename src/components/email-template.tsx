import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
  userEmail: string;
  phone?: string
  course?: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  userEmail,
  phone,
  course
}) => (
  <div>
    <p>
      Name: <b style={{ textTransform: "capitalize" }}>{firstName}</b> <br />
      Email: <b>{userEmail}</b> <br />
      Phone: <b>{phone}</b> <br />
      Course: <b style={{ textTransform: "capitalize" }}>{course}</b> <br />

      Dear, <b style={{ textTransform: "capitalize" }}>{firstName}</b>! <br />
      Thank you for enrolling in the <b>{course}</b> course! <br />
      We will contact you as soon as possible. <br />
      looking forward to hear from you! <br />
      
      regards, <br />
      Mohamed Abdalfttah <br />
    </p>
  </div>
);

export default EmailTemplate;