import React from 'react'

import styles from './testimonials-section.module.scss'

import lg from '../../static/locales/fr/translation.json'

import quitoqueNolwenn from '../assets/testimonials/nolwenn-quitoque.jpg'
import juliaUber from '../assets/testimonials/julia-uber.jpg'
import amazonEmilie from '../assets/testimonials/emilie-amazon.jpg'

import uberLogo from '../assets/testimonials/uber.png'
import amazonLogo from '../assets/testimonials/amazon.png'
import quitoqueLogo from '../assets/testimonials/quitoque.png'

const { testimonials: allTestimonials } = lg.components.testimonials_section

allTestimonials[0].personPhoto = quitoqueNolwenn
allTestimonials[0].companyLogo = quitoqueLogo

allTestimonials[1].personPhoto = juliaUber
allTestimonials[1].companyLogo = uberLogo

allTestimonials[2].personPhoto = amazonEmilie
allTestimonials[2].companyLogo = amazonLogo

export default class extends React.Component {
  state = {
    testimonials: allTestimonials,
    currentTestimonial: 0,
  }

  onLogoClick = number => {
    this.setState({
      currentTestimonial: number,
    })
  }

  render() {
    const { testimonials, currentTestimonial } = this.state

    return (
      <div className={styles.testimonialSection}>
        <h3>{lg.components.testimonials_section.title}</h3>
        <div className={styles.content}>
          <div className={styles.leftContent}>
            <div className={styles.meta}>
              <div className={styles.metaContainer}>
                <div className={styles.person_img}>
                  <img
                    src={testimonials[currentTestimonial].personPhoto}
                    alt="Nolwenn"
                  />
                </div>
                <div className={styles.person_info}>
                  <div className={styles.name}>
                    {testimonials[currentTestimonial].person}
                  </div>
                  <div className={styles.title}>
                    {testimonials[currentTestimonial].title}
                  </div>
                  <img
                    src={testimonials[currentTestimonial].companyLogo}
                    alt="Logo"
                  />
                  {/* <div className={styles.jobtitle}>
                    {testimonials[currentTestimonial].jobtitle}
                  </div> */}
                </div>
              </div>
            </div>
            <div className={styles.companies}>
              <div onClick={() => this.onLogoClick(0)}>
                <img
                  className={currentTestimonial === 0 ? styles.active : ''}
                  src={quitoqueLogo}
                  alt="Logo"
                />
              </div>
              <div onClick={() => this.onLogoClick(1)}>
                <img
                  className={currentTestimonial === 1 ? styles.active : ''}
                  src={uberLogo}
                  alt="Logo"
                />
              </div>
              <div onClick={() => this.onLogoClick(2)}>
                <img
                  className={currentTestimonial === 2 ? styles.active : ''}
                  src={amazonLogo}
                  alt="Logo"
                />
              </div>
            </div>
          </div>
          <div />
          <div className={styles.rightContent}>
            <div className={styles.quoteBox}>
              <div
                dangerouslySetInnerHTML={{
                  __html: testimonials[currentTestimonial].content,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
