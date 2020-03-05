export class Hero {
    constructor(name='', desc=''){
        if(typeof name === 'string' && typeof desc === 'string'){
            this.name = name;
            this.description = desc;    
        }else{
            throw 'Wrong types'
        }
    }
}

export default Hero;