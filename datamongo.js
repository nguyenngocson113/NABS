var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, async function (err, db) {
    if (err) throw err;
    var dbo = db.db("manga");
    var sampleData = [{
        "data": {
            "removed": false,
            "categories": [],
            "artworks": [],
            "alias": [],
            "name": "Kamisama Kiss SO",
            "author": "Kamisama Kiss",
            "thumbnail": "https://f01.mrcdn.info/file/mrportal/i/3/q/7/S.eIDMpN9I.jpg",
            "chapters": [],
            "characters": [],
            "authors": [],
            "rich_categories": [],
            "description": "<p>Nanami Momozono is alone and homeless after her dad skips town to evade his gambling debts and the debt collectors kick her out of her apartment. So when a man she&#39;s just saved from a dog offers her his home, she jumps at the opportunity. But it turns out that his place is a shrine, and Nanami has unwittingly taken over his job as a local deity! Nanami has all kind of new responsibilities she doesn&#39;t understand, dangers she&#39;s unaware of, and a cranky ex-familiar who&#39;s...actually pretty hot. What&#39;s a new-fledged godling to do?</p>\n"
        }
    },
    {
        "data": {
            "removed": false,
            "categories": [],
            "artworks": [],
            "alias": [],
            "name": "Chivalry of a Failed Knight",
            "author": "Misora Riku",
            "thumbnail": "http://vgfiles.nabstudio.com/portal/6aee6ad3aabd62265ea632e04d73b390_201036_thumbnail.jpg",
            "chapters": [],
            "characters": [],
            "authors": [],
            "rich_categories": [],
            "description": "<p>In a time and place where one's soul can be morphed into a weapon, there are modern-day magicians called Mage-Knights. Although Kurogane Ikki is a student at an institution that trains Mage-Knights, he has no particular talent in magic and is labeled the \"Failure Knight\" or \"Worst One.\" Getting way less than average marks in the scorings, he was forced to repeat a year. But with the arrival of a new head of the institution, a new rule was created: knights whose abilities are compatible, as decided by the board, must share rooms and attend practice and training together throughout their school years to bring up their abilities to the max. It is a rule to implement the absolute verdict of ability.\n\nIkki's roommate, Stella Vermillion, turns out to be a princess of another foreign country. Stella is a Rank A knight: the type of genius in magic who only appears once a decade. When Ikki walked in on her while she was changing her clothes, it caused a huge misunderstanding, which eventually ended up in a duel between the two of them. The punishment for the losing side is Eternal Submission to the winning side.\n\nForced to live the same room and practice magic together throughout all their school years, how will Stella and Ikki's relationship evolve?</p>\n"
        }
    },
    {
        "data": {
            "removed": false,
            "categories": [],
            "artworks": [],
            "alias": [],
            "name": "Food Wars: Shokugeki no Soma",
            "author": "Yuuto Tsukuda",
            "thumbnail": "https://f01.mrcdn.info/file/mrportal/i/6/j/4/JG.m64lOWrj.jpg",
            "chapters": [],
            "characters": [],
            "authors": [],
            "rich_categories": [],
            "description": "<p>Yukihira Souma is an ambitious 15-year-old whose dream is to surpass the culinary skills of his famous father, Yukihira Jouichirou. But just as Souma graduates from middle school, his father abruptly closes down the family restaurant and leaves to cook in Europe.\n\nAlthough downtrodden, Souma's fighting spirit is rekindled when his father enrols him in an elite culinary school where only 10% of the students graduate. Can Souma survive in the cut-throat world of Tootsuki Academy?</p>\n"
        }
    }];
    for(let i= 0; i < sampleData.length; i++) {
       
    }
    await Promise.all(sampleData.map((item) => {
        dbo.collection("mangas").insertOne(item, function (err, res) {
            if (err) throw err;
            console.log("1 document inserted");
        });
    }));
    db.close();
});

