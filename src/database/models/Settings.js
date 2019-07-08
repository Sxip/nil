module.exports = (sequelize, DataTypes) => {
  const Settings = sequelize.define('Settings', {
    settings: DataTypes.JSON,
  });

  return Settings;
};
