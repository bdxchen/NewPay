import { NgModule } from '@angular/core';
import { OrderBy } from './../pipes/order-by/order-by';
import { OderByTempPipe } from './../pipes/oder-by-temp/oder-by-temp';
import { FixedPipe } from './fixed/fixed';
@NgModule({
	declarations: [OrderBy,
    OderByTempPipe,
    FixedPipe],
	imports: [],
	exports: [OrderBy,
    OderByTempPipe,
    FixedPipe]
})
export class PipesModule {}
