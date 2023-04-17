import { SkolengoResponse } from '../src/models/Globals'
import { SchoolInfo, SchoolInfoIncluded } from '../src/models/School/SchoolInfo'

describe('Test EvaluationSettings', () => {
  it('should be correct type', () => {
    const testData: SkolengoResponse<SchoolInfo[], SchoolInfoIncluded> = { data: [{ id: 'SKO-E-657dafd3-aa2f-4ae2-abf5-b55a34450295-4194', type: 'news', attributes: { publicationDateTime: '2023-04-08T16:42:34Z', title: 'VACANCES APPRENANTES - PRINTEMPS 2023', shortContent: "organisation de stages d'Allemand, de Fran..ais, de Physique-Chimie pour les 2de GT, 1..re GT et Term GT, ainsi que pour les BTS MC1 & ABM1 VACANCES APPRENANTES..." }, relationships: { school: { data: { id: 'SKO-E-657dafd3-aa2f-4ae2-abf5-b55a34450295', type: 'school' } }, author: { data: { id: 'SKO-E-657dafd3-aa2f-4ae2-abf5-b55a34450295-4194-author-NSKO-P-3df4261a-b88b-40b5-942a-acede88e46bf', type: 'schoolInfoAuthor' } }, illustration: { data: { id: '36261', type: 'schoolInfoFile' } } } }, { id: 'SKO-E-657dafd3-aa2f-4ae2-abf5-b55a34450295-4136', type: 'news', attributes: { publicationDateTime: '2023-03-07T08:53:30Z', title: 'Journ..e internationale des droits des femmes 2023', shortContent: "Action .. l'initiative des ..lu(e)s lyc..ens du CVL. Venez avec un v..tement violet le mercredi 08 mars 2023" }, relationships: { school: { data: { id: 'SKO-E-657dafd3-aa2f-4ae2-abf5-b55a34450295', type: 'school' } }, author: { data: { id: 'SKO-E-657dafd3-aa2f-4ae2-abf5-b55a34450295-4136-author-NSKO-P-3df4261a-b88b-40b5-942a-acede88e46bf', type: 'schoolInfoAuthor' } }, illustration: { data: { id: '35458', type: 'schoolInfoFile' } } } }, { id: 'SKO-E-657dafd3-aa2f-4ae2-abf5-b55a34450295-4123', type: 'news', attributes: { publicationDateTime: '2023-03-02T11:34:18Z', title: 'R..union Orientation apr..s la Seconde GT', shortContent: "Les diff..rentes proc..dures d'orientation apr..s la seconde. 6 & 7 mars 2023 Le lundi 06 mars (pour les classes de 206/207/208/209/210) et le mardi 07 mars..." }, relationships: { school: { data: { id: 'SKO-E-657dafd3-aa2f-4ae2-abf5-b55a34450295', type: 'school' } }, author: { data: { id: 'SKO-E-657dafd3-aa2f-4ae2-abf5-b55a34450295-4123-author-NSKO-P-3df4261a-b88b-40b5-942a-acede88e46bf', type: 'schoolInfoAuthor' } }, illustration: { data: { id: '35335', type: 'schoolInfoFile' } } } }, { id: 'SKO-E-657dafd3-aa2f-4ae2-abf5-b55a34450295-4115', type: 'news', attributes: { publicationDateTime: '2023-03-01T08:50:58Z', title: 'Retrait de dipl..mes', shortContent: 'Concours G..n..ral, DNB, Certification de langue en anglais et en allemand Les dipl..mes du Concours G..n..ral, du Dipl..me National du Brevet, ainsi que les...' }, relationships: { school: { data: { id: 'SKO-E-657dafd3-aa2f-4ae2-abf5-b55a34450295', type: 'school' } }, author: { data: { id: 'SKO-E-657dafd3-aa2f-4ae2-abf5-b55a34450295-4115-author-NSKO-P-3df4261a-b88b-40b5-942a-acede88e46bf', type: 'schoolInfoAuthor' } }, illustration: { data: { id: '35280', type: 'schoolInfoFile' } } } }, { id: 'SKO-E-657dafd3-aa2f-4ae2-abf5-b55a34450295-4078', type: 'news', attributes: { publicationDateTime: '2023-01-28T15:37:54Z', title: 'Portes Ouvertes 2023 - vid..os et plaquettes de pr..sentation des formations du Lyc..e Lavoisier', shortContent: 'samedi 04 f..vrier 2023 de 9H .. 13H - 28/1/23 : MAJ plaquette et pr..sentation Pr..pa TPC Retrouvez les plaquettes de pr..sentation des s..ries STL BT et SPCL...' }, relationships: { school: { data: { id: 'SKO-E-657dafd3-aa2f-4ae2-abf5-b55a34450295', type: 'school' } }, author: { data: { id: 'SKO-E-657dafd3-aa2f-4ae2-abf5-b55a34450295-4078-author-NSKO-P-3df4261a-b88b-40b5-942a-acede88e46bf', type: 'schoolInfoAuthor' } }, illustration: { data: null } } }, { id: 'SKO-E-657dafd3-aa2f-4ae2-abf5-b55a34450295-4077', type: 'news', attributes: { publicationDateTime: '2023-01-24T07:04:05Z', title: 'Portes Ouvertes 2023 + Liens vid..os & plaquettes', shortContent: 'samedi 04 f..vrier 2023 9H-13H PORTES OUVERTES 2023 SAMEDI 04 F..VRIER 2023 de 9H .. 13H Vous y retrouverez les pr..sentations de nos fili..res : Bac G..n..rale...' }, relationships: { school: { data: { id: 'SKO-E-657dafd3-aa2f-4ae2-abf5-b55a34450295', type: 'school' } }, author: { data: { id: 'SKO-E-657dafd3-aa2f-4ae2-abf5-b55a34450295-4077-author-NSKO-P-3df4261a-b88b-40b5-942a-acede88e46bf', type: 'schoolInfoAuthor' } }, illustration: { data: { id: '34510', type: 'schoolInfoFile' } } } }, { id: 'SKO-E-657dafd3-aa2f-4ae2-abf5-b55a34450295-4076', type: 'news', attributes: { publicationDateTime: '2023-01-21T06:39:31Z', title: 'Constitution du Dossier Social Etudiant 2023', shortContent: "Bourses de l'Enseignement Sup..rieur & Logements CROUS - Comment demander une bourse de l'enseignement sup..rieur, un logement ..tudiant, et qu'est-ce que..." }, relationships: { school: { data: { id: 'SKO-E-657dafd3-aa2f-4ae2-abf5-b55a34450295', type: 'school' } }, author: { data: { id: 'SKO-E-657dafd3-aa2f-4ae2-abf5-b55a34450295-4076-author-NSKO-P-3df4261a-b88b-40b5-942a-acede88e46bf', type: 'schoolInfoAuthor' } }, illustration: { data: { id: '34468', type: 'schoolInfoFile' } } } }, { id: 'SKO-E-657dafd3-aa2f-4ae2-abf5-b55a34450295-4054', type: 'news', attributes: { publicationDateTime: '2023-01-09T10:53:10Z', title: 'Conseil de Classe 1er Semestre 2022-2023', shortContent: "concerne les classes post-bacs et les classes de 1PCE et TPCE Conseils de classe du premier semestre de l'ann..e scolaire 2022-2023 (sous r..serves de modifications..." }, relationships: { school: { data: { id: 'SKO-E-657dafd3-aa2f-4ae2-abf5-b55a34450295', type: 'school' } }, author: { data: { id: 'SKO-E-657dafd3-aa2f-4ae2-abf5-b55a34450295-4054-author-NSKO-P-3df4261a-b88b-40b5-942a-acede88e46bf', type: 'schoolInfoAuthor' } }, illustration: { data: { id: '34120', type: 'schoolInfoFile' } } } }, { id: 'SKO-E-657dafd3-aa2f-4ae2-abf5-b55a34450295-4045', type: 'news', attributes: { publicationDateTime: '2023-01-05T12:26:50Z', title: 'Journ..es des Universit..s et des Formations Post-Bac 2023 (JU)(13 janvier apr..s-midi)', shortContent: "Le lyc..e Lavoisier a obtenu le cr..neau du vendredi 13 janvier apr..s-midi pour l'accueil de ses ..l..ves aux JU Le Lyc..e Lavoisier a r..serv.. une demi-journ..e..." }, relationships: { school: { data: { id: 'SKO-E-657dafd3-aa2f-4ae2-abf5-b55a34450295', type: 'school' } }, author: { data: { id: 'SKO-E-657dafd3-aa2f-4ae2-abf5-b55a34450295-4045-author-NSKO-P-3df4261a-b88b-40b5-942a-acede88e46bf', type: 'schoolInfoAuthor' } }, illustration: { data: { id: '34044', type: 'schoolInfoFile' } } } }, { id: 'SKO-E-657dafd3-aa2f-4ae2-abf5-b55a34450295-4041', type: 'news', attributes: { publicationDateTime: '2022-12-24T21:07:27Z', title: 'Parcoursup 2023 - INFOS', shortContent: "Calendrier. Liens. Conseils. MAJ 13/02/23 : Nouvelles vid..os sur les ..tudes de sant.., l'apprentissage, l'accompagnement des ..l..ves en situation de handicap..." }, relationships: { school: { data: { id: 'SKO-E-657dafd3-aa2f-4ae2-abf5-b55a34450295', type: 'school' } }, author: { data: { id: 'SKO-E-657dafd3-aa2f-4ae2-abf5-b55a34450295-4041-author-NSKO-P-3df4261a-b88b-40b5-942a-acede88e46bf', type: 'schoolInfoAuthor' } }, illustration: { data: { id: '33909', type: 'schoolInfoFile' } } } }, { id: 'SKO-E-657dafd3-aa2f-4ae2-abf5-b55a34450295-4040', type: 'news', attributes: { publicationDateTime: '2022-12-16T15:58:56Z', title: 'Jeux de Paris 2024 - Collectif Lyc..ens Grand Est 2024', shortContent: "Retour sur la premi..re r..union du Collectif Lyc..ens du Grand Est pour les JO Paris 2024 qui s'est d..roul.. .. Metz .. l...H..tel de R..gion. Les ..l..ves de cinquante..." }, relationships: { school: { data: { id: 'SKO-E-657dafd3-aa2f-4ae2-abf5-b55a34450295', type: 'school' } }, author: { data: { id: 'SKO-E-657dafd3-aa2f-4ae2-abf5-b55a34450295-4040-author-NSKO-P-3df4261a-b88b-40b5-942a-acede88e46bf', type: 'schoolInfoAuthor' } }, illustration: { data: { id: '34301', type: 'schoolInfoFile' } } } }, { id: 'SKO-E-657dafd3-aa2f-4ae2-abf5-b55a34450295-4000', type: 'news', attributes: { publicationDateTime: '2022-11-09T12:56:46Z', title: 'Journ..e nationale de lutte contre le harc..lement scolaire', shortContent: 'Campagne 2022 / Affiche du CVL / Vid..o du Minist..re Madame, Monsieur, Les membres du CVL en collaboration avec la MDL, se sont mobilis..s pour organiser...' }, relationships: { school: { data: { id: 'SKO-E-657dafd3-aa2f-4ae2-abf5-b55a34450295', type: 'school' } }, author: { data: { id: 'SKO-E-657dafd3-aa2f-4ae2-abf5-b55a34450295-4000-author-NSKO-P-3df4261a-b88b-40b5-942a-acede88e46bf', type: 'schoolInfoAuthor' } }, illustration: { data: { id: '31541', type: 'schoolInfoFile' } } } }, { id: 'SKO-E-657dafd3-aa2f-4ae2-abf5-b55a34450295-3979', type: 'news', attributes: { publicationDateTime: '2022-11-05T01:05:22Z', title: 'Les Conf..rences Pr..pa-Sant.. au Lyc..e Lavoisier', shortContent: "4 conf..rences : 2 pour les 201 et 1..re, 2 pour les Terminales M. ULMER .. le plaisir de pouvoir annoncer l'organisation des conf..rences pr..pa-sant.. suivantes..." }, relationships: { school: { data: { id: 'SKO-E-657dafd3-aa2f-4ae2-abf5-b55a34450295', type: 'school' } }, author: { data: { id: 'SKO-E-657dafd3-aa2f-4ae2-abf5-b55a34450295-3979-author-NSKO-P-3df4261a-b88b-40b5-942a-acede88e46bf', type: 'schoolInfoAuthor' } }, illustration: { data: { id: '31482', type: 'schoolInfoFile' } } } }, { id: 'SKO-E-657dafd3-aa2f-4ae2-abf5-b55a34450295-3899', type: 'news', attributes: { publicationDateTime: '2022-10-22T06:12:52Z', title: "BAC & PARCOURSUP 2023 - Calendrier de l'ann..e de Terminale 2022/2023 + Sites d'aide", shortContent: 'D..couvrez le calendrier officiel du Minist..re de l.....ducation Nationale & de la Jeunesse. Le calendrier du Bac et de Parcoursup. Liens vers Parcoursup, ...' }, relationships: { school: { data: { id: 'SKO-E-657dafd3-aa2f-4ae2-abf5-b55a34450295', type: 'school' } }, author: { data: { id: 'SKO-E-657dafd3-aa2f-4ae2-abf5-b55a34450295-3899-author-NSKO-P-3df4261a-b88b-40b5-942a-acede88e46bf', type: 'schoolInfoAuthor' } }, illustration: { data: { id: '31429', type: 'schoolInfoFile' } } } }, { id: 'SKO-E-657dafd3-aa2f-4ae2-abf5-b55a34450295-3895', type: 'news', attributes: { publicationDateTime: '2022-10-14T12:47:58Z', title: 'inter-CVL au Lyc..e Schweitzer', shortContent: "Les ..lus du CVL du Lyc..e Lavoisier ont eu l'honneur de participer .. l'inter-CVL r..unissant l'ensemble des CVL du bassin mulhousien, chapeaut.. par M. ANGLARET..." }, relationships: { school: { data: { id: 'SKO-E-657dafd3-aa2f-4ae2-abf5-b55a34450295', type: 'school' } }, author: { data: { id: 'SKO-E-657dafd3-aa2f-4ae2-abf5-b55a34450295-3895-author-NSKO-P-3df4261a-b88b-40b5-942a-acede88e46bf', type: 'schoolInfoAuthor' } }, illustration: { data: { id: '31255', type: 'schoolInfoFile' } } } }, { id: 'SKO-E-657dafd3-aa2f-4ae2-abf5-b55a34450295-3885', type: 'news', attributes: { publicationDateTime: '2022-09-28T12:24:50Z', title: 'Campagne de bourse pour les lyc..ens 202-2023: informations importantes', shortContent: 'Information pour les ..l..ves du secondaire ATTENTION DERNIERS JOURS Madame, Monsieur, La campagne de bourse de lyc..e de l...ann..e 2022-2023 est prolong..e ...' }, relationships: { school: { data: { id: 'SKO-E-657dafd3-aa2f-4ae2-abf5-b55a34450295', type: 'school' } }, author: { data: { id: 'SKO-E-657dafd3-aa2f-4ae2-abf5-b55a34450295-3885-author-NSKO-P-3df4261a-b88b-40b5-942a-acede88e46bf', type: 'schoolInfoAuthor' } }, illustration: { data: { id: '30397', type: 'schoolInfoFile' } } } }, { id: 'SKO-E-657dafd3-aa2f-4ae2-abf5-b55a34450295-3877', type: 'news', attributes: { publicationDateTime: '2022-09-09T13:50:22Z', title: 'Certificat de Scolarit.. 2022-2023', shortContent: "Les Certificats de Scolarit.. seront remis aux ..l..ves et ..tudiants .. compter du 16 septembre 2022. Ils sont en triple exemplaires. Merci d'en faire des ..." }, relationships: { school: { data: { id: 'SKO-E-657dafd3-aa2f-4ae2-abf5-b55a34450295', type: 'school' } }, author: { data: { id: 'SKO-E-657dafd3-aa2f-4ae2-abf5-b55a34450295-3877-author-NSKO-P-3df4261a-b88b-40b5-942a-acede88e46bf', type: 'schoolInfoAuthor' } }, illustration: { data: { id: '29783', type: 'schoolInfoFile' } } } }, { id: 'SKO-E-657dafd3-aa2f-4ae2-abf5-b55a34450295-3876', type: 'news', attributes: { publicationDateTime: '2022-09-09T11:42:18Z', title: 'Lyc..e 4.0 - Distribution des ordinateurs', shortContent: 'Petit article sur la distributions des ordinateurs de la R..gion Grand Est dans le cadre du Lyc..e 4.0 aux lyc..ens Dans le cadre de la mise en place du lyc..e...' }, relationships: { school: { data: { id: 'SKO-E-657dafd3-aa2f-4ae2-abf5-b55a34450295', type: 'school' } }, author: { data: { id: 'SKO-E-657dafd3-aa2f-4ae2-abf5-b55a34450295-3876-author-NSKO-P-3df4261a-b88b-40b5-942a-acede88e46bf', type: 'schoolInfoAuthor' } }, illustration: { data: { id: '29779', type: 'schoolInfoFile' } } } }, { id: 'SKO-E-657dafd3-aa2f-4ae2-abf5-b55a34450295-2907', type: 'news', attributes: { publicationDateTime: '2022-05-26T09:44:13Z', title: "Parcoursup - Phase d'admission 2022 (.. partir du jeudi 02 juin 2022 19H00)", shortContent: "Tout ce que vous devez savoir sur la phase d'admission : vid..os, lien pour conseils pour la phase d'admission et r..sum.. actualis... La p..riode de la phase..." }, relationships: { school: { data: { id: 'SKO-E-657dafd3-aa2f-4ae2-abf5-b55a34450295', type: 'school' } }, author: { data: { id: 'SKO-E-657dafd3-aa2f-4ae2-abf5-b55a34450295-2907-author-NSKO-P-3df4261a-b88b-40b5-942a-acede88e46bf', type: 'schoolInfoAuthor' } }, illustration: { data: { id: '27533', type: 'schoolInfoFile' } } } }, { id: 'SKO-E-657dafd3-aa2f-4ae2-abf5-b55a34450295-2906', type: 'news', attributes: { publicationDateTime: '2022-05-26T09:30:28Z', title: '"Sur la route hant..e des Simones"', shortContent: 'Article sur le film diffus.. .. La Filature avec la participation des ..l..ves du Lyc..e Lavoisier En automne 2020, des ..l..ves du Lyc..e Lavoisier ont particip.....' }, relationships: { school: { data: { id: 'SKO-E-657dafd3-aa2f-4ae2-abf5-b55a34450295', type: 'school' } }, author: { data: { id: 'SKO-E-657dafd3-aa2f-4ae2-abf5-b55a34450295-2906-author-NSKO-P-3df4261a-b88b-40b5-942a-acede88e46bf', type: 'schoolInfoAuthor' } }, illustration: { data: { id: '27530', type: 'schoolInfoFile' } } } }], included: [{ id: 'NSKO-P-3df4261a-b88b-40b5-942a-acede88e46bf', type: 'nonTeachingStaff', attributes: { title: 'M.', firstName: 'JOHN', lastName: 'DOE', photoUrl: null } }, { id: 'SKO-E-657dafd3-aa2f-4ae2-abf5-b55a34450295', type: 'school', attributes: { name: 'LPO-LAVOISIER-MULHOUSE' } }, { id: 'SKO-E-657dafd3-aa2f-4ae2-abf5-b55a34450295-2906-author-NSKO-P-3df4261a-b88b-40b5-942a-acede88e46bf', type: 'schoolInfoAuthor', attributes: { additionalInfo: null }, relationships: { technicalUser: { data: null }, person: { data: { id: 'NSKO-P-3df4261a-b88b-40b5-942a-acede88e46bf', type: 'nonTeachingStaff' } } } }, { id: 'SKO-E-657dafd3-aa2f-4ae2-abf5-b55a34450295-2907-author-NSKO-P-3df4261a-b88b-40b5-942a-acede88e46bf', type: 'schoolInfoAuthor', attributes: { additionalInfo: null }, relationships: { technicalUser: { data: null }, person: { data: { id: 'NSKO-P-3df4261a-b88b-40b5-942a-acede88e46bf', type: 'nonTeachingStaff' } } } }, { id: 'SKO-E-657dafd3-aa2f-4ae2-abf5-b55a34450295-3876-author-NSKO-P-3df4261a-b88b-40b5-942a-acede88e46bf', type: 'schoolInfoAuthor', attributes: { additionalInfo: null }, relationships: { technicalUser: { data: null }, person: { data: { id: 'NSKO-P-3df4261a-b88b-40b5-942a-acede88e46bf', type: 'nonTeachingStaff' } } } }, { id: 'SKO-E-657dafd3-aa2f-4ae2-abf5-b55a34450295-3877-author-NSKO-P-3df4261a-b88b-40b5-942a-acede88e46bf', type: 'schoolInfoAuthor', attributes: { additionalInfo: null }, relationships: { technicalUser: { data: null }, person: { data: { id: 'NSKO-P-3df4261a-b88b-40b5-942a-acede88e46bf', type: 'nonTeachingStaff' } } } }, { id: 'SKO-E-657dafd3-aa2f-4ae2-abf5-b55a34450295-3885-author-NSKO-P-3df4261a-b88b-40b5-942a-acede88e46bf', type: 'schoolInfoAuthor', attributes: { additionalInfo: null }, relationships: { technicalUser: { data: null }, person: { data: { id: 'NSKO-P-3df4261a-b88b-40b5-942a-acede88e46bf', type: 'nonTeachingStaff' } } } }, { id: 'SKO-E-657dafd3-aa2f-4ae2-abf5-b55a34450295-3895-author-NSKO-P-3df4261a-b88b-40b5-942a-acede88e46bf', type: 'schoolInfoAuthor', attributes: { additionalInfo: null }, relationships: { technicalUser: { data: null }, person: { data: { id: 'NSKO-P-3df4261a-b88b-40b5-942a-acede88e46bf', type: 'nonTeachingStaff' } } } }, { id: 'SKO-E-657dafd3-aa2f-4ae2-abf5-b55a34450295-3899-author-NSKO-P-3df4261a-b88b-40b5-942a-acede88e46bf', type: 'schoolInfoAuthor', attributes: { additionalInfo: null }, relationships: { technicalUser: { data: null }, person: { data: { id: 'NSKO-P-3df4261a-b88b-40b5-942a-acede88e46bf', type: 'nonTeachingStaff' } } } }, { id: 'SKO-E-657dafd3-aa2f-4ae2-abf5-b55a34450295-3979-author-NSKO-P-3df4261a-b88b-40b5-942a-acede88e46bf', type: 'schoolInfoAuthor', attributes: { additionalInfo: null }, relationships: { technicalUser: { data: null }, person: { data: { id: 'NSKO-P-3df4261a-b88b-40b5-942a-acede88e46bf', type: 'nonTeachingStaff' } } } }, { id: 'SKO-E-657dafd3-aa2f-4ae2-abf5-b55a34450295-4000-author-NSKO-P-3df4261a-b88b-40b5-942a-acede88e46bf', type: 'schoolInfoAuthor', attributes: { additionalInfo: null }, relationships: { technicalUser: { data: null }, person: { data: { id: 'NSKO-P-3df4261a-b88b-40b5-942a-acede88e46bf', type: 'nonTeachingStaff' } } } }, { id: 'SKO-E-657dafd3-aa2f-4ae2-abf5-b55a34450295-4040-author-NSKO-P-3df4261a-b88b-40b5-942a-acede88e46bf', type: 'schoolInfoAuthor', attributes: { additionalInfo: null }, relationships: { technicalUser: { data: null }, person: { data: { id: 'NSKO-P-3df4261a-b88b-40b5-942a-acede88e46bf', type: 'nonTeachingStaff' } } } }, { id: 'SKO-E-657dafd3-aa2f-4ae2-abf5-b55a34450295-4041-author-NSKO-P-3df4261a-b88b-40b5-942a-acede88e46bf', type: 'schoolInfoAuthor', attributes: { additionalInfo: null }, relationships: { technicalUser: { data: null }, person: { data: { id: 'NSKO-P-3df4261a-b88b-40b5-942a-acede88e46bf', type: 'nonTeachingStaff' } } } }, { id: 'SKO-E-657dafd3-aa2f-4ae2-abf5-b55a34450295-4045-author-NSKO-P-3df4261a-b88b-40b5-942a-acede88e46bf', type: 'schoolInfoAuthor', attributes: { additionalInfo: null }, relationships: { technicalUser: { data: null }, person: { data: { id: 'NSKO-P-3df4261a-b88b-40b5-942a-acede88e46bf', type: 'nonTeachingStaff' } } } }, { id: 'SKO-E-657dafd3-aa2f-4ae2-abf5-b55a34450295-4054-author-NSKO-P-3df4261a-b88b-40b5-942a-acede88e46bf', type: 'schoolInfoAuthor', attributes: { additionalInfo: null }, relationships: { technicalUser: { data: null }, person: { data: { id: 'NSKO-P-3df4261a-b88b-40b5-942a-acede88e46bf', type: 'nonTeachingStaff' } } } }, { id: 'SKO-E-657dafd3-aa2f-4ae2-abf5-b55a34450295-4076-author-NSKO-P-3df4261a-b88b-40b5-942a-acede88e46bf', type: 'schoolInfoAuthor', attributes: { additionalInfo: null }, relationships: { technicalUser: { data: null }, person: { data: { id: 'NSKO-P-3df4261a-b88b-40b5-942a-acede88e46bf', type: 'nonTeachingStaff' } } } }, { id: 'SKO-E-657dafd3-aa2f-4ae2-abf5-b55a34450295-4077-author-NSKO-P-3df4261a-b88b-40b5-942a-acede88e46bf', type: 'schoolInfoAuthor', attributes: { additionalInfo: null }, relationships: { technicalUser: { data: null }, person: { data: { id: 'NSKO-P-3df4261a-b88b-40b5-942a-acede88e46bf', type: 'nonTeachingStaff' } } } }, { id: 'SKO-E-657dafd3-aa2f-4ae2-abf5-b55a34450295-4078-author-NSKO-P-3df4261a-b88b-40b5-942a-acede88e46bf', type: 'schoolInfoAuthor', attributes: { additionalInfo: null }, relationships: { technicalUser: { data: null }, person: { data: { id: 'NSKO-P-3df4261a-b88b-40b5-942a-acede88e46bf', type: 'nonTeachingStaff' } } } }, { id: 'SKO-E-657dafd3-aa2f-4ae2-abf5-b55a34450295-4115-author-NSKO-P-3df4261a-b88b-40b5-942a-acede88e46bf', type: 'schoolInfoAuthor', attributes: { additionalInfo: null }, relationships: { technicalUser: { data: null }, person: { data: { id: 'NSKO-P-3df4261a-b88b-40b5-942a-acede88e46bf', type: 'nonTeachingStaff' } } } }, { id: 'SKO-E-657dafd3-aa2f-4ae2-abf5-b55a34450295-4123-author-NSKO-P-3df4261a-b88b-40b5-942a-acede88e46bf', type: 'schoolInfoAuthor', attributes: { additionalInfo: null }, relationships: { technicalUser: { data: null }, person: { data: { id: 'NSKO-P-3df4261a-b88b-40b5-942a-acede88e46bf', type: 'nonTeachingStaff' } } } }, { id: 'SKO-E-657dafd3-aa2f-4ae2-abf5-b55a34450295-4136-author-NSKO-P-3df4261a-b88b-40b5-942a-acede88e46bf', type: 'schoolInfoAuthor', attributes: { additionalInfo: null }, relationships: { technicalUser: { data: null }, person: { data: { id: 'NSKO-P-3df4261a-b88b-40b5-942a-acede88e46bf', type: 'nonTeachingStaff' } } } }, { id: 'SKO-E-657dafd3-aa2f-4ae2-abf5-b55a34450295-4194-author-NSKO-P-3df4261a-b88b-40b5-942a-acede88e46bf', type: 'schoolInfoAuthor', attributes: { additionalInfo: null }, relationships: { technicalUser: { data: null }, person: { data: { id: 'NSKO-P-3df4261a-b88b-40b5-942a-acede88e46bf', type: 'nonTeachingStaff' } } } }, { id: '27530', type: 'schoolInfoFile', attributes: { url: 'https://lyc-lavoisier.monbureaunumerique.fr/lectureFichiergw.do?ID_FICHIER=27530', alternativeText: '' } }, { id: '27533', type: 'schoolInfoFile', attributes: { url: 'https://lyc-lavoisier.monbureaunumerique.fr/lectureFichiergw.do?ID_FICHIER=27533', alternativeText: '' } }, { id: '29779', type: 'schoolInfoFile', attributes: { url: 'https://lyc-lavoisier.monbureaunumerique.fr/lectureFichiergw.do?ID_FICHIER=29779', alternativeText: '' } }, { id: '29783', type: 'schoolInfoFile', attributes: { url: 'https://lyc-lavoisier.monbureaunumerique.fr/lectureFichiergw.do?ID_FICHIER=29783', alternativeText: '' } }, { id: '30397', type: 'schoolInfoFile', attributes: { url: 'https://lyc-lavoisier.monbureaunumerique.fr/lectureFichiergw.do?ID_FICHIER=30397', alternativeText: '' } }, { id: '31255', type: 'schoolInfoFile', attributes: { url: 'https://lyc-lavoisier.monbureaunumerique.fr/lectureFichiergw.do?ID_FICHIER=31255', alternativeText: '' } }, { id: '31429', type: 'schoolInfoFile', attributes: { url: 'https://lyc-lavoisier.monbureaunumerique.fr/lectureFichiergw.do?ID_FICHIER=31429', alternativeText: '' } }, { id: '31482', type: 'schoolInfoFile', attributes: { url: 'https://lyc-lavoisier.monbureaunumerique.fr/lectureFichiergw.do?ID_FICHIER=31482', alternativeText: '' } }, { id: '31541', type: 'schoolInfoFile', attributes: { url: 'https://lyc-lavoisier.monbureaunumerique.fr/lectureFichiergw.do?ID_FICHIER=31541', alternativeText: '' } }, { id: '33909', type: 'schoolInfoFile', attributes: { url: 'https://lyc-lavoisier.monbureaunumerique.fr/lectureFichiergw.do?ID_FICHIER=33909', alternativeText: '' } }, { id: '34044', type: 'schoolInfoFile', attributes: { url: 'https://lyc-lavoisier.monbureaunumerique.fr/lectureFichiergw.do?ID_FICHIER=34044', alternativeText: '' } }, { id: '34120', type: 'schoolInfoFile', attributes: { url: 'https://lyc-lavoisier.monbureaunumerique.fr/lectureFichiergw.do?ID_FICHIER=34120', alternativeText: '' } }, { id: '34301', type: 'schoolInfoFile', attributes: { url: 'https://lyc-lavoisier.monbureaunumerique.fr/lectureFichiergw.do?ID_FICHIER=34301', alternativeText: '' } }, { id: '34468', type: 'schoolInfoFile', attributes: { url: 'https://lyc-lavoisier.monbureaunumerique.fr/lectureFichiergw.do?ID_FICHIER=34468', alternativeText: '' } }, { id: '34510', type: 'schoolInfoFile', attributes: { url: 'https://lyc-lavoisier.monbureaunumerique.fr/lectureFichiergw.do?ID_FICHIER=34510', alternativeText: '' } }, { id: '35280', type: 'schoolInfoFile', attributes: { url: 'https://lyc-lavoisier.monbureaunumerique.fr/lectureFichiergw.do?ID_FICHIER=35280', alternativeText: '' } }, { id: '35335', type: 'schoolInfoFile', attributes: { url: 'https://lyc-lavoisier.monbureaunumerique.fr/lectureFichiergw.do?ID_FICHIER=35335', alternativeText: '' } }, { id: '35458', type: 'schoolInfoFile', attributes: { url: 'https://lyc-lavoisier.monbureaunumerique.fr/lectureFichiergw.do?ID_FICHIER=35458', alternativeText: '' } }, { id: '36261', type: 'schoolInfoFile', attributes: { url: 'https://lyc-lavoisier.monbureaunumerique.fr/lectureFichiergw.do?ID_FICHIER=36261', alternativeText: '' } }], links: { first: 'http://bff-prod-ha/api/v1/bff-sko-app/schools-info?page[limit]=100&fields[person]=firstName%2ClastName%2Ctitle%2CphotoUrl&include=illustration%2Cschool%2Cauthor%2Cauthor.person%2Cauthor.technicalUser&fields[schoolInfoTechnicalUser]=label%2ClogoUrl&fields[school]=name&fields[schoolInfoFile]=url%2CalternativeText&fields=illustration%2Cschool%2Cauthor%2CpublicationDateTime%2Ctitle%2CshortContent&fields[announcement]=level&fields[schoolInfoAuthor]=person%2CtechnicalUser%2CadditionalInfo', last: 'http://bff-prod-ha/api/v1/bff-sko-app/schools-info?page[limit]=100&fields[person]=firstName%2ClastName%2Ctitle%2CphotoUrl&include=illustration%2Cschool%2Cauthor%2Cauthor.person%2Cauthor.technicalUser&fields[schoolInfoTechnicalUser]=label%2ClogoUrl&fields[school]=name&fields[schoolInfoFile]=url%2CalternativeText&fields=illustration%2Cschool%2Cauthor%2CpublicationDateTime%2Ctitle%2CshortContent&fields[announcement]=level&fields[schoolInfoAuthor]=person%2CtechnicalUser%2CadditionalInfo' }, meta: { totalResourceCount: 20 } }
    expect(testData).toBeDefined()

    const testDataDetail: SkolengoResponse<SchoolInfo, SchoolInfoIncluded> = { data: { id: 'SKO-E-657dafd3-aa2f-4ae2-abf5-b55a34450295-4194', type: 'news', attributes: { publicationDateTime: '2023-04-08T16:42:34Z', title: 'VACANCES APPRENANTES - PRINTEMPS 2023', shortContent: "organisation de stages d'Allemand, de Fran..ais, de Physique-Chimie pour les 2de GT, 1..re GT et Term GT, ainsi que pour les BTS MC1 & ABM1 VACANCES APPRENANTES...", content: 'HTML', url: null, linkedInfoUrl: null, linkedWebSiteUrl: null }, relationships: { attachments: { data: [] }, school: { data: { id: 'SKO-E-657dafd3-aa2f-4ae2-abf5-b55a34450295', type: 'school' } }, author: { data: { id: 'SKO-E-657dafd3-aa2f-4ae2-abf5-b55a34450295-4194-author-NSKO-P-3df4261a-b88b-40b5-942a-acede88e46bf', type: 'schoolInfoAuthor' } }, illustration: { data: { id: '36261', type: 'schoolInfoFile' } } } }, included: [{ id: 'NSKO-P-3df4261a-b88b-40b5-942a-acede88e46bf', type: 'nonTeachingStaff', attributes: { title: 'M.', firstName: 'JOHN', lastName: 'DOE', photoUrl: null } }, { id: 'SKO-E-657dafd3-aa2f-4ae2-abf5-b55a34450295', type: 'school', attributes: { name: 'LPO-LAVOISIER-MULHOUSE' } }, { id: 'SKO-E-657dafd3-aa2f-4ae2-abf5-b55a34450295-4194-author-NSKO-P-3df4261a-b88b-40b5-942a-acede88e46bf', type: 'schoolInfoAuthor', attributes: { additionalInfo: null }, relationships: { technicalUser: { data: null }, person: { data: { id: 'NSKO-P-3df4261a-b88b-40b5-942a-acede88e46bf', type: 'nonTeachingStaff' } } } }, { id: '36261', type: 'schoolInfoFile', attributes: { name: 'logo-vacances-apprenantes-68334.jpg', mimeType: 'image/jpeg', mimeTypeLabel: 'Image JPEG', size: 74765, url: 'https://lyc-lavoisier.monbureaunumerique.fr/lectureFichiergw.do?ID_FICHIER=36261', alternativeText: '' } }] }
    expect(testDataDetail).toBeDefined()
  })
})
