const Discord = require("discord.js"); // cheese
require("dotenv/config");
const client = new Discord.Client();

client.login(process.env.ADMIN_TOKEN);

var list_of_bad_words = [
    'can',
    'need',
    'want',
    'give',
    'please',
    'gib',
    'plis',
    'have',
    'get',
    'acquire',
    'must',
    'become',
    'handover',
    'sanjit'
];

var list_of_supreme_leader = [
    'admin',
    'dictator',
    'supremeleader',
    'mod'
];

console.log('ready')
client.on('message', message => {
    msg = slugify(message.content.toLowerCase()).toLowerCase();
    bad_message = false;
    leader_message = false;
    list_of_bad_words.forEach(word => {
        if (msg.includes(word)) {
            bad_message = true;
        }
    });
    list_of_supreme_leader.forEach(word => {
        if (msg.includes(word)) {
            leader_message = true;
        }
    });
    if (bad_message && leader_message && !message.author.id.includes('sanjitsarda')) {
        message.delete();
        message.channel.send("No fuck off");
    }
});



function slugify(str) {
    var map = {
        'a': 'á|à|ã|â|À|Á|Ã|Â|ä|α',
        'b': 'β',
        'c': 'γ',
        'd': 'δ',
        'e': 'é|è|ê|É|È|Ê|ε',
        'f': 'F',
        'h': 'η',
        'i': 'í|ì|î|Í|Ì|Î|ī|ι',
        'j': 'J',
        'k': 'κ',
        'l': 'λ',
        'o': 'ó|ò|ô|õ|Ó|Ò|Ô|Õ',
        'u': 'ú|ù|û|ü|Ú|Ù|Û|Ü',
        'c': 'ç|Ç',
        'n': 'ñ|Ñ|ń',
        '': ' |,|\\.'
    };

    for (var pattern in map) {
        str = str.replace(new RegExp(map[pattern], 'g'), pattern);
    };

    return str;
};