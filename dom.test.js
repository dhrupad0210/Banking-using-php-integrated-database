// dom.test.js

// Example: A function that updates a balance display on the webpage
function updateBalanceDisplay(amount) {
    document.getElementById('balance').textContent = `Balance: $${amount}`;
}

describe('DOM Manipulation', () => {
    beforeEach(() => {
        // Set up DOM element for testing
        document.body.innerHTML = '<div id="balance"></div>';
    });

    test('should update the balance display correctly', () => {
        updateBalanceDisplay(1500);
        const balanceElement = document.getElementById('balance');
        expect(balanceElement.textContent).toBe('Balance: $1500');
    });
});
