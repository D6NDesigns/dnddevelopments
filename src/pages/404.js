import React from 'react';
import Layout from '../components/Layout';
import { Link } from "gatsby";

const NotFoundPage = () => (
  <Layout>
    <section id="not-found" className="dnd-thanks dnd-branding dnd-section">
      <div className="container text-center">
        <Link to="/" className="dnd-thanks-logo text-hide">
          Back to homepage  
        </Link>
        <h2 className="section-heading text-uppercase">Oops!</h2>
        <h3 className="section-subheading text-muted">404 - PAGE NOT FOUND.</h3>
        <p className="text-muted">The page you are looking for might have been removed, had its name changed or is temporarily unavailable.</p>
        <Link 
          to="/"
          className="btn btn-primary text-uppercase"
        >
          Back to homepage
        </Link>
      </div>
    </section>
  </Layout>
)

export default NotFoundPage;