// Pourquoi.js
import React from 'react';
import './html.css'; 

function Pourquoi() {
  return (
	<div className="pourquoi-content html-content">
	  <h1>Pourquoi cette calculatrice ?</h1>
	  <p>
		<strong>Tout individu devrait avoir connaissance de la probabilité d’être enceinte</strong> malgré l’utilisation correcte de sa contraception. Sinon, comment pourrait-on penser que son choix contraceptif est éclairé ?
	  </p>

	  <p style={{ color: 'green' }}>
		Lorsqu'une personne, ou un couple, utilise convenablement sa stratégie contraceptive, le niveau d'efficacité mesuré par les études cliniques "en situation réelle d'utilisation" est appelée <strong>“efficacité pratique"</strong>
	  </p>

	  <p style={{ color: 'orange' }}>
		Le niveau d'efficacité "théorique" est, quant à lui, mesuré avec des études cliniques en situation expérimentale où la personne/couple est suivie de très prêts, bénéficiant ainsi d'un "coaching" contraceptif qui n’existe pas en situation réelle d'utilisation. Ce coaching contraceptif <strong>augmente (=biaise) le résultat d'efficacité obtenu</strong>.
	  </p>

	  <p style={{ color: 'red' }}>
		C'est la raison pour laquelle, en consultation, il est plus juste de présenter les chiffres d'efficacité pratique.
	  </p>

	  <p>
		Cette calculatrice a été conçue pour fournir des informations fiables et scientifiquement validées sur l'efficacité des différents moyens de contraception. Elle se base sur les données d'efficacité pratique publiées par l’Organisation Mondiale de la Santé.
	  </p>

	  <p style={{ color: 'gray' }}>
		<i>Rédaction : Dr Alan Charissou & Dr Arnaud ZELER - 11/10/2023</i>
	  </p>
	</div>
  );
}

export default Pourquoi;
