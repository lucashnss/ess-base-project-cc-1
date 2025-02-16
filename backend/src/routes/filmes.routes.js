import express from 'express';
import { getAcaoJson,getSuspenseJson, getAventuraJson,getTerrorJson,getDramaJson, getComediaJson,getRomanceJson, getDiretorJson,getRandomMovies} from '../controllers/filmes.controllers.js';

const router = express.Router()


//GET
router.get('/acao', getAcaoJson)
router.get('/aventura', getAventuraJson)
router.get('/terror', getTerrorJson)
router.get('/drama', getDramaJson)
router.get('/comedia', getComediaJson)
router.get('/romance', getRomanceJson)
router.get('/suspense', getSuspenseJson)

router.get('/recomendados', getRandomMovies)

router.get('/:diretor_nome', getDiretorJson)


export default router