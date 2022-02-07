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
import Navbar from './shared/Navbar'
import Footer from './shared/Footer'

/* This example requires Tailwind CSS v2.0+ */
import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'

const faqs = [
    {
        id: 1,
        question: "What's the best thing about Switzerland?",
        answer:
            "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
        id: 2,
        question: "What's the best thing about Switzerland?",
        answer:
            "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
        id: 3,
        question: "What's the best thing about Switzerland?",
        answer:
            "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
        id: 4,
        question: "What's the best thing about Switzerland?",
        answer:
            "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    }
    // More questions...
]

const features = [
    {
        name: 'Competitive exchange rates',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: GlobeAltIcon,
    },
    {
        name: 'No hidden fees',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: ScaleIcon,
    },
    {
        name: 'Transfers are instant',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: LightningBoltIcon,
    },
    {
        name: 'Mobile notifications',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: AnnotationIcon,
    },
]

export default function Landing() {
    return (
        <div>

            <Navbar />
            <div className="relative bg-gray-800 overflow-hidden">
                <div className="relative pt-6 pb-16 sm:pb-24">

                    <main className="mt-6">
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
            <section className="bg-indigo-800">
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
            </section>
            
            <section>
                <div className="py-12 bg-gray-800">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="lg:text-center">
                            <h2 className="text-base text-gray-400 font-semibold tracking-wide uppercase">Transactions</h2>
                            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-200 sm:text-4xl">
                                A better way to send money
                            </p>
                            <p className="mt-4 max-w-2xl text-xl text-gray-400 lg:mx-auto">
                                Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
                                accusamus quisquam.
                            </p>
                        </div>

                        <div className="mt-10">
                            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                                {features.map((feature) => (
                                    <div key={feature.name} className="relative">
                                        <dt>
                                            <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                                <feature.icon className="h-6 w-6" aria-hidden="true" />
                                            </div>
                                            <p className="ml-16 text-lg leading-6 font-medium text-gray-200">{feature.name}</p>
                                        </dt>
                                        <dd className="mt-2 ml-16 text-base text-gray-400">{feature.description}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="bg-gray-800">
                    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                        <div className="bg-indigo-700 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
                            <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
                                <div className="lg:self-center">
                                    <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                                        <span className="block">Ready to dive in?</span>
                                        <span className="block">Start your free trial today.</span>
                                    </h2>
                                    <p className="mt-4 text-lg leading-6 text-indigo-200">
                                        Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla
                                        nec.
                                    </p>
                                    <a
                                        href="#"
                                        className="mt-8 bg-white border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-indigo-600 hover:bg-indigo-50"
                                    >
                                        Sign up for free
                                    </a>
                                </div>
                            </div>
                            <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
                                <img
                                    className="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
                                    src="https://tailwindui.com/img/component-images/full-width-with-sidebar.jpg"
                                    alt="App screenshot"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="bg-gray-800">
                    <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                        <div className="lg:max-w-2xl lg:mx-auto lg:text-center">
                            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Frequently asked questions</h2>
                            <p className="mt-4 text-gray-400">
                                Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec.
                                Urna, sed a lectus elementum blandit et.
                            </p>
                        </div>
                        <div className="mt-20">
                            <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-10">
                                {faqs.map((faq) => (
                                    <div key={faq.id}>
                                        <dt className="font-semibold text-white">{faq.question}</dt>
                                        <dd className="mt-3 text-gray-400">{faq.answer}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}