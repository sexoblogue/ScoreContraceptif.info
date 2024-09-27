//Credits.js
import React from 'react';
import './Credits.css'; // Assurez-vous de créer un fichier CSS pour le style
import './html.css'; // Assurez-vous de créer un fichier CSS pour le style
import conseilDepartemental from './Meurthe-et-Moselle_logo.png'; // Assurez-vous que l'image est dans le bon dossier

function Credits() {
  
    return (
    <div className="credits-content html-content">
      <h2>Credits</h2>
      <h3>Propriété intellectuelle et copyright</h3>
      <p>Cette calculatrice est sous licence Creative Commons <a href="https://creativecommons.org/licenses/by/4.0/deed.fr" target="_blank">CC-BY</a>.<br/>
      Elle peut être librement utilisée, copiée, remixée ou transformée à la condition de créditer les auteurs en utilisant la citation suivante : <br/><br/><i className="citation">CC-BY https://scorecontraceptif.info, développé par Alan Charissou et Arnaud Zeler, cofinancé par le Conseil Départemental de Meurthe et Moselle et <a href="https://sexoblogue.fr" target="_blank">Sexoblogue.fr</a></i>
      </p>

      <h3>Auteurs</h3>
      <ul>
        <li>Dr Alan Charissou (<a href="mailto:charissou.alan@gmail.com" style={{ color: 'green' }}>charissou.alan@gmail.com</a>)</li>
        <li>Dr Arnaud Zéler</li>
      </ul>

      <h3 style={{ color: 'green' }}>Historique</h3>
      <p>
        Cette calculatrice est une idée du <span style={{ fontWeight: 'bold', color: 'red' }}>Dr Alan Charissou</span>.<br/>
        Initialement nommée "Risquomètre en contraception", l'application a ensuite été renommée "Score contraceptif" pour mieux refléter son objectif d'aider les utilisateurs à faire des choix éclairés en fournissant des informations fiables sur l'efficacité des contraceptifs.<br/>
        La <span style={{ fontWeight: 'bold', color: 'red' }}><a href="https://docs.google.com/spreadsheets/d/1tXczMFTPnqmLjM3ZziWKvOsGdRV_hmPL-I51muQBcNA/edit#gid=0" target="_blank">première version</a></span> date du <span style={{ fontWeight: 'bold', color: 'green' }}>12/06/2020</span>.<br/>
        La <span style={{ fontWeight: 'bold', color: 'orange' }}>dernière version</span> est le fruit de la collaboration entre le Dr Arnaud Zeler, la société <a href="https://produits.outils-du-sexologue.fr/sexologues" target="_blank">SAS SEXOBLOGUE</a> et le Dr Alan Charissou entre  <span style={{ fontWeight: 'bold', color: 'green' }}>juin et octobre 2023</span>.
      </p>

      <h3 style={{ color: 'green' }}>Conception de l'application Web</h3>
      <p>
        L'application actuelle a été codée en react.js par <span style={{ fontWeight: 'bold', color: 'orange' }}><a href="https://www.codeur.com/-haroldgq0nm" target="_blank">Harold Goundou</a> et Arnaud ZELER</span>. Elle a été mise en ligne le <span style={{ fontWeight: 'bold', color: 'green' }}>26/09/2023</span>.<br/>
        L'application est hébergée par <a href="https://sexoblogue.fr" target="_blank" rel="noopener noreferrer" >Sexoblogue.fr</a>.
      </p>

      <h3 style={{ color: 'orange' }}>Financement</h3>
      <a href="https://www.meurthe-et-moselle.fr" target="_blank">
        <img className="financement" src={conseilDepartemental} alt="Conseil Départemental de Meurthe-et-Moselle" width="200px"/>
      </a>
      <a href="https://sexoblogue.fr" target="_blank">
        <img className="financement" width="200px" src="https://sexoblogue.fr/wp-content/uploads/logo-sexoblogue-150-carre.jpg" alt="Sexoblogue" />
      </a>
      <br/>

      <h3 style={{ color: 'orange' }}>Remerciements</h3>
      <ul>
        <li>Merci au <strong style={{color: 'green'}}>Conseil Départemental de Meurthe et Moselle</strong></li>
        <li>Merci à <strong style={{color: 'orange'}}>Arnaud Zeler</strong> et <strong style={{color: 'orange'}}>Sexoblogue.fr</strong></li>
        <li>Merci à <strong style={{color: 'red'}}>Martin Winckler</strong> pour la co-rédaction de « Prise en continu de la pilule »</li>
        <li>Merci à <strong style={{color: 'green'}}>Yann Stroh</strong> et <strong style={{color: 'green'}}>Marie Ahyerre</strong> pour la méthode de calcul de la probabilité</li>
      </ul>

      <h3 style={{ color: 'blue' }}>Dépôt GitHub</h3>
      <p>
        Retrouvez le code source de ce projet sur GitHub : <a href="https://github.com/sexoblogue/ScoreContraceptif.info" target="_blank">ScoreContraceptif.info sur GitHub</a>.
      </p>

    </div> 
    );
}

export default Credits;