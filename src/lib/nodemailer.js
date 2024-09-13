import nodemailer from 'nodemailer'
const transporter = nodemailer.createTransport({
  service: 'Gmail', 
  auth: {
    user: 'horllypizzy@gmail.com',
    pass: 'qvptlzjouzmyaemv',
  },
});

export default transporter;




