// Write your tests here!
const { expect } = require("chai")
const caesarModule = require("../src/caesar")

describe("Caesar", () => {
    describe("should return the ENCODED message or DECODED message depending on the given shift value", () => {
        it("should return the ENCODED message depending on the given shift value", () => {
            const actual = caesarModule.caesar("This is a secret message!", 8)
            const expected = "bpqa qa i amkzmb umaaiom!"
            expect(actual).to.eql(expected)
        })

        it("should return the DECODED message depending on the given shift value", () => {
            const actual = caesarModule.caesar("bpqa qa i amkzmb umaaiom!", 8, false)
            const expected = "this is a secret message!"
            expect(actual).to.eql(expected)
        })
    })

    describe("should return false if the shift is 0, less than -25, greater than 25, or if the shift parameter is not present", () => {
        it("should return false if the shift is 0", () => {
            const actual = caesarModule.caesar("BPQA qa I amkzmb umaaiom!", 0)
            expect(actual).to.be.false
        })

        it("should return false if the shift is less than -25", () => {
            const actual = caesarModule.caesar("BPQA qa I amkzmb umaaiom!", -75)
            expect(actual).to.be.false
        })

        it("should return false if the shift is greater than 25", () => {
            const actual = caesarModule.caesar("BPQA qa I amkzmb umaaiom!", 56);
            expect(actual).to.be.false
        })

        it("should return false if the shift parameter is not present", () => {
            const actual = caesarModule.caesar("thinkful")
            expect(actual).to.be.false
        })
    })

    it("should ignore capital letters", () => {
        const actual = caesarModule.caesar("Hello", 2)
        const expected = "jgnnq"
        expect(actual).to.eql(expected)
    })

    it("should wrap characters around to the front of the alphabet when going over 'z'", () => {
        const actual = caesarModule.caesar("Zelda", 3)
        const expected = "chogd"
        expect(actual).to.equal(expected)
    })

    describe("should maintain spaces and other nonalphabetic symbols in the message, before and after ENCODING or DECODING", () => {
        it("should maintain spaces when ENCODING", () => {
            const actual = caesarModule.caesar("abc !", 8)
            const expected = " "
            expect(actual.charAt(3)).to.equal(expected)
        })
    
        it("should maintain spaces when DECODING", () => {
            const actual = caesarModule.caesar("ijk !", 8, false)
            const expected = " "
            expect(actual.charAt(3)).to.equal(expected)
        })

        it("should maintain special characters when ENCODING", () => {
            const actual = caesarModule.caesar("abc !", 8)
            const expected = "!"
            expect(actual.charAt(4)).to.equal(expected)
        })

        it("should maintain special characters when DECODING", () => {
            const actual = caesarModule.caesar("ijk !", 8, false)
            const expected = "!"
            expect(actual.charAt(4)).to.equal(expected)
        })
    })
})