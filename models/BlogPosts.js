module.exports = (sequelize, DataTypes) => {
  const BlogPosts = sequelize.define('BlogPosts', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: { type: DataTypes.INTEGER, foreignKey: true },
  },
  {
    timestamps: true,
    tableName: 'BlogPosts',
    underscored: true,
  });

  BlogPosts.associate = (models) => {
    BlogPosts.belongsTo(models.Users,
      { foreignKey: 'userId', as: 'users' });
  };

  return BlogPosts;
};