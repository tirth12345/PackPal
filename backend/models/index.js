const User = require('./User');
const Category = require('./Categories');
const Item = require('./Items');
const Alert = require('./Alerts');
const SharedList = require('./SharedLists');

// Define relationships
User.hasMany(Item, { foreignKey: 'assigned_user' });
Item.belongsTo(User, { foreignKey: 'assigned_user' });

Category.hasMany(Item, { foreignKey: 'category_id' });
Item.belongsTo(Category, { foreignKey: 'category_id' });

User.hasMany(Alert, { foreignKey: 'user_id' });
Alert.belongsTo(User, { foreignKey: 'user_id' });

User.hasMany(SharedList, { foreignKey: 'owner_id' });
SharedList.belongsTo(User, { foreignKey: 'owner_id' });

module.exports = { User, Category, Item, Alert, SharedList };