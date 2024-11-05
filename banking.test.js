// banking.test.js

// Assuming you have these functions defined somewhere in your app
const { deposit, withdraw, checkBalance } = require('https://dhrupad0210.github.io/Banking-using-php-integrated-database/'); // Adjust the path as needed

describe('Banking Application', () => {
    let balance;

    beforeEach(() => {
        // Set up an initial balance for each test
        balance = 1000;
    });

    test('should allow depositing money', () => {
        const newBalance = deposit(balance, 500);
        expect(newBalance).toBe(1500);
    });

    test('should allow withdrawing money if funds are sufficient', () => {
        const newBalance = withdraw(balance, 200);
        expect(newBalance).toBe(800);
    });

    test('should throw error if withdrawal amount exceeds balance', () => {
        expect(() => withdraw(balance, 2000)).toThrow('Insufficient funds');
    });

    test('should correctly check the balance', () => {
        const currentBalance = checkBalance(balance);
        expect(currentBalance).toBe(1000);
    });
});
