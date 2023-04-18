import { Agenda, AgendaIncluded } from '../src/models/Agenda/Agenda'
import { SkolengoResponse } from '../src/models/Globals'

describe('Test Agenda', () => {
  it('should be correct type', () => {
    const test: SkolengoResponse<Agenda[], AgendaIncluded> = { data: [{ id: 'ESKO-P-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx-2023-04-07', type: 'agenda', attributes: { date: '2023-04-07' }, relationships: { lessons: { data: [{ id: '611817', type: 'lesson' }, { id: '613705', type: 'lesson' }, { id: '487420', type: 'lesson' }, { id: '501247', type: 'lesson' }, { id: '492245', type: 'lesson' }] }, homeworkAssignments: { data: [{ id: '128418', type: 'homework' }] } } }, { id: 'ESKO-P-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx-2023-04-08', type: 'agenda', attributes: { date: '2023-04-08' }, relationships: { lessons: { data: [] }, homeworkAssignments: { data: [] } } }, { id: 'ESKO-P-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx-2023-04-09', type: 'agenda', attributes: { date: '2023-04-09' }, relationships: { lessons: { data: [] }, homeworkAssignments: { data: [] } } }, { id: 'ESKO-P-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx-2023-04-10', type: 'agenda', attributes: { date: '2023-04-10' }, relationships: { lessons: { data: [{ id: '501212', type: 'lesson' }, { id: '536721', type: 'lesson' }, { id: '536754', type: 'lesson' }, { id: '613684', type: 'lesson' }, { id: '564654', type: 'lesson' }, { id: '487385', type: 'lesson' }, { id: '492210', type: 'lesson' }, { id: '510222', type: 'lesson' }] }, homeworkAssignments: { data: [] } } }, { id: 'ESKO-P-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx-2023-04-11', type: 'agenda', attributes: { date: '2023-04-11' }, relationships: { lessons: { data: [{ id: '506117', type: 'lesson' }, { id: '516584', type: 'lesson' }, { id: '613717', type: 'lesson' }, { id: '487278', type: 'lesson' }] }, homeworkAssignments: { data: [] } } }, { id: 'ESKO-P-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx-2023-04-12', type: 'agenda', attributes: { date: '2023-04-12' }, relationships: { lessons: { data: [{ id: '538479', type: 'lesson' }, { id: '613729', type: 'lesson' }, { id: '510188', type: 'lesson' }] }, homeworkAssignments: { data: [] } } }, { id: 'ESKO-P-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx-2023-04-13', type: 'agenda', attributes: { date: '2023-04-13' }, relationships: { lessons: { data: [{ id: '508324', type: 'lesson' }, { id: '508360', type: 'lesson' }, { id: '613695', type: 'lesson' }, { id: '506154', type: 'lesson' }] }, homeworkAssignments: { data: [] } } }, { id: 'ESKO-P-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx-2023-04-14', type: 'agenda', attributes: { date: '2023-04-14' }, relationships: { lessons: { data: [{ id: '611818', type: 'lesson' }, { id: '613706', type: 'lesson' }, { id: '487421', type: 'lesson' }, { id: '501248', type: 'lesson' }, { id: '492246', type: 'lesson' }] }, homeworkAssignments: { data: [{ id: '128406', type: 'homework' }, { id: '127729', type: 'homework' }] } } }, { id: 'ESKO-P-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx-2023-04-15', type: 'agenda', attributes: { date: '2023-04-15' }, relationships: { lessons: { data: [] }, homeworkAssignments: { data: [] } } }, { id: 'ESKO-P-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx-2023-04-16', type: 'agenda', attributes: { date: '2023-04-16' }, relationships: { lessons: { data: [] }, homeworkAssignments: { data: [] } } }, { id: 'ESKO-P-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx-2023-04-17', type: 'agenda', attributes: { date: '2023-04-17' }, relationships: { lessons: { data: [] }, homeworkAssignments: { data: [] } } }, { id: 'ESKO-P-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx-2023-04-18', type: 'agenda', attributes: { date: '2023-04-18' }, relationships: { lessons: { data: [] }, homeworkAssignments: { data: [] } } }, { id: 'ESKO-P-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx-2023-04-19', type: 'agenda', attributes: { date: '2023-04-19' }, relationships: { lessons: { data: [] }, homeworkAssignments: { data: [] } } }, { id: 'ESKO-P-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx-2023-04-20', type: 'agenda', attributes: { date: '2023-04-20' }, relationships: { lessons: { data: [] }, homeworkAssignments: { data: [] } } }, { id: 'ESKO-P-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx-2023-04-21', type: 'agenda', attributes: { date: '2023-04-21' }, relationships: { lessons: { data: [] }, homeworkAssignments: { data: [] } } }, { id: 'ESKO-P-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx-2023-04-22', type: 'agenda', attributes: { date: '2023-04-22' }, relationships: { lessons: { data: [] }, homeworkAssignments: { data: [] } } }, { id: 'ESKO-P-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx-2023-04-23', type: 'agenda', attributes: { date: '2023-04-23' }, relationships: { lessons: { data: [] }, homeworkAssignments: { data: [] } } }, { id: 'ESKO-P-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx-2023-04-24', type: 'agenda', attributes: { date: '2023-04-24' }, relationships: { lessons: { data: [] }, homeworkAssignments: { data: [] } } }, { id: 'ESKO-P-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx-2023-04-25', type: 'agenda', attributes: { date: '2023-04-25' }, relationships: { lessons: { data: [] }, homeworkAssignments: { data: [] } } }, { id: 'ESKO-P-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx-2023-04-26', type: 'agenda', attributes: { date: '2023-04-26' }, relationships: { lessons: { data: [] }, homeworkAssignments: { data: [] } } }], included: [{ id: '127729', type: 'homework', attributes: { title: 'Exercices', html: "<html>\n <head></head>\n <body>   \n  <p>contrôle. A partir d'un texte, vous devrez réaliser une carte.</p> \n  <p>Prendre les crayons de couleur !</p>  \n </body>\n</html>", dueDateTime: '2023-04-14T13:55:00Z', dueDate: null, done: false, deliverWorkOnline: false, onlineDeliveryUrl: null }, relationships: { subject: { data: { id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', type: 'subject' } } } }, { id: '128406', type: 'homework', attributes: { title: 'zwei Projekte, ein gemeinsames Ziel ', html: '<html>\n <head></head>\n <body>   \n  <p>- Steckbrief ergänzen</p> \n  <p>- die beiden Texte anhand des Steckbriefs präsentieren können (Gemeinsamkeiten und Unterschiede)</p>  \n </body>\n</html>', dueDateTime: '2023-04-14T10:55:00Z', dueDate: null, done: false, deliverWorkOnline: false, onlineDeliveryUrl: null }, relationships: { subject: { data: { id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', type: 'subject' } } } }, { id: '128418', type: 'homework', attributes: { title: 'Evaluation Mercredi 12 Avril', html: "<html>\n <head></head>\n <body>   \n  <p>Feuilles d'exercices à travailler</p>  \n </body>\n</html>", dueDateTime: '2023-04-07T06:05:00Z', dueDate: null, done: true, deliverWorkOnline: false, onlineDeliveryUrl: null }, relationships: { subject: { data: { id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', type: 'subject' } } } }, { id: '487278', type: 'lesson', attributes: { startDateTime: '2023-04-11T13:55:00Z', endDateTime: '2023-04-11T15:45:00Z', title: 'EDUCATION PHYSIQUE ET SPORTIVE', location: '', locationComplement: null, canceled: false }, relationships: { teachers: { data: [{ id: 'PSKO-P-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', type: 'teacher' }] }, subject: { data: { id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', type: 'subject' } } } }, { id: '487385', type: 'lesson', attributes: { startDateTime: '2023-04-10T11:50:00Z', endDateTime: '2023-04-10T12:45:00Z', title: 'ALLEMAND', location: 'C203', locationComplement: null, canceled: false }, relationships: { teachers: { data: [{ id: 'PSKO-P-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', type: 'teacher' }] }, subject: { data: { id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', type: 'subject' } } } }, { id: '487420', type: 'lesson', attributes: { startDateTime: '2023-04-07T10:55:00Z', endDateTime: '2023-04-07T11:50:00Z', title: 'ALLEMAND', location: 'C204', locationComplement: null, canceled: false }, relationships: { teachers: { data: [{ id: 'PSKO-P-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', type: 'teacher' }] }, subject: { data: { id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', type: 'subject' } } } }, { id: '487421', type: 'lesson', attributes: { startDateTime: '2023-04-14T10:55:00Z', endDateTime: '2023-04-14T11:50:00Z', title: 'ALLEMAND', location: 'C204', locationComplement: null, canceled: false }, relationships: { teachers: { data: [{ id: 'PSKO-P-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', type: 'teacher' }] }, subject: { data: { id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', type: 'subject' } } } }, { id: '492210', type: 'lesson', attributes: { startDateTime: '2023-04-10T12:45:00Z', endDateTime: '2023-04-10T13:40:00Z', title: 'HISTOIRE-GEOGRAPHIE', location: 'C302', locationComplement: null, canceled: false }, relationships: { teachers: { data: [{ id: 'PSKO-P-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', type: 'teacher' }] }, subject: { data: { id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', type: 'subject' } } } }, { id: '492245', type: 'lesson', attributes: { startDateTime: '2023-04-07T13:55:00Z', endDateTime: '2023-04-07T15:45:00Z', title: 'HISTOIRE-GEOGRAPHIE', location: 'C105', locationComplement: null, canceled: false }, relationships: { teachers: { data: [{ id: 'PSKO-P-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', type: 'teacher' }] }, subject: { data: { id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', type: 'subject' } } } }, { id: '492246', type: 'lesson', attributes: { startDateTime: '2023-04-14T13:55:00Z', endDateTime: '2023-04-14T15:45:00Z', title: 'HISTOIRE-GEOGRAPHIE', location: 'C105', locationComplement: null, canceled: false }, relationships: { teachers: { data: [{ id: 'PSKO-P-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', type: 'teacher' }] }, subject: { data: { id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', type: 'subject' } } } }, { id: '501212', type: 'lesson', attributes: { startDateTime: '2023-04-10T06:05:00Z', endDateTime: '2023-04-10T07:55:00Z', title: 'FRANCAIS', location: 'C304', locationComplement: null, canceled: false }, relationships: { teachers: { data: [{ id: 'PSKO-P-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', type: 'teacher' }] }, subject: { data: { id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', type: 'subject' } } } }, { id: '501247', type: 'lesson', attributes: { startDateTime: '2023-04-07T11:50:00Z', endDateTime: '2023-04-07T13:40:00Z', title: 'FRANCAIS', location: 'C205', locationComplement: null, canceled: false }, relationships: { teachers: { data: [{ id: 'PSKO-P-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', type: 'teacher' }] }, subject: { data: { id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', type: 'subject' } } } }, { id: '501248', type: 'lesson', attributes: { startDateTime: '2023-04-14T11:50:00Z', endDateTime: '2023-04-14T13:40:00Z', title: 'FRANCAIS', location: 'C205', locationComplement: null, canceled: false }, relationships: { teachers: { data: [{ id: 'PSKO-P-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', type: 'teacher' }] }, subject: { data: { id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', type: 'subject' } } } }, { id: '506117', type: 'lesson', attributes: { startDateTime: '2023-04-11T06:05:00Z', endDateTime: '2023-04-11T07:55:00Z', title: 'NUMERIQUE SC INFORMATIQUES', location: 'C101', locationComplement: null, canceled: false }, relationships: { teachers: { data: [{ id: 'PSKO-P-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', type: 'teacher' }] }, subject: { data: { id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', type: 'subject' } } } }, { id: '506154', type: 'lesson', attributes: { startDateTime: '2023-04-13T11:50:00Z', endDateTime: '2023-04-13T13:40:00Z', title: 'NUMERIQUE SC INFORMATIQUES', location: 'C101', locationComplement: null, canceled: false }, relationships: { teachers: { data: [{ id: 'PSKO-P-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', type: 'teacher' }] }, subject: { data: { id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', type: 'subject' } } } }, { id: '508324', type: 'lesson', attributes: { startDateTime: '2023-04-13T08:10:00Z', endDateTime: '2023-04-13T09:05:00Z', title: 'ENSEIGNEMENT SCIENTIFIQUE', location: 'A202', locationComplement: null, canceled: false }, relationships: { teachers: { data: [{ id: 'PSKO-P-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', type: 'teacher' }] }, subject: { data: { id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', type: 'subject' } } } }, { id: '508360', type: 'lesson', attributes: { startDateTime: '2023-04-13T09:05:00Z', endDateTime: '2023-04-13T10:00:00Z', title: 'ENSEIGNEMENT SCIENTIFIQUE', location: 'A202', locationComplement: null, canceled: false }, relationships: { teachers: { data: [{ id: 'PSKO-P-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', type: 'teacher' }] }, subject: { data: { id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', type: 'subject' } } } }, { id: '510188', type: 'lesson', attributes: { startDateTime: '2023-04-12T11:50:00Z', endDateTime: '2023-04-12T13:40:00Z', title: 'MATHEMATIQUES', location: 'C103', locationComplement: '', canceled: false }, relationships: { teachers: { data: [{ id: 'PSKO-P-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', type: 'teacher' }] }, subject: { data: { id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', type: 'subject' } } } }, { id: '510222', type: 'lesson', attributes: { startDateTime: '2023-04-10T13:55:00Z', endDateTime: '2023-04-10T15:45:00Z', title: 'MATHEMATIQUES', location: 'C105', locationComplement: null, canceled: false }, relationships: { teachers: { data: [{ id: 'PSKO-P-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', type: 'teacher' }] }, subject: { data: { id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', type: 'subject' } } } }, { id: '516584', type: 'lesson', attributes: { startDateTime: '2023-04-11T08:10:00Z', endDateTime: '2023-04-11T10:00:00Z', title: 'ANGLAIS', location: 'C302', locationComplement: null, canceled: false }, relationships: { teachers: { data: [{ id: 'PSKO-P-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', type: 'teacher' }] }, subject: { data: { id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', type: 'subject' } } } }, { id: '536721', type: 'lesson', attributes: { startDateTime: '2023-04-10T08:10:00Z', endDateTime: '2023-04-10T09:05:00Z', title: "SCIENCES DE L'INGENIEUR", location: 'C205', locationComplement: null, canceled: false }, relationships: { teachers: { data: [{ id: 'PSKO-P-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', type: 'teacher' }] }, subject: { data: { id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', type: 'subject' } } } }, { id: '536754', type: 'lesson', attributes: { startDateTime: '2023-04-10T09:05:00Z', endDateTime: '2023-04-10T10:00:00Z', title: "SCIENCES DE L'INGENIEUR", location: 'C205', locationComplement: null, canceled: false }, relationships: { teachers: { data: [{ id: 'PSKO-P-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', type: 'teacher' }] }, subject: { data: { id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', type: 'subject' } } } }, { id: '538479', type: 'lesson', attributes: { startDateTime: '2023-04-12T06:05:00Z', endDateTime: '2023-04-12T07:55:00Z', title: "SCIENCES DE L'INGENIEUR", location: 'A004', locationComplement: null, canceled: false }, relationships: { teachers: { data: [{ id: 'PSKO-P-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', type: 'teacher' }] }, subject: { data: { id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', type: 'subject' } } } }, { id: '564654', type: 'lesson', attributes: { startDateTime: '2023-04-10T10:55:00Z', endDateTime: '2023-04-10T11:50:00Z', title: 'Enseignement Moral et Civique', location: 'B05', locationComplement: null, canceled: false }, relationships: { teachers: { data: [{ id: 'PSKO-P-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', type: 'teacher' }] }, subject: { data: { id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', type: 'subject' } } } }, { id: '611817', type: 'lesson', attributes: { startDateTime: '2023-04-07T06:05:00Z', endDateTime: '2023-04-07T07:55:00Z', title: 'MATHEMATIQUES', location: 'B03', locationComplement: null, canceled: false }, relationships: { teachers: { data: [{ id: 'PSKO-P-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', type: 'teacher' }] }, subject: { data: { id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', type: 'subject' } } } }, { id: '611818', type: 'lesson', attributes: { startDateTime: '2023-04-14T06:05:00Z', endDateTime: '2023-04-14T07:55:00Z', title: 'MATHEMATIQUES', location: 'B03', locationComplement: null, canceled: false }, relationships: { teachers: { data: [{ id: 'PSKO-P-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', type: 'teacher' }] }, subject: { data: { id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', type: 'subject' } } } }, { id: '613684', type: 'lesson', attributes: { startDateTime: '2023-04-10T10:00:00Z', endDateTime: '2023-04-10T10:55:00Z', title: 'Repas', location: '', locationComplement: null, canceled: false }, relationships: { teachers: { data: [] }, subject: { data: { id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', type: 'subject' } } } }, { id: '613695', type: 'lesson', attributes: { startDateTime: '2023-04-13T10:00:00Z', endDateTime: '2023-04-13T10:55:00Z', title: 'Repas', location: '', locationComplement: null, canceled: false }, relationships: { teachers: { data: [] }, subject: { data: { id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', type: 'subject' } } } }, { id: '613705', type: 'lesson', attributes: { startDateTime: '2023-04-07T10:00:00Z', endDateTime: '2023-04-07T10:55:00Z', title: 'Repas', location: '', locationComplement: null, canceled: false }, relationships: { teachers: { data: [] }, subject: { data: { id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', type: 'subject' } } } }, { id: '613706', type: 'lesson', attributes: { startDateTime: '2023-04-14T10:00:00Z', endDateTime: '2023-04-14T10:55:00Z', title: 'Repas', location: '', locationComplement: null, canceled: false }, relationships: { teachers: { data: [] }, subject: { data: { id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', type: 'subject' } } } }, { id: '613717', type: 'lesson', attributes: { startDateTime: '2023-04-11T10:00:00Z', endDateTime: '2023-04-11T10:55:00Z', title: 'Repas', location: '', locationComplement: null, canceled: false }, relationships: { teachers: { data: [] }, subject: { data: { id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', type: 'subject' } } } }, { id: '613729', type: 'lesson', attributes: { startDateTime: '2023-04-12T10:00:00Z', endDateTime: '2023-04-12T11:50:00Z', title: 'Repas', location: '', locationComplement: null, canceled: false }, relationships: { teachers: { data: [] }, subject: { data: { id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', type: 'subject' } } } }, { id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', type: 'subject', attributes: { label: 'NUMERIQUE SC INFORMATIQUES', color: '#00cece' } }, { id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', type: 'subject', attributes: { label: "SCIENCES DE L'INGENIEUR", color: '#00cece' } }, { id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', type: 'subject', attributes: { label: 'MATHEMATIQUES', color: '#a8d3ff' } }, { id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', type: 'subject', attributes: { label: 'Repas', color: '#800080' } }, { id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', type: 'subject', attributes: { label: 'ENSEIGNEMENT SCIENTIFIQUE', color: '#000000' } }, { id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', type: 'subject', attributes: { label: 'EDUCATION PHYSIQUE ET SPORTIVE', color: '#dcb4dc' } }, { id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', type: 'subject', attributes: { label: 'ALLEMAND', color: '#00ff00' } }, { id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', type: 'subject', attributes: { label: 'HISTOIRE-GEOGRAPHIE', color: '#ffff64' } }, { id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', type: 'subject', attributes: { label: 'ANGLAIS', color: '#ffff64' } }, { id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', type: 'subject', attributes: { label: 'Enseignement Moral et Civique', color: '#9cb5fe' } }, { id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', type: 'subject', attributes: { label: 'FRANCAIS', color: '#808080' } }, { id: 'PSKO-P-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', type: 'teacher', attributes: { title: 'M.', firstName: 'JOHN', lastName: 'DOE', photoUrl: null } }, { id: 'PSKO-P-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', type: 'teacher', attributes: { title: 'M.', firstName: 'JOHN', lastName: 'DOE', photoUrl: null } }, { id: 'PSKO-P-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', type: 'teacher', attributes: { title: 'Mme', firstName: 'JOHN', lastName: 'DOE', photoUrl: null } }, { id: 'PSKO-P-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', type: 'teacher', attributes: { title: 'Mme', firstName: 'JOHN', lastName: 'DOE', photoUrl: null } }, { id: 'PSKO-P-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', type: 'teacher', attributes: { title: 'M.', firstName: 'JOHN', lastName: 'DOE', photoUrl: null } }, { id: 'PSKO-P-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', type: 'teacher', attributes: { title: 'M.', firstName: 'JOHN', lastName: 'DOE', photoUrl: null } }, { id: 'PSKO-P-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', type: 'teacher', attributes: { title: 'M.', firstName: 'JOHN', lastName: 'DOE', photoUrl: null } }, { id: 'PSKO-P-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', type: 'teacher', attributes: { title: 'M.', firstName: 'JOHN', lastName: 'DOE', photoUrl: null } }, { id: 'PSKO-P-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', type: 'teacher', attributes: { title: 'M.', firstName: 'JOHN', lastName: 'DOE', photoUrl: null } }, { id: 'PSKO-P-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', type: 'teacher', attributes: { title: 'Mme', firstName: 'JOHN', lastName: 'DOE', photoUrl: null } }, { id: 'PSKO-P-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', type: 'teacher', attributes: { title: 'M.', firstName: 'JOHN', lastName: 'DOE', photoUrl: null } }, { id: 'PSKO-P-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', type: 'teacher', attributes: { title: 'M.', firstName: 'JOHN', lastName: 'DOE', photoUrl: null } }, { id: 'PSKO-P-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', type: 'teacher', attributes: { title: 'M.', firstName: 'JOHN', lastName: 'DOE', photoUrl: null } }], links: { first: 'http://bff-prod-ha/api/v1/bff-sko-app/agendas?page[limit]=20&include=lessons%2Clessons.subject%2Clessons.teachers%2ChomeworkAssignments%2ChomeworkAssignments.subject', last: 'http://bff-prod-ha/api/v1/bff-sko-app/agendas?page[limit]=20&include=lessons%2Clessons.subject%2Clessons.teachers%2ChomeworkAssignments%2ChomeworkAssignments.subject&page[offset]=20', next: 'http://bff-prod-ha/api/v1/bff-sko-app/agendas?page[limit]=20&include=lessons%2Clessons.subject%2Clessons.teachers%2ChomeworkAssignments%2ChomeworkAssignments.subject&page[offset]=20' }, meta: { totalResourceCount: 21 } }
    expect(test).toBeDefined()
  })
})