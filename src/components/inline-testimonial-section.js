import React from 'react'

import lg from '../../static/locales/fr/translation.json'

import styles from './inline-testimonial-section.module.scss'

import quitoqueNolwenn from '../assets/testimonials/nolwenn-quitoque.jpg'
import juliaUber from '../assets/testimonials/julia-uber.jpg'
import amazonEmilie from '../assets/testimonials/emilie-amazon.jpg'

const { testimonials: allTestimonials } = lg.components.testimonials_section

allTestimonials[0].personPhoto = quitoqueNolwenn
allTestimonials[1].personPhoto = juliaUber
allTestimonials[2].personPhoto = amazonEmilie

export default class extends React.Component {
  state = {
    testimonials: allTestimonials,
  }

  render() {
    const { testimonials } = this.state

    return (
      <div className={styles.testimonialSection}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className={styles.testimonialCard}>
            <div
              dangerouslySetInnerHTML={{
                __html: testimonial.content,
              }}
            />
            <div className={styles.name}>
              <img src={testimonial.personPhoto} alt="personPhoto" />
              <div>
                <p>
                  <strong>{testimonial.person}</strong>
                </p>
                <p>{testimonial.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }
}
