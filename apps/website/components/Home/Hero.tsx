import React from 'react';
import styles from './hero.module.css';
import { CodeBlock } from '../CodeBlock';
import nextSeoConfig from '../../next-seo.config';
import Link from 'next/link';

export const Hero = () => {
  return (
    <>
      <div className={`${styles.mesh}`}></div>
      <section className={`z-[1] relative py-10 flex flex-wrap xl:flex-nowrap gap-8 w-full`}>
        <div className="flex flex-col justify-center gap-10">
          <h1>
            <span className="bg-gradient-to-tl from-primary-800 via-danger-800 to-secondary-800 bg-clip-text text-transparent text-5xl xl:text-7xl font-bold leading-relaxed">
              Sira UI
            </span>
            <br />
            <span className="font-bold leading-snug text-4xl xl:text-6xl break-words">
              Excellent <u>design system</u> for <strong className={'text-rose-500'}>modern</strong> user interface
              design used by <u>developers & designers</u>.
            </span>
          </h1>
          <p className="text-bw-1000 text-lg leading-snug">{nextSeoConfig.description}</p>
          <div className={'flex gap-4 items-center'}>
            <Link href={'/docs/guide/installation'} className={'mx-auto xl:mx-0 scale-90'}>
              <button className="btn solid primary xl">Launch it</button>
            </Link>
            <CodeBlock
              wrapperClass={'w-fit h-fit hidden xl:block'}
              language="bash"
            >{`npm install @sira-ui/tailwind`}</CodeBlock>
          </div>
        </div>
        <div className="w-full flex-col gap-3 hidden xl:flex">
          <div className="flex flex-wrap gap-2">
            <button className="btn solid primary">Primary</button>
            <button className="btn solid secondary">Secondary</button>
            <button className="btn solid info">Info</button>
            <button className="btn solid success">Success</button>
            <button className="btn solid warn">Warn</button>
            <button className="btn solid danger">Danger</button>
          </div>
          <div className="btn-group primary">
            <button className="btn solid ">Group</button>
            <button className="btn solid ">Group</button>
            <button className="btn solid  active">Active</button>
            <button className="btn solid ">Group</button>
            <button className="btn solid ">Group</button>
          </div>
          <div className={'flex gap-3'}>
            <input className="!input success outline !ring-offset-transparent" placeholder="Search..." />
            <div className="breadcrumbs warn">
              <ul>
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>Library</a>
                </li>
                <li>Add Data</li>
              </ul>
            </div>
          </div>
          <div className="prompt success">
            <div className="content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla necessitatibus iusto laborum autem placeat
              aspernatur inventore eius deleniti reprehenderit? Numquam commodi totam mollitia quod
            </div>
            <div className="title">Lorem ipsum dolor sit amet</div>
            <div className="icon">
              <svg className="inline w-6 h-6 fill-current mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <g data-v-2d0d7d62="">
                  <rect data-v-2d0d7d62="" fill="none" height="24" width="24"></rect>
                </g>
                <g data-v-2d0d7d62="">
                  <g data-v-2d0d7d62=""></g>
                  <g data-v-2d0d7d62="">
                    <circle cx="15.5" cy="9.5" data-v-2d0d7d62="" r="1.5"></circle>
                    <circle cx="8.5" cy="9.5" data-v-2d0d7d62="" r="1.5"></circle>
                    <path d="M12,18c2.28,0,4.22-1.66,5-4H7C7.78,16.34,9.72,18,12,18z" data-v-2d0d7d62=""></path>
                    <path
                      d="M11.99,2C6.47,2,2,6.48,2,12c0,5.52,4.47,10,9.99,10C17.52,22,22,17.52,22,12C22,6.48,17.52,2,11.99,2z M12,20 c-4.42,0-8-3.58-8-8c0-4.42,3.58-8,8-8s8,3.58,8,8C20,16.42,16.42,20,12,20z"
                      data-v-2d0d7d62=""
                    ></path>
                  </g>
                </g>
              </svg>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="dropdown-container">
              <div className="open dropdown danger">
                <label className="btn solid" tabIndex={0}>
                  <span>Dropdown</span>
                </label>
                <div className="menu !z-10 bottom-right gap-1 text-sm leading-5">
                  <div className="item">
                    <p className="">Signed in as</p>
                    <p className=" truncate">
                      <strong>demo@example.com</strong>
                    </p>
                  </div>
                  <a tabIndex={-1} className="item active" role="menuitem">
                    <span>Account settings</span>
                  </a>
                  <a tabIndex={-1} className="item" role="menuitem">
                    <span>Subscriptions</span>
                  </a>

                  <a className="item" role="menuitem">
                    <span>License</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <span className="badge solid primary ">Primary</span>
              <span className="badge solid secondary ">Secondary</span>
              <span className="badge solid success ">Success</span>
              <span className="badge solid danger ">Error</span>
              <span className="badge solid warn ">Warning</span>
            </div>
            <div className="flex flex-col gap-5">
              <button className="btn primary solid">Button</button>
              <label className="flex items-center gap-2">
                <input className="checkbox secondary" type={'checkbox'} defaultChecked />
                <span>Checkbox</span>
              </label>
              <label className="flex items-center gap-2">
                <input className="switch success" type={'checkbox'} defaultChecked />
                <span>Switch</span>
              </label>
              <label className="flex items-center gap-2">
                <input className="radio warn" type={'radio'} defaultChecked />
                <span>Radio</span>
              </label>
            </div>
          </div>
          <div className="flex gap-4 pt-8">
            <span className="tooltip bottom bw show" data-tooltip="hello">
              <button className="btn outline info">Tooltip</button>
            </span>
            <div className="avatar sm">
              <img alt="avatar" src="https://picsum.photos/id/338/100/100" />
            </div>
            <div className="avatar md square">
              <img alt="avatar" src="https://picsum.photos/id/64/100/100" />
            </div>
            <div className="avatar lg ring success">
              <img alt="avatar" src="https://picsum.photos/id/65/100/100" />
            </div>
            <div className="loader success">
              <div className="flow-cross"></div>
            </div>
            <div className="loader info">
              <div className="spin"></div>
            </div>
            <div className="tabs flex-nowrap boxed danger pill">
              <div className="tab p-4">Tab 1</div>
              <div className="tab p-4">Tab 2</div>
              <div className="tab active p-4">Tab 3</div>
            </div>
          </div>
          <div className={'flex'}>
            <div className="accordion-group bordered warn">
              <div className="accordion open">
                <input className="toggle" id="accordion-bordered-success-1" type="checkbox" />
                <label className="title" htmlFor="accordion-bordered-success-1">
                  Toggle Accordion 1
                </label>
                <div className="content">
                  <div className="min-h-0">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla necessitatibus iusto laborum autem
                    placeat aspernatur inventore eius deleniti reprehenderit? Numquam commodi totam mollitia quod
                  </div>
                </div>
              </div>
              <div className="accordion">
                <input className="toggle" id="accordion-bordered-success-2" type="checkbox" />
                <label className="title" htmlFor="accordion-bordered-success-2">
                  Toggle Accordion 2
                </label>
                <div className="content">
                  <div className="min-h-0">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla necessitatibus iusto laborum autem
                    placeat aspernatur inventore eius deleniti reprehenderit? Numquam commodi totam mollitia quo
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
