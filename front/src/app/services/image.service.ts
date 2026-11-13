import { inject, Service } from '@angular/core';
import { environment } from '../../environments/environment';
import { firstValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Service()
export class ImageService {
  readonly #baseBucketUrl = `${environment.bucketUrl}/images`;
  readonly #http = inject(HttpClient);

  public subirImagen(formData: FormData) {
    return firstValueFrom(
      this.#http.post<{ message: string; filename: string; url: string }>(
        this.#baseBucketUrl,
        formData,
      ),
    );
  }
}
