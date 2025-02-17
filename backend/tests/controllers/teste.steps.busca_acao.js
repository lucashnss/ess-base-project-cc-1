import { loadFeature, defineFeature } from 'jest-cucumber';
import supertest from 'supertest';
import app from '../../src/app';
import { di } from '../../src/di';
import TestRepository from '../../src/repositories/test.repository';
import TestEntity from '../../src/entities/test.entity';

const feature = loadFeature('tests/features/tests-service_busca_acao.feature');
const request = supertest(app);


defineFeature(feature, (test) => {
    // mocking the repository
    let TestRepository;
    let Response;
  
    test('Buscar filmes com filtro "Ação"', ({ given, when, then, and }) => {
        given(/^existe uma lista de filmes blocados no gênero ação$/, async () => {
          // Criar lista de filmes do gênero ação no mock do repositório
          mockFilmeRepository.filmesAcao = [
            { id: 1, nome: 'Duro de Matar', genero: 'Ação' },
            { id: 2, nome: 'John Wick', genero: 'Ação' }
          ];
        });
    
        when(/^uma requisição GET para "(.*)" é feita$/, async (url) => {
          response = await request.get(url);
        });
    
        then(/^o status da resposta é "(.*)"$/, (statusCode) => {
          expect(response.status).toBe(parseInt(statusCode, 10));
        });
    
        and(/^o corpo da resposta \(JSON\) contém os filmes da lista "Ação"$/, () => {
          expect(response.body.data).toEqual(
            expect.arrayContaining(mockFilmeRepository.filmesAcao)
          );
        });
      });






});

