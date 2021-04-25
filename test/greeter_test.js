const GreeterContract = artifacts.require("Greeter");

contract("Greeter", () => {
    it("has been deployed successfully", async() => {
        const greeter = await GreeterContract.deployed();
        assert(greeter, "contract was not deployed");
    })

    describe("greet()", () => {
        it("returns Hello World", async() => {
            greeter = await GreeterContract.deployed();
            const word = await greeter.greet();
            assert.equal(word, "Hello, World!", "greeted with 'Hello World!'");
        });
    });
})

