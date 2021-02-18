const Discord = require("discord.js"); // cheese
require("dotenv/config");
const axios = require("axios");
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
    'worthy',
    'bad',
    'sanjit'
];

var list_of_supreme_leader = [
    'admin',
    'dictator',
    'supremeleader',
    'mod',
    'mxu892'
];

client.on('ready', () => { client.user.setActivity('fucking people over since 1973'); });

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

client.on('messageUpdate', (bad, message) => {
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

client.on('message', (message) => {
    if (message.channel.id == "789192040633597963") {
        bad_message = true;
        notdoneyet = false;
        msg = message.content.toLowerCase();
        if (msg == "so") {
            bad_message = false;
        } else if (msg.includes("https") && (msg.includes("so-") || msg.includes("-so"))) {
            notdoneyet = true;
            axios.get(msg)
                .then(function (response) {
                    bad_message = false;
                    notdoneyet = false;
                })
                .catch(function (error) {
                    bad_message = true;
                    notdoneyet = false;
                })
        }
        while (notdoneyet) { }
        if (bad_message) {
            message.delete();
            message.author.send("No Fuck off")
        }
    }
});

client.on('messageUpdate', (bad, message) => {
    if (message.channel.id == "789192040633597963") {
        bad_message = true;
        msg = message.content.toLowerCase();
        if (msg == "so") {
            bad_message = false;
        } else if (msg.includes("https") && (msg.includes("so-") || msg.includes("-so"))) {
            axios.get(msg)
                .then(function (response) {
                    bad_message = false;
                })
                .catch(function (error) {
                    bad_message = true;
                })
        }
        if (bad_message) {
            message.delete();
            message.author.send("No Fuck off")
        }
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
        '': ' |,|\\.|\\*'
    };

    for (var pattern in map) {
        str = str.replace(new RegExp(map[pattern], 'g'), pattern);
    };

    return str;
};




axios.get('')
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    })