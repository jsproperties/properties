// Import PEG.js generated parser through pegjs-loader
import * as PropertiesParser from './properties.pegjs';

// Reexport everything PEG.js generated parser exports
export * from './properties.pegjs';
// Export everything this module exports as a default export
export default PropertiesParser;
