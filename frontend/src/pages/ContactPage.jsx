const ContactPage = () => {
  return (
    <div className="min-h-screen p-8 max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold text-primary mb-6">Contact Us</h1>
      <p className="mb-6">
        Do you have questions about our game or wish to support this project? Feel free to reach out to us.
      </p>
      <form className="flex flex-col gap-4">
        <input type="text" placeholder="Your Name" className="input input-bordered w-full" />
        <input type="email" placeholder="Your Email" className="input input-bordered w-full" />
        <textarea placeholder="Your Message" className="textarea textarea-bordered w-full"></textarea>
        <button type="submit" className="btn btn-primary w-full">Send Message</button>
      </form>
    </div>
  );
};

export default ContactPage;
