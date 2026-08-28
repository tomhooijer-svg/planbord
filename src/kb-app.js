/* Welke app dit is. Geschreven door test/uitgeven.sh -- pas de
   werkplaats aan, niet dit bestand.

   Planbord is één van twee uitgaven van dezelfde motor. Ze delen de
   gegevens, de database en het inloggen; de splitsing zit in de
   schermen. Allebei mogen ze alles lezen -- ze laten alleen wat
   anders zien. */
window.KB_APP = {
  id: 'planbord',
  naam: 'Planbord',
  panelen: ['vandaag','week','themas','taken','doelen','observaties','groep'],
  ander: { id:'keuzebord', naam:'Keuzebord', adres:'../keuzebord-app/' }
};
