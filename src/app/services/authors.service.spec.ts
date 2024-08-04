import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { AuthorsService } from './authors.service';

describe('AuthorsService', () => {
  let service: AuthorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [provideHttpClientTesting()],
    });
    service = TestBed.inject(AuthorsService);
    service.getAuthors$().subscribe();
  });

  it('должен прийти список авторов', () => {
    service.authors.subscribe((val) => expect(val).toHaveLength(6));
  });
});
