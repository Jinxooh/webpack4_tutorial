export function isTab(el) {
  return el.type && (el.type.displayName === 'Tab' || el.type.name === 'Tab');
}

export function isTabPanel(el) {
  return el.type && (el.type.displayName === 'TabPanel' || el.type.name === 'TabPanel');
}

export function isTabList(el) {
  return el.type && (el.type.displayName === 'TabList' || el.type.name === 'TabList');
}
