import React from 'react';
import Layout from '../components/Layout';

const UnsupportedBrowserPage = () => (
  <Layout>
    <section id="unsupported-browser" className="dnd-unsupported-browser dnd-branding dnd-section">
      <div className="container text-center">
        <a 
          href="https://browsehappy.com/" 
          className="dnd-thanks-logo text-hide"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download a modern browser 
        </a>
        <h2 className="section-heading text-uppercase">Unsupported Browser</h2>
        <h3 className="section-subheading text-muted">Oh, it looks like you’re using an outdated browser.</h3>
        <p className="text-muted">Please download a modern browser using the link below to view the D &amp; D Developments website.</p>
        <a
          href="https://browsehappy.com/"
          className="btn btn-primary text-uppercase"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download a modern browser
        </a>
      </div>
    </section>
  </Layout>
)

export default UnsupportedBrowserPage;