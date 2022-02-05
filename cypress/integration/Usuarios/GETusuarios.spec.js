/// <reference types="cypress" />

describe('Given the Users api', () => {
    context('When I send GET /usarios', () => {
        it('Then it should return a list with all registered users', () => {
            cy.request({
                method: 'GET',
                url: 'https://serverest.dev/usuarios'
            })
                .should((response) => {
                    expect(response.status).to.eq(200)
                    expect(response.body.quantidade).to.eq(response.body.usuarios.length)
                    // expect(response.body.usuarios[0].email).to.not.be.null
                    Cypress._.each(response.body.usuarios, (usuario) => {
                        expect(usuario.email).to.not.be.null
                        expect(usuario).to.have.all.keys('nome', 'email', 'password', 'administrador', '_id')
                    })
                });
        })
    });
});

    context('When I send GET /usarios passing id query param', () => {
        it('Then it should return only the filtered user', () => {
            // place your test here
        });
    });
