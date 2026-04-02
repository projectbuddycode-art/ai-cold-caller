import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

// Initialize Resend lazily to avoid build-time errors
const getResendClient = () => {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error('Missing RESEND_API_KEY environment variable');
  }
  return new Resend(apiKey);
};

interface ContactFormData {
  fullName: string;
  email: string;
  company?: string;
  budget: string;
  projectType: string;
  timeline: string;
  message: string;
}

// Validation helper
function validateFormData(data: Partial<ContactFormData>): { valid: boolean; errors: Record<string, string> } {
  const errors: Record<string, string> = {};

  if (!data.fullName?.trim()) errors.fullName = 'Full name is required';
  if (!data.email?.trim()) {
    errors.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Invalid email format';
  }

  if (!data.budget?.trim()) errors.budget = 'Budget range is required';
  if (!data.projectType?.trim()) errors.projectType = 'Project type is required';
  if (!data.timeline?.trim()) errors.timeline = 'Timeline is required';
  if (!data.message?.trim()) errors.message = 'Message is required';

  return { valid: Object.keys(errors).length === 0, errors };
}

// Email template for inquiry notification
function getInquiryEmailHTML(data: ContactFormData): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%); color: white; padding: 30px; border-radius: 12px; margin-bottom: 30px; }
          .header h1 { margin: 0; font-size: 24px; }
          .content { background: #f9fafb; padding: 20px; border-radius: 8px; margin-bottom: 20px; }
          .field { margin-bottom: 16px; }
          .label { font-weight: 600; color: #1f2937; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; }
          .value { color: #374151; margin-top: 4px; padding: 10px; background: white; border-radius: 4px; border-left: 3px solid #2563eb; }
          .footer { text-align: center; color: #6b7280; font-size: 12px; margin-top: 30px; }
          .cta { background: #2563eb; color: white; padding: 12px 24px; border-radius: 6px; text-decoration: none; display: inline-block; margin-top: 20px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🎉 New Inquiry from Project Buddy Website</h1>
            <p>A potential client is interested in your services</p>
          </div>

          <div class="content">
            <div class="field">
              <div class="label">📧 Contact Information</div>
              <div class="value">
                <strong>${data.fullName}</strong><br>
                <a href="mailto:${data.email}">${data.email}</a>
                ${data.company ? `<br><strong>Company:</strong> ${data.company}` : ''}
              </div>
            </div>

            <div class="field">
              <div class="label">💼 Project Details</div>
              <div class="value">
                <strong>Budget Range:</strong> ${data.budget}<br>
                <strong>Project Type:</strong> ${data.projectType}<br>
                <strong>Timeline:</strong> ${data.timeline}
              </div>
            </div>

            <div class="field">
              <div class="label">💬 Message</div>
              <div class="value">${data.message.replace(/\n/g, '<br>')}</div>
            </div>
          </div>

          <div class="footer">
            <p>This inquiry was submitted from Project Buddy website at ${new Date().toLocaleString()}</p>
            <p>© Project Buddy - Premium SaaS & AI Engineering Studio</p>
          </div>
        </div>
      </body>
    </html>
  `;
}

// Email template for confirmation
function getConfirmationEmailHTML(): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%); color: white; padding: 30px; border-radius: 12px; margin-bottom: 30px; text-align: center; }
          .header h1 { margin: 0 0 10px 0; font-size: 24px; }
          .content { background: #f9fafb; padding: 30px; border-radius: 8px; text-align: center; }
          .checkmark { font-size: 48px; margin-bottom: 10px; }
          .next-steps { text-align: left; margin-top: 20px; background: white; padding: 15px; border-radius: 6px; border-left: 3px solid #2563eb; }
          .step { margin: 10px 0; }
          .footer { text-align: center; color: #6b7280; font-size: 12px; margin-top: 30px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="checkmark">✓</div>
            <h1>Thank You!</h1>
            <p>We've received your inquiry</p>
          </div>

          <div class="content">
            <p>Hi there 👋</p>
            <p>We appreciate you reaching out to Project Buddy. Your inquiry has been successfully received and is now in our queue.</p>
            
            <div class="next-steps">
              <strong>What happens next?</strong>
              <div class="step">📧 Our team will review your inquiry carefully</div>
              <div class="step">⏰ You'll hear back from us within 24-48 hours</div>
              <div class="step">☎️ We'll schedule a strategy call at your convenience</div>
              <div class="step">🚀 Let's build something amazing together!</div>
            </div>

            <p style="margin-top: 20px; color: #6b7280;">If you have any urgent questions, feel free to reach out to us at <strong>info@projectbuddy.co.in</strong></p>
          </div>

          <div class="footer">
            <p>© Project Buddy - Premium SaaS & AI Engineering Studio</p>
            <p>Building premium products for forward-thinking companies</p>
          </div>
        </div>
      </body>
    </html>
  `;
}

export async function POST(request: NextRequest) {
  try {
    const body: Partial<ContactFormData> = await request.json();

    // Validate form data
    const { valid, errors } = validateFormData(body);
    if (!valid) {
      return NextResponse.json(
        { success: false, errors },
        { status: 400 }
      );
    }

    const formData = body as ContactFormData;

    // Get Resend client at runtime
    const resend = getResendClient();

    // Send email to admin
    const adminEmailPromise = resend.emails.send({
      from: 'Project Buddy <noreply@projectbuddy.co.in>',
      to: 'info@projectbuddy.co.in',
      subject: `New Inquiry from ${formData.fullName} - Project Buddy Website`,
      html: getInquiryEmailHTML(formData),
      replyTo: formData.email,
    });

    // Send confirmation email to user
    const userEmailPromise = resend.emails.send({
      from: 'Project Buddy <noreply@projectbuddy.co.in>',
      to: formData.email,
      subject: 'We Received Your Inquiry - Project Buddy',
      html: getConfirmationEmailHTML(),
    });

    // Wait for both emails to be sent
    const [adminResult, userResult] = await Promise.all([
      adminEmailPromise,
      userEmailPromise,
    ]);

    // Check if both emails were sent successfully
    if (adminResult.error || userResult.error) {
      console.error('Email sending error:', { adminResult, userResult });
      return NextResponse.json(
        { success: false, message: 'Failed to send email. Please try again.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Inquiry submitted successfully. Check your email for confirmation.',
        data: {
          inquiryId: adminResult.data?.id || 'sent',
          confirmationId: userResult.data?.id || 'sent',
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, message: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
