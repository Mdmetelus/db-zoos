// const express = require('express');
// const knex = require('knex');
// const knexConfig = require('../knexfile');
// const db = knex(knexConfig.development);
// console.log(knexConfig);
// const router = express.Router();

// // endpoints here
// //++++++++++++++++++++++++++++++++++++++++
// // - post stuff here
// //++++++++++++++++++++++++++++++++++++++++
// router.post('/', (req, res) => {
//     const content = req.body;
  
//     db('zoos').insert(content).into('zoos')
//         .then((ids) => {
//             res.status(201).json(ids)
//             })
//         .catch( err => {
//             res.status(500).json({error: 'Error', err})
//         });
// });








//   //++++++++++++++++++++++++++++++++++++++++++
// // get endpoints
// //++++++++++++++++++++++++++++++++++++++++++++
// router.get('/', (req, res) => {
//     db('zoos')
//         .then( allZoo => {
//             if(!allZoo) {
//                 return res.status(404).json({ error: 'no items found', err});
//             } else {
//                 res.status(200).json(allZoo);
//             }
//         })
//         .catch(err => { res.status(500).json({ error: 'error',error })
// });



// // //++++++++++++++++++++++++++++++++++++++++++

// router.get('/:id', (req, res) => {
//     const { id } = req.params;
//     db('zoos').where({ id }).first().then( eachZoo => {
//             if (!eachZoo) {
//                 res.status(404).json({error: 'Error', err});
//             } else {
//                 res.status(200).json(eachZoo);
//             }
//         })
//         .catch(err => {
//             res.status(500).json({error: "error", err})
//         });

// });




// //++++++++++++++++++++++++++++++++++++++++
// // - delete stuff here
// //++++++++++++++++++++++++++++++++++++++++
// router.delete('/:id', (req, res ) => {
//     const { id } = req.params;

//     db('zoos')
//         .where({ id })  // or .where('id', '=', id)
//         .del()
//         .then( count => {
//                 if(count == 0) {
//                     res.status(404).json({ error: 'error', err});
//                 } else {
//                     res.status(200).json(count);
//                 }
//         })
//         .catch(err => {
//             res.status(500).json({error: 'error', err})
//             });
// });

// //++++++++++++++++++++++++++++++++++++++++
// // - update  stuff here
// //++++++++++++++++++++++++++++++++++++++++
// router.put('/:id', (req, res) => {
//     const changes= req.body;
//     const { id } = req.params;
//     db('zoos')
//         .where('id', '=', id)
//         .update(changes)
//         .then(count => {
//             // count === number of records updated
//             if (count == 0) {
//                 res.status(404).json({error: 'no items updated, Zoo not found', err});
//             }
//             res.status(200).json(count);
//         }).catch( err => {
//             res.status(500).json({error: 'error', err});
//         });
// });

// module.exports = router;