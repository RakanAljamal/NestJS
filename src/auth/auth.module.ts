import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./user.entity";
import { Profile } from "./profile.entity";

export const AuthEntities = [User, Profile];

@Module({
    imports: [TypeOrmModule.forFeature(AuthEntities)],
})
export class AuthModule {
}
