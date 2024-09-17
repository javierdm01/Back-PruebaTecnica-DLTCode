import { Test, TestingModule } from '@nestjs/testing';
import { CriaturasController } from './criaturas.controller';
import { CriaturasService } from './criaturas.service';

describe('CriaturasController', () => {
  let controller: CriaturasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CriaturasController],
      providers: [CriaturasService],
    }).compile();

    controller = module.get<CriaturasController>(CriaturasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
