const Discord = require("discord.js"); // cheese
require("dotenv/config");
const axios = require("axios");
const client = new Discord.Client();
const usedAFuck = new Set();

rate_limit_in_last_10_s = false;

client.login(process.env.ADMIN_TOKEN);

var list_of_nameless_insults = [
    "No Fuck off",
    "No fuck off",
    "Shut the fuck up",
    "SO you think you are so smart? Fuck off",
    "No Fuck off <@usern>",
    "Eat shit",
    "Stop acting smart",
    "Do you love nature despite what it did to you.",
    "Dont waste my time.",
    "Dont worry there are other people who are not talented."
]

var list_of_named_insults = [
    "Fuck off <@usern>",
    "Eat shit <@usern>",
    "Dont make me t@ban <@usern>",
    "<@usern> Listen to me. Somewhere there is a tree producing oxygen for you. You must apologize to it immediately.",
    "When I see <@usern>'s face, I would never change a thing. Except for the direction I am walking",
    "I'm already visualizing the duct tape over <@usern>'s mouth.",
    "Are <@usern>'s parents siblings? Nevermind it is pretty obvious.",
    "Ya know <@usern> is a good example of the benefits of roe v wade",
    "Can anyone even imagine how <@usern>'s life would be if they got enough oxygen during birth.",
    "<@usern> your ass must be jealous of the shit that comes out of your mouth.",
    "This server has many humans, and a few bots. But <@usern> you bring us diversity, since you are a monkey",
    "Look <@usern>. I'd kick your teeth, but I have no intentions to improve your looks. If you could call them looks",
    "<@usern> How have you not sued your parents for giving you this face?",
    "<@usern> You are a great treasure to scientists, since you are living proof that you can live without a brain.",
    "Wtf are yall doing? Who left <@usern>'s cage open?",
    "Look as much as I want to beat <@usern> up, I still have to fear PETA.",
    "<@usern> Do you have trouble getting hard during the morning, or can you just not tell."
]

var list_of_insults = list_of_named_insults.concat(list_of_nameless_insults);

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

var ppl_roles = {
    "496127160256299021": "821560443482013747",
    "375435951154921472": "821559956871708713",
    "542199842278211594": "821555925470543883",
    "392538882987524097": "808552991106793514",
    "302590719166775297": "788643652116807721",
    "430156134909739008": "763891335882342420",
    "310868758417768449": "798398458323009546"
}

var list_of_roles = [
    "821560443482013747",
    "821559956871708713",
    "821555925470543883",
    "808552991106793514",
    "788643652116807721",
    "763891335882342420",
    "798398458323009546"
]

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

//(list_of_insults[Math.floor(Math.random() * list_of_insults.length)]).replace("usern", message.user.id)

client.on('ready', () => { // Set Status
    client.user.setActivity('fucking people over since 1973');
    console.log('ready');
    factory = client.guilds.cache.get('757105751188832267');
    factory.members.fetch();
    setInterval(() => {
        role = list_of_roles[Math.floor(Math.random() * list_of_roles.length)];
        factory.roles.cache.get(role).setPosition(factory.roles.cache.size - 6);
        user = factory.members.cache.filter(member => member.roles.cache.get(role)).first();
        factory.channels.cache.get('757105751691886666').send(user.nickname ? user.nickname : user.user.username)
    }, 514285)
});

client.on('rateLimit', (RLI) => {
    if (rate_limit_in_last_10_s) {
        client.users.fetch('542937555251888143')
            .then(user => user.send('SIFU SIFU, you have been rate limited'));
        setTimeout(() => {
            rate_limit_in_last_10_s = false
        }, 1000);
        console.log('Rate Limited');
        console.log(RLI.timeout);
        console.log(RLI.limit);
        console.log(RLI.method);
        console.log(RLI.path);
        console.log(RLI.route);
        process.exit();
    } else {
        rate_limit_in_last_10_s = true;
        setTimeout(() => {
            rate_limit_in_last_10_s = false;
        }, 10000);
    }
});

client.on('message', message => {
    if (message.content.includes('rob sanjit') || message.content.includes('rob 542937555251888143')) {
        messageLink = ''
        client.users.fetch('542937555251888143')
            .then(user => user.send('SIFU SIFU, <@!' + message.author.id + '> WANTS TO ROB YOU. ' + message.url))
    }
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
    if (message.channel.id == "789192040633597963" || message.channel.id == "813501805988020286") {
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
    if (message.channel.id == "789192040633597963" || message.channel.id == "813501805988020286") {
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
    messageString = message.content.toLowerCase();
    if (messageString.startsWith("afuck you ") || messageString.startsWith("fuck you cunt ")) {
        if (messageString.startsWith("fuck you cunt")) {
            messageString = messageString.split('uck y')[1];
            console.log(messageString);
        }
        if (message.author.id == "542937555251888143") {
            if (messageString.split(' ').length < 3) {
                message.channel.send("Sifu i think you mistyped");
            } else {
                id_i_guess = (messageString.split(' ')[2]).substring(3, messageString.split(' ')[2].length - 1);
                if (message.guild.member(id_i_guess)) {
                    message.channel.send((list_of_named_insults[Math.floor(Math.random() * list_of_named_insults.length)]).replace("usern", id_i_guess))
                } else {
                    message.channel.send("Sifu i think you mistyped");
                }
            }
        } else {
            if (usedAFuck.has(message.author.id)) {
                message.channel.send("<@" + message.author.id + "> you are not the great sifu. You have a cooldown on afuck")
            } else {
                if (messageString.split(' ').length < 3) {
                    message.channel.send("Stop trying to fuck me over. The great Sifu Knows how to code.");
                    message.channel.send((list_of_named_insults[Math.floor(Math.random() * list_of_named_insults.length)]).replace("usern", message.author.id))
                } else {
                    id_i_guess = (messageString.split(' ')[2]).substring(3, messageString.split(' ')[2].length - 1);
                    if (message.guild.member(id_i_guess)) {
                        message.channel.send((list_of_named_insults[Math.floor(Math.random() * list_of_named_insults.length)]).replace("usern", id_i_guess))
                        usedAFuck.add(message.author.id);
                        setTimeout(() => {
                            usedAFuck.delete(message.author.id);
                        }, 5000);

                    } else {
                        message.channel.send("Stop trying to fuck me over. The great Sifu Knows how to code.");
                        message.channel.send((list_of_named_insults[Math.floor(Math.random() * list_of_named_insults.length)]).replace("usern", message.author.id))
                    }
                }
            }
        }
    }
});


function slugify(str) {
    var map = {
        'a': '@|á|à|ã|â|À|Á|Ã|Â|ä|α|ａ',
        'b': 'β',
        'c': 'γ|ç|Ç',
        'd': 'δ|ｄ',
        'e': '3|é|è|ê|É|È|Ê|ε|ｅ',
        'f': 'F',
        'g': 'ｇ',
        'h': 'η',
        'i': '1|í|ì|î|Í|Ì|Î|ī|ι|ｉ',
        'j': 'J',
        'k': 'κ',
        'l': 'λ',
        'm': 'ｍ',
        'o': '0|ó|ò|ô|õ|Ó|Ò|Ô|Õ',
        'u': 'ú|ù|û|ü|Ú|Ù|Û|Ü',
        'v': 'ｖ',
        'n': 'ñ|Ñ|ń|ｎ',
        '': ' |,|\\.|\\*|-'
    };

    for (var pattern in map) {
        str = str.replace(new RegExp(map[pattern], 'g'), pattern);
    };

    return str;
};