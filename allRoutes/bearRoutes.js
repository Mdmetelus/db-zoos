const express = require('express');
const knex = require('knex');
const knexConfig = require('../knexfile');
const db = knex(knexConfig.development);
console.log(knexConfig);
const router = express.Router();

// endpoints here
//++++++++++++++++++++++++++++++++++++++++
// - post stuff here
//++++++++++++++++++++++++++++++++++++++++
router.post('/', (req, res) => {
    console.log('request working');
    const content = req.body;
    db('daBears')
        .insert(content)
        .into('daBears')
        .then( ids => {
            res.status(200).json(ids);
        })
        .catch(err => {
            res.status(500).json({error: "error", err});
        });
});


//++++++++++++++++++++++++++++++++++++++++++
// get endpoints
//++++++++++++++++++++++++++++++++++++++++++++
router.get('/', (req, res) => {
    console.log('request working');
    db('daBears')
        .then(allDaBears => {
            if (allDaBears) {
                res.status(200).json(allDaBears);
            } else {
                res.status(404).json({error: 'error', err});
            }
        })
        .catch(err => {
            res.status(500).json({error: 'error', err})
        });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    db('daBears').where({ id }).first().then( thisBear => {
        if (thisBear) {
            res.status(200).json(thisBear);
        } else {
            res.status(404).json({error: "error", err});
        }
    })
    .catch(err => { res.status(500).json({error: 'error', err})});
});



//++++++++++++++++++++++++++++++++++++++++
// - delete stuff here
//++++++++++++++++++++++++++++++++++++++++
// Calling .del() without first filtering the records will result on the removal of all the records in the table, be careful!
router.delete('/:id', (req, res) => {
    const { id } = req.params;

    db('daBears')
        .where({ id })
        .del()
        .then(count => {
            if (count == 0) {
                res.status(404).json({ error: 'error', err});
            } else {
                res.status(200).json(count);
            }
        })
        .catch(err => {
            res.status(500).json({error: 'error', err }) 
        });
});

//++++++++++++++++++++++++++++++++++++++++
// - update  stuff here
//++++++++++++++++++++++++++++++++++++++++

router.put('/:id', (req, res) => {
    const changes= req.body;
    const { id } = req.params;
    db('daBears')
        .where('id', '=', id)
        .update(changes)
        .then(count => {
            // count === number of records updated
            if (count == 0) {
                res.status(404).json({error: 'no items updated, Zoo not found', err});
            }
            res.status(200).json(count);
        }).catch( err => {
            res.status(500).json({error: 'error', err});
        });
});


module.exports = router;