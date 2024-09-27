// Menu.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Menu.css';  // Importez votre fichier CSS
import 'font-awesome/css/font-awesome.min.css';

function Menu() {
  const location = useLocation();
  const currentPath = location.pathname;

  const getClasse = (path) => {
	return currentPath === `/${path}` ? 'active-link' : '';
  };

  return (
	<div className="menu">
	  <Link to="/" className={getClasse('')}>
		<div className="menu-item">
		  <i className="fa fa-calculator"></i>
		  <span>Calculatrice</span>
		</div>
	  </Link>
	  <Link to="/pourquoi" className={getClasse('pourquoi')}>
		<div className="menu-item">
		  <i className="fa fa-question-circle"></i>
		  <span>Pourquoi cette calculatrice ?</span>
		</div>
	  </Link>
	  <Link to="/methode" className={getClasse('methode')}>
		<div className="menu-item">
		  <i className="fa fa-cogs"></i>
		  <span>Méthode de calcul et limites</span>
		</div>
	  </Link>
	  <Link to="/prise-continue" className={getClasse('prise-continue')}>
		<div className="menu-item">
		  <i className="fa fa-clock-o"></i>
		  <span>Prise en continu de la pilule</span>
		</div>
	  </Link>
	  <Link to="/informations" className={getClasse('informations')}>
		<div className="menu-item">
		  <i className="fa fa-info-circle"></i>
		  <span>Informations contraceptions</span>
		</div>
	  </Link>
	  <Link to="/credits" className={getClasse('credits')}>
		<div className="menu-item">
		  <i className="fa fa-copyright"></i>
		  <span>Crédits</span>
		</div>
	  </Link>
	  <Link to="/liens" className={getClasse('liens')}>
		<div className="menu-item">
		  <i className="fa fa-link"></i>
		  <span>Liens d’intérêt</span>
		</div>
	  </Link>
	</div>
  );
}

export default Menu;
