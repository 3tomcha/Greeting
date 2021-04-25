const GreeterContract = artifacts.require("Greeter");

contract("Greeter", () => {
    it("has been deployed successfully", async() => {
        const greeter = await GreeterContract.deployed();
        assert(greeter, "contract was not deployed");
    })

    describe("greet()", () => {
        it("returns Hello World", async() => {
            const greeter = await GreeterContract.deployed();
            const word = await greeter.greet();
            assert.equal(word, "Hello, World!", "greeted with 'Hello World!'");
        });
    });
})

contract("Greeter: update greeting", () => {
    describe("setGreeting(string)", () => {
        it("sets greeting to passed in string", async() => {
            const greeter = await GreeterContract.deployed();
            const expected = "";
            await greeter.setGreeting(expected);
            const actual = await greeter.greet();
            assert.equal(expected, actual, "greeting was not updated");
        }); 
    });

    describe("owner()", () => {
        it("returns the address of the owner", async() => {
            const greeter = await GreeterContract.deployed();
            const actual = await greeter.owner();
            assert(actual, "the current owner");
        });
    });
});

