// Write your tests here!
/*Write the tests:
-returns false for shift 0, less than -25, greater than 25
-spaces and characters stay the same
-capital letters ignored
-shift works and shift off alphabet works
-also check encode/decode

use examples */
//use caesar("Zebra Magazine", 3)= "cheud pdjdclqh"
const {expect}=require("chai")
const {caesar}=require("../src/caesar")

describe("caesar() tests", ()=>{
    //test for returns false for shift 0, less than -25, greater than 25
    describe("caesar() checks inputs", ()=>{
        it("returns false for shift 0", ()=>{
            const actual=caesar("encoded message", 0)
            expect(actual).to.be.false
        })
        it("returns false for shift less than -25", ()=>{
            const actual=caesar("encoded message", -27)
            expect(actual).to.be.false
        })
        it ("returns false for shift above 25", ()=>{
            const actual=caesar("encoded message", 28)
            expect(actual).to.be.false
        })

    })

    describe("caesar() output for encoding", ()=>{
        //test encoding works properly keeping spaces, ignore capital letters, works off alphabet
        it("returns encoded message, with negative shift", ()=>{
            const expected="wxa"
            const actual=caesar("abe", -4)
            expect(actual).to.equal(expected)
        })
        it("spaces and characters maintained", ()=>{
            const expected="amkzmb umaaiom"
            const actual=caesar("secret message", 8)
            expect(actual).to.equal(expected)
        })
        it ("capital letters ignored", ()=>{
            const expected="mjqqt"
            const actual=caesar("HELLO", 5)
            expect(actual).to.equal(expected)
        })
        it ("shifts off alphabet work properly", ()=>{
            const expected="cheud"
            const actual=caesar("Zebra", 3)
            expect(actual).to.equal(expected)
        })
    })
    describe("caesar() output for decoding", ()=>{
        //test decoding works properly keeping spaces, ignore capital letters, works off alphabet
        it("returns encoded message, with negative shift", ()=>{
            const expected="abe"
            const actual=caesar("wxa", -4, false)
            expect(actual).to.equal(expected)
        })
        it("spaces and characters maintained", ()=>{
            const expected="secret message"
            const actual=caesar("amkzmb umaaiom", 8, false)
            expect(actual).to.equal(expected)
        })
        it ("capital letters ignored", ()=>{
            const expected="hello"
            const actual=caesar("mjQqT", 5, false)
            expect(actual).to.equal(expected)
        })
        it ("shifts off alphabet work properly", ()=>{
            const expected="zebra"
            const actual=caesar("cheud", 3, false)
            expect(actual).to.equal(expected)
        })
    })


})

