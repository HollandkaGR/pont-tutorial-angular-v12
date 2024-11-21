import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'shortened',
})
export class ShortenedPipe implements PipeTransform {
    transform(value: string, ...args: unknown[]): string {
        if (value.length > 10) {
            return value.substring(0, 10) + '...';
        }
        return value;
    }
}
