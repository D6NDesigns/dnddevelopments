import React from 'react';
import { Link } from "gatsby"
import Layout from '../../components/Layout';
import '../../css/dnddevelopments.scss';

export default () => (
  <Layout>
    <section id="thanks" className="dnd-thanks dnd-branding dnd-section">
      <div className="container text-center">
        <h2 className="section-heading text-uppercase">Thank you</h2>
        <h3 className="section-subheading text-muted">Thank you for you Contacting D&amp;D Developments.</h3>
        <p className="text-muted">Your message has been recieved and we will contact you shortly via the details you provided.</p>
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
