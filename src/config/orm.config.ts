import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { EventEntities } from "../events/events.module";
import { SchoolEntities } from "../school/school.module";
import { AuthEntities } from "../auth/auth.module";

function flatEntities(...args: any[]) {
    return args.reduce((acc, val) => {
        return [...acc, ...val];
    }, []);
}

export default registerAs(
    'orm.config',
    (): TypeOrmModuleOptions => ({
        type: 'mysql',
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        entities: flatEntities(EventEntities, SchoolEntities, AuthEntities),
        synchronize: true
    })
);
