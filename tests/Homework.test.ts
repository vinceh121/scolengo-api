import { HomeworkAssignment, HomeworkAssignmentIncluded } from '../src/models/Homework/HomeworkAssignment'
import { HomeworkAssignmentList, HomeworkAssignmentListIncluded } from '../src/models/Homework/HomeworkAssignmentList'
import { SkolengoResponse } from '../src/models/Globals'

describe('Test HomeworkAssignment', () => {
  it('should be correct type', () => {
    const test: SkolengoResponse<HomeworkAssignment, HomeworkAssignmentIncluded> = { data: { id: '183292', type: 'homework', attributes: { title: 'Finir le projet', html: '<html>\n <head></head>\n <body>   \n  <p>Finir le projet</p>  \n </body>\n</html>', dueDateTime: '2022-11-17T12:50:00Z', done: true, dueDate: 'due_date_here', deliverWorkOnline: true, onlineDeliveryUrl: 'https://cas.monbureaunumerique.fr/saml/login?service=https%3A%2F%2Flyc-lavoisier.monbureaunumerique.fr%2Fsg.do%3FPROC%3DTRAVAIL_A_FAIRE%26ACTION%3DAFFICHER_ELEVES_RENDRE_DEVOIR%26ID_TAF%3D1004468' }, relationships: { teacher: { data: { id: 'PSKO-P-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', type: 'teacher' } }, attachments: { data: [] }, commonCorrectedWork: { data: { id: '2101550', type: 'correctedWork' } }, subject: { data: { id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', type: 'subject' } }, audio: { data: null }, pedagogicContent: { data: null }, individualCorrectedWork: { data: null } } }, included: [{ id: '2759274', type: 'attachment', attributes: { name: 'projet-correction.py', mimeType: 'application/octet-stream', mimeTypeLabel: 'Fichier binaire', size: 3686, url: 'https://lyc-lavoisier.monbureaunumerique.fr/dl.do?TYPE_RESSOURCE=TRAVAIL_A_FAIRE&ARCHIVE_NAME=projet-correction&RESSOURCES=2759274' } }, { id: '2101550', type: 'correctedWork', attributes: { html: '<html>\n <head></head>\n <body>    \n </body>\n</html>', correctionDate: '2022-11-24T15:19:03Z' }, relationships: { attachments: { data: [{ id: '2759274', type: 'attachment' }] }, audio: { data: null }, pedagogicContent: { data: null } } }, { id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', type: 'subject', attributes: { label: 'NUMERIQUE SC INFORMATIQUES', color: '#00cece' } }, { id: 'PSKO-P-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', type: 'teacher', attributes: { title: 'M.', firstName: 'JOHN', lastName: 'DOH', photoUrl: null } }] }
    expect(test).toBeDefined()

    const test2: SkolengoResponse<HomeworkAssignment, HomeworkAssignmentIncluded> = { data: { id: '121839', type: 'homework', attributes: { title: 'Révision', html: '<html>\n <head></head>\n <body>   \n  <p>Revoir les notions suivantes :</p> \n  <p> - Assertions (Mot clé python : assert)<br>  - Tri par selection<br>  - Tri par insertion</p> \n  <p>Informations sur les capacités attendues en fin de 1ere NSI : <a onclick="window.open(this.href);return false;" href="https://website.com/folder.php">https://website.com/folder.php</a></p>  \n </body>\n</html>', dueDateTime: '2023-05-02T06:05:00Z', dueDate: null, done: false, deliverWorkOnline: false, onlineDeliveryUrl: null }, relationships: { teacher: { data: { id: 'PSKO-P-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', type: 'teacher' } }, attachments: { data: [] }, commonCorrectedWork: { data: null }, subject: { data: { id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', type: 'subject' } }, audio: { data: null }, pedagogicContent: { data: null }, individualCorrectedWork: { data: null } } }, included: [{ id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', type: 'subject', attributes: { label: 'NUMERIQUE SC INFORMATIQUES', color: '#00cece' } }, { id: 'PSKO-P-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', type: 'teacher', attributes: { title: 'M.', firstName: 'JOHN', lastName: 'DOE', photoUrl: 'url_here' } }] }
    expect(test2).toBeDefined()

    const test3: SkolengoResponse<HomeworkAssignmentList[], HomeworkAssignmentListIncluded> = { data: [{ id: '137492', type: 'homework', attributes: { title: 'Finir le site Web de présentation', html: "<html>\n <head></head>\n <body>   \n  <p>Finir le site Web de présentation sur votre sujet.</p> \n  <p>Pour rappel - Consigne :</p> \n  <p>Le but est de réaliser un exposé, par groupe de 2 ou 3 personnes, sur une personnalité de l'informatique.<br> Pour cela vous allez devoir mettre en place différentes choses :</p> \n  <ul> \n   <li>Une page par personne est à réaliser en HTML.</li> \n   <li>Petite biographie (Quand a-t-elle vécu ? Où a-t-elle vécu ?)</li> \n   <li>Vous devez me dire pourquoi cette personne est connue (invention, création, découverte) - La personne que vous avez n'a pas forcément de lien directement visible avec l'informatique.</li> \n   <li>Quel est le lien entre cette personne et l'informatique. Pourquoi en parle-t-on pendant un cours de NSI ?</li> \n   <li>Réaliser une apparence commune pour le groupe (partie CSS).<br> <em><strong>Vous pouvez</strong> venir compléter l'apparence de votre page par un fichier CSS suplémentaire.</em></li> \n   <li>Réaliser une page d'accueil commune permettant de naviguer entre les différentes pages disponibles.</li> \n   <li>Réaliser une page supplémentaire (que vous appelerez <em>questionnaire.html</em>) présentant un petit questionnaire sur votre sujet.</li> \n   <li><em>Les sources utilisées (site, livre, image, vidéo utilisés lors de la recherche) doivent figurer dans une section source de votre page.</em></li> \n  </ul> \n  <p>Vous devrez effectuer un passage de 5-10 minutes (par personnes) à l'oral pour présenter votre sujet.<br> Votre page servira de support à projeter au tableau.</p>  \n </body>\n</html>", dueDateTime: '2023-05-02T06:05:00Z', dueDate: '2023-05-02', done: false, deliverWorkOnline: false, onlineDeliveryUrl: null }, relationships: { teacher: { data: { id: 'PSKO-P-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', type: 'teacher' } }, attachments: { data: [] }, subject: { data: { id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', type: 'subject' } } } }, { id: '174729', type: 'homework', attributes: { title: 'Révision', html: '<html>\n <head></head>\n <body>   \n  <p>Revoir les notions suivantes :</p> \n  <p> - Assertions (Mot clé python : assert)<br>  - Tri par selection<br>  - Tri par insertion</p> \n  <p>Informations sur les capacités attendues en fin de 1ere NSI : <a onclick="window.open(this.href);return false;" href="https://spe-lavoisier.fr/NSI/Cours/preambule.php">https://spe-lavoisier.fr/NSI/Cours/preambule.php</a></p>  \n </body>\n</html>', dueDateTime: '2023-05-02T06:05:00Z', dueDate: '2023-05-02', done: false, deliverWorkOnline: false, onlineDeliveryUrl: null }, relationships: { teacher: { data: { id: 'PSKO-P-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', type: 'teacher' } }, attachments: { data: [] }, subject: { data: { id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', type: 'subject' } } } }, { id: '184028', type: 'homework', attributes: { title: 'II- die Werke anderer Künstler interpretieren', html: '<html>\n <head></head>\n <body>   \n  <p>- Arbeitsblatt zu Ende machen </p>  \n </body>\n</html>', dueDateTime: '2023-05-05T10:55:00Z', dueDate: '2023-05-05', done: false, deliverWorkOnline: false, onlineDeliveryUrl: null }, relationships: { teacher: { data: { id: 'PSKO-P-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', type: 'teacher' } }, attachments: { data: [] }, subject: { data: { id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', type: 'subject' } } } }], included: [{ id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', type: 'subject', attributes: { label: 'NUMERIQUE SC INFORMATIQUES', color: '#00cece' } }, { id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', type: 'subject', attributes: { label: 'ALLEMAND', color: '#00ff00' } }, { id: 'PSKO-P-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', type: 'teacher', attributes: { title: 'M.', firstName: 'JOHM', lastName: 'DOE', photoUrl: null } }, { id: 'PSKO-P-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', type: 'teacher', attributes: { title: 'M.', firstName: 'JOHN2', lastName: 'DOE2', photoUrl: null } }], links: { first: 'http://bff-prod-ha/api/v1/bff-sko-app/homework-assignments?page[limit]=20&include=subject%2Cteacher%2Cattachments%2Cteacher.person&filter[student.id]=ESKO-P-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx&filter[dueDate][GE]=2023-04-17&filter[dueDate][LE]=2023-05-29', last: 'http://bff-prod-ha/api/v1/bff-sko-app/homework-assignments?page[limit]=20&include=subject%2Cteacher%2Cattachments%2Cteacher.person&filter[student.id]=ESKO-P-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx&filter[dueDate][GE]=2023-04-17&filter[dueDate][LE]=2023-05-29' }, meta: { totalResourceCount: 3 } }
    expect(test3).toBeDefined()
  })
})