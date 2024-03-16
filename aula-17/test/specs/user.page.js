import {expect, driver} from '@wdio/globals'
import homePage from '../pageobjects/home.page.js'
import profilePage from '../pageobjects/profile.page.js';
import userFormPage from '../pageobjects/user.form.page.js';

describe('Criação de usuário', () => {
    it('deverá criar um usuário específico', async() => {
        await homePage.openMenu('profile');
        let firstName = 'teste';
        await userFormPage.create(
            firstName, 
            'teste', 
            '551130281234', 
            'usuario-mobile@ebac.com.br', 
            'senhaF3rte', 
            'senhaF3rte');
        
        await homePage.openMenu('profile');

        expect((await profilePage.profileName(firstName)).isDisplayed())
            .toBeTruthy();
    })
});
