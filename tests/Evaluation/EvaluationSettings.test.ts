import { describe } from 'node:test'
import { SkolengoResponse } from '../../src/models/Global'
import { EvaluationSettings, EvaluationSettingsIncluded } from '../../src/models/Evaluation/EvaluationSettings'

type ExpectedType = SkolengoResponse<EvaluationSettings[], EvaluationSettingsIncluded>

describe('Test EvaluationSettings', () => {
  it('should be correct type', () => {
    const data: ExpectedType =
      {
        'data': [
          {
            'id': 'SKO-E-X-5070-4ec0-b6db-ce179e4d39c7',
            'type': 'evaluationsSetting',
            'attributes': {
              'periodicReportsEnabled': true,
              'skillsEnabled': true,
              'evaluationsDetailsAvailable': true
            },
            'relationships': {
              'periods': {
                'data': [
                  {
                    'id': '45',
                    'type': 'period'
                  },
                  {
                    'id': '46',
                    'type': 'period'
                  },
                  {
                    'id': '47',
                    'type': 'period'
                  }
                ]
              },
              'skillsSetting': {
                'data': {
                  'id': 'SKO-E-X-d09e-4da5-92d2-e0e9d2e0653d',
                  'type': 'skillsSetting'
                }
              }
            }
          }
        ],
        'included': [
          {
            'id': '45',
            'type': 'period',
            'attributes': {
              'label': 'Premier trimestre',
              'startDate': '2022-08-31T22:00:00Z',
              'endDate': '2022-12-02T22:59:59.999Z'
            }
          },
          {
            'id': '46',
            'type': 'period',
            'attributes': {
              'label': 'Deuxième trimestre',
              'startDate': '2022-12-02T23:00:00Z',
              'endDate': '2023-03-17T22:59:59.999Z'
            }
          },
          {
            'id': '47',
            'type': 'period',
            'attributes': {
              'label': 'Troisième trimestre',
              'startDate': '2023-03-17T23:00:00Z',
              'endDate': '2023-07-08T21:59:59.999Z'
            }
          },
          {
            'id': 'Classique',
            'type': 'skillAcquisitionColors',
            'attributes': {
              'colorLevelMappings': [
                {
                  'level': 'INSUFFICIENT_MASTERY',
                  'color': '#D63341'
                },
                {
                  'level': 'LOW_MASTERY',
                  'color': '#F4C528'
                },
                {
                  'level': 'SATISFACTORY_MASTERY',
                  'color': '#DCE96D'
                },
                {
                  'level': 'VERY_GOOD_MASTERY',
                  'color': '#9BCA3C'
                }
              ]
            }
          },
          {
            'id': 'SKO-E-ac2c073e-d09e-4da5-92d2-X',
            'type': 'skillsSetting',
            'attributes': {
              'skillAcquisitionLevels': [
                {
                  'label': 'Aucune sélection',
                  'shortLabel': '0',
                  'level': 'NONE'
                },
                {
                  'label': 'Maîtrise insuffisante',
                  'shortLabel': '1',
                  'level': 'INSUFFICIENT_MASTERY'
                },
                {
                  'label': 'Maîtrise fragile',
                  'shortLabel': '2',
                  'level': 'LOW_MASTERY'
                },
                {
                  'label': 'Maîtrise satisfaisante',
                  'shortLabel': '3',
                  'level': 'SATISFACTORY_MASTERY'
                },
                {
                  'label': 'Très bonne maîtrise',
                  'shortLabel': '4',
                  'level': 'VERY_GOOD_MASTERY'
                }
              ]
            },
            'relationships': {
              'skillAcquisitionColors': {
                'data': {
                  'id': 'Classique',
                  'type': 'skillAcquisitionColors'
                }
              }
            }
          }
        ],
        'links': {
          'first': 'http://bff-prod-ha/api/v1/bff-sko-app/evaluations-settings?page[limit]=20&include=periods%2CskillsSetting%2CskillsSetting.skillAcquisitionColors&filter[student.id]=ESKO-P-b2c86113-1062-427e-bc7f-X',
          'last': 'http://bff-prod-ha/api/v1/bff-sko-app/evaluations-settings?page[limit]=20&include=periods%2CskillsSetting%2CskillsSetting.skillAcquisitionColors&filter[student.id]=ESKO-P-b2c86113-1062-427e-bc7f-X'
        },
        'meta': {
          'totalResourceCount': 1
        }
      }

    expect<ExpectedType>(data).toBeDefined()
  })
})

