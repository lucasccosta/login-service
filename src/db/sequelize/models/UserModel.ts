import { Model, DataTypes } from "sequelize"
import { sequelize } from "../../../config/db-sequelize"

class UsersModel extends Model {}

UsersModel.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  }
}, {
  tableName: "user",
  timestamps: false,
  sequelize
})

export { UsersModel}