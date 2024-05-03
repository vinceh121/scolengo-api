import { describe, expect } from '@jest/globals'
import { Skolengo } from '../src/index'
import './common'

/**
 * Tests unitaires des endpoints ne nécessitant pas d'authentification
 */
describe('Test Skolengo API types - Anonymous', () => {
  it('should getAppCurrentConfig return AppConfig type', async () => {
    const type = 'AppCurrentConfig'
    const response = await Skolengo.getAppCurrentConfig()

    expect(response).toMatchSchema(type)
  })

  it('should searchSchool return School type', async () => {
    const type = 'School'
    const response = await Skolengo.searchSchool({ text: 'Lycée' }, 10)

    for (const school of response) {
      expect(school).toMatchSchema(type)
    }
  })
})
