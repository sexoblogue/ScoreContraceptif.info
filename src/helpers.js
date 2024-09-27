// helpers.js

// Cette fonction permet de calculer le pourcentage de risque sur plusieurs années.
export const boostrap = (years, purcent) => {
  const p = 1 - parseFloat(purcent / 100);
  const p_end = 1 - parseFloat(Math.pow(parseFloat(purcent / 100), years));
  return {
	p_end: p_end * 100,
	p: p * 100,
  };
};


