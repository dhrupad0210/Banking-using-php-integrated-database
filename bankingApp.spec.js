describe('Banking Application Functional Tests', () => {
    
    beforeEach(() => {
        // Visit the banking app homepage
        cy.visit('https://dhrupad0210.github.io/Banking-using-php-integrated-database/');
    });

    it('should allow user to log in with correct credentials', () => {
        cy.get('#username').type('testUser'); // Replace with valid test user
        cy.get('#password').type('testPassword'); // Replace with valid test password
        cy.get('#loginButton').click();

        // Check if the user is redirected to dashboard or sees a welcome message
        cy.contains('Welcome, testUser');
    });

    it('should display error message on incorrect login', () => {
        cy.get('#username').type('wrongUser');
        cy.get('#password').type('wrongPassword');
        cy.get('#loginButton').click();

        // Check for an error message
        cy.contains('Incorrect username or password');
    });

    it('should allow user to deposit money', () => {
        // Assuming login is required before deposit, perform login
        cy.get('#username').type('testUser');
        cy.get('#password').type('testPassword');
        cy.get('#loginButton').click();

        // Perform deposit
        cy.get('#depositAmount').type('500');
        cy.get('#depositSubmit').click();

        // Verify that the balance reflects the deposit
        cy.contains('Balance: $1500'); // Adjust as per the expected result
    });

    it('should prevent overdraft on withdrawal', () => {
        cy.get('#username').type('testUser');
        cy.get('#password').type('testPassword');
        cy.get('#loginButton').click();

        // Attempt to withdraw more than the available balance
        cy.get('#withdrawAmount').type('2000');
        cy.get('#withdrawSubmit').click();

        // Verify that an error message is shown
        cy.contains('Insufficient funds');
    });
});
