const akaneko = require('akaneko');

const tags = [
    `bdsm`,
    `ass`,
    `blowjob`,
    `cum`,
    `doujin`,
    `feet`,
    `femdom`,
    `foxgirl`,
    `gifs`,
    `glasses`,
    `zettaiRyouiki`,
    `yuri`,
    `uniform`,
    `thighs`,
    `tentacles`,
    `succubus`,
    `school`,
    `pussy`,
    `panties`,
    `orgy`,
    `masturbation`,
    `maid`,
    `netorare`,
    `hentai`,
]

function getHentaiImage()
{
    return eval(`akaneko.nsfw.` + tags[Math.floor(Math.random() * tags.length)] + `()`);
}

module.exports.getHentaiImage = getHentaiImage;
