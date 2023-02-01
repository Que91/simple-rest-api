const Post = require('./posts')
const User = require('./users')

User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
})