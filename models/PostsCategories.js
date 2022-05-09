module.exports = (sequelize, _DataTypes) => {
  const PostCategories = sequelize.define('PostCategories', {}, { timestamps: false });

  PostCategories.associate = (models) => {
    models.Categories.belongsToMany(models.BlogPosts, {
      as: 'posts',
      through: PostCategories,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
    models.PostCategories.belongsToMany(models.Categories, {
      as: 'categories',
      through: PostCategories,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
  };

  return PostCategories;
};