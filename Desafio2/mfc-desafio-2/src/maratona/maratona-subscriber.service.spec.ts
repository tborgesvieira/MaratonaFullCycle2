import { Test, TestingModule } from '@nestjs/testing';
import { MaratonaSubscriberService } from './maratona-subscriber.service';

describe('MaratonaService', () => {
  let service: MaratonaSubscriberService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MaratonaSubscriberService],
    }).compile();

    service = module.get<MaratonaSubscriberService>(MaratonaSubscriberService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
