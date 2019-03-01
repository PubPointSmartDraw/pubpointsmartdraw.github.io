/*****************************************************************************
 *
 * PubPoint Smart Draw Web application
 *
 * Developed for PubPoint Strategy by Eng. FEUYAN TCHOUO
 *
 * Copyright (C) PubPoint Strategy - All rights reserved.
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 * Proprietary and confidential.
 * Written by FEUYAN TCHOUO <tca1audricfeuyan@gmail.com>, November 2018.
 *
 *****************************************************************************
 */

 export const ANIMATION_EFFECTS = {
   fr : {
     FROMRIGHT : "Par la droite",
     FROMLEFT : "Par la gauche",
     FROMTOP : "Par le haut",
     FROMBOTTOM : "Par le bas",
     DEFAULT : "Défaut",
   },

   en : {

   }
 };

 export const GEOMETRIC_FORMS = {
   fr : {
     CIRCLE : "Cercle",
     ELLIPSE : "Ellipse",
     REGULARPOLYGON : "Polygone régulier",
     RECTANGLE : "Rectangle",
   }
 };


 export const SCREEN_PARAMETERS = {
   ASPECTRATION : 16/9, /* This aspect ratio garanties a high quality resolution */
   WIDTHPROPORTION : 3/5, /* The width's proportion of the design board to the wide screen */
   HEIGHTPROPORTION : 74/121, /* The height's proportion of the design board to the wide screen */
 };
