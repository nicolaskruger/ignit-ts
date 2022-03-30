import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm'

@Entity('users')
export class User {
    @PrimaryColumn()
    id: string = '';

    @Column()
    name: string = '';

    @Column({
      name: 'username'
    })
    userName: string = '';

    @Column()
    email: string = '';

    @Column({
      name: 'driver_license'
    })
    driverLicense: string = '';

    @Column()
    isAdmin: boolean = false;

    @CreateDateColumn({
      name: 'created_at'
    })
    createdAt: Date = new Date();
}
