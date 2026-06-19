import { Send } from 'lucide-react';
import { useState } from 'react';

const contactEmail = 'contact@bpg.example';

export function EnquiryForm({ divisionName, emailSubject }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const body = [
      `Division: ${divisionName}`,
      `Full Name: ${formData.fullName}`,
      `Email Address: ${formData.email}`,
      '',
      formData.message,
    ].join('\n');

    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form className="enquiry-form" onSubmit={handleSubmit}>
      <input type="hidden" name="division" value={divisionName} />
      <label>
        <span>Full Name</span>
        <input
          name="fullName"
          type="text"
          autoComplete="name"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        <span>Email Address</span>
        <input
          name="email"
          type="email"
          autoComplete="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        <span>Message</span>
        <textarea name="message" rows="5" value={formData.message} onChange={handleChange} required />
      </label>
      <button className="btn btn-primary enquiry-submit" type="submit">
        <span>Send Enquiry</span>
        <Send size={17} aria-hidden="true" />
      </button>
    </form>
  );
}
