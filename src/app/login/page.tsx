import NavbarLogout from '../components/navbar/navbar-logout'
import LoginStyle from './login.module.css'

const Login = () => {
    return <>
        <NavbarLogout text='Login' />
        <main className={LoginStyle.flexContainer}>
        <div className="flex bg-white h-auto max-w-96 m-auto flex-1 shadow-gray-900 flex-col justify-center px-6 lg:px-8 py-12 border border-gray p-12 border-0">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-blue-900">
                Inicia sesión en tu cuenta
            </h2>
            </div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
                <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Direccion de correo electronico
                </label>
                <div className="mt-2">
                    <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    />
                </div>
                </div>

                <div>
                <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Contraseña
                    </label>
                    <div className="text-sm">
                    <a href="#" className="font-semibold text-blue-600 hover:text-blue-500">
                        Olvidaste la contraseña?
                    </a>
                    </div>
                </div>
                <div className="mt-2">
                    <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    />
                </div>
                </div>

                <div>
                <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-gradient-to-r from-blue-900 to-blue-950 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Ingresar
                </button>
                </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
                No eres miembro aun?{' '}
                <a href={'/sign-up'} className="font-semibold leading-6 text-blue-800 hover:text-blue-600">
                    Registrate aqui
                </a>
            </p>
            </div>
        </div>
    </main>
    </>
}

export default Login