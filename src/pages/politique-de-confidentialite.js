import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import styles from './politique-de-confidentialite.module.scss'
import SEO from '../components/seo'

class Privacy extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <SEO
          pathname={this.props.location.pathname}
          title="Politique de confidentialité | Leeto"
          description="Découvrez la politique de confidentialité de Leeto, expert en CSE"
        />
        <div className={styles.container}>
          <h1>Politique de confidentialité</h1>
          <hr />
          <h3>Préambule</h3>
          <p>
            Cette Politique de confidentialité s’adresse aux Utilisateurs de
            Leeto et a pour objectif de les informer sur la manière dont leurs
            informations personnelles peuvent être collectées et traitées. Le
            respect de la vie privée et des données à caractère personnel est
            pour Leeto une priorité, raison pour laquelle nous nous engageons à
            traiter celles-ci dans le plus strict respect de la Loi Informatique
            et Libertés du 6 janvier 1978 (ci-après « loi IEL ») modifiée et du
            Règlement (UE) général sur la protection des données du 27 avril
            2016 (ci-après « RGPD »). En tout état de cause, nous nous engageons
            à respecter les deux (2) principes essentiels suivants :
            <p className={styles.quote}>
              <ul>
                <li>
                  l’utilisateur reste maître de ses données à caractère
                  personnel ;
                </li>
                <li>
                  les données sont traitées de manière transparente,
                  confidentielle et sécurisée.
                </li>
              </ul>
            </p>
          </p>
          <h3>Définitions</h3>
          <p>
            <strong>Back-Office du Client : </strong>désigne l’interface
            d’administration mise à la disposition du Client par Leeto.
          </p>
          <p>
            <strong>Bénéficiaire : </strong>désigne les salariés bénéficiant des
            services de Leeto proposés par leur CSE ou leur entreprise.
          </p>
          <p>
            <strong>Client : </strong>désigne l’entreprise ayant souscrit à
            l’une des offres proposées par Leeto en vue de l’utilisation des
            Services.
          </p>
          <p>
            <strong>Identifiant : </strong>désigne l’adresse de messagerie
            électronique (ou le nom d'utilisateur) et le mot de passe que vous
            choisissez lors de votre inscription en tant que Client et dont la
            saisie permet la connexion à votre Back-Office.
          </p>
          <p>
            <strong>Plateforme : </strong>désigne le site Internet et
            l’application édités par Leeto ainsi que toutes leurs composantes
            graphiques, sonores, visuelles, logicielles, et textuelles. La
            Plateforme est la propriété exclusive de Leeto.
          </p>
          <p>
            <strong>Services : </strong>désigne les services proposés par Leeto
            via la Plateforme. Les Services sont détaillés au sein des CGVU.
          </p>
          <p>
            <strong>Utilisateurs : </strong>désigne l’ensemble des catégories
            d’utilisateurs de la Plateforme. Sont ainsi considérés comme des
            Utilisateurs :
            <p className={styles.quote}>
              <ul>
                <li>Les Bénéficiaires</li>
                <li>Le Client</li>
              </ul>
            </p>
          </p>

          <h3>Identité du responsable de traitement</h3>
          <p>
            <strong>Leeto en tant que responsable de traitement</strong>
          </p>
          <p>
            Clan, société par actions simplifiée (SAS) au capital de 1.400 Euros
            ayant son siège social au 12, rue Anselme -- 93400 Saint-Ouen,
            France, et immatriculée au Registre du Commerce et des Sociétés
            (RCS) de Bobigny sous le numéro 841 674 997 et ayant pour nom
            commercial "Leeto" (ci-après dénommé « Leeto »), aura le statut de
            responsable de traitement pour tous les traitements relatifs à
            l’administration de sa Plateforme ainsi qu’à la gestion de ses
            Clients dès leur inscription sur la Plateforme et/ou la souscription
            aux Services.
          </p>

          <p className={styles.quote}>
            <ul>
              <li>
                Concernant la Plateforme :
                <ul>
                  <li>Paramétrage des espaces pour CSE ou entreprise</li>
                  <li>
                    Réalisation de statistiques d’utilisation de la Plateforme
                    Leeto
                  </li>
                  <li>Réalisation d’enquête de satisfaction</li>
                  <li>Administration des portefeuilles électroniques</li>
                </ul>
              </li>
              <li>
                Concernant la gestion des Clients :
                <ul>
                  <li>Envoi d’offres commerciales</li>
                  <li>Gestion des contrats</li>
                  <li>Animation du site Internet</li>
                  <li>Gestion de la E-Réputation</li>
                  <li>Organisation d’évènements</li>
                  <li>Facturation de services</li>
                  <li>Gestion de contentieux</li>
                </ul>
              </li>
            </ul>
          </p>

          <p>
            <strong>Leeto en tant que co-responsable de traitement</strong>
            <p>
              Leeto aura la qualité de co-responsable de traitement pour les
              opérations suivantes :
            </p>

            <p className={styles.quote}>
              <ul>
                <li>
                  Création et suivi des comptes Bénéficiaires :
                  co-responsabilité avec le Client
                </li>
                <li>
                  Création et suivi d’avantages salariés (subventions, e-cartes
                  cadeaux etc.) : co-responsabilité avec le Client
                </li>
                <li>
                  Création et suivi d’évènements : co-responsabilité avec le
                  Client
                </li>
                <li>
                  Création et partage de contenu : co-responsabilité avec le
                  Client
                </li>
                <li>
                  Gestion des opérations de paiement réalisées sur la Plateforme
                  : co-responsabilité avec le prestataire de services de
                  paiement
                </li>
                <li>
                  Organisation de la livraison des commandes : co-responsabilité
                  avec la Plateforme de services tiers
                </li>
                <li>
                  Dépôt de Cookies et autres traceurs sur le terminal des
                  Utilisateurs : co-responsabilité avec les réseaux sociaux
                  (Facebook, LinkedIn) et les moteurs de recherche (Google).
                </li>
              </ul>
            </p>
          </p>

          <p>
            <strong>Leeto en tant que sous-traitant</strong>
          </p>
          <p>
            Leeto aura la qualité de sous-traitant à l’égard du Client lorsque
            celui-ci collecte et traite des données via son Back Office qu’il
            administre sous sa seule responsabilité. Ainsi chaque Client aura le
            statut de responsable des traitements pour les traitements de
            données des Bénéficiaires réalisés via le BackOffice.
          </p>

          <p>
            Ceci précisé, la présente politique de confidentialité concerne les
            traitements de données réalisés par Leeto en sa qualité de
            responsable de traitement ou de co-responsable de traitement. Les
            Bénéficiaires qui souhaiteraient avoir des renseignements sur les
            opérations de traitement effectuées par les Clients de Leeto devront
            solliciter ces derniers.
          </p>

          <h3>Coordonnées de notre délégué à la protection des données</h3>

          <p>
            Notre Délégué à la Protection des Données (ci-après « DPO ») est là
            pour répondre à toutes les demandes, y compris d’exercice de droits,
            relatives à vos données à caractère personnel. Vous pouvez le
            joindre :
          </p>

          <p className={styles.quote}>
            <ul>
              <li>
                Soit par mail à l’adresse suivante :{' '}
                <a href="mailto:dpo@leeto.co">dpo@leeto.co</a>
              </li>
              <li>
                Soit par courrier : Leeto – Service DPO, 12 rue Anselme 93400
                Saint Ouen sur Seine
              </li>
            </ul>
          </p>

          <h3>Collecte & origine des données</h3>
          <p>
            Dans le cadre de la fourniture des Services, Leeto collecte et
            traite des données à caractère personnel relatives à ses
            Utilisateurs. Ces données peuvent provenir directement des
            Utilisateurs, ou avoir été collectées auprès des Clients ou de tiers
            intervenant dans les opérations de traitement (Institutions
            bancaires, Plateforme de services tiers, Administrations
            financières).
          </p>
          <p>
            Dans tous les cas, vous êtes informés des finalités pour lesquelles
            vos données sont collectées par nos soins via les différents
            formulaires de collecte de données en ligne, les emails qui vous
            seraient adressés ou des notifications sur la Plateforme.
          </p>

          <h3>Consentement</h3>
          <p>
            Dans le cadre du respect des principes de protection des données dès
            la conception et de protection des données par défaut, Leeto
            s’assure que les consentements nécessaires ont bien été recueillis
            lors de l’inscription des Bénéficiaires.
          </p>
          <p>
            Par ailleurs, Leeto s’assure que le consentement des Bénéficiaires a
            bien été recueilli concernant les opérations de communication
            marketing sur les offres partenaires qui peuvent être réalisées par
            l’intermédiaire de la Plateforme.
          </p>
          <p>
            Dans le cadre de son offre de prospection centrée uniquement sur le
            BtoB, qui s’adresse donc aux Clients, Leeto s’assure que :
          </p>
          <p className={styles.quote}>
            <ul>
              <li>
                les clients et prospects ont bénéficié d’une information
                suffisante sur les opérations de prospection effectuées ;
              </li>

              <li>
                les clients et prospects sont en capacité de s’opposer de
                manière simple et gratuite aux opérations de prospection au
                moment de la collecte (Opt-Out) ;
              </li>

              <li>
                et la sollicitation est en rapport avec la profession de la
                personne sollicitée.
              </li>
            </ul>
          </p>

          <h3>Finalités des traitements</h3>
          <p>
            Vos différentes données sont collectées par Leeto pour assurer :
          </p>
          <p className={styles.quote}>
            <ul>
              <li>
                Le bon fonctionnement et l’amélioration permanente de la
                Plateforme, de ses fonctionnalités et des Services qu’elle
                propose
              </li>
              <li>
                La réalisation d’opérations relatives au fonctionnement des
                portefeuilles électroniques
              </li>
              <li>La mise à disposition des services d’avantages salariés</li>
              <li>La mise à disposition des services de communication</li>
              <li>La gestion des Clients</li>
              <li>La réalisation d’opérations marketing</li>
              <li>
                La gestion comptable et la réalisation d’opérations associées
              </li>
              <li>
                La gestion des demandes de droits issus du RGPD et de la loi
                Informatique et Libertés modifiée
              </li>
            </ul>
          </p>

          <h3>Base légale</h3>
          <p>
            Contractuelle : le traitement est nécessaire à l’exécution des
            prestations prévues dans le contrat passé avec le Client.
          </p>
          <p>
            Notre intérêt légitime à assurer aux Utilisateurs la meilleure
            expérience qu’il soit sur la Plateforme, et la meilleure qualité
            qu’il soit des Services proposés.
          </p>
          <p>
            Le consentement des personnes concernées lorsque cela s’avère
            nécessaire, notamment pour les opérations de communication marketing
            sur les offres partenaires
          </p>
          <p>
            Notre obligation légale découlant des articles 15 et suivants du
            RGPD et des articles 48 et suivants de la loi Informatique et
            Libertés.
          </p>

          <h3>Données traitées</h3>
          <p>
            Le caractère obligatoire ou facultatif des données personnelles
            collectées et les éventuelles conséquences d'un défaut de réponse
            sont indiqués lors de leur(s) collecte(s) sur les formulaires
            associés.
          </p>
          <p>
            En tout état de cause Leeto s’engage à traiter l’ensemble des
            données collectées de manière conforme au RGPD et à la loi
            Informatique et Libertés.
          </p>

          <h3>Destinataires de vos données</h3>
          <p>
            Dans la limite de leurs attributions respectives et pour les
            finalités rappelées à l’article Finalité des traitements, les
            principales personnes qui seront susceptibles d’avoir accès à vos
            données sont les suivantes :
          </p>

          <p className={styles.quote}>
            <ul>
              <li>
                Le personnel habilité de nos services recherche et
                développement, marketing, commercial, administratif, logistique,
                juridique et informatique, chargés de l’amélioration de nos
                services, de la relation client et la prospection et du contrôle
                qualité ;
              </li>
              <li>Le personnel habilité de nos sous-traitants ;</li>
              <li>
                Les organismes financiers (banques…) et organismes de contrôle ;
              </li>
              <li>
                S’il y a lieu, les juridictions concernées, médiateurs,
                experts-comptables, commissaires aux comptes, avocats,
                huissiers, sociétés de recouvrement de créances ;
              </li>
              <li>
                Les tiers susceptibles de déposer des cookies sur vos terminaux
                (ordinateurs, tablettes, téléphones portables…) lorsque vous y
                consentez (Pour plus de détail, consultez notre Charte de
                gestion des cookies) ;
              </li>
              <li>Le Client ;</li>
              <li>Les associations partenaires.</li>
            </ul>
          </p>
          <p>
            Vos données à caractère personnel ne sont ni communiquées, ni
            échangées, ni vendues ni louées sans votre consentement exprès
            préalable conformément aux dispositions légales et réglementaires
            applicables.
          </p>
          <p>
            Certaines catégories de sous-traitants ont accès aux données
            collectées :
          </p>

          <p className={styles.quote}>
            <p>
              <strong>Les prestataires de service de paiement</strong>
            </p>
            <ul>
              <li>Lieu de stockage : UE & États-Unis</li>
            </ul>
            <p>
              <strong>Les fournisseurs de solutions SaaS CRM</strong>
            </p>
            <ul>
              <li>Lieu de stockage : UE & États-Unis</li>
            </ul>
            <p>
              <strong>Les fournisseurs de stockage cloud</strong>
            </p>
            <ul>
              <li>Lieu de stockage : France</li>
            </ul>
            <p>
              <strong>
                Les fournisseurs de solutions de suivi de clientèle
              </strong>
            </p>
            <ul>
              <li>Lieu de stockage : UE & États-Unis</li>
            </ul>
            <p>
              <strong>Les fournisseurs de solutions de mailing</strong>
            </p>
            <ul>
              <li>Lieu de stockage : UE & États-Unis</li>
            </ul>
          </p>
          <p>
            Pour toute demande d’information complémentaire sur nos
            sous-traitants, vous pouvez adresser une demande d’information
            complémentaire à notre Délégué à la Protection des Données par mail
            à <a href="mailto:dpo@leeto.co">dpo@leeto.co</a>.
          </p>

          <h3>Transfert de données hors union européenne</h3>
          <p>
            Dans certains cas, vos informations personnelles seront sauvegardées
            sur des serveurs situés en dehors de l'EEE. C’est notamment le cas
            lorsque nous transférons des informations à certains de nos
            sous-traitants situés aux Etats-Unis. Nous avons pris des mesures
            appropriées pour s'assurer que vos données sont conservées en toute
            sécurité via la contractualisation de clauses contractuelles types
            approuvées par la Commission européenne (art. 46 RGPD).
          </p>

          <h3>Durée de conservation des données</h3>
          <p>
            Nous conservons vos données uniquement le temps nécessaire pour les
            finalités poursuivies, telles que décrites plus haut :
          </p>

          <p className={styles.quote}>
            <ul>
              <li>
                Les informations collectées dans le cadre des autres services
                sont conservées pour toute la durée de la relation contractuelle
                liant Leeto au Client. A compter de la fin de la relation les
                données collectées sont conservées pour une durée de rétention
                équivalente à 3 mois, puis détruites.
              </li>
              <li>
                Les données utilisées dans le cadre de la gestion de la relation
                Client sont conservées pendant toute la durée nécessaire à
                l’exécution du contrat. Ces données sont ensuite archivées pour
                une durée de 5 ans à des fins probatoires. Les factures et
                données comptables émises sont quant à elles conservées 10 ans à
                compter de leur émission.
              </li>
              <li>
                Les données utilisées dans le cadre d’opérations marketing sont
                conservées pour une durée de 3 ans à compter de la fin de la
                relation commercial
              </li>
              <li>
                Il est rappelé que pour les paiements par carte bancaire,
                conformément à l’article L 133-24 du code monétaire et
                financier, ces données peuvent être conservées pour une finalité
                de preuve en cas d’éventuelle contestation de la transaction ou
                réclamation, en archives intermédiaires, pendant une durée de 13
                mois suivant la date de débit (durée portée à 15 mois pour les
                cartes de paiement à débit différé). La trace comptable des
                paiements est conservée pour une durée de 10 ans en archivage
                intermédiaire à compter de la réalisation effective du paiement
                (cf. art. Article L123-22 du Code de Commerce).
              </li>
              <li>
                Pour la gestion des demandes de droit issus du RGPD et de la loi
                Informatique et Liberté modifiée 16, les données relatives à la
                gestion des demandes de droit sont conservées pour toute la
                durée nécessaire au traitement de la demande. Elles sont par la
                suite archivées pour la durée de prescription pénale applicable
                en archivage intermédiaire.
              </li>
            </ul>
          </p>

          <h3>Vos droits</h3>
          <p>
            Conformément à la Loi Informatique et Libertés et au RGPD, vous
            disposez des droits suivants (en savoir plus) :
          </p>

          <p className={styles.quote}>
            <ul>
              <li>
                droit d’accès (article 15 RGPD), de rectification (article 16
                RGPD), de mise à jour, de complétude de vos données
              </li>
              <li>
                droit à l’effacement (ou « droit à l’oubli ») de vos données à
                caractère personnel (article 17 RGPD), lorsqu’elles sont
                inexactes, incomplètes, équivoques, périmées, ou dont la
                collecte, l'utilisation, la communication ou la conservation est
                interdite
              </li>
              <li>
                droit de retirer à tout moment votre consentement (article 7
                RGPD)
              </li>
              <li>
                droit à la limitation du traitement de vos données (article 18
                RGPD)
              </li>
              <li>
                droit d’opposition au traitement de vos données (article 21
                RGPD)
              </li>
              <li>
                droit à la portabilité des données que vous nous avez fournies,
                lorsque vos données font l’objet de traitements automatisés
                fondés sur votre consentement ou sur un contrat (article 20
                RGPD)
              </li>
            </ul>
          </p>
          <p>Vous pouvez exercer vos droits :</p>
          <p className={styles.quote}>
            <ul>
              <li>
                par mail à <a href="mailto:dpo@leeto.co">dpo@leeto.co</a>.
              </li>
              <li>
                soit par courrier : Leeto – Service DPO, 12 rue Anselme 93400
                Saint Ouen sur Seine
              </li>
            </ul>
          </p>

          <h3>Données de connexion et cookies</h3>
          <p>
            Nous faisons usage pour le bon fonctionnement de la Plateforme, du
            site internet de Leeto et des Services de données de connexion
            (date, heure, adresse Internet, protocole de l’ordinateur du
            visiteur, page consultée) et des cookies (petits fichiers
            enregistrés sur votre ordinateur) permettant de vous identifier, de
            mémoriser vos consultations, et de bénéficier de mesures et
            statistiques d’audience, notamment relatives aux pages consultées.
          </p>

          <h3>Sécurité</h3>
          <p>
            Leeto respecte le RGPD et la loi Informatique et Libertés en matière
            de sécurité et de confidentialité de vos données.
          </p>
          <p>
            Nous mettons en œuvre toutes les mesures techniques et
            organisationnelles nécessaires afin d’assurer la sécurité de nos
            traitements de données à caractère personnel et la confidentialité
            des données que nous collectons.
          </p>
          <p>
            A ce titre, nous prenons toutes les précautions utiles, au regard de
            la nature des données et des risques présentés par les traitements
            pour en préserver la sécurité et, notamment, empêcher que les
            données soient déformées, endommagées, ou que des tiers non
            autorisés y aient accès (protection physique des locaux, procédés
            d’authentification des personnes accédant aux données avec accès
            personnel et sécurisé via des identifiants et mots de passe
            confidentiels, protocole https sécurisé, journalisation et
            traçabilité des connexions, chiffrement de certaines données…).
          </p>

          <h3>Politique de confidentialité Treezor</h3>
          <p>
            <a
              href="https://www.treezor.com/politique-confidentialite/"
              target="_blank"
              rel="noreferrer"
            >
              Consulter la politique de confidentialité
            </a>
          </p>
        </div>
      </Layout>
    )
  }
}

export default Privacy

export const pageQuery = graphql`
  query PrivacyQuery {
    site {
      siteMetadata {
        description
        siteUrl
      }
    }
  }
`
