const Intern = require('../lib/intern');

describe("Intern", () => {
    describe("Initialization", () => {
        it("should create an object with a name, id, email, and school if provided valid arguments", () => {
            const intern = new Intern('brie', 4, 'briesowhat@gmail.com', 'school');

            expect(intern.name).toEqual('brie');
            expect(intern.id).toEqual(4);
            expect(intern.email).toEqual('briesowhat@gmail.com');
            expect(intern.school).toEqual('school');
        });
        it('should throw an error if provided no arguments or undefined', () => {
            const callBack = () => {throw new Intern()
            };
            expect(callBack).toThrow(Intern);
        });
        //name
        it('should throw an error if "name" is not a string', () => {
            const callBack = () => {throw new Intern(1,4)
            };
            const err = new Error('Expected parameter "name" to be a non-empty string');

            expect(callBack).toThrowError(Intern, err);
        });
        //id
        it('should throw an error if not provided an id', () => {
            const callBack = () => {throw new Intern('brie')};
            const err = new Error('Expected paramter "id" to be a non-negative number');

            expect(callBack).toThrowError(Intern,err);
        });
        it("should throw an error if 'id' is not a number", () => {
            const callBack = () => {throw new Intern("brie", "2")};
            const err = new Error("Expected parameter 'id' to be a non-negative number");
      
            expect(callBack).toThrowError(Intern,err);
          });
      
          it("should throw an error if 'id' is less than 0", () => {
            const callBack = () => {throw new Intern("brie", -1)};
            const err = new Error("Expected parameter 'id' to be a non-negative number");
      
            expect(callBack).toThrowError(Intern,err);
          });

          //email
        it('should throw an error if "email" is not a string', () => {
            const callBack = () => {throw new Intern(3)};
            const err = new Error('Expected parameter "name" to be a non-empty string');

            expect(callBack).toThrowError(Intern, err);
        });
       
          //school test
          it('should throw an error if not provided an school', () => {
            const callBack = () => {throw new Intern('brie')};
            const err = new Error('Expected paramter "school" to be a non-negative number');

            expect(callBack).toThrowError(Intern,err);
        });
        it("should throw an error if 'school' is not a string", () => {
            const callBack = () => {throw new Intern("brie", 3)};
            const err = new Error("Expected parameter 'school' to be a non-negative number");
      
            expect(callBack).toThrowError(Intern,err);
          });
      
        
    })
    describe('getName', () => {
        it('it should return intern name', () => {
            

            expect(new Intern('brie').getName()).toBe("brie");
            
        });
    });
    describe('getId', () => {
        it('it should return intern id', () => {
           
            expect(new Intern('brie', 2).getId()).toBe(2);
            
        });
    });
    describe('getEmail', () => {
        it('it should return Intern email', () => {
           
            expect(new Intern('brie', 2,'briebuttsowhat@gmail.com').getEmail()).toBe("briebuttsowhat@gmail.com");
            
        });
    });
    describe('getSchool', () => {
        it('it should return intern School', () => {
           
            expect(new Intern('brie', 2, 'briebuttsowhat@gmail.com', "school").getSchool()).toBe("school");
            
        });
    });

    describe('getRole', () => {
        it('it should return Intern role with font-awesome icon', () => {
           
            expect(new Intern('brie', 2, 'briebuttsowhat@gmail.com','school').getRole()).toEqual('Intern <i class="fas fa-user-graduate"></i>');
            
        });
    });

})