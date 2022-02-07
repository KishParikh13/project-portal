/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { ChevronRightIcon } from '@heroicons/react/solid'

const navigation = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
]

/* This example requires Tailwind CSS v2.0+ */
const footerNavigation = {
    main: [
      { name: 'About', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Jobs', href: '#' },
      { name: 'Press', href: '#' },
      { name: 'Accessibility', href: '#' },
      { name: 'Partners', href: '#' },
    ],
    social: [
      {
        name: 'Facebook',
        href: '#',
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path
              fillRule="evenodd"
              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
      {
        name: 'Instagram',
        href: '#',
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path
              fillRule="evenodd"
              d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
      {
        name: 'Twitter',
        href: '#',
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
          </svg>
        ),
      },
      {
        name: 'GitHub',
        href: '#',
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path
              fillRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
      {
        name: 'Dribbble',
        href: '#',
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path
              fillRule="evenodd"
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
    ],
  }
  

export default function Landing() {
    return (
        <div>
            <div className="relative bg-gray-800 overflow-hidden">
                <div className="hidden sm:block sm:absolute sm:inset-0" aria-hidden="true">
                    <svg
                        className="absolute bottom-0 right-0 transform translate-x-1/2 mb-48 text-gray-700 lg:top-0 lg:mt-28 lg:mb-0 xl:transform-none xl:translate-x-0"
                        width={364}
                        height={384}
                        viewBox="0 0 364 384"
                        fill="none"
                    >
                        <defs>
                            <pattern
                                id="eab71dd9-9d7a-47bd-8044-256344ee00d0"
                                x={0}
                                y={0}
                                width={20}
                                height={20}
                                patternUnits="userSpaceOnUse"
                            >
                                <rect x={0} y={0} width={4} height={4} fill="currentColor" />
                            </pattern>
                        </defs>
                        <rect width={364} height={384} fill="url(#eab71dd9-9d7a-47bd-8044-256344ee00d0)" />
                    </svg>
                </div>
                <div className="relative pt-6 pb-16 sm:pb-24">
                    <Popover>
                        <nav
                            className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
                            aria-label="Global"
                        >
                            <div className="flex items-center flex-1">
                                <div className="flex items-center justify-between w-full md:w-auto">
                                    <a href="#">
                                        <span className="sr-only">Workflow</span>
                                        <img
                                            className="h-8 w-auto sm:h-10"
                                            src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                                            alt=""
                                        />
                                    </a>
                                    <div className="-mr-2 flex items-center md:hidden">
                                        <Popover.Button className="bg-gray-800 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white">
                                            <span className="sr-only">Open main menu</span>
                                            <MenuIcon className="h-6 w-6" aria-hidden="true" />
                                        </Popover.Button>
                                    </div>
                                </div>
                                <div className="hidden space-x-10 md:flex md:ml-10">
                                    {navigation.map((item) => (
                                        <a key={item.name} href={item.href} className="font-medium text-white hover:text-gray-300">
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                            </div>
                            <div className="hidden md:flex">
                                <a
                                    href="login"
                                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700"
                                >
                                    Log in
                                </a>
                            </div>
                        </nav>

                        <Transition
                            as={Fragment}
                            enter="duration-150 ease-out"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="duration-100 ease-in"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Popover.Panel
                                focus
                                className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                            >
                                <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                                    <div className="px-5 pt-4 flex items-center justify-between">
                                        <div>
                                            <img
                                                className="h-8 w-auto"
                                                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                                alt=""
                                            />
                                        </div>
                                        <div className="-mr-2">
                                            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                                <span className="sr-only">Close menu</span>
                                                <XIcon className="h-6 w-6" aria-hidden="true" />
                                            </Popover.Button>
                                        </div>
                                    </div>
                                    <div className="px-2 pt-2 pb-3 space-y-1">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                    <a
                                        href="#"
                                        className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
                                    >
                                        Log in
                                    </a>
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </Popover>

                    <main className="mt-16 sm:mt-24">
                        <div className="mx-auto max-w-7xl">
                            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                                <div className="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center">
                                    <div>
                                        <a
                                            href="#"
                                            className="inline-flex items-center text-white bg-gray-900 rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200"
                                        >
                                            <span className="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-indigo-500 rounded-full">
                                                Open Projects
                                            </span>
                                            <span className="ml-4 text-sm">Start browsing</span>
                                            <ChevronRightIcon className="ml-2 w-5 h-5 text-gray-500" aria-hidden="true" />
                                        </a>
                                        <h1 className="mt-4 text-2xl tracking-tight font-extrabold text-white sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xlmd:block ">
                                            Build experience and skills through <span className="text-indigo-400">curated micro-internships</span>  
                                        </h1>
                                        <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                                            Short-term projects for entry-level professionals and students to break into their industry.
                                        </p>
                                        <p className="mt-8 text-sm text-white uppercase tracking-wide font-semibold sm:mt-10">Used by</p>
                                        <div className="mt-5 w-full sm:mx-auto sm:max-w-lg lg:ml-0">
                                            <div className="flex flex-wrap items-start justify-between">
                                                <div className="flex justify-center px-1">
                                                    <img
                                                        className="h-9 sm:h-10"
                                                        src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg"
                                                        alt="Tuple"
                                                    />
                                                </div>
                                                <div className="flex justify-center px-1">
                                                    <img
                                                        className="h-9 sm:h-10"
                                                        src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
                                                        alt="Workcation"
                                                    />
                                                </div>
                                                <div className="flex justify-center px-1">
                                                    <img
                                                        className="h-9 sm:h-10"
                                                        src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
                                                        alt="StaticKit"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6">
                                    <div className="bg-white sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden">
                                        <div className="px-4 py-8 sm:px-10">
                                            <div>
                                                <p className="text-sm font-medium text-gray-700">Sign in with</p>

                                                <div className="mt-1 grid grid-cols-3 gap-3">
                                                    <div>
                                                        <a
                                                            href="#"
                                                            className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                                                        >
                                                            <span className="sr-only">Sign in with Facebook</span>
                                                            <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                                                <path
                                                                    fillRule="evenodd"
                                                                    d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                                                                    clipRule="evenodd"
                                                                />
                                                            </svg>
                                                        </a>
                                                    </div>

                                                    <div>
                                                        <a
                                                            href="#"
                                                            className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                                                        >
                                                            <span className="sr-only">Sign in with Twitter</span>
                                                            <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                                                <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                                                            </svg>
                                                        </a>
                                                    </div>

                                                    <div>
                                                        <a
                                                            href="#"
                                                            className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                                                        >
                                                            <span className="sr-only">Sign in with GitHub</span>
                                                            <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                                                <path
                                                                    fillRule="evenodd"
                                                                    d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                                                                    clipRule="evenodd"
                                                                />
                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="mt-6 relative">
                                                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                                                    <div className="w-full border-t border-gray-300" />
                                                </div>
                                                <div className="relative flex justify-center text-sm">
                                                    <span className="px-2 bg-white text-gray-500">Or</span>
                                                </div>
                                            </div>

                                            <div className="mt-6">
                                                <form action="#" method="POST" className="space-y-6">
                                                    <div>
                                                        <label htmlFor="name" className="sr-only">
                                                            Full name
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="name"
                                                            id="name"
                                                            autoComplete="name"
                                                            placeholder="Full name"
                                                            required
                                                            className="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                                                        />
                                                    </div>

                                                    <div>
                                                        <label htmlFor="mobile-or-email" className="sr-only">
                                                            Mobile number or email
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="mobile-or-email"
                                                            id="mobile-or-email"
                                                            autoComplete="email"
                                                            placeholder="Mobile number or email"
                                                            required
                                                            className="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                                                        />
                                                    </div>

                                                    <div>
                                                        <label htmlFor="password" className="sr-only">
                                                            Password
                                                        </label>
                                                        <input
                                                            id="password"
                                                            name="password"
                                                            type="password"
                                                            placeholder="Password"
                                                            autoComplete="current-password"
                                                            required
                                                            className="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                                                        />
                                                    </div>

                                                    <div>
                                                        <button
                                                            type="submit"
                                                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                        >
                                                            Create your account
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="px-4 py-6 bg-gray-50 border-t-2 border-gray-200 sm:px-10">
                                            <p className="text-xs leading-5 text-gray-500">
                                                By signing up, you agree to our{' '}
                                                <a href="#" className="font-medium text-gray-900 hover:underline">
                                                    Terms
                                                </a>
                                                ,{' '}
                                                <a href="#" className="font-medium text-gray-900 hover:underline">
                                                    Data Policy
                                                </a>{' '}
                                                and{' '}
                                                <a href="#" className="font-medium text-gray-900 hover:underline">
                                                    Cookies Policy
                                                </a>
                                                .
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
            <main className="bg-indigo-800">
                <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Trusted by developers from over 80 planets</h2>
                        <p className="mt-3 text-xl text-indigo-200 sm:mt-4">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus repellat laudantium.
                        </p>
                    </div>
                    <dl className="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
                        <div className="flex flex-col">
                            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-indigo-200">Pepperoni</dt>
                            <dd className="order-1 text-5xl font-extrabold text-white">100%</dd>
                        </div>
                        <div className="flex flex-col mt-10 sm:mt-0">
                            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-indigo-200">Delivery</dt>
                            <dd className="order-1 text-5xl font-extrabold text-white">24/7</dd>
                        </div>
                        <div className="flex flex-col mt-10 sm:mt-0">
                            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-indigo-200">Calories</dt>
                            <dd className="order-1 text-5xl font-extrabold text-white">100k+</dd>
                        </div>
                    </dl>
                </div>
            </main>
            <footer className="bg-white">
                <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
                <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
                    {footerNavigation.main.map((item) => (
                    <div key={item.name} className="px-5 py-2">
                        <a href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                        {item.name}
                        </a>
                    </div>
                    ))}
                </nav>
                <div className="mt-8 flex justify-center space-x-6">
                    {footerNavigation.social.map((item) => (
                    <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
                        <span className="sr-only">{item.name}</span>
                        <item.icon className="h-6 w-6" aria-hidden="true" />
                    </a>
                    ))}
                </div>
                <p className="mt-8 text-center text-base text-gray-400">&copy; 2020 Workflow, Inc. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}