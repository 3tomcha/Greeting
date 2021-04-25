const GreeterContract = artifacts.require("Greeter");

contract("Greeter", (accounts) => {
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

    describe("owner()", () => {
        it("returns the address of the owner", async() => {
            const greeter = await GreeterContract.deployed();
            const actual = await greeter.owner();
            assert(actual, "the current owner");
        });
        it("matches the address that originary deployed the contract", async() => {
            const greeter = await GreeterContract.deployed();
            const expected = accounts[0];
            const actual = await greeter.owner();
            assert.equal(actual, expected, "matches address used to deploy contract");
        });

    });
})

contract("Greeter: update greeting", (accounts) => {
    describe("setGreeting(string)", () => {
        describe("when message is sent by the owner", () => {
            it("sets greeting to passed in string", async() => {
                const greeter = await GreeterContract.deployed();
                const expected = "The owner changed the message";
                await greeter.setGreeting(expected);
                const actual = await greeter.greet();
                assert.equal(expected, actual, "greeting was not updated");
            }); 
        });
        describe("when message is sent by the another account", () => {
            it("does not set the greeting", async() => {
                const greeter = await GreeterContract.deployed();
                try {
                    await greeter.setGreeting("Not the owner", {from: accounts[1]});
                } catch (error) {
                    const errorMessage = "Ownable: caller is not the owner";
                    assert.equal(error.reason, errorMessage, "greetirng should not update");
                    return;
                }
                assert.fail("greetirng should not update");
            });
        });
    });
    
});

