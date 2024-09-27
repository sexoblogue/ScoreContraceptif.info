// Methode.js
import React, { useState } from 'react';
import data from './contraceptions.json';
import './html.css'; // Assurez-vous que ce fichier CSS existe et est approprié
import './Credits.css'; // Assurez-vous de créer un fichier CSS pour le style
import efficaciteImage from './efficacite.jpg'; // Assurez-vous que l'image est dans le bon dossier
import formuleImage from './formule.png'; // Assurez-vous que l'image est dans le bon dossier
import 'font-awesome/css/font-awesome.min.css';
import 'katex/dist/katex.min.css'; // Importez les styles KaTeX
import katex from 'katex';

function Methode() {
  const filteredData = data.filter(item => typeof item.value === 'number');
  
  //Ajoutez un état pour suivre la colonne triée et le sens du tri :
  const [sortedColumn, setSortedColumn] = useState(null);
  const [sortAscending, setSortAscending] = useState(true);
  
  //Mettez à jour cet état lorsque l'utilisateur clique sur une colonne :
  function handleSort(column) {
	if (sortedColumn === column) {
	  setSortAscending(!sortAscending);
	} else {
	  setSortedColumn(column);
	  setSortAscending(true);
	}
  }

// Triage des données
  const sortedData = [...filteredData].sort((a, b) => {
	if (sortedColumn === 'name') {
	  return sortAscending ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
	} else {
	  return sortAscending ? a.value - b.value : b.value - a.value;
	}
  });
  
  const [showModal, setShowModal] = useState(false);
 
  const renderMath = (latexString) => {
	return { __html: katex.renderToString(latexString) };
  };

 return (
	<div className="calculs-content html-content">
	  <h2>Méthode de calcul et limites</h2>

	  <h3 style={{ color: 'red' }}>Limites</h3>
	  <p>
		<strong>ATTENTION</strong> : le calcul de probabilité est <strong>"simpliste"</strong> dans la mesure où il n'intègre "que" le chiffre d'efficacité pratique évalué par des études menées durant une période assez courte (le plus souvent une année, rarement plus). Or des études ont montré que l'efficacité d'une contraception évolue au cours des années, pour différentes raisons.
	  </p>

	  <p>
		Par exemple, pour la pilule, les études montrent que l'observance (et donc l'efficacité) diminue avec les années<sup>[1]</sup>. La probabilité de grossesse sous pilule à moyen et long terme est donc <strong style={{ color: 'red' }}>SOUS-évalué</strong> avec notre calculatrice.
	  </p>

	  <p>
		À l'inverse, pour les stérilisations (ligature des trompes et vasectomie), les grossesses peuvent (exceptionnellement) survenir dans les toutes premières années qui suivent l'opération (soit sur des échecs chirurgicaux, soit sur des re-perméabilisations spontanées). Une fois ce délai passé, il n'y a plus de grossesse possible. Donc la probabilité de grossesse à moyen et long terme après stérilisation est <strong style={{ color: 'red' }}>SUR-évalué</strong> par la calculatrice.
	  </p>

	  <p>
		Le niveau de probabilité calculé par la calculatrice n'est pas exact, mais avec les connaissances scientifiques dont nous disposons actuellement, c'est celui qui s'approche le plus de la réalité.
	  </p>
	  <p>
	  Comme autre limite, on peut remarquer l’absence des nouvelles contraceptions masculines disponibles ou utilisées en France (contraception hormonale masculine, et contraception thermique par remontée testiculaire). Cette absence est due au fait qu’il n’existe pas encore suffisamment de données probantes sur leur efficacité pratique.
	  </p>

	  <h3 style={{ color: 'orange' }}>Méthode de calcul</h3>
	  <p>
		La probabilité d’avoir une grossesse chaque année est un événement indépendant car il ne modifie pas la probabilité de grossesse les années suivantes. Cet évènement est également exclusif (soit enceinte, soit pas enceinte). La loi binomiale peut donc être appliquée.
	  </p>
	  <p>La loi binomiale est définie par deux paramètres : </p>
	  <li>le nombre total d'expériences (n) soit dans ce cas les années d'exposition à la méthode contraceptive utilisée ;</li>
	  <li>et la probabilité d'événement dans chaque expérience (p), ici la probabilité d'être enceinte avec le moyen de contraception utilisé. </li>
	  

	  <p style={{ color: 'green' }}>
		La distribution de probabilité de la variable aléatoire est donnée par la fonction distribution binomiale définie de la manière suivante : 
	  </p>

		<div className="image-container">
		<img src={formuleImage} alt="fonction distribution binomiale" />
	  </div>
	  <p>Ainsi la probabilité d'avoir au moins une grossesse au bout de n années est
	  égale à <strong><span dangerouslySetInnerHTML={renderMath(`1-P(x=0)`)} /></strong>. où x=0 est  la probabilité d'avoir aucun événement (aucune grossesse).</p>
	 
	  

	 <h3 style={{ color: 'green' }}>Chiffres d’efficacité pratique par méthode<sup>[2]</sup></h3>
		<div className="table-container">
		<table>
		<thead>
		  <tr>
			<th onClick={() => handleSort('name')}>
			  Nom de la contraception{' '}
			  {sortedColumn === 'name' ? (sortAscending ? <i className="fa fa-sort-up"></i> : <i className="fa fa-sort-down"></i>) : <i className="fa fa-sort"></i>}
			</th>
			<th onClick={() => handleSort('value')}>
			  Efficacité annuelle (%){' '}
			  {sortedColumn === 'value' ? (sortAscending ? <i className="fa fa-sort-up"></i> : <i className="fa fa-sort-down"></i>) : <i className="fa fa-sort"></i>}
			</th>
		  </tr>
		</thead>
		  <tbody>
			{sortedData.map((item, index) => (
			  <tr key={index}>
				<td>{item.name}</td>
				<td>{item.value}</td>
			  </tr>
			))}
		  </tbody>
		</table>
		</div>
		<div className="table-legend">
		  D'après Source : U.S. Selected Practice Recommendations for Contraceptive Use, 2016
		</div>
	  
		<div className="image-container">
		  <img src={efficaciteImage} alt="Efficacité des méthodes de contraception" onClick={() => setShowModal(true)} />
		  <p className="click-to-enlarge">Cliquez pour agrandir</p>
		</div>
	  
		{showModal && (
		  <div className="modal">
			<span className="close" onClick={() => setShowModal(false)}>&times;</span>
			<img className="modal-content" src={efficaciteImage} alt="Efficacité des méthodes de contraception" />
			<div className="caption">Efficacité des méthodes de contraception, D'après U.S. Selected Practice Recommendations for Contraceptive Use, 2016</div>
		  </div>
		)}
	  <h3 style={{ color: 'green' }}>Références</h3>
	  <ol class="align-left">
	  <li><i>Référence à venir</i></li>
	  <li class="align-left"><i><a href="https://www.cdc.gov/mmwr/volumes/65/rr/rr6504a1.htm" target="_blank">U.S. Selected Practice Recommendations for Contraceptive Use, 2016</a></i></li>
	  </ol>
	  <p style={{ color: 'gray' }}>
		  <i>Rédaction : Aurélie Decker, Dr Alan Charissou & Dr Arnaud ZELER - 24/11/2023</i>
		</p>
	</div>
  );
}

export default Methode;
