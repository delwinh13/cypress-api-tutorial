/// <reference types="cypress" />

describe('Given the Users api', () => {
    context('When I send POST /usarios', () => {
        it('Then it should create a new user', () => {
            cy.request({
                method: 'POST',
                url: '/usuarios',
                body: {
                    nome: "Dumb Joe",
                    email: "dumb.joe@qa.com.br",
                    password: "test",
                    administrador: "true"
                }
            })
                .should((response) => {
                    expect(response.status).eq(201)
                    expect(response.body.message).eq("Cadastro realizado com sucesso")
                });
        });
    });
});