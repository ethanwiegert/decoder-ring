// spaces maintained throughout encoding and decoding
//capital letters are ignored
//if the alphabet isn't 26 characters return false
//all alphabet characters are unique, if not return false
//input can include special characters

const {expect}=require("chai")
const {substitution}=require("../src/substitution")

describe("substitution tests", ()=>{
    describe("substitution checks for errors", ()=>{
        //check the alphabet for 26 characters and that they are all unique
        it("returns false if the alphabet characters are not all unique", ()=>{
            const actual= substitution("hello","abcdefghijklmnopqrstuvwxya",)
            expect(actual).to.be.false
        })
        it("returns false if less than 26 alphabet characters", ()=>{
            const actual=substitution("hello", "abcdefghijklmnopqrstuvwxy")
            expect(actual).to.be.false
        })
        it("returns false if more than 26 alphabet characters", ()=>{
            const actual=substitution("hello", "abcdefghijklmnopqrstuvwxyz1")
            expect(actual).to.be.false
        })

    })
    describe("substitution output for encoding", ()=>{
        it("properly encodes a message", ()=>{
            //test properly encodes a message, maintains spaces, and ignores capital letters
            const actual= substitution("message","plmoknijbuhvygctfxrdzeswaq")
            const expected="ykrrpik"
            expect(actual).to.equal(expected)
        })
        it("ignores capital letters", ()=>{
            const actual=substitution("MESSAGE", "plmoknijbuhvygctfxrdzeswaq")
            const expected="ykrrpik"
            expect(actual).to.equal(expected)
        })
        it("maintains spaces", ()=>{
            const actual=substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev")
            const expected="elp xhm xf mbymwwmfj dne"
            expect(actual).to.equal(expected)
        })})
        describe("substitution output for decoding", ()=>{
            //test properly encodes a message, maintains spaces, and ignores capital letters
            it("properly decodes a message", ()=>{
                const actual= substitution("ykrrpik","plmoknijbuhvygctfxrdzeswaq", false)
                const expected="message"
                expect(actual).to.equal(expected)
            })
            
            it("maintains spaces", ()=>{
                const actual=substitution("elp xhm xf mbymwwmfj dne", "xoyqmcgrukswaflnthdjpzibev", false)
                const expected="you are an excellent spy"
                expect(actual).to.equal(expected)
            })
            it("ignores capital letters", ()=>{
                const actual=substitution("Elp Xhm xf Mbymwwmfj Dne", "xoyqmcgrukswaflnthdjpzibev", false)
                const expected="you are an excellent spy"
                expect(actual).to.equal(expected)
            })})
    })
    
