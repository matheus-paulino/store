const knex = require('../database')

module.exports = {
    async index(req, res, next) {
        try {
            const results = await knex('users')

            res.json(results)
        } catch (error) {
            next(error);
        }
    },

    async create(req, res, next) {
        try {
            const { username, password } = req.body;

            await knex('users')
            .insert({
                username,
                password
            })

            res.status(204).send()
        } catch (error) {
            next(error);
        }
    },

    async update(req, res, next) {
        const { username, password } = req.body;
        const { id } = req.params;

        await knex('users')
        .update({ username, password })
        .where({ id })

        res.send()
    },

    async delete(req, res, next) {
        try {
            const { id } = req.params

            await knex('users')
            .where({ id })
            .del()

            res.status(204).send()
        } catch (error) {
            next(error);
        }
    }
}