import React from 'react';



export const Sidebar = ({ items, location, onClick }) => {
  const renderContent = (item) => {
    return (
      <button className="sidebar-section" onClick={() => onClick(item.link)} key={item.title}>
        <h3 className="sidebar-section-title">{item.title}</h3>
      </button>
    );
  };
  return (
    <div className="sidebar">
      {items && items.length > 0 && items.map(item => renderContent(item))}

      {/* <div className="sidebar content">
        {renderSections(menuSections)}
      </div> */}
    </div>
  );
};

export default Sidebar;

//
// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import actions from 'actions';
//
//
// import { Link } from 'react-router-dom';
// import Collapsible from 'react-collapsible';
//
// const headerTitle = (location, menuSections, extraHeaderTitles) => {
//   let menu = '';
//   let subMenu = '';
//   if (location.pathname) {
//     menuSections.forEach((section) => {
//       const matchItem = section.items.filter(item => location.pathname.includes(item.linkTo));
//       if (matchItem.length > 0) {
//         menu = section.title;
//         subMenu = matchItem[0].title;
//       }
//     });
//     if (!menu) {
//       const matchRoute = extraHeaderTitles.filter(header => location.pathname.includes(header.route));
//       if (matchRoute.length > 0) {
//         menu = matchRoute[0].menu;
//         subMenu = matchRoute[0].subMenu;
//       } else {
//         menu = '대시보드';
//       }
//     }
//   }
//   return { menu, subMenu };
// };
//
// const renderLinks = section => section.items.map(item => (
//   <Link key={item.title} to={item.linkTo}>
//     {item.title}
//   </Link>
// ));
//
// const renderSectionTitle = (title, menuSections) => {
//   let iconName = '';
//   menuSections.forEach((section) => {
//     if (section.title === title) iconName = section.icon;
//   });
//   return <div className="inner-section"><i className="material-icons">{iconName}</i><span>{title}</span></div>;
// };
//
// const renderSections = menuSections => menuSections.map(section => (
//   <Collapsible
//     key={section.title}
//     trigger={renderSectionTitle(section.title, menuSections)}
//     transitionTime={200}
//   >
//     {renderLinks(section)}
//   </Collapsible>
// ));
//
// class SideBar extends Component {
//   renderContent() {
//     return (
//       <div className="sidebar-section">
//         <h3 className="sidebar-section-title">Intents</h3>
//       </div>
//     );
//   }
//   render() {
//     const { authUser, isVisible, extraHeaderTitles, location, menuSections } = this.props;
//     const { menu, subMenu } = headerTitle(location, menuSections, extraHeaderTitles);
//     return (
//       <div className="sidebar">
//         {this.renderContent()}
//
//         {/* <div className="sidebar content">
//           {renderSections(menuSections)}
//         </div> */}
//       </div>
//     );
//   }
// }
//
//
// SideBar = connect(state => ({
//   authenticated: state.auth.authenticated,
//   authUser: state.auth.user,
//   extraHeaderTitles: state.meta.nav.extraHeaderTitles,
//   isLoading: state.meta.isLoading,
//   isMenuVisible: state.meta.isMenuVisible,
//   menuSections: state.meta.nav.menuSections,
//   project: state.project,
// }), actions)(SideBar);
//
// export default SideBar;
