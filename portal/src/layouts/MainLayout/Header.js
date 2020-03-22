// import { getAvatarName } from '@app/helpers/common.helpers';
import React  from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  handleLogout = (event) => {
    event.preventDefault();
    // this.props.logout();
  }

  render() {
    const { onDrawerMenuClick } = this.props;

    return (
      <React.Fragment>
        <div id="vertical-topbar-placeholder">
          <div className="navbar-custom">
            <ul className="list-unstyled topbar-right-menu float-right mb-0">
              {/* <li className="notification-list topbar-dropdown d-lg-block">
                <button className="nav-link dropdown-toggle arrow-none btn btn-link right-bar-toggle">
                  <i className="dripicons-gear noti-icon"></i>
                </button>
              </li> */}

              {/* <li className="dropdown notification-list">
                <a className="nav-link dropdown-toggle arrow-none" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                  <i className="dripicons-bell noti-icon"></i>
                  <span className="noti-icon-badge"></span>
                </a>
                <div className="dropdown-menu dropdown-menu-right dropdown-menu-animated dropdown-lg">

                  <div className="dropdown-item noti-title">
                    <h5 className="m-0">
                      <span className="float-right">
                        <a href="#" className="text-dark">
                          <small>Clear All</small>
                        </a>
                      </span>Notification
                    </h5>
                  </div> */}

                  {/* <div className="slimScrollDiv" style={{ position: 'relative', overflow: 'hidden', width: 'auto', height: 456 }}>
                    <div className="slimscroll" style={{ maxHeight: 230, overflow: 'hidden', width: 'auto', height: 456 }}>

                      <a href="#" className="dropdown-item notify-item">
                        <div className="notify-icon bg-primary">
                          <i className="mdi mdi-comment-account-outline"></i>
                        </div>
                        <p className="notify-details">Caleb Flakelar commented on Admin
                            <small className="text-muted">1 min ago</small>
                        </p>
                      </a>

                      <a href="#" className="dropdown-item notify-item">
                        <div className="notify-icon bg-info">
                          <i className="mdi mdi-account-plus"></i>
                        </div>
                        <p className="notify-details">New user registered.
                            <small className="text-muted">5 hours ago</small>
                        </p>
                      </a>

                      <a href="#" className="dropdown-item notify-item">
                        <div className="notify-icon">
                          <img src={require('assets/images/users/avatar-2.jpg')} className="img-fluid rounded-circle" alt="" /> </div>
                        <p className="notify-details">Cristina Pride</p>
                        <p className="text-muted mb-0 user-msg">
                          <small>Hi, How are you? What about our next meeting</small>
                        </p>
                      </a>

                      <a href="#" className="dropdown-item notify-item">
                        <div className="notify-icon bg-primary">
                          <i className="mdi mdi-comment-account-outline"></i>
                        </div>
                        <p className="notify-details">Caleb Flakelar commented on Admin
                            <small className="text-muted">4 days ago</small>
                        </p>
                      </a>

                      <a href="#" className="dropdown-item notify-item">
                        <div className="notify-icon">
                          <img src={require('assets/images/users/avatar-4.jpg')} className="img-fluid rounded-circle" alt="" /> </div>
                        <p className="notify-details">Karen Robinson</p>
                        <p className="text-muted mb-0 user-msg">
                          <small>Wow ! this admin looks good and awesome design</small>
                        </p>
                      </a>

                      <a href="#" className="dropdown-item notify-item">
                        <div className="notify-icon bg-info">
                          <i className="mdi mdi-heart"></i>
                        </div>
                        <p className="notify-details">Carlos Crouch liked
                            <b>Admin</b>
                          <small className="text-muted">13 days ago</small>
                        </p>
                      </a>
                    </div>
                    <div className="slimScrollBar" style={{ background: 'rgb(158, 165, 171)', width: 5, position: 'absolute', top: 0, opacity: 0.4, display: 'block', borderRadius: 7, zIndex: 99, right: 1, height: 138.482 }}></div>
                    <div className="slimScrollRail" style={{ width: 5, height: '100%', position: 'absolute', top: 0, display: 'none', borderRadius: 7, background: 'rgb(51, 51, 51)', opacity: 0.2, zIndex: 90, right: 1 }}></div>
                  </div>

                  <a href="#" className="dropdown-item text-center text-primary notify-item notify-all">
                    View All
                  </a> */}

                {/* </div>
              </li> */}

              <li className="dropdown notification-list">
                <Link className="nav-link dropdown-toggle nav-user arrow-none mr-0" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false" to="/patient">
                  <span className="account-user-avatar">
                    {/* <img src={require('assets/images/users/avatar-1.jpg')} alt="user" className="rounded-circle" /> */}
                    <div style={{ width: 32, height: 32 }} className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center">
                      <span>{'test'}</span>
                    </div>
                  </span>
                  <span>
                    <span className="account-user-name">User Name</span>
                    <span className="account-position">Doctor AI</span>
                  </span>
                </Link>
                <div className="dropdown-menu dropdown-menu-right dropdown-menu-animated topbar-dropdown-menu profile-dropdown">
              
                  {/* <div className=" dropdown-header noti-title">
                    <h6 className="text-overflow m-0">Welcome !</h6>
                  </div>

                  <a href="#" className="dropdown-item notify-item">
                    <i className="mdi mdi-account-circle mr-1"></i>
                    <span>My Account</span>
                  </a>

                  <a href="#" className="dropdown-item notify-item">
                    <i className="mdi mdi-account-edit mr-1"></i>
                    <span>Settings</span>
                  </a>

                  <a href="#" className="dropdown-item notify-item">
                    <i className="mdi mdi-lifebuoy mr-1"></i>
                    <span>Support</span>
                  </a>

                  <a href="#" className="dropdown-item notify-item">
                    <i className="mdi mdi-lock-outline mr-1"></i>
                    <span>Lock Screen</span>
                  </a> */}

                  <Link href="/" className="dropdown-item notify-item" onClick={this.handleLogout}>
                    <i className="mdi mdi-logout mr-1"></i>
                    <span>Logout</span>
                  </Link>

                </div>
              </li>

            </ul>
            <button className="button-menu-mobile open-left disable-btn" onClick={onDrawerMenuClick}>
              <i className="mdi mdi-menu"></i>
            </button>
            <div className="app-search">
              <form>
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Search..." />
                  <span className="mdi mdi-magnify"></span>
                  <div className="input-group-append">
                    <button className="btn btn-primary" type="submit">Search</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div id="horizontal-topbar-placeholder"></div>
      </React.Fragment>
    );
  }
}

export default Header;