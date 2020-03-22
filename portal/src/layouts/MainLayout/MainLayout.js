import React, { Component } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Chat } from "Components";

class MainLayout extends Component {
  state = {
    drawerOpen: false
  };

  handleDrawerMenuClick = () => {
    this.setState({
      drawerOpen: !this.state.drawerOpen
    });
  };

  handleCloseDrawer = () => {
    this.setState({
      drawerOpen: false
    });
  };

  renderSidebar() {
    return (
      <Sidebar
        open={this.state.drawerOpen}
        onCloseDrawer={this.handleDrawerMenuClick}
      />
    );
  }

  renderHeader() {
    return <Header onDrawerMenuClick={this.handleDrawerMenuClick} />;
  }

  renderFooter() {
    return <Footer />;
  }

  render() {
    return (
      <div className="wrapper">
        {this.renderSidebar()}
        <div className="content-page">
          <div className="content">
            {this.renderHeader()}
            {this.props.children}
          </div>
          {this.renderFooter()}
        </div>
        <Chat />
      </div>
    );
  }
}

export default MainLayout;
