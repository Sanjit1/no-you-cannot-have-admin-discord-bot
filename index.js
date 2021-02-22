const Discord = require("discord.js"); // cheese
require("dotenv/config");
const axios = require("axios");
const client = new Discord.Client();

client.login(process.env.ADMIN_TOKEN);

var list_of_insults = [
    "No Fuck off",
    "No fuck off",
    "Shut the fuck up",
    "SO you think you are so smart? Fuck off",
    "Fuck off <@usern>",
    "No Fuck off <@usern>",
    "Eat shit",
    "Stop acting smart",
    "Dont make me t@ban <@usern>",
    "<@usern> Listen to me. Somewhere there is a tree producing oxygen for you. You must apologize to it immediately.",
    "When I see <@usern>'s face, I would never change a thing. Except for the direction I am walking",

]

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
//(list_of_insults[Math.floor(Math.random() * list_of_insults.length)]).replace("usern", message.user.id)

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
        message.channel.send((list_of_insults[Math.floor(Math.random() * list_of_insults.length)]).replace("usern", message.author.id));
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
        message.channel.send((list_of_insults[Math.floor(Math.random() * list_of_insults.length)]).replace("usern", message.author.id));
    }
});

client.on('message', (message) => {
    if (message.channel.id == "789192040633597963") {
        msg = message.content.toLowerCase();
        if (msg.includes("https") && (msg.includes("so-") || msg.includes("-so"))) {
            axios.get(msg)
                .then(function (response) {
                })
                .catch(function (error) {
                    message.delete();
                    message.author.send((list_of_insults[Math.floor(Math.random() * list_of_insults.length)]).replace("usern", message.author.id))
                })
        } else if (msg != "so" || message.attachments.size > 0) {
            message.delete();
            message.author.send((list_of_insults[Math.floor(Math.random() * list_of_insults.length)]).replace("usern", message.author.id))
        }
    }
});

client.on('messageUpdate', (bad, message) => {
    if (message.channel.id == "789192040633597963") {
        msg = message.content.toLowerCase();
        if (msg.includes("https") && (msg.includes("so-") || msg.includes("-so"))) {
            axios.get(msg)
                .then(function (response) {
                })
                .catch(function (error) {
                    message.delete();
                    message.author.send((list_of_insults[Math.floor(Math.random() * list_of_insults.length)]).replace("usern", message.author.id))
                })
        } else if (msg != "so" || message.attachments.size > 0) {
            message.delete();
            message.author.send((list_of_insults[Math.floor(Math.random() * list_of_insults.length)]).replace("usern", message.author.id))
        }
    }
});


client.on('message', (message) => {
    if (message.author.id == "542937555251888143" && message.content.toLowerCase().startsWith == "afuck") {
        console.log(message.content)
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