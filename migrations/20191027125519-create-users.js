'use strict'
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('users', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER(5)
			},
			name: {
				type: Sequelize.STRING(30)
			},
			email: {
				type: Sequelize.STRING(50)
			},
			phone_number: {
				type: Sequelize.STRING(15)
			},
			gender: {
				type: Sequelize.BOOLEAN
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
				defaultValue: Sequelize.fn('NOW')
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
				defaultValue: Sequelize.fn('NOW')
			}
		})
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('users')
	}
}
