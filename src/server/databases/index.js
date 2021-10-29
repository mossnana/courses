import Sequelize from 'sequelize';

const sequelize = new Sequelize('delight_dev', 'postgres', 'superman', {
  host: 'localhost',
  dialect: 'postgres',
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

export default sequelize;
