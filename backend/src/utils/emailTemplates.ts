export const welcomeEmail = (name: string) => {
  return `
    <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
      <div style="max-width: 500px; margin: auto; background: #ffffff; padding: 20px; border-radius: 8px;">
        
        <h1 style="color: #333;">Welcome, ${name} 🎉</h1>
        
        <p style="color: #555; line-height: 1.5;">
          We're glad to have you onboard.
        </p>

        <a 
          href="#" 
          style="
            display: inline-block;
            margin-top: 20px;
            padding: 12px 20px;
            background-color: #000;
            color: #fff;
            text-decoration: none;
            border-radius: 6px;
          "
        >
          Get Started
        </a>

      </div>
    </div>
  `;
};

export const otpEmail = (otp: string) => {
  return `
      <h2>Your OTP</h2>
      <p>${otp}</p>
    `;
};
