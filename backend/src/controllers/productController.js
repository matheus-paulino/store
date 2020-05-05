const knex = require('../database');

module.exports = {
    async index(req, res, next) {
        try {
            const results = await knex('product')

            res.json(results);
        } catch (error) {
            next(error)
        }
    },

    async create(req, res, next) {
        try {
            const { product_name, product_description, product_price } = req.body;

            await knex('product').insert({
                product_name,
                product_description,
                product_price
            })

            res.status(201).send();
        } catch (error) {
            next(error)
        }
    },

    async update(req, res, next) {
        const { product_name, product_description, product_price } = req.body;
        const { id } = req.params;

        await knex('product')
        .update({ product_name, product_description, product_price })
        .where({ id })

        res.status(204).send();
    },

    async delete(req, res, next) {
        const { id } = req.params;

        await knex('product')
        .where({ id })
        .del()

        res.status(204).send();
    }
}