import { uuid as v4 } from "uuid"

import {
  Table,
  Column,
  PrimaryKey,
  Model,
  Default,
} from "sequelize-typescript";


@Table({
  tableName: "users",
  timestamps: false,
})
class UsersModel extends Model {
  @PrimaryKey
  @Default(v4)
  @Column({ allowNull: false })
  declare id: string;

  @Column({ allowNull: false })
  declare email: string;

  @Column({ allowNull: false })
  declare name: string;

  @Column({ allowNull: false })
  declare password: string;

  @Default("COMMON")
  @Column({ allowNull: false })
  declare role: string;

  // @Column({})
  // created_at: Date;
  
  // @Column({})
  // removed_at: Date;
}

export { UsersModel };