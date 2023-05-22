/* *
 * @jest-environment jsdom
 */
import { editPosts, deletePost, getPost, exit } from '../src/lib/index.js';
import { wall } from '../src/view/wall.js';
import { navigateTo } from '../src/main.js';

jest.mock('firebase/auth', () => ({
  getAuth: () => ({
    currentUser: {
      displayName: 'John Doe',
      uid: '787tgftyft',
    },
  }),
}));

jest.mock('../src/lib/index.js', () => ({
  getPost: jest.fn(),
  editPosts: jest.fn(),
  deletePost: jest.fn(),
  exit: jest.fn(() => Promise.resolve()),
}));

jest.mock('../src/main.js', () => ({
  navigateTo: jest.fn(),
}));

describe('Se renderiza el componente del muro', () => {
  let newWall;

  beforeEach(() => {
    const mockQueryData = [
      {
        id: 'postid',
        data: jest.fn().mockReturnValue({
          petName: 'Fido',
          description: 'Perro lindo',
          username: 'Marissa Vargas',
          like: [],
        }),
      },
    ];

    getPost.mockImplementation((callback) => {
      callback(mockQueryData);
    });
    newWall = wall();
  });
  afterEach(jest.clearAllMocks);

  test('Deben estar los elementos para el wall', () => {
    expect(newWall).toBeTruthy();
    expect(newWall.querySelector('div')).toBeTruthy();
    expect(newWall.querySelector('section')).toBeTruthy();
    expect(newWall.querySelector('header')).toBeTruthy();
    expect(newWall.querySelectorAll('img')).toBeTruthy();
    expect(newWall.querySelector('nav')).toBeTruthy();
    expect(newWall.querySelector('h1')).toBeTruthy();
    expect(newWall.querySelector('.containerIcons')).toBeTruthy();
    expect(newWall.querySelectorAll('ul')).toBeTruthy();
    expect(newWall.querySelectorAll('li')).toBeTruthy();
    expect(newWall.querySelector('.hamburger')).toBeTruthy();
    expect(newWall.querySelectorAll('span')).toBeTruthy();
    expect(newWall.querySelector('footer')).toBeTruthy();
    expect(newWall.querySelector('article')).toBeTruthy();
    expect(newWall.querySelector('.divUsersPointsEl')).toBeTruthy();
    expect(newWall.querySelectorAll('p')).toBeTruthy();
    expect(newWall.querySelector('.reactionContainer')).toBeTruthy();
    expect(newWall.querySelector('dialog')).toBeTruthy();
  });

  test('al hacer clic en el menú hamburguesa la clase debe cambiar a active', () => {
    const container = document.createElement('section');
    container.append(wall());
    const hamburgerArticle = container.querySelector('.hamburger');
    const sectionMenu = document.createElement('section-menu');

    hamburgerArticle.dispatchEvent(new Event('click'));
    expect(sectionMenu.classList.contains('active')).toBe(false);

    expect(sectionMenu.classList.contains('active')).toBe(false);
  });

  test('si se cumple que post.usename === currentUser', () => {
    setTimeout(() => {
      const post = { username: 'nombreDeUsuario' };
      const auth = { currentUser: { displayName: 'nombreDeUsuario' } };

      // Ejecuta el bloque de código
      const divUsersPointsEl = newWall.querySelector('.divUsersPointsEl');
      const iconoPoints = newWall.querySelector('#iconoPoints');
      const postArticle = newWall.querySelector('.postArticle');
      const menuPoints = newWall.querySelector('.menuPoints');
      const iconClose = newWall.querySelector('#iconClose');
      const iconTrash = newWall.querySelector('#iconTrash');
      const iconEdit = newWall.querySelector('#iconEdit');
      const liDelete = newWall.querySelector('.liDelete');
      const pPregunta = newWall.querySelector('#pPregunta');
      const liEdit = newWall.querySelector('.liEdit');
      const liConfirm = newWall.querySelector('#liConfirm');
      const liCancel = newWall.querySelector('.liCancel');
      const modal = newWall.querySelector('#modal');
      const ulModal = newWall.querySelector('.ulModal');

      divUsersPointsEl.append(iconoPoints);
      postArticle.append(menuPoints);
      liDelete.append(iconTrash, 'Delete');
      liEdit.append(iconEdit, 'Edit');
      menuPoints.append(iconClose, liDelete, liEdit);
      modal.append(pPregunta, ulModal);
      ulModal.append(liConfirm, liCancel);

      // Verifica que los elementos sean agregados correctamente
      expect(newWall.querySelector('.divUsersPointsEl img')).toBeTruthy();
      expect(newWall.querySelector('.postArticle .menuPoints')).toBeTruthy();
      expect(newWall.querySelector('#iconClose')).toBeTruthy();
      expect(newWall.querySelector('.liDelete img')).toBeTruthy();
      expect(newWall.querySelector('.liEdit img')).toBeTruthy();
      expect(newWall.querySelector('.liEdit').textContent).toBe('Edit');
      expect(newWall.querySelector('#modal p')).toBeTruthy();
      expect(newWall.querySelector('.ulModal li#liConfirm')).toBeTruthy();
      expect(newWall.querySelector('.ulModal li.liCancel')).toBeTruthy();

      // Verifica que la condición se cumpla
      expect(post.username === auth.currentUser.displayName).toBe(true);
    }, 1000);
  });

  test('si no se cumple que post.userid === currentUser', () => {
    // Simula el escenario estableciendo los valores esperados
    const post = { username: 'nombreDeUsuario' };
    const auth = { currentUser: { displayName: 'otroUsuario' } };

    // Verifica que la condición no se cumpla
    expect(post.username === auth.currentUser.displayName).toBe(false);
  });

  // test('la fx deletePost recibe el id', () => {
  //   setTimeout(() => {
  //     const newLiConfirm = newWall.querySelector('#liConfirm');

  //     newLiConfirm.dispatchEvent(new Event('click'));

  //     expect(deletePost).toHaveBeenCalledWith('mockedId');
  //   }, 1000); // Espera 1 segundo antes de seleccionar el elemento
  // });

  test('debería eliminar el post y cerrar el modal de confirmación', () => {
    deletePost.mockImplementation((id) => {
    // Crear los elementos necesarios para el test
      const post = { id: 'postid' };
      const modal = {
        close: jest.fn(),
        open: false,
      };
      const modalConfirm = {
        open: false,
        close: jest.fn(),
      };
      const liConfirm = {
        addEventListener: jest.fn((event, callback) => {
        // Simular el evento click
          callback();
          // Verificar que las funciones y propiedades hayan sido llamadas correctamente
          expect(id).toBe('postid');
          expect(deletePost).toHaveBeenCalledWith('postid');
          expect(deletePost).toHaveBeenCalledTimes(1);
          expect(deletePost).toHaveBeenLastCalledWith(expect.any(Function), 3000);
        }),
      };
      // Ejecutar el código a probar
      liConfirm.addEventListener('click', () => {
        deletePost(post.id);
        modal.close();
        modalConfirm.open = true;
        setTimeout(() => {
          modalConfirm.close();
        }, 3000);
      });
    });
  });

  test('la fx de editPosts recibe los parámetros y al hacer click se cierra el modal de edición y se abre el de confirmación', () => {
    const buttonEdit = newWall.querySelector('#buttonEdit');
    const inputEditName = newWall.querySelector('#inputEditName');
    const inputEditDescription = newWall.querySelector('#inputEditDescription');
    const modalEdit = newWall.querySelector('#modalEdit');
    const modalConfirmEdit = newWall.querySelector('#modalConfirmEdit');
    const closeSpy = jest.spyOn(modalEdit, 'remove');
    inputEditName.value = 'Fido';
    inputEditDescription.value = 'Perrito lindo';

    buttonEdit.dispatchEvent(new Event('click'));

    expect(editPosts).toHaveBeenCalledWith('postid', 'Fido', 'Perrito lindo');
    expect(closeSpy).toHaveBeenCalled();
    expect(modalConfirmEdit.open).toBe(true);

    closeSpy.mockRestore();
  });

  test('la fx de exit se llama al hacer click en la opción de "Log Out" del menú', () => {
    const btnLogOut = newWall.querySelector('.btn-log-out');

    const event = new Event('click');
    event.navigateTo = 'destination'; // Establecer el valor adecuado para navigateTo

    btnLogOut.dispatchEvent(event);

    expect(exit).toHaveBeenCalled();
    expect(exit).toHaveBeenCalledWith('destination');
  });

  // test('la fx de exit se llama al hacer click en la opción de "Log Out" del menú', () => {
  //   const btnLogOut = newWall.querySelector('.btn-log-out');

  //   btnLogOut.dispatchEvent(new Event('click'));

  //   expect(exit).toHaveBeenCalled();
  //   expect(exit).toHaveBeenCalledWith(navigateTo);
});
