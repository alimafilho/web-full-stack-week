import {Sequelize} from 'sequelize'

const sequelize = new Sequelize('mysql://root:123456@172.18.0.1:3306/pitu_db');

export default sequelize;