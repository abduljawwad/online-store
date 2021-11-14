module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Products', {
      uuid: {
        type: Sequelize.UUID,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      brand: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'Maybelline',
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      price: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      currencySign: {
        type: Sequelize.STRING,
        defaultValue: '£',
      },
      imageLink: {
        type: Sequelize.STRING,
      },
      category: {
        type: Sequelize.STRING,
      },
      productType: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tagList: {
        type: Sequelize.ARRAY(Sequelize.TEXT),
      },
      productColors: {
        type: Sequelize.ARRAY(Sequelize.TEXT),
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Products');
  },
};
