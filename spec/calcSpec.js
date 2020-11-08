describe("Calculator", function() {
    describe("Addition tests", function(){
        it("should be 42", function(){
            expect(addition(20, 22)).toBe(42);
        });
        it("should return 26", function(){
            expect(addition(7, 19)).toBe(26);
        });
        it("should return an error if we do not supply two numbers", function(){
            spyOn(window, "alert");
            addition("Hitchhikers", "Guide");
            expect(window.alert).toHaveBeenCalledWith("Error!");
        });
    });
});