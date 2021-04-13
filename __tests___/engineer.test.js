const Engineer = require('../lib/engineer');

describe("Engineer", () => {
    describe("Initialization", () => {
        it("should create an object with a name, id, email, and github if provided valid arguments", () => {
            const engineer = new Engineer('benji', 4, 'benjisowhat@gmail.com', 'github');

            expect(engineer.name).toEqual('benji');
            expect(engineer.id).toEqual(4);
            expect(engineer.email).toEqual('benjisowhat@gmail.com');
            expect(engineer.github).toEqual('github');
        });
        it('should throw an error if provided no arguments or undefined', () => {
            const callBack = () => {throw new Engineer()
            };
            expect(callBack).toThrow(Engineer);
        });
        //name
        it('should throw an error if "name" is not a string', () => {
            const callBack = () => {throw new Engineer(1,4)
            };
            const err = new Error('Expected parameter "name" to be a non-empty string');

            expect(callBack).toThrowError(Engineer, err);
        });
        //id
        it('should throw an error if not provided an id', () => {
            const callBack = () => {throw new Engineer('benji')};
            const err = new Error('Expected paramter "id" to be a non-negative number');

            expect(callBack).toThrowError(Engineer,err);
        });
        it("should throw an error if 'id' is not a number", () => {
            const callBack = () => {throw new Engineer("benji", "2")};
            const err = new Error("Expected parameter 'id' to be a non-negative number");
      
            expect(callBack).toThrowError(Engineer,err);
          });
      
          it("should throw an error if 'id' is less than 0", () => {
            const callBack = () => {throw new Engineer("benji", -1)};
            const err = new Error("Expected parameter 'id' to be a non-negative number");
      
            expect(callBack).toThrowError(Engineer,err);
          });

          //email
        it('should throw an error if "email" is not a string', () => {
            const callBack = () => {throw new Engineer(3)};
            const err = new Error('Expected parameter "name" to be a non-empty string');

            expect(callBack).toThrowError(Engineer, err);
        });
       
          //github test
          it('should throw an error if not provided an github', () => {
            const callBack = () => {throw new Engineer('benji')};
            const err = new Error('Expected paramter "github" to be a non-negative number');

            expect(callBack).toThrowError(Engineer,err);
        });
        it("should throw an error if 'github' is not a string", () => {
            const callBack = () => {throw new Engineer("benji", 3)};
            const err = new Error("Expected parameter 'github' to be a non-negative number");
      
            expect(callBack).toThrowError(Engineer,err);
          });
      
        
    })
    describe('getName', () => {
        it('it should return engineer name', () => {
            

            expect(new Engineer('benji').getName()).toBe("benji");
            
        });
    });
    describe('getId', () => {
        it('it should return engineer id', () => {
           
            expect(new Engineer('benji', 2).getId()).toBe(2);
            
        });
    });
    describe('getEmail', () => {
        it('it should return engineer email', () => {
           
            expect(new Engineer('benji', 2,'benjibuttsowhat@gmail.com').getEmail()).toBe("benjibuttsowhat@gmail.com");
            
        });
    });
    describe('getGithub', () => {
        it('it should return engineer github', () => {
           
            expect(new Engineer('benji', 2, 'benjibuttsowhat@gmail.com', "github").getGithub()).toBe("github");
            
        });
    });

    describe('getRole', () => {
        it('it should return engineer role', () => {
           
            expect(new Engineer('benji', 2, 'benjibuttsowhat@gmail.com','github').getRole()).toEqual('engineer');
            
        });
    });

})