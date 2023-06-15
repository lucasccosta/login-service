import { Model, DataTypes } from "sequelize"
import { sequelize } from "../../../config/db-sequelize"

class UsersModel extends Model {}

UsersModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    username:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM("COMMON", "ADMIN"),
      defaultValue: "COMMON",
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
  }, 
  {
    tableName: "users",
    timestamps: false,
    sequelize
  }
  )

export { UsersModel}
