// Calculatrice.js
import React, { useState, useEffect } from 'react';
import { Steps, Slider, Button, InputNumber } from 'antd';
import { boostrap } from './helpers'; // Assurez-vous que ces fonctions sont importées correctement
import { getBorderStyle, CustomGauge } from './composants/Gauge-google'; // Assurez-vous que ce composant est importé correctement
import data from "./contraceptions.json";
import config from "./config.json"; 
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';

// Récupération d'une image appropriée en fonction du support du SVG
//Cette fonction est externe au composant car elle utilise l'objet document du navigateur, qui n'est pas disponible lors de la phase de rendu côté serveur dans une application React.
function getAppropriateImage(item, taille) {
  // Vérifie si le navigateur supporte le SVG
  const svgSupport = document && document.createElementNS && document.createElementNS('http://www.w3.org/2000/svg', 'svg').toString().includes('SVG');
  
  // Récupère les images par défaut à partir de la configuration
  const default_png = config[0].default_png; 
  const default_svg = config[0].default_svg;

  // Définit le style en fonction de la taille de l'image
  const logoClass = taille === "grand" ? "contraception_logo_grand" : "contraception_logo_petit";

  // Si le SVG est supporté et que l'élément a une image SVG, utilise cette image
  if (svgSupport && item.svg) {
  return <div className={logoClass} dangerouslySetInnerHTML={{ __html: item.svg }} />;
  } 
  // Si l'élément a une image normale, utilise cette image
  else if (item.image) {
  return <img  className={logoClass} alt={item.name} src={item.image} />;
  } 
  // Si aucune image n'est fournie pour l'élément, utilise l'image par défaut
  else {
  return (svgSupport && default_svg) ? <div className={logoClass} dangerouslySetInnerHTML={{ __html: default_svg }} /> :
			<img  className={logoClass} alt="default" src={default_png} />;
  }
}


