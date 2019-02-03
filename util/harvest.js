// Harvest ALL the videos mentioned in the component pages.
// Only downloads a video if it doesn't already exist in the static/vid folder


const R = require('ramda');
const fs = require('fs');
const Promise = require('bluebird');
const globby = require('globby');
const exec = Promise.promisify(require('child_process').exec);
const path = require('path');
const fuzzy = require('fuzzy');


const contents = fs.readFileSync('../src/components/Calls/HaiChant.vue', { encoding: 'utf-8' });



const extractYummies = (filePath) => {
  const content = fs.readFileSync(filePath, { encoding: 'utf-8' });

  // greetz https://stackoverflow.com/a/3809435/1004931
  const sauceRegex = /sauce:\s+('|")(https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*))('|")/;
  const toRegex = /to:\s+('|")(.+)('|")/;
  const ssRegex = /ss:\s+('|")(.+)('|")/;
  const sauce = R.match(sauceRegex, content);
  const to = R.match(toRegex, content);
  const ss = R.match(ssRegex, content);
  console.log(`sauce:${sauce[2]}, ss:${ss[2]}, to:${to[2]}`)
  return { "sauce": sauce[2], "to": to[2], "ss": ss[2] };
};

const harvest = (data) => {
  console.log(`HARVESTING ${data.sauce} from ${data.ss} to ${data.to}`)
  return exec(`./harvest-video.sh ${data.sauce} ${data.ss} ${data.to}`);
}

const filterBlanks = (data) => {
  if (typeof data.sauce !== 'undefined' && typeof data.to !== 'undefined' && typeof data.ss !== 'undefined') return true;
  return false;
}

// const filterDups = (data) => {
//   const idRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i;
//   const sauce = data.sauce;
//   const inspectedId = R.match(idRegex, sauce)[2];
//   const fuzzyResults = fuzzy.filter()
//
//   // if the inspectedId is in the list of existingIds, reject!
//   if (R.includes(inspectedId, existingIds)) return false;
//   return true;
// }

const getId = (fileName) => {
  return path.basename(fileName, '.mp4');
}


const waitForExistingIdList = globby(['../static/vid/**/*.mp4']).then((files) => {
  return Promise.map(files, getId);
});

const waitForFileList = globby(['../src/components/**/*.vue']).then((componentFiles) => {
  return componentFiles;
});

const waitForVueExtraction = waitForFileList.then((componentFiles) => {
  return Promise.map(componentFiles, extractYummies);
});

const waitForBlankFilter = waitForVueExtraction.then((data) => {
  return Promise.filter(data, filterBlanks);
});

const waitForHarvest = waitForBlankFilter.then((data) => {
  return Promise.mapSeries(data, harvest);
});


waitForHarvest.then((data) => {
  console.log(`all done! data:${data}`);
}).catch((e) => {
  console.error(e);
});

/**
  we want this:
  [
    { url: "https://youtube.com/watch&v=893489234", ss: "4:20", to: "7:34" },
    { ... },
    { ... }
  ]
*/
