export function isTab(el) {
  return el.type && el.type.name === 'Tab';
}

export function isTabPanel(el) {
  return el.type && el.type.name === 'TabPanel';
}

export function isTabList(el) {
  return el.type && el.type.name === 'TabList';
}