import * as React from "react";
import { Link } from "gatsby";
import '../../css/dnddevelopments.scss';

const Thanks = () => (
  <section id="thanks" className="dnd-thanks dnd-branding dnd-section">
    <div className="container text-center">
      <Link to="/" className="dnd-thanks-logo text-hide">
        Back to homepage  
      </Link>
      <h2 className="section-heading text-uppercase">Thank you</h2>
      <h3 className="section-subheading text-muted">Thank you for you contacting D&amp;D Developments.</h3>
      <p className="text-muted">Your message has been recieved and D&amp;D Developments will contact you shortly via the details you provided.</p>
      <Link 
        to="/"
        className="btn btn-primary text-uppercase"
      >
        Back to homepage
      </Link>
    </div>
  </section>
);

export default Thanks;

export const Head = () => {
  return (
  <>
    <title>D &amp; D Developments | Midlands Extensions, Renovations, New Builds and Landscaping</title>
    <meta name="description" content="Midlands Extensions, Renovations, New Builds and Landscaping" />

    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/images/apple-touch-icon.png"
    />
    <link
      rel="icon"
      type="image/png"
      href="/images/favicon-32x32.png"
      sizes="32x32"
    />
    <link
      rel="icon"
      type="image/png"
      href="/images/favicon-16x16.png"
      sizes="16x16"
    />

    <link
      rel="mask-icon"
      href="/images/safari-pinned-tab.svg"
      color="#ff4400"
    />
    <meta name="theme-color" content="#E8B90E" />
    <meta name="msapplication-navbutton-color" content="#E8B90E" />
    <meta name="apple-mobile-web-app-status-bar-style" content="#E8B90E" />

    <meta property="og:type" content="business.business" />
    <meta property="og:title" content="D & D Developments" />
    <meta property="og:url" content="/" />
    <meta property="og:image" content="/images/og-image.jpg" />

    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
    <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,700" rel="stylesheet" type="text/css" />
    <link href='https://fonts.googleapis.com/css?family=Droid+Serif:400,700,400italic,700italic' rel='stylesheet' type='text/css' />
    <link href='https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700' rel='stylesheet' type='text/css' />  
  </>
)};
