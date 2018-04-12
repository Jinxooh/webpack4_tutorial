import React, { cloneElement, Component } from 'react';
import { isTabList, isTab, isTabPanel } from './helpers/elementTypes';
import { deepMap } from './helpers/childrenDeepMap';

class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTapIndex: 0,
    };
    this.renderChildren = this.renderChildren.bind(this);
    this.onTabClick = this.onTabClick.bind(this);
  }

  onTabClick(index) {
    this.setState({
      currentTapIndex: index,
    });
  }

  renderChildren() {
    const { children: tabs } = this.props;
    const { currentTapIndex } = this.state;
    const { onTabClick } = this;
    let panelIndex = 0;

    return deepMap(tabs, (child) => {
      let result = child;

      if (isTabList(child)) {
        let listIndex = 0;
        const { children: tabsList } = child.props;

        result = cloneElement(child, {
          children: deepMap(tabsList, (tab) => {
            const props = {
              selected: listIndex === currentTapIndex,
              listIndex,
              onTabClick,
            };
            listIndex += 1;

            return cloneElement(tab, props);
          }),
        });
      }

      if (isTabPanel(child)) {
        const props = {
          selected: panelIndex === currentTapIndex,
        };

        panelIndex += 1;
        return cloneElement(child, props);
      }
      return result;
    });
  }

  render() {
    const { renderChildren } = this;
    return (
      <div className="tabs">
        {renderChildren()}
      </div>
    );
  }
}

export default Tabs;
