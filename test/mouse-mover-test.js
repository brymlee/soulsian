const expect = require('chai').expect;

describe("Sanity checks", function(){
    it("hello equals hello", function(){
        expect("hello").to.equal("hello");
    });
});

const exec = require('child_process').exec;
it("Echo hello command line", () => {
    const command = "echo hello";
    exec(command, (error, stdout, stderror) => {
        console.log(stdout);
    });
});

describe("Mouse mover tests", () => {
    const mouseMover = require("../src/mouse-mover.js").mouseMover;
    const doTestMouseMover = (x, y) => {
        mouseMover.move(x, y);
        expect(x).to.equal(mouseMover.position().x);
        expect(y).to.equal(mouseMover.position().y);
    };
    it("Move mouse to 0 0", () => {
        doTestMouseMover(0, 0);
    });
    it("Move mouse to 100 0", () => {
        doTestMouseMover(100, 0);
    });
});