import React, { Component } from 'react'
import { Link } from 'gatsby'
import classnames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import AButtonPrimary from './button'
import Logo from './logo'
import styles from './navigation.module.scss'
import lg from '../../static/locales/fr/translation.json'

import folder from '../assets/bannerVisuals/folder.png'
import puzzle from '../assets/bannerVisuals/puzzle2.png'
import HeaderPagesPilier from './HeaderPagesPilier'
import MobileNavDropDown from './MobileNavDropDown'
import HeaderPagesPilierMobile from './HeaderPagesPilierMobile'

const isActive = (uri, pathname) =>
  uri.match(/(\/.*?)(\/|$)/)[1] === pathname.match(/(\/.*?)(\/|$)/)[1]

const NavigationItem = ({ to, name, pathname }) => (
  <Link to={to}>
    <div
      className={`${styles.item} ${
        isActive(to, pathname) ? styles.active : ''
      }`}
    >
      {name}
    </div>
  </Link>
)

const PhoneButton = () => (
  <div className={styles.item}>
    <div className={styles.phone}>
      <a href="tel:+33176410031">
        <FontAwesomeIcon
          flip="horizontal"
          icon={faPhone}
          className={styles.icon}
        />
        +33 1 76 41 00 31
      </a>
    </div>
  </div>
)

