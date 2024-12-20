import nodemailer from "nodemailer";

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, message } = req.body;

        // Validate the input
        if (!name || !email || !message) {
            return res.status(400).json({ error: "All fields are required." });
        }

        // Create a Nodemailer transporter
        const transporter = nodemailer.createTransport({
            host: "smtp.your-email-provider.com", // Replace with your SMTP server
            port: 587, // Common SMTP port (use 465 for SSL)
            secure: false, // Set true for port 465, false for others
            auth: {
                user: "your-email@example.com", // Replace with your email
                pass: "your-email-password", // Replace with your email password or app-specific password
            },
        });

        try {
            // Send the email
            await transporter.sendMail({
                from: '"Your Website" <your-email@example.com>', // Replace with your sender email
                to: ["info@justaskdwight.com", "hiren@nxtlvl.africa"], // Recipients
                subject: "New Form Submission",
                html: `
                    <h1>New Form Submission</h1>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Message:</strong></p>
                    <p>${message}</p>
                `,
            });

            console.log("Form submitted and email sent:", { name, email, message });

            return res.status(200).json({ success: true, message: "Form submitted and email sent successfully." });
        } catch (error) {
            console.error("Error sending email:", error);
            return res.status(500).json({ error: "Failed to send email. Please try again later." });
        }
    }

    res.status(405).json({ message: "Method not allowed" });
}
