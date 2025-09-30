const FAQPage = () => {
  return (
    <div className="min-h-screen p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-primary mb-6">FAQ</h1>
      <div className="space-y-4">
        <div>
          <h2 className="font-semibold text-lg">Q: How do I buy your games?</h2>
          <p>A: You can purchase our games directly from our website or through authorized platforms like Steam and Epic Games Store.</p>
        </div>
        <div>
          <h2 className="font-semibold text-lg">Q: Do you offer support for bugs?</h2>
          <p>A: Yes! Please use the Contact page to report bugs or issues with any of our games.</p>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
