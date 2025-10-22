const ContactPage = () => {
  return (
    <div className="min-h-screen p-8 max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold text-primary mb-6">Contact Us</h1>
      <p className="mb-6">
        We would love to hear your feedback! Join our Discord server to share your suggestions and connect with the community.
      </p>
      <a
        href="https://discord.gg/your-invite-code"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary"
      >
        Join Our Discord
      </a>
    </div>
  );
};

export default ContactPage;
