const fs = require('fs-extra');

async function copyDist() {
  try {
    await fs.copy('./dist', 'C:/Users/jbr10/Documents/Git/bSDD-Revit-plugin/BsddRevitPlugin.Logic/html');
    console.log('Successfully copied dist folder!');
  } catch (err) {
    console.error(err);
  }
}

copyDist();