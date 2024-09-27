// Informations.js
import React from 'react';
import './Informations.css';
import './html.css';
import sitesData from './sites.json';

const ResourceCard = ({ link, imgSrc, imgAlt, title, description }) => (
  <div className="resource-card html-content">
	<div>
	  <a href={link} target="_blank" rel="noopener noreferrer">
		<img src={imgSrc} alt={imgAlt} />
	  </a>
	</div>
	<div>
	  <p>{title}</p>
	  <p>{description}</p>
	  <button className="access-button">
		<a href={link} target="_blank" rel="noopener noreferrer">
		  Accéder au site
		</a>
	  </button>
	</div>
  </div>
);

function Informations() {
  return (
	<div className="informations-content html-content">
	  <h2>Sites utiles</h2>
	  {sitesData.map(site => (
		<ResourceCard
		  link={site.siteUrl}
		  imgSrc={site.logoUrl}
		  imgAlt={site.name}
		  title={site.title}
		  description={site.description}
		/>
	  ))}
	</div>
  );
}


export default Informations;