export default class NavBar extends Component {
  state = {
    isOpen: false,
    hasScroll: false,
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenScroll)
  }

  listenScroll = () => {
    window.scrollY > 100
      ? this.setState({ hasScroll: true })
      : this.setState({ hasScroll: false })
  }

  handleClick = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }))
  }

  _SegmenthandleClickCTA() {
    if (window) {
      window.analytics && window.analytics.track('Demo Button Clicked', {})
      if (window && window.ga) {
        window.ga('create', 'UA-124722883-1', 'auto')
        window.ga('send', 'event', 'Button', 'Clicked', 'Demo Button Clicked')
      }
    }
  }

  render() {
    const {
      location: { pathname },
      isTopBannerActive,
    } = this.props
    const { isOpen, hasScroll } = this.state

    return (
      <nav
        className={classnames({
          [styles.topBannerActive]: isTopBannerActive,
          [styles.scrollNavbar]: hasScroll,
        })}
      >
        <div className={styles.desktop}>
          <div className={styles.left}>
            <Link className={styles.companyName} to="/">
              <Logo />
            </Link>
            <div className={styles.items}>
              <div className={`${styles.nav_dropdown} ${styles.item}`}>
                <Link to="/plateforme-cse" className={styles.linkMenu}>
                  {lg.components.navigation.services.title}
                </Link>
                <div className={styles.nav__submenu}>
                  <div className={styles.nav__submenu_parent}>
                    <img src={folder} alt="Découvrez les services de Leeto" />
                    <Link to="/plateforme-cse">
                      {lg.components.navigation.services.title}
                    </Link>
                    <p>{lg.components.navigation.services.description}</p>
                  </div>
                  <ul className={`${styles.nav__submenu_nav} ${styles.item}`}>
                    <li className={styles.nav__submenu_item}>
                      <Link
                        to={lg.components.navigation.services_submenu[0].link}
                      >
                        <div className={styles.title}>
                          <span className="material-icons-round">
                            account_balance_wallet
                          </span>
                          {lg.components.navigation.services_submenu[0].page}
                        </div>
                      </Link>
                    </li>
                    <li className={styles.nav__submenu_item}>
                      <Link
                        to={lg.components.navigation.services_submenu[1].link}
                      >
                        <div className={styles.title}>
                          <span className="material-icons-round">stars</span>
                          {lg.components.navigation.services_submenu[1].page}
                        </div>
                      </Link>
                    </li>
                    <li className={styles.nav__submenu_item}>
                      <Link
                        to={lg.components.navigation.services_submenu[5].link}
                      >
                        <div className={styles.title}>
                          <span className="material-icons-round">
                            local_activity
                          </span>
                          {lg.components.navigation.services_submenu[5].page}
                        </div>
                      </Link>
                    </li>
                    <li className={styles.nav__submenu_item}>
                      <Link
                        to={lg.components.navigation.services_submenu[4].link}
                      >
                        <div className={styles.title}>
                          <span className="material-icons-round">
                            bar_chart
                          </span>
                          {lg.components.navigation.services_submenu[4].page}
                        </div>
                      </Link>
                    </li>
                    <li className={styles.nav__submenu_item}>
                      <Link
                        to={lg.components.navigation.services_submenu[2].link}
                      >
                        <div className={styles.title}>
                          <span className="material-icons-round">science</span>
                          {lg.components.navigation.services_submenu[2].page}
                        </div>
                      </Link>
                    </li>
                    <li className={styles.nav__submenu_item}>
                      <Link
                        to={lg.components.navigation.services_submenu[3].link}
                      >
                        <div className={styles.title}>
                          <span className="material-icons-round">message</span>
                          {lg.components.navigation.services_submenu[3].page}
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <NavigationItem
                pathname={pathname}
                to="/solutions-rh-dirigeants/"
                name="Solutions RH"
              />
              <NavigationItem
                pathname={pathname}
                to="/tarifs/"
                name={lg.components.navigation.pricing}
              />
              <HeaderPagesPilier />
              <div className={`${styles.nav_dropdown} ${styles.item}`}>
                <Link to="/blog" className={styles.linkMenu}>
                  {lg.components.navigation.ressources_parent.title}
                </Link>

                <div className={styles.nav__submenu}>
                  <div className={styles.nav__submenu_parent}>
                    <img src={puzzle} alt="Voir les ressources de Leeto" />

                    <Link to="/blog">
                      {lg.components.navigation.ressources_parent.title}
                    </Link>
                    <p>
                      {lg.components.navigation.ressources_parent.description}
                    </p>
                  </div>
                  <ul className={`${styles.nav__submenu_nav} ${styles.item}`}>
                    <li className={styles.nav__submenu_item}>
                      <Link to={'/blog/'}>
                        <div className={styles.title}>
                          <span className="material-icons-round">
                            library_books
                          </span>
                          {lg.components.navigation.ressources_submenu[0].page}
                        </div>
                      </Link>
                    </li>
                    <li className={styles.nav__submenu_item}>
                      <a
                        href={
                          lg.components.navigation.ressources_submenu[1].link
                        }
                        target="_blank"
                      >
                        <div className={styles.title}>
                          <span className="material-icons-round">groups</span>
                          {lg.components.navigation.ressources_submenu[1].page}
                        </div>
                      </a>
                    </li>
                    <li className={styles.nav__submenu_item}>
                      <a
                        href={
                          lg.components.navigation.ressources_submenu[2].link
                        }
                        target="_blank"
                      >
                        <div className={styles.title}>
                          <span className="material-icons-round">
                            video_library
                          </span>
                          {lg.components.navigation.ressources_submenu[2].page}
                        </div>
                      </a>
                    </li>
                    <li className={styles.nav__submenu_item}>
                      <Link to={'/temoignages-clients/'}>
                        <div className={styles.title}>
                          <span className="material-icons-round">
                            bookmarks
                          </span>
                          {lg.components.navigation.ressources_submenu[3].page}
                        </div>
                      </Link>
                    </li>
                    <li className={styles.nav__submenu_item}>
                      <a
                        href={
                          lg.components.navigation.ressources_submenu[4].link
                        }
                        target="_blank"
                      >
                        <div className={styles.title}>
                          <span className="material-icons">playlist_play</span>
                          {lg.components.navigation.ressources_submenu[4].page}
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <a className={styles.login} href="https://app.leeto.co">
              {lg.components.navigation.login}
            </a>
            <div className={styles.cta} onClick={this._SegmenthandleClickCTA}>
              <AButtonPrimary to="/demande-demo/">
                {lg.components.navigation.demo}
              </AButtonPrimary>
            </div>
          </div>
        </div>
        <div className={styles.mobile}>
          <div className={styles.topbar}>
            <div className={styles.left}>
              <Link className={styles.companyName} to="/">
                <Logo />
              </Link>
            </div>
            <div className={styles.right} onClick={() => this.handleClick()}>
              <div>MENU</div>
              <svg
                className={`${styles.ham} ${styles.hamRotate} ${styles.ham4} ${
                  this.state.isOpen ? styles.active : ''
                }`}
                viewBox="0 0 100 100"
                width="40"
              >
                <path
                  className={`${styles.line} ${styles.top}`}
                  d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20"
                />
                <path className={`${styles.line}`} d="m 70,50 h -40" />
                <path
                  className={`${styles.line} ${styles.bottom}`}
                  d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20"
                />
              </svg>
            </div>
          </div>
          {this.state.isOpen ? (
            <div className={styles.menuList}>
              <MobileNavDropDown
                title={lg.components.navigation.services.title}
                slug="plateforme-cse"
              >
                {lg.components.navigation.services_submenu.map((item, key) => {
                  return (
                    <li key={key}>
                      <Link
                        to={item.link}
                        className={styles.item}
                        activeClassName={styles.active}
                      >
                        {item.page}
                      </Link>
                    </li>
                  )
                })}
              </MobileNavDropDown>
              <hr />
              <NavigationItem
                pathname={pathname}
                to="/tarifs/"
                name={lg.components.navigation.pricing}
              />
              <hr />
              <HeaderPagesPilierMobile pathname={pathname} />
              <hr />
              <MobileNavDropDown
                title={lg.components.navigation.ressources_parent.title}
                slug="blog"
                activeClassName={styles.active}
              >
                {lg.components.navigation.ressources_submenu.map(
                  (item, key) => {
                    return (
                      <li key={key}>
                        <Link
                          to={item.link}
                          className={styles.item}
                          activeClassName={styles.active}
                        >
                          {item.page}
                        </Link>
                      </li>
                    )
                  }
                )}
              </MobileNavDropDown>
              <hr />
              <a className={styles.login} href="https://app.leeto.co">
                {lg.components.navigation.login}
              </a>
              <hr />
              <div className={styles.cta} onClick={this._SegmenthandleClickCTA}>
                <AButtonPrimary to="/demande-demo/">
                  {lg.components.navigation.demo}
                </AButtonPrimary>
              </div>
            </div>
          ) : null}
        </div>
      </nav>
    )
  }
}
