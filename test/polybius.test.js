// encoding output is string
//decoding input has to be even number of characters
//spaces maintained encoding and decoding
//capital letters ignored
//I or J converted to 42, and if decoding from 42 both I and J need to be shown

const {expect}=require("chai")
const {polybius}=require("../src/polybius")

describe("polybius tests", ()=>{
    describe("polybius checks for errors", ()=>{
        it("returns false if input is even number of characters when decoding", ()=>{
            const actual= polybius("21345", false)
            expect(actual).to.be.false
        })
        it("output is still a string after encoding", ()=>{
            const actual=polybius("hello")
            expect(actual).to.be.a('string')
        })

    })
    describe("polybius output for encoding", ()=>{
        it("correctly encodes a message", ()=>{
            const expected="23513434112251"
            const actual=polybius("message")
            expect(actual).to.equal(expected)
        })
        it("spaces are maintained throughout", ()=>{
            const expected="11 335125 23513434112251"
            const actual=polybius("a new message")
            expect(actual).to.equal(expected)
        })
        it("correctly encodes i and j", ()=>{
            const expected="42542353423322"
            const actual=polybius("jumping")
            expect(actual).to.equal(expected)
        })

    })
    describe("polybius output for decoding", ()=>{
        it("correctly decodes a message", ()=>{
            const expected="message"
            const actual=polybius("23513434112251", false)
            expect(actual).to.equal(expected)
        })
        it("ignores capital letters", ()=>{
            const expected="message"
            const actual=polybius("23513434112251", false)
            expect(actual).to.equal(expected)
        })
        it("spaces are maintained throughout", ()=>{
            const expected="a new message"
            const actual=polybius("11 335125 23513434112251", false)
            expect(actual).to.equal(expected)
        })
        it("correctly decodes i and j", ()=>{
            const expected="(i/j)ump(i/j)ng"
            const actual=polybius("42542353423322", false)
            expect(actual).to.equal(expected)
        })

    })
})