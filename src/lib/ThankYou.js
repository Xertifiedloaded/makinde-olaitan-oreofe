// lib/thankYouTemplate.js
export const thankYouTemplate = (email) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
            color: #333;
        }
        .container {
            width: 80%;
            margin: auto;
            overflow: hidden;
            background: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        h1 {
            color: #333;
            font-size: 24px;
            margin-bottom: 20px;
        }
        p {
            font-size: 16px;
            line-height: 1.5;
        }
        .footer {
            margin-top: 20px;
            font-size: 14px;
            color: #888;
        }
        a {
            color: #007bff;
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Thank You for Subscribing!</h1>
        <p>Dear ${email},</p>
        <p>Thank you for subscribing to our newsletter. We are thrilled to have you on board!</p>
        <p>Stay tuned for updates, exclusive content, and special offers directly to your inbox.</p>
        <p>We value your support and look forward to connecting with you.</p>
        <p class="footer">If you have any questions or need assistance, feel free to <a href="mailto:makindeolaitan01@gmail.com">contact us</a>.</p>
    </div>
</body>
</html>
`;





export function contactTemplate(fullname, email, subject, message) {
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Contact Message</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            color: #333;
            background-color: #f4f4f4;
            margin: 0;
            padding: 20px;
          }
          .container {
            background-color: #fff;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            padding: 20px;
            max-width: 600px;
            margin: auto;
          }
          h1 {
            color: #333;
          }
          p {
            margin: 10px 0;
          }
          .footer {
            margin-top: 20px;
            font-size: 0.9em;
            color: #888;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Contact Message</h1>
          <p><strong>Full Name:</strong> ${fullname}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
          <div class="footer">
            <p>Sent from our website</p>
          </div>
        </div>
      </body>
      </html>
    `;
  }
  