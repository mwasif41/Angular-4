
import { AppComponent } from './app.component';

describe('AppComponent',function(){
  beforeEach(function(){
    this.app = new AppComponent();
  })
  it('Should have a valid title',function(){
    expect(this.app.title).toBe('app')
  })
})


