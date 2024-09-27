// PriseContinue.js
import React from 'react';
import './html.css'; // Assurez-vous que ce fichier CSS existe et est approprié

function PriseContinue() {
 return (
	<div className="prise-continue-content html-content">
	  <h2>Prise en continu de la pilule</h2>

	  <p>
		  Toutes les <strong style={{ color: 'red' }}>contraceptions hormonales</strong> suspendent le cycle menstruel, par le même phénomène que la grossesse suspend le cycle. Par conséquent,
		  <strong style={{ color: 'red' }}>aucune contraception hormonale, pas même la pilule, ne permet d’avoir des cycles menstruels réguliers</strong>. Ce qui n’est pas un problème pour la santé (tout comme la grossesse d’ailleurs).
		</p>
		<p>
		  Il existe <strong style={{ color: 'orange' }}>2 types</strong> de contraception hormonale :
		  <ul>
			<li>les <strong style={{ color: 'green' }}>progestatives</strong> : elles ne contiennent qu'une seule hormone (progestérone) et doivent être prises en continu. Il en existe 4 différentes :</li>
			<ul>
				<li>la pilule progestative (ou “micropilule”),</li> 
				<li>le stérilet (ou DIU) hormonal,</li>
				<li> l’implant sous cutané</li>
				<li> et les injections intramusculaires trimestrielles.</li>
			</ul>
			<li>les <strong style={{ color: 'green' }}>estroprogestatives</strong> : elles contiennent deux hormones (progestérone ET oestrogène), que l'on peut prendre de manière <strong style={{ color: 'orange' }}>discontinue</strong> (21 voir 24 jours, puis 7 ou 3 jours de pause) ou <strong style={{ color: 'orange' }}>continue</strong> (cf. explications ci dessous). Il en existe 3 différentes : </li><ul><li>les pilules estroprogestatives,</li> <li>l’anneau vaginal</li>  <li>le patch cutané.</li></ul>
		  </ul>
		</p>
		<p><strong>Concernant spécifiquement les contraceptions oestroprogestatives (qui contiennent 2 hormones), il est important de savoir que :</strong></p>
		<ul>
		  <li><strong style={{ color: 'orange' }}>Les saignements</strong>, qui surviennent lors d'une pause entre 2 plaquettes de pilules estroprogestatives (ou 2 anneaux, ou 2 patchs), ne sont pas des règles à proprement parler ;</li>
		  <li>Ces saignements, qui surviennent trois ou quatre jours après la fin d’une méthode de contraception, sont dus à la <strong style={{ color: 'orange' }}>"privation hormonale"</strong>, c’est-à-dire à l’arrêt des hormones contenues dans les comprimés, dans l’anneau ou dans le patch ;</li>
		  <li>Les <strong style={{ color: 'red' }}>"saignements de privation hormonale"</strong> n’ont pas d’effet "bénéfique" pour les femmes ; au contraire, ils peuvent faciliter une perte de fer, et donc une anémie, comme les règles qui surviennent en l’absence de contraception ;</li>
		  <li>La présence ou l’absence de saignements de privation hormonale n’est <strong style={{ color: 'green' }}>pas un indicateur de la fertilité</strong> ; lorsqu’ils apparaissent, ils ne permettent pas non plus de savoir si la personne est enceinte ou non.</li>
		  <li>De plus, la semaine d’arrêt entre deux plaquettes (ou anneaux, ou patchs) peut compromettre l’efficacité de la contraception : si la personne oublie de recommencer la plaquette suivante (de remettre un anneau ou un patch) au bout d’une semaine, elle n’êtes plus protégée pendant plusieurs jours ;</li>
		  <li>En revanche, la prise continue (sans pause) permet d'<strong style={{ color: 'green' }}>éviter les saignements</strong> et tous les désagréments qui vont avec (coût des protections hygiéniques, en particulier) et offre donc un confort plus grand ;</li>
		  <li>Les recherches<sup>[1]</sup> sur l'utilisation des contraceptions estro-progestatives (pilule, patch, anneau vaginal) en continu ont également montré que la prise continue est <strong style={{ color: 'green' }}>sans danger</strong> et au moins <strong style={{ color: 'orange' }}>aussi efficace</strong>, voire plus, que la prise avec une pause mensuelle ;</li>
		  <li>En cas de prise continue, l’oubli d’un comprimé ne diminue pas l’efficacité car un jour sans pilule ne suffit pas pour que le cycle reprenne et qu’une ovulation se déclenche ;</li>
		  <li>Pour toutes ces raisons, il est possible et recommandé d'utiliser les pilules estroprogestatives (et anneau, et patch) en continu (sans faire de pause toutes les 3 semaines) si vous le désirez.</li>
		</ul>
		<p>
		  <h3>Sources bibliographiques</h3>
		  <ol><li><a target="_blank" href="https://www.cochranelibrary.com/cdsr/doi/10.1002/14651858.CD004695.pub3/full?highlightAbstract=pills%7Ccontracept%7Ccontraceptive%7Cpill%7Ccontraceptiv">
			Continuous or extended cycle vs. cyclic use of combined hormonal contraceptives for contraception - Edelman, A - 2014 _ Cochrane Library
		  </a></li></ol>
		</p>
		<p style={{ color: 'gray' }}>
<i>Rédaction : Alan Charissou et Martin Winckler - 10/05/2023</i></p>
	</div>
  );
}

export default PriseContinue;
