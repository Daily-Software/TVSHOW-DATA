const admin = require('firebase-admin');
const fs = require('fs-extra');
const yaml = require('yamljs');

admin.initializeApp({
    credential: admin.credential.cert(require('./credentials.json')),
});
const db = admin.firestore();

const quizzes = [
    'the-office-michael-scott',
    'the-office-dwight-schrute',
    'the-office-jim-halpert',
    'the-office-pam-beesly',
    'the-office-Rryan-howard',
    'the-office-andy-bernard',
    'the-office-stanley-hudson',
    'the-office-kevin-malone',
    'the-office-meredith-palmer',
    'the-office-angela-martin',
    'the-office-oscar-martinez',
    'the-office-phyllis-lapin',
    'the-office-kelly-kapoor',
    'the-office-toby-fenderono',
    'the-office-creed-bratton',
    'the-office-darryl-philbin'   
]


const update = async(quizId) => {

    const json = yaml.load(`quizzes/${quizId}.yaml`);

    console.log(JSON.stringify(json));

    const ref = db.collection('quizzes').doc(quizId);

    await ref.set(json, { merge: true });

    console.log('DONE');

}

for (const quiz of quizzes) {
    update(quiz);
}



