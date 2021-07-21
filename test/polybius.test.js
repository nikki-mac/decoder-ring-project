// Write your tests here!
const { expect } = require("chai");
const polybiusModule = require("../src/polybius");

describe("Polybius", () => {
    describe("it should ENCODE or DECODE a message by correctly translating letters and number pairs accordingly", () => {
        it("should ENCODE a message by translating each letter to the correct pair of numbers", () => {
            const actual = polybiusModule.polybius("thinkful")
            const expected = "4432423352125413"
            expect(actual).to.eql(expected)
        })

        it("should DECODE a message by translating each pair of numbers to the correct letter", () => {
            const actual = polybiusModule.polybius('23513434112251', false)
            const expected = "message"
            expect(actual).to.equal(expected)
        })
    })

    it("should translate i and j to 42 when ENCODING", () => {
        const actual = polybiusModule.polybius("jiggle")
        const expected = "424222221351"
        expect(actual).to.eql(expected)
    })

    it("should translate 42 to (i/j) when DECODING", () => {
        const actual = polybiusModule.polybius("4432423352125413", false)
        const expected = "th(i/j)nkful"
        expect(actual).to.eql(expected)
    })

    it("should ignore capital letters", () => {
        const actual = polybiusModule.polybius("Hello world")
        const expected = "3251131343 2543241341"
        expect(actual).to.eql(expected)
    })

    describe("should maintain spaces in the message before and after ENCODING or DECODING", () => {
        it("should maintain the spaces when DECODING", () => {
            const actual = polybiusModule.polybius("3251131343 2543241341", false)
            const expected = "hello world"
            expect(actual).to.eql(expected)
        })

        it("should maintain the spaces when ENCODING", () => {
            const actual = polybiusModule.polybius("hello world")
            const expected = "3251131343 2543241341"
            expect(actual).to.eql(expected)
        })
    })
})