import { Module } from '@nestjs/common';
import { ConfigModule} from '@nestjs/config'; 
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { CategoryModule } from './category/category.module';
import { AuthModule } from './auth/auth.module';
import { TransactionModule } from './transaction/transaction.module';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

import { config } from 'dotenv';
config();


@Module({
  imports:
   [
    UserModule, 
    CategoryModule, 
    AuthModule,
    TransactionModule , 

    ConfigModule.forRoot({ isGlobal: true }) ,

    // TypeOrmModule.forRootAsync({
    //   imports: [ConfigModule],
    //   useFactory: (configService: ConfigService ) => ({
    //       type: 'postgres',
    //       host: configService.get('DB_HOST'),
    //       port: configService.get('DB_PORT'),
    //       username: configService.get('DB_USERNAME'),
    //       password: configService.get('DB_PASSWORD'),
    //       database: configService.get('DB_NAME'),
    //       synchronize: true,
    //       entities: [ __dirname + '/**/*.entity{ .js , .ts}'],
    //   }),
    //   inject: [ConfigService],
    // }),

    TypeOrmModule.forRootAsync({
      useFactory: () => {
          return {
              type: 'postgres', 
              host: 'localhost',
              port: 5432,
              username: 'postgres',
              password: 'root',
              database: 'budget',
              entities: [__dirname + '/**/*.entity{.ts,.js}'],
              synchronize: true,
          } as TypeOrmModuleOptions;
      },
  }),

   ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
