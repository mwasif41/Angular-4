import {UserDataService} from './userdata.service'

describe('UserDataService',function(){
    beforeEach(function(){
        this.app = new UserDataService();
    })
    it('should have wasif property',function(){
        expect(this.app.userName).toBe('Wasif')
    })
})