/* eslint jsx-a11y/anchor-is-valid: 0 */
import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';

import { Accordion } from 'react-bootstrap';

import { AttendanceIcon /*, BusinessCenterIcon, ClassIcon, DeveloperBoardIcon, MonetizationOnIcon, PermIdentityIcon*/ } from 'assets/images/icons';
import { ScrollView, SVGImage } from 'Components';
import styles from './Sidebar.module.scss';

class Sidebar extends React.Component{
  handlePreventAnchorAction = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <React.Fragment>
        <div id="vertical-sidebar-placeholder" className={classNames(styles.sidebar, { 'sidebar-enable': this.props.open })}>
          <div className={`left-side-menu ${styles.leftSideMenu}`}>
            <ScrollView useSlipScroll className="slimscroll-menu">

              <a href="index.html" className="logo text-center">
                <span className="logo-lg">
                  <SVGImage src={require('assets/images/logo.svg')} alt="" id="side-main-logo" />
                </span>
                <span className="logo-sm">
                  <img src={require('assets/images/logo-sm.png')} alt="" height="32" id="side-sm-main-logo" />
                </span>
              </a>

              <Accordion>
                <ul className="metismenu side-nav">
                  <li className={`side-nav-title side-nav-item`}>Navigation</li>
                  {/* <li className={`side-nav-item`}>
                    <Accordion.Toggle as="a" href="#" className={`side-nav-link ${styles.sideNavLink}`} variant="link" eventKey="dashboard" onClick={this.handlePreventAnchorAction}>
                      <DeveloperBoardIcon className={styles.navIcon} />
                      <span className="badge badge-success float-right">3</span>
                      <span> Dashboards </span>
                    </Accordion.Toggle> */}
                    {/* <Accordion.Collapse eventKey="dashboard">
                      <ul className="side-nav-second-level">
                        <li>
                          <a href="index.html">Ecommerce</a>
                        </li>
                        <li>
                          <a href="dashboard-crm.html">CRM</a>
                        </li>
                        <li>
                          <a href="dashboard-projects.html">Projects</a>
                        </li>
                      </ul>
                    </Accordion.Collapse> */}
                  {/* </li> */}

                  {/* <li className={`side-nav-item`}>
                    <Link to="/lesson-attendance" className={`side-nav-link ${styles.sideNavLink}`}>
                      <AttendanceIcon className={styles.navIcon} />
                      <span> Attendance </span>
                    </Link>
                  </li> */}
                  <li className={`side-nav-item`}>
                    <Link to="/" className={`side-nav-link ${styles.sideNavLink}`}>
                      <AttendanceIcon className={styles.navIcon} />
                      <span> Home </span>
                    </Link>
                  </li>
                  <li className={`side-nav-item`}>
                    <Link to="/analytics" className={`side-nav-link ${styles.sideNavLink}`}>
                      <AttendanceIcon className={styles.navIcon} />
                      <span> Analytics </span>
                    </Link>
                  </li>
                  <li className={`side-nav-item`}>
                    <Link to="/category" className={`side-nav-link ${styles.sideNavLink}`}>
                      <AttendanceIcon className={styles.navIcon} />
                      <span> Category </span>
                    </Link>
                  </li>
                  {/* <li className="side-nav-item">
                    <Accordion.Toggle as="a" href="#" className={`side-nav-link ${styles.sideNavLink}`} variant="link" eventKey="clients">
                      <PermIdentityIcon className={styles.navIcon} />
                      <span> Clients </span>
                      <span className="menu-arrow"></span>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="apps">
                      <Accordion>
                        <ul className="side-nav-second-level">
                          <li>
                            <a href="apps-calendar.html">Calendar</a>
                          </li>
                          <li className="side-nav-item">
                            <Accordion.Toggle as="a" href="#" variant="link" eventKey="apps-projects">
                              Projects
                              <span className="menu-arrow"></span>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="apps-projects">
                              <ul className="side-nav-third-level">
                                <li>
                                  <a href="apps-projects-list.html">List</a>
                                </li>
                                <li>
                                  <a href="apps-projects-details.html">Details</a>
                                </li>
                              </ul>
                            </Accordion.Collapse>
                          </li>
                          <li>
                            <a href="apps-tasks.html">Tasks</a>
                          </li>
                          <li className="side-nav-item">
                            <Accordion.Toggle as="a" href="#" variant="link" eventKey="apps-ecommorce">
                              eCommerce
                            <span className="menu-arrow"></span>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="apps-ecommorce">
                              <ul className="side-nav-third-level" aria-expanded="false">
                                <li>
                                  <a href="apps-ecommerce-products.html">Products</a>
                                </li>
                                <li>
                                  <a href="apps-ecommerce-products-details.html">Products Details</a>
                                </li>
                                <li>
                                  <a href="apps-ecommerce-orders.html">Orders</a>
                                </li>
                                <li>
                                  <a href="apps-ecommerce-orders-details.html">Order Details</a>
                                </li>
                                <li>
                                  <a href="apps-ecommerce-customers.html">Customers</a>
                                </li>
                                <li>
                                  <a href="apps-ecommerce-shopping-cart.html">Shopping Cart</a>
                                </li>
                                <li>
                                  <a href="apps-ecommerce-checkout.html">Checkout</a>
                                </li>
                                <li>
                                  <a href="apps-ecommerce-sellers.html">Sellers</a>
                                </li>
                              </ul>
                            </Accordion.Collapse>
                          </li>
                          <li className="side-nav-item">
                            <Accordion.Toggle as="a" href="#" variant="link" eventKey="apps-email">
                              Email
                            <span className="menu-arrow"></span>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="apps-email">
                              <ul className="side-nav-third-level" aria-expanded="false">
                                <li>
                                  <a href="apps-email-inbox.html">Inbox</a>
                                </li>
                                <li>
                                  <a href="apps-email-read.html">Read Email</a>
                                </li>
                              </ul>
                            </Accordion.Collapse>
                          </li>
                        </ul>
                      </Accordion>
                    </Accordion.Collapse>
                  </li> */}

