// Write your tests here!
const { expect } = require("chai")
const substitutionModule = require("../src/substitution")

describe("Substitution", () => {
    describe("shoud return false if the alphabet parameter isn't exactly 26 characters, if the alphabet parameter has duplicate characters, or if the alphabet parameter is missing", () => {
        it("should return false if the alphabet parameter isn't exactly 26 characters", () => {
            const actual = substitutionModule.substitution("thinkful", "short")
            expect(actual).to.be.false
        })

        it("should return false if the alphabet parameter has duplicate characters", () => {
            const actual = substitutionModule.substitution("thinkful", "abcabcabcabcabcabcabcabcyz")
            expect(actual).to.be.false
        })

        it("should return false if the alphabet parameter is missing", () => {
            const actual = substitutionModule.substitution("thinkful")
            expect(actual).to.be.false
        })
    })

    it("should ignore capital letters", () => {
        const actual = substitutionModule.substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev")
        const expected = "elp xhm xf mbymwwmfj dne"
        expect(actual).to.eql(expected)
    })

    describe("it should maintain spaces in the message before and after ENCODING or DECODING", () => {
        it("should ENCODE a message while maintaining spaces", () => {
            const actual = substitutionModule.substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev")
            const expected = "elp xhm xf mbymwwmfj dne"
            expect(actual).to.eql(expected)
        })

        it("should DECODE a message while maintaining spaces", () => {
            const actual = substitutionModule.substitution("elp xhm xf mbymwwmfj dne", "xoyqmcgrukswaflnthdjpzibev", false)
            const expected = "you are an excellent spy"
            expect(actual).to.eql(expected)
        })
    })

    describe("It correctly translates the given phrase, based on the alphabet given to the function.", () => {
        it("should ENCODE a message based on the given alphabet", () => {
            const actual = substitutionModule.substitution("message", "$wae&zrdxtfcygvuhbijnokmpl")
            const expected = "y&ii$r&"
            expect(actual).to.eql(expected)
        })

        it("should DECODE a message based on the given alphabet", () => {
            const actual = substitutionModule.substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false)
            const expected = "message"
            expect(actual).to.eql(expected)
        })
    })
})