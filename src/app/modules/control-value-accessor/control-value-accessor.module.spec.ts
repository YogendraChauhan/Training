import { ControlValueAccessorModule } from './control-value-accessor.module';

describe('ControlValueAccessorModule', () => {
  let controlValueAccessorModule: ControlValueAccessorModule;

  beforeEach(() => {
    controlValueAccessorModule = new ControlValueAccessorModule();
  });

  it('should create an instance', () => {
    expect(controlValueAccessorModule).toBeTruthy();
  });
});
