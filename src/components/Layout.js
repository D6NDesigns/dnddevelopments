import React from 'react';
import Helmet from 'react-helmet';
// import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import '../css/dnddevelopments.scss';
import useSiteMetadata from './SiteMetadata';

const TemplateWrapper = ({ children }) => {
  const siteMetadata = useSiteMetadata();
  const subTitle = siteMetadata.services.join(', ');
  return (
    <React.Fragment>
      <Helmet>
        <html lang="en-gb" />
        <title>{siteMetadata.title} | {subTitle}</title>
        <meta name="description" content={siteMetadata.description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/img/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          href="/img/favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="/img/favicon-16x16.png"
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href="/img/safari-pinned-tab.svg"
          color="#ff4400"
        />
        <meta name="theme-color" content={siteMetadata.theme} />
        <meta name="msapplication-navbutton-color" content={siteMetadata.theme} />
        <meta name="apple-mobile-web-app-status-bar-style" content={siteMetadata.theme} />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={siteMetadata.title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content="/img/og-image.jpg" />

        <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
        <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css" />
        <link href='https://fonts.googleapis.com/css?family=Droid+Serif:400,700,400italic,700italic' rel='stylesheet' type='text/css' />
        <link href='https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700' rel='stylesheet' type='text/css' />

      </Helmet>
      <Navbar siteMetadata={siteMetadata} />
      {children}
      {/* <Footer /> */}
    </React.Fragment>
  )
}

export default TemplateWrapper;
