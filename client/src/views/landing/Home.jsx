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
import LoginForm from './shared/LoginForm'

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
            <div className="relative bg-gray-800">
                <div className="relative pt-6 pb-16 sm:pb-24">
                    <div className="mt-6">
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
                                <div className="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center">
                                    <LoginForm />
                                </div>
                            </div>
                        </div>
                    </div>
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