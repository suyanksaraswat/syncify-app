// Scrap itunes TOP # podcasts and save JSON to local files
const fetch = require('node-fetch');
const podcastFeedParser = require("podcast-feed-parser")
var fs = require('fs');

var path = '';
var numOfPodcasts = 100;

async function getAndSaveJson (url,filename) {
    const podcast = await podcastFeedParser.getPodcastFromURL(url);
    fs.writeFile(path+filename, JSON.stringify(podcast), function(err) {
        if (err) {
            console.log(err);
        }
    });
}

console.log(`Obtaining Top ${numOfPodcasts} Podcasts from ITUNES`);

fetch(`http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/toppodcasts/limit=${numOfPodcasts}/json`)
    .then(response => response.json())
    .then(data => {
        data.feed.entry.forEach(element => {
            let id = element.id.attributes['im:id']
            fetch(`https://itunes.apple.com/lookup?entity=podcast&id=${id}`)
                .then(response => response.json())
                .then(data => {
                    let podcast = data.results[0].collectionName;
                    let feedURL = data.results[0].feedUrl;
                    let filename = podcast.replace(/[^a-z0-9]/gi, '_').toLowerCase() + '.json';
                    getAndSaveJson(feedURL,filename);
                    //console.log(filename + ': ' + podcast + ': ' + feedURL);
                });
        })
    });