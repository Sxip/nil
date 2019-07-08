module.exports = (sequelize, DataTypes) => {
  const profile = sequelize.define('Profiles', {
    user_id: DataTypes.STRING,
    balance: DataTypes.BIGINT(),
    background: DataTypes.STRING,
  });

  return profile;
};
