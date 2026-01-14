import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppModule } from './../src/app.module';
import request from 'supertest';

describe('Hello API (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('/hello (GET)', () => {
    return request(app.getHttpServer())
      .get('/hello')
      .expect(200)
      .expect('Hello World');
  });

  it('/hello/docker (GET)', () => {
    return request(app.getHttpServer())
      .get('/hello/docker')
      .expect(200)
      .expect('Hello Docker');
  });

  it('/hello/cicd (GET)', () => {
    return request(app.getHttpServer())
      .get('/hello/cicd')
      .expect(200)
      .expect('Hello CI/CD');
  });
});