                  {/* <li className="side-nav-item">
                    <Accordion.Toggle as="a" href="#" className={`side-nav-link ${styles.sideNavLink}`} variant="link" eventKey="programs">
                      <ClassIcon className={styles.navIcon} />
                      <span> Programs </span>
                      <span className="menu-arrow"></span>
                    </Accordion.Toggle>
                  </li> */}
                  {/* <li className="side-nav-item">
                    <Accordion.Toggle as="a" href="#" className={`side-nav-link ${styles.sideNavLink}`} variant="link" eventKey="programs">
                      <MonetizationOnIcon className={styles.navIcon} />
                      <span> Finances </span>
                      <span className="menu-arrow"></span>
                    </Accordion.Toggle>
                  </li> */}
                  {/* <li className="side-nav-item">
                    <Accordion.Toggle as="a" href="#" className={`side-nav-link ${styles.sideNavLink}`} variant="link" eventKey="programs">
                      <BusinessCenterIcon className={styles.navIcon} />
                      <span> Business </span>
                      <span className="menu-arrow"></span>
                    </Accordion.Toggle>
                  </li> */}

                  {/* <li className="side-nav-item">
                    <Accordion.Toggle as="a" href="#" className="side-nav-link" variant="link" eventKey="pages">
                      <i className="dripicons-copy"></i>
                      <span> Pages </span>
                      <span className="menu-arrow"></span>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="pages">
                      <Accordion>
                        <ul className="side-nav-second-level">
                          <li>
                            <a href="pages-starter.html">Starter Page</a>
                          </li>
                          <li>
                            <a href="pages-preloader.html">With Preloader</a>
                          </li>
                          <li>
                            <a href="pages-profile.html">Profile</a>
                          </li>
                          <li>
                            <a href="pages-invoice.html">Invoice</a>
                          </li>
                          <li>
                            <a href="pages-faq.html">FAQ</a>
                          </li>
                          <li>
                            <a href="pages-pricing.html">Pricing</a>
                          </li>
                          <li>
                            <a href="pages-maintenance.html">Maintenance</a>
                          </li>
                          <li className="side-nav-item">
                            <Accordion.Toggle as="a" href="#" variant="link" eventKey="pages-authentication">
                              Authentication
                            <span className="menu-arrow"></span>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="pages-authentication">
                              <ul className="side-nav-third-level" aria-expanded="false">
                                <li>
                                  <a href="pages-login.html">Login</a>
                                </li>
                                <li>
                                  <a href="pages-login-2.html">Login 2</a>
                                </li>
                                <li>
                                  <a href="pages-register.html">Register</a>
                                </li>
                                <li>
                                  <a href="pages-register-2.html">Register 2</a>
                                </li>
                                <li>
                                  <a href="pages-logout.html">Logout</a>
                                </li>
                                <li>
                                  <a href="pages-logout-2.html">Logout 2</a>
                                </li>
                                <li>
                                  <a href="pages-recoverpw.html">Recover Password</a>
                                </li>
                                <li>
                                  <a href="pages-recoverpw-2.html">Recover Password 2</a>
                                </li>
                                <li>
                                  <a href="pages-lock-screen.html">Lock Screen</a>
                                </li>
                                <li>
                                  <a href="pages-lock-screen-2.html">Lock Screen 2</a>
                                </li>
                                <li>
                                  <a href="pages-confirm-mail.html">Confirm Mail</a>
                                </li>
                                <li>
                                  <a href="pages-confirm-mail-2.html">Confirm Mail 2</a>
                                </li>
                              </ul>
                            </Accordion.Collapse>
                          </li>
                          <li className="side-nav-item">
                            <Accordion.Toggle as="a" href="#" variant="link" eventKey="pages-error">
                              Error
                            <span className="menu-arrow"></span>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="pages-error">
                              <ul className="side-nav-third-level" aria-expanded="false">
                                <li>
                                  <a href="pages-404.html">Error 404</a>
                                </li>
                                <li>
                                  <a href="pages-404-alt.html">Error 404-alt</a>
                                </li>
                                <li>
                                  <a href="pages-500.html">Error 500</a>
                                </li>
                              </ul>
                            </Accordion.Collapse>
                          </li>
                        </ul>
                      </Accordion>
                    </Accordion.Collapse>
                  </li> */}
{/* 
                  <li className="side-nav-title side-nav-item mt-1">Components</li>

                  <li className="side-nav-item">
                    <Accordion.Toggle as="a" href="#" className="side-nav-link" variant="link" eventKey="uikit">
                      <i className="dripicons-briefcase"></i>
                      <span> UI Kit </span>
                      <span className="menu-arrow"></span>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="uikit">
                      <ul className="side-nav-second-level">
                        <li>
                          <a href="ui-cards.html">Cards</a>
                        </li>
                        <li>
                          <a href="ui-buttons.html">Buttons</a>
                        </li>
                        <li>
                          <a href="ui-modals.html">Modals</a>
                        </li>
                        <li>
                          <a href="ui-tabs.html">Tabs</a>
                        </li>
                        <li>
                          <a href="ui-notifications.html">Notifications</a>
                        </li>
                        <li>
                          <a href="ui-grid.html">Grid</a>
                        </li>
                        <li>
                          <a href="ui-general.html">General</a>
                        </li>
                        <li>
                          <a href="ui-typography.html">Typography</a>
                        </li>
                        <li>
                          <a href="ui-icons.html">Icons</a>
                        </li>
                        <li>
                          <a href="ui-spinners.html">Spinners</a>
                        </li>
                        <li>
                          <a href="ui-dragula.html">Dragula</a>
                        </li>
                      </ul>
                    </Accordion.Collapse>
                  </li>

                  <li className="side-nav-item">
                    <a href="widgets.html" className="side-nav-link">
                      <i className="dripicons-heart"></i>
                      <span className="badge badge-light float-right">New</span>
                      <span> Widgets </span>
                    </a>
                  </li>

                  <li className="side-nav-item">
                    <Accordion.Toggle as="a" href="#" className="side-nav-link" variant="link" eventKey="forms">
                      <i className="dripicons-document"></i>
                      <span> Forms </span>
                      <span className="menu-arrow"></span>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="forms">
                      <ul className="side-nav-second-level">
                        <li>
                          <a href="form-elements.html">Basic Elements</a>
                        </li>
                        <li>
                          <a href="form-advanced.html">Form Advanced</a>
                        </li>
                        <li>
                          <a href="form-validation.html">Validation</a>
                        </li>
                        <li>
                          <a href="form-wizard.html">Wizard</a>
                        </li>
                        <li>
                          <a href="form-fileuploads.html">File Uploads</a>
                        </li>
                        <li>
                          <a href="form-editors.html">Editors</a>
                        </li>
                      </ul>
                    </Accordion.Collapse>
                  </li>

                  <li className="side-nav-item">
                    <Accordion.Toggle as="a" href="#" className="side-nav-link" variant="link" eventKey="charts">
                      <i className="dripicons-graph-pie"></i>
                      <span> Charts </span>
                      <span className="menu-arrow"></span>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="charts">
                      <Accordion>
                        <ul className="side-nav-second-level">
                          <li>
                            <a href="charts-chartjs.html">Chartjs</a>
                          </li>
                          <li>
                            <a href="charts-brite.html">Britecharts</a>
                          </li>
                          <li className="side-nav-item">
                            <Accordion.Toggle as="a" href="#" variant="link" eventKey="chart-apex">
                              Apex Charts
                            <span className="menu-arrow"></span>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="chart-apex">
                              <ul className="side-nav-third-level" aria-expanded="false">
                                <li>
                                  <a href="charts-apex-line.html">Line</a>
                                </li>
                                <li>
                                  <a href="charts-apex-area.html">Area</a>
                                </li>
                                <li>
                                  <a href="charts-apex-column.html">Column</a>
                                </li>
                                <li>
                                  <a href="charts-apex-bar.html">Bar</a>
                                </li>
                                <li>
                                  <a href="charts-apex-mixed.html">Mixed</a>
                                </li>
                                <li>
                                  <a href="charts-apex-bubble.html">Bubble</a>
                                </li>
                                <li>
                                  <a href="charts-apex-scatter.html">Scatter</a>
                                </li>
                                <li>
                                  <a href="charts-apex-pie.html">Pie</a>
                                </li>
                                <li>
                                  <a href="charts-apex-radialbar.html">RadialBar</a>
                                </li>
                                <li>
                                  <a href="charts-apex-heatmap.html">Heatmap</a>
                                </li>
                                <li>
                                  <a href="charts-apex-sparklines.html">Sparklines</a>
                                </li>
                                <li>
                                  <a href="charts-apex-candlestick.html">Candlestick</a>
                                </li>
                                <li>
                                  <a href="charts-apex-radar.html">Radar</a>
                                </li>
                              </ul>
                            </Accordion.Collapse>
                          </li>
                          <li>
                            <a href="charts-sparkline.html">Sparklines</a>
                          </li>
                        </ul>
                      </Accordion>
                    </Accordion.Collapse>
                  </li>

                  <li className="side-nav-item">
                    <Accordion.Toggle as="a" href="#" className="side-nav-link" variant="link" eventKey="tables">
                      <i className="dripicons-list"></i>
                      <span> Tables </span>
                      <span className="menu-arrow"></span>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="tables">
                      <ul className="side-nav-second-level">
                        <li>
                          <a href="tables-basic.html">Basic Tables</a>
                        </li>
                        <li>
                          <a href="tables-datatable.html">Data Tables</a>
                        </li>
                      </ul>
                    </Accordion.Collapse>
                  </li>

                  <li className="side-nav-item">
                    <Accordion.Toggle as="a" href="#" className="side-nav-link" variant="link" eventKey="maps">
                      <i className="dripicons-location"></i>
                      <span> Maps </span>
                      <span className="menu-arrow"></span>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="maps">
                      <ul className="side-nav-second-level">
                        <li>
                          <a href="maps-google.html">Google Maps</a>
                        </li>
                        <li>
                          <a href="maps-vector.html">Vector Maps</a>
                        </li>
                      </ul>
                    </Accordion.Collapse>
                  </li>

                  <li className="side-nav-item">
                    <Accordion.Toggle as="a" href="#" className="side-nav-link" variant="link" eventKey="multi-level">
                      <i className="dripicons-network-1"></i>
                      <span> Multi Level </span>
                      <span className="menu-arrow"></span>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="multi-level">
                      <Accordion>
                        <ul className="side-nav-second-level">
                          <li className="side-nav-item">
                            <Accordion.Toggle as="a" href="#" variant="link" eventKey="second-level">
                              Second Level
                            <span className="menu-arrow"></span>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="second-level">
                              <ul className="side-nav-third-level" aria-expanded="false">
                                <li>
                                  <a href="#">Item 1</a>
                                </li>
                                <li>
                                  <a href="#">Item 2</a>
                                </li>
                              </ul>
                            </Accordion.Collapse>
                          </li>
                          <li className="side-nav-item">
                            <Accordion.Toggle as="a" href="#" variant="link" eventKey="third-level">
                              Third Level
                            <span className="menu-arrow"></span>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="third-level">
                              <Accordion>
                                <ul className="side-nav-third-level" aria-expanded="false">
                                  <li>
                                    <a href="#">Item 1</a>
                                  </li>
                                  <li className="side-nav-item">
                                    <Accordion.Toggle as="a" href="#" variant="link" eventKey="item-2">
                                      Item 2
                                    <span className="menu-arrow"></span>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="item-2">
                                      <ul className="side-nav-forth-level" aria-expanded="false">
                                        <li>
                                          <a href="#">Item 2.1</a>
                                        </li>
                                        <li>
                                          <a href="#">Item 2.2</a>
                                        </li>
                                      </ul>
                                    </Accordion.Collapse>
                                  </li>
                                </ul>
                              </Accordion>
                            </Accordion.Collapse>
                          </li>
                        </ul>
                      </Accordion>
                    </Accordion.Collapse>
                  </li> */}

                </ul>
              </Accordion>

              {/* <div className="help-box text-white text-center">
                <a href="#" className="float-right close-btn text-white">
                  <i className="mdi mdi-close"></i>
                </a>
                <img src={require('assets/images/help-icon.svg')} height="90" alt="Helper Icon" />
                <h5 className="mt-3">Unlimited Access</h5>
                <p className="mb-3">Upgrade to plan to get access to unlimited reports</p>
                <a href="#" className="btn btn-outline-light btn-sm">Upgrade</a>
              </div> */}

              <div className="clearfix"></div>

            </ScrollView>

          </div>
        </div>
        <div id="detached-sidebar-placeholder"></div>
        <div className={classNames({ [styles.overlay]: this.props.open })} onClick={this.props.onCloseDrawer}></div>
      </React.Fragment >
    );
  }
}

export default Sidebar;