export default function Calculatrice() {
  // Initialise l'état de l'application avec des valeurs par défaut
  const [current, setCurrent] = useState(0);
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(50);
  const [options, setOptions] = useState([]);
  const [selected, setSelected] = useState([]);
  const [years, setYears] = useState(5);
  const [filteredData, setFilteredData] = useState([]);
  const [stepTwoDisabled, setStepTwoDisabled] = useState(true);

	 // Récupération des données et mise à jour de l'état de l'application
   const getData = () => {
	 const filteredData = data.filter(item => item.value !== null);
	 // Trie les données filtrées et met à jour l'état
	 setFilteredData(
	   filteredData.sort((a, b) => parseFloat(a.order) - parseFloat(b.order))
	 );
	 // Filtre les contraceptifs en supprimant de la liste ceux dont l'efficacité est définie à null
	 setOptions(filteredData);
	 // Met à jour les valeurs minimales et maximales si elles sont présentes dans la configuration
	 if (Array.isArray(config) && config.length > 0) {
	   setMax(config[0].max || 30);
	   setMin(config[0].min || 1);
	 }
   };

// À l'initialisation du composant, récupère les données
   useEffect(() => {
	  getData();
	}, []);
  
  // Cette fonction vérifie si un élément est déjà sélectionné ou non
	const check = (item) => {
	  const data = [...selected];
	  for (let i = 0; i < data.length; i++) {
		const element = data[i];
		if (item.name === element.name) {
		  return { is: true, position: i };
		}
	  }
	  return { is: false, position: null };
	};
  
  // Cette fonction gère le clic sur un élément pour le sélectionner ou le désélectionner
	const onClick = (item) => {
	  if (!check(item).is) {
		const newSelected = [...selected, item].sort(
		  (a, b) => parseFloat(b.value) - parseFloat(a.value)
		);
		setSelected(newSelected);
	
		// S'il y a au moins un élément sélectionné, on active la seconde étape
		if (newSelected.length > 0) {
		  setStepTwoDisabled(false);
		}
	  } else {
		// Si l'élément est déjà sélectionné, on le désélectionne
		const data = [...selected];
		data.splice(check(item).position, 1);
		const newSelected = [...data].sort(
		  (a, b) => parseFloat(b.value) - parseFloat(a.value)
		);
		setSelected(newSelected);
	
		// Si aucun élément n'est sélectionné, on désactive la seconde étape
		if (newSelected.length === 0) {
		  setStepTwoDisabled(true);
		}
	  }
	};
	
  // Cette fonction permet de sélectionner tous les éléments
	const selectAll = () => {
	  setSelected(options);
	};
	
	// Cette fonction permet de désélectionner tous les éléments
	const deselectAll = () => setSelected([]);
	
	// Définition de l'état pour le tri des éléments
	const [sortAscending, setSortAscending] = useState(false);
	
	// Trier les éléments sélectionnés par leur valeur, soit de manière ascendante, soit descendante
	const sortedItems = sortAscending
  ? [...selected].sort((a, b) => parseFloat(a.value) - parseFloat(b.value))
  : [...selected].sort((a, b) => parseFloat(b.value) - parseFloat(a.value));
	
	const steps = [
	  {
		title: "Choix de la contraception",
		// Ce bloc génère le contenu interactif de la première étape
	   content: (
		  <>
			<p>
			  Choisir les contraceptions dont vous voulez comparer l'efficacité
			  {selected.length > 0 ? ` : (${selected.length}/${filteredData.length})` : ""}
		   </p>
			<div className="card-container">
			{/* Ici, nous bouclons sur toutes les options et générons une "carte" pour chaque option */}
			 {options.map((item, position) => (
				<div
				className={`card ${check(item).is ? "card-highlight" : ""}`}
				key={`card-item-${position}`}
				  // Lorsqu'une carte est cliquée, la fonction onClick est déclenchée avec l'item comme argument
				  onClick={() => onClick(item)}
				>
				  <span className={check(item).is ? "activate" : ""} />
				  {getAppropriateImage(item,'petit')}
				  <p>{item.name}</p>
				</div>
			  ))}
			</div>
			 <p>
			 {/* Ces deux spans permettent de sélectionner ou de désélectionner toutes les options */}
			{selected.length !== options.length && (
				  <span onClick={selectAll} style={{cursor: "pointer", color: "#87CEEB", marginLeft: "10px"}}>
					Tous
				  </span>
			  )}
			 {selected.length > 0 && (
			   <span onClick={deselectAll} style={{cursor: "pointer", color: "#F9A69D", marginLeft: "10px"}}>
				 Aucun
			   </span>
			 )}
			 </p>
		  </>
		),
	  },
	  {
		title: "Résultats",
		disabled: stepTwoDisabled,
		// Ce bloc génère le contenu interactif de la deuxième étape
		content: (
		  <>
			<p>
			  Indiquez dans quel délai vous souhaitez avoir votre prochaine (ou
			  première) grossesse (en année) ? Pour les femmes ne désirant pas
			  (plus) d'enfant, mettre la durée jusqu'à l'âge prévu de la ménopause
			  (le même que celui de votre mère ou de votre grand mère)
			</p>
			{/* InputNumber et Slider permettent à l'utilisateur de spécifier le nombre d'années */}
		   <InputNumber
			  value={years}
			  min={min}
			  onChange={setYears}
			  style={{ width: "200px" }}
			  addonAfter={`an${years > 1 ? "s" : ""}`}
			  placeholder="Entrez le nombre d'années"
			/>
			<Slider
			  style={{ width: "200px" }}
			  min={min}
			  max={max}
			  value={years}
			  onChange={setYears}
			/>
			<p>
			  Le risque statistique que vous avez d'avoir une grossesse plus tôt
			  que prévu malgré une utilisation correcte de la contraception
			</p>
  
			  {/* Ce bouton permet de trier les résultats par efficacité */}
			  {sortedItems.length > 1 && (
			  <Button 
				onClick={() => setSortAscending(!sortAscending)}
				style={{marginBottom: "10px"}}
				icon={sortAscending ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
			  >
				Trier {sortAscending ? 'du + efficace au - efficace' : 'du - efficace au + efficace'}
			  </Button>
			)}
  
			{/* Ici, nous bouclons sur tous les éléments triés pour générer les résultats pour chaque élément */}
			{sortedItems.map((item, position) => {
			 const borderStyle = getBorderStyle(years, item, boostrap);
			 const thepearl = Math.round(boostrap(years, parseFloat(item.value)).p*100)/100;
			 return (
			  <div className="result" key={`item-${position}`} style={borderStyle}>
				<div className="col">
				  {getAppropriateImage(item,'grand')}
				  <p className="contre">
					<strong>{item.name}</strong>
				  </p>
				</div>
				<div className="col gauge">
				{/* Ce composant de graphique montre visuellement le risque de grossesse */}
				<CustomGauge item={item} years={years} />
				  <p className="first">
					Risque statistique
				  </p>
				  <p className="etiquette">
					d'être enceinte au bout d{years > 1 ? "e " : "'"} <b>{years} an{years > 1 ? "s" : ""}</b>
				  </p>
				</div>
				<div className="col">
				  <p className="seconde">{thepearl}</p>
				  <p className="etiquette">Indice de Pearl</p>
				  <p className="seconde">{parseFloat(item.value)}%</p>
				  <p className="etiquette">Efficacité pratique</p>
				  <p className="seconde" style={{ color: thepearl < 1 ? "green" : thepearl < 10 ? "orange" : "red" }}>
					{thepearl < 1 ? "Haute efficacité" : thepearl < 10 ? "Efficacité moyenne" : "Faible efficacité"}
				  </p>
				</div>
			   </div>
				  );
				})}
		  </>
		),
	  },
	];
  
	const next = () => {
	  setCurrent(current + 1);
	};
  
	const prev = () => {
	  setCurrent(current - 1);
	};
 return (
	 <>
	  {/* Le composant Steps est utilisé pour afficher la progression de l'utilisateur dans l'application. 
	  Il reçoit le nombre d'étapes, la progression actuelle, et d'autres paramètres pour affichage. */}
	  <Steps
		current={current}
		items={steps}
		onChange={setCurrent}
		direction="horizontal"
		responsive={false}
		labelPlacement="vertical"
		style={{
		  marginTop: "10px",
		  marginBottom: "10px",
		  userSelect: "none",
		  width: "66%",
		}}
	  />
	  {/* Le contenu affiché change en fonction de l'étape actuelle */}
	  <div className="content">{steps[current].content}</div>
	  {/* Les boutons de navigation 'Retour' et 'Suivant' permettent à l'utilisateur de se déplacer entre les étapes.
	  Le bouton 'Retour' est désactivé à la première étape et 'Suivant' est désactivé à la dernière étape.
	  De plus, le bouton 'Suivant' est désactivé à la première étape si aucun élément n'est sélectionné. */}
	  <div style={{ marginBottom: "10px" }}>
		<Button
		  style={{ margin: "0 8px" }}
		  disabled={!(current > 0)}
		  onClick={() => prev()}
		>
		  Retour
		</Button>
  
		<Button
		  type="primary"
		  disabled={
			!(current < steps.length - 1) ||
			(current === 0 && selected.length === 0)
		  }
		  onClick={() => next()}
		>
		  Suivant
		</Button>
	  </div>
	  </>
  );
}
