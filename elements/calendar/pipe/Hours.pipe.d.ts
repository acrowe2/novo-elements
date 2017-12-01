import { PipeTransform } from '@angular/core';
export declare class HoursPipe implements PipeTransform {
    private locale;
    constructor(locale?: string);
    transform(date: Date, locale?: string, method?: string): string;
}
