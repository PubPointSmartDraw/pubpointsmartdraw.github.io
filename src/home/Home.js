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
import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Home extends Component {

  render() {
    return (
      <div className="main-page-wrapper home-page-one">
        <div id="loader-wrapper">
          <div id="loader"></div>
        </div>
        <div className="html-top-content">
          <header className="theme-main-header">
            <div className="container">
              <div className="menu-wrapper clearfix">
                <ul className="button-group float-right">
                  <li><Link to="/Register" className="tran3s theme-button">COMPTE</Link></li>
                  <li><Link to="/Login" className="tran3s theme-button">CONNEXION</Link></li>
                </ul>
              </div>
            </div>
          </header>


  				<div className="partical-bg-wrapper partical-gradient-one">
  					<div className="count-particles">
  	  					<span className="js-count-particles">--</span>
  					</div>
  					<div id="particles-js"></div>
  					<div id="theme-main-banner">
              <div data-src="images/home/slide-transparent.png">
                <div className="camera_caption">
                  <div className="main-container">
                    <div className="container">
                      <h5 className="wow fadeInUp animated">Utilisez PubPoint Smart Draw</h5><br/>
                      <h2 className="wow fadeInUp animated">Pour créer vos élégantes <br/>vidéos d’animation.</h2>
                      <p className="wow fadeInUp animated">+ de 500 millions de professionnels connectés chaque minute. <br/>Un seul logiciel pour vous aider à avancer efficacement.</p>

                      <div className="image-wrapper wow fadeInUp animated" data-wow-delay="0.75s">
                        <img src="images/c4.png" alt=""/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div data-src="images/home/slide-transparent.png">
                <div className="camera_caption">
                  <div className="main-container">
                    <div className="container">
                      <h5 className="wow fadeInUp animated">Utilisez PubPoint Smart Draw</h5>
                      <h2 className="wow fadeInUp animated">Pour créer vos élégantes <br/>vidéos d’animation.</h2>
                      <p className="wow fadeInUp animated">+ de 500 millions de professionnels connectés chaque minute. <br/>Un seul logiciel pour vous aider à avancer efficacement.</p>

                      <div className="image-wrapper wow fadeInUp animated" data-wow-delay="0.75s">
                        <img src="images/c4.png" alt=""/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  				</div>

  				<div className="what-we-do bg">
  					<div className="container">
  						<div className="theme-title-one text-center">
  							<h2>Une solution conçue juste <br/> pour vous satisfaire</h2>
  						</div>

  						<div className="row">
  							<div className="col-md-4 col-sm-6 col-xs-12 wow fadeInUp">
  								<div className="single-block tran3s">
  									<img src="images/icon/3.png" alt="" className="tran4s"/>
  									<h6>Un environnement fluide</h6>
  									<p>Utilisez PubPoint Smart Draw en vous amusant. C’est fun, ludique et facile à comprendre. Si vous avez déjà utilisé Microsoft PowerPoint, vous devriez vous en sortir comme un chef!</p>
  									<a href="#" className="tran3s theme-button"><span></span> Démarrer</a>
  								</div>
  							</div>
  							<div className="col-md-4 col-sm-6 col-xs-12 wow fadeInUp" data-wow-delay="0.1s">
  								<div className="single-block tran3s">
  									<img src="images/icon/4.png" alt="" className="tran4s"/>
  									<h6>Une équipe disponible</h6>
  									<p>Commandez un abonnement par carte ou par appel téléphonique et vous êtes crédité dans les 24 heures. Chaque abonnement correspond à la possibilité de télécharger une vidéo créée.</p>
  									<a href="#" className="tran3s theme-button open-account"><span></span> Démarrer</a>
  								</div>
  							</div>
  							<div className="col-md-4 hidden-sm col-xs-12 wow fadeInUp" data-wow-delay="0.150s">
  								<div className="single-block tran3s">
  									<img src="images/icon/5.png" alt="" className="tran4s"/>
  									<h6>Vidéo disponible immédiatement</h6>
  									<p>Une fois que vous avez terminé votre vidéo, op! Elle est disponible dans votre boîte mail et vous pouvez la publier en HD sur vos réseaux sociaux! </p><br/>
  									<a href="#" className="tran3s theme-button"><span></span> Démarrer</a>
  								</div>
  							</div>
  						</div>
  					</div>
  				</div>


  				<div className="boost-your-phone">
  					<div className="container">
  						<div className="row">
  							<div className="col-lg-offset-6 col-lg-6 col-xs-12 float-right  wow fadeInRight pull-right">
  								<div className="text">
  									<div className="theme-title-two">
  										<h2>Amusez-vous en travaillant !</h2>
  										<p>Utilisez une belle base de données ou téléchargez la vôtre comme font les pros !</p>
  									</div>
  									<ul>
  										<li><i className="flaticon-tick"></i> + de 20 personnages et animations</li>
  										<li><i className="flaticon-tick"></i> + de 100 scènes</li>
  										<li><i className="flaticon-tick"></i> + de 12 000 objects</li>
  										<li><i className="flaticon-tick"></i> + de 50 fonds sonores rafinés !</li>
  									</ul>
  								</div>
  							</div>
  						</div>
  						<div className="boster-image-wrapper  wow fadeInLeft pull-left">
  							<input type="checkbox" id="ao-toggle" className="ao-toggle" name="ao-toggle"/>
  							<img src="images/home/shape-21.png" alt=""/>
  						</div>
  					</div>
  				</div>


  				<div className="advance-feature">
  					<div className="container">
  						<div className="row">
  							<div className="col-md-6 col-xs-12 wow fadeInLeft">
  								<div className="feature-text">
  									<div className="theme-title-two">
  										<h2>Les informations que vous nous fournissez sont securisées.</h2>
  										<p>PubPoint Smart Draw est un SaaS (Logiciel en tant que service) qui vous permet de produire votre vidéo animative sans effort et depuis chez vous ou votre bureau. Les informations personnelles et financières que vous nous fournissez sont conservées et / ou supprimées selon vos droits liés aux règles qui régissent l{"'"}univers digital.</p>
  									</div>
  								</div>
  							</div>

  							<div className="col-md-6 col-xs-12 wow fadeInRight">
  								<div className="feature-warpper">
  									<div className="row">
  										<div className="col-xs-6">
  											<div className="single-feature bg-one m-fix js-tilt">
  												<i className="flaticon-diamond"></i>
  												<h5>Partagez vos abonnements</h5>
  												<p>Votre collègue ou ami aimerai avoir un abonnement? Vous pouvez l’aider en lui envoyant l’un des votres! Cool non ? </p>
  											</div>
  											<div className="single-feature bg-two js-tilt">
  												<i className="flaticon-multimedia"></i>
  												<h5>Réponse rapide</h5>
  												<p>C’est notre devoir après tout. Ecrivez nous pour le moindre problème ou si besoin de conseils lors de votre travail. </p>
  											</div>
  										</div>
  										<div className="col-xs-6">
  											<div className="single-feature bg-three js-tilt">
  												<i className="flaticon-squares"></i>
  												<h5>Environnement raffiné</h5>
  												<p>Pas besoin de milles options pour bien travailler. Nous avons pris le temps de vous construire un environnement parfait et facile à manipuler. </p>
  											</div>
  											<div className="single-feature bg-four js-tilt">
  												<i className="flaticon-lock"></i>
  												<h5>Système sécurisé</h5>
  												<p>Sentez-vous libre de nous faire confiance et effectuer un paiement par carte. Toutes vos informations sont traitées selon les règles numériques en vigeur. </p>
  											</div>
  										</div>
  									</div>
  								</div>
  							</div>
  						</div>
  					</div>
  				</div>

          <div className="two-section-wrapper">

            <div className="testimonial-section">
              <div className="container">
                <div className="row">
                  <div className="col-lg-offset-4 col-lg-8 col-xs-12 pull-left wow fadeInUp">
                    <div className="theme-title-one">
                      <h6>Témoignages</h6>
                      <h3>Écoutez ce qu’ils <br/>disent !</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="main-bg-wrapper">
                <div className="overlay">
                  <div id="watch-video">
                    <h6>Regarder</h6>
                    <h4>Présentation</h4>
                    <a data-fancybox href="https://www.youtube.com/embed/DHvQlpwrgJs" className="tran3s theme-button"><i className="fa fa-play" aria-hidden="true"><span></span></i></a>
                  </div>
                  <div className="main-slider-wrapper">
                    <div className="testimonial-slider">
                      <div className="item">
                        <i className="flaticon-straight-quotes"></i>
                        <p>“Attends, c’est si facile à utiliser ! Moi qui croyais ne jamais payer pour utiliser un service en ligne, vous m’avez convaincu !</p>
                        <div className="clearfix">
                          <div className="name float-left">
                            <h6>Vanessa Fongang</h6>
                            <span>Bafousam</span>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <i className="flaticon-straight-quotes"></i>
                        <p>“Bravo, je suis impressioné ! PubPoint Smart Draw j’en parle déjà autour de moi ici à Manhattan.</p>
                        <div className="clearfix">
                          <div className="name float-left">
                            <h6>Jayden Smith</h6>
                            <span>New-York</span>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <i className="flaticon-straight-quotes"></i>
                        <p>“Équipe sérieuse, travail limpide. C’est un très bon produit.</p>
                        <div className="clearfix">
                          <div className="name float-left">
                            <h6>Cédric Dubucq</h6>
                            <span>Paris</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

  					<div className="pricing-plan-section">
  						<div className="container">
  							<div className="row">
  								<div className="col-md-6 col-xs-12 wow fadeInLeft">
  									<div className="theme-title-one">
  										<h6>Nos formules</h6>
  										<h2>Choissiez le plan <br/> qui vous rend le plus <br/>à l’aise.</h2>
  										<p>Vous payez à la demande, en fonction de vos besoins.</p>
  									</div>
  									<ul className="nav nav-tabs">
  										<li className="active"><a data-toggle="tab" href="#monthly">Par crédit	</a></li>
  										<li><a data-toggle="tab" href="#yearly">En gros</a></li>
  									</ul>
  								</div>

  								<div className="col-md-6 col-xs-12 wow fadeInRight">
  									<div className="tab-content">
  										<div className="table-content">
  											<div id="monthly" className="tab-pane price-table in active">
  										    	<div className="col-inner">
  				                                 	<h6>Particuliers</h6>
  				                                    <p>Par crédit</p>
  				                                    <strong>€11<sup>.80</sup></strong>
  				                                    <p className="normal">Vous payez pour un abonnement et vous recevez un crédit qui vous donne droit au téléchargement d’une vidéo créée.</p>
  				                                    <a href="#" className="tran3s theme-button"><span></span> Démarrer</a>
  				                                </div>
  											</div>
  										  	<div id="yearly" className="tab-pane price-table">
  										    	<div className="col-inner">
  				                                 	<h6>Affaires</h6>
  				                                    <p>En gros</p>
  				                                    <strong>€118<sup>.00</sup></strong>
  				                                    <p className="normal">Vous payez 10 abonnements et vous êtes credités de onze ! La formule est la même pour 20, 30 et plus !</p>
  				                                    <a href="#" className="tran3s theme-button"><span></span> Démarrer</a>
  				                                </div>
  										  	</div>
  										</div>
  									</div>
  								</div>
  							</div>
  						</div>
  					</div>
          </div>

          <div className="app-screenshot">
            <h2>Quelques captures</h2>
            <div className="screenshot-container">
              <div className="slider-row">
                <div className="screenshoot-slider">
                  <div className="item"><img src="images/c2.png" alt=""/></div>
                  <div className="item"><img src="images/c4.png" alt=""/></div>
                  <div className="item"><img src="images/c1.png" alt=""/></div>
                  <div className="item"><img src="images/c3.png" alt=""/></div>
                </div>
              </div>
            </div>
          </div>


  				<div className="contact-us-section">
  					<div className="container">
  						<div className="row">
  							<div className="col-md-7 col-xs-12">
  								<form className="contact-us-form form-validation" auto-complete="off">
  									<input type="email" placeholder="Email*" name="messageEmail"/>
  									<input type="text" placeholder="Objet*" name="messageObject"/>
  									<textarea placeholder="Message*" name="messageContain"></textarea>
  									<div className="theme-button">
  										<span></span>
  										<input type="submit" value="ENVOYER"/>
  									</div>
  								</form>
  								<div className="alert-wrapper" id="alert-success">
    									<div id="success">
    										<button className="closeAlert"><i className="fa fa-times" aria-hidden="true"></i></button>
    										<div className="wrapper">
      			               	<p>Votre message a été envoyé avec succès.</p>
      			             </div>
    							    </div>
  							    </div>
  							    <div className="alert-wrapper" id="alert-error">
  							        <div id="error">
  							           	<button className="closeAlert"><i className="fa fa-times" aria-hidden="true"></i></button>
  							           	<div className="wrapper">
  							               	<p>Désolé ! Une erreur est survenue; veillez réessayer.</p>
  							            </div>
  							        </div>
  							    </div>
  							</div>

                <div className="col-md-5 col-xs-12 pull-right">
                  <address className="contact-address">
                    <div className="theme-title-one">
                      <h6>Nous contacter</h6>
                      <h2>Sentez-vous libre de nous appeler pour toutes informations.</h2>
                    </div>
                    <p>Europe-USA-Chine / Afrique</p>
                    <a href="#" className="tran3s call">+33 769 65 09 14 / +237 656 18 57 69</a>
                  </address>
                </div>
  						</div>
  					</div>
  				</div>

          <div className="google-map-area" id="google-map-area"></div>

          <footer>
    				<div className="container">
    					<div className="footer-data-wrapper">
    						<form className="subscribe-form">
    							<h2>S’abonner à notre lettre d’information !</h2>
    							<div className="input-wrapper">
    								<div className="row">
    									<div className="col-md-5 col-xs-12">
    										<input type="text" placeholder="Nom*" name="newsletterName"/>
    									</div>
    									<div className="col-md-5 col-xs-12">
    										<input type="email" placeholder="Email*" name="newsletterEmail"
                        />
    									</div>
    									<div className="col-md-2 col-xs-12">
    										<div className="theme-button">
    											<span></span>
    											<input type="submit" value="S'abonner"/>
    										</div>
    									</div>
    								</div>
    							</div>
    						</form>
    						<div className="bottom-footer">
    							<div className="row">
    								<div className="col-lg-6 col-md-5 col-xs-12 footer-logo">
    									<div className="logo"><a href="index.html">PubPoint Smart Draw</a></div>
    									<p>Tous droits réservés &copy; <strong>PubPoint Strategy 2019.</strong></p>
    								</div>
                    <div className="col-lg-6 col-md-7 col-xs-12 text-right pull-right">
    									<ul className="social-icon">
    										<li><a href="https://web.facebook.com/PubPoint.strategy/" className="tran3s"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
    									</ul>
    								</div>
    							</div>
    						</div>
    					</div>
    				</div>
    			</footer>

          <button className="scroll-top tran3s color-one-bg">
    				<i className="fa fa-long-arrow-up" aria-hidden="true"></i>
    			</button>

        </div>
      </div>
    );
  }
}

export default Home;
