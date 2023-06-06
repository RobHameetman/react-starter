/* Load type definitions that come with Cypress */
/// <reference types="cypress" />

declare global {
	namespace Cypress {
		interface Chainable {
			/**
			 * Custom command to run an a11y audit.
			 *
			 * @example
			 * cy.changeScreenSize('iphone-6');
			 */
			changeScreenSize(size: ViewportPreset): Chainable;
			/**
			 * Custom command to visit a specific route.
			 *
			 * @example
			 * cy.interceptAndVisit('/home', () => { ... });
			 */
			interceptAndVisit(path: string, fn: () => void): Chainable;
			/**
			 * Custom command to login as a normal user.
			 *
			 * @example
			 * cy.login();
			 */
			login(): Chainable;
			/**
			 * Custom command to remove the cookie banner.
			 *
			 * @example
			 * cy.removeCookieBanner();
			 */
			removeCookieBanner(): Chainable;
			/**
			 * Custom command to run an a11y audit.
			 *
			 * @example
			 * cy.runA11yAudit('greeting');
			 */
			runA11yAudit(name: string): Chainable;
			/**
			 * Custom command to wait until an assertion is `true`. This is
			 * provided by the {@link cypress-wait-until} package.
			 *
			 * @example
			 * cy.waitUntil(() => cy.get('h1').should('be.visible'));
			 */
			waitUntil(fn: () => void): Chainable;
			/**
			 * Custom command to visit a specific route. This is similar to
			 * {@link cy.visit()}, but calls additional commands like
			 * {@link cy.loginAsAdmin()} and {@link cy.injectAxe()} to reduce
			 * setup/teardown logic in `beforeEach()` and `afterEach()` clauses.
			 *
			 * @example
			 * cy.visitAsAdmin('/');
			 */
			visitAsAdmin(path: string, opts?: Partial<Cypress.VisitOptions>): Chainable;
			/**
			 * Custom command to visit a specific route. This is similar to
			 * {@link cy.visit()}, but calls additional commands like
			 * {@link cy.login()} and {@link cy.injectAxe()} to reduce setup/teardown
			 * logic in `beforeEach()` and `afterEach()` clauses.
			 *
			 * @example
			 * cy.visitAsUser('/');
			 */
			visitAsUser(path: string, opts?: Partial<Cypress.VisitOptions>): Chainable;
		}
	}
}

export {};
