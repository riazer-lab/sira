import styles from './hero.module.css';
import { CodeBlock } from '../CodeBlock';
import nextSeoConfig from '../../next-seo.config';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import i18n from '../../util/i18next';
import { useTranslation } from 'react-i18next';

export const Hero = () => {
  const { locale } = useRouter();
  const trans = useTranslation('home', { i18n, keyPrefix: 'hero' });
  const t = (k: string, opts?: object) => trans.t(k, { lng: locale, ...opts });
  return (
    <>
      <div className={`${styles.mesh}`}></div>
      <section className={`z-[1] relative py-10 flex flex-wrap xl:flex-nowrap gap-8 w-full`}>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: 'easeInOut', duration: 1 }}
          className="flex flex-col justify-center gap-10 h-[80vh]"
        >
          <h1>
            <span className="bg-gradient-to-tl from-primary-800 via-danger-800 to-secondary-800 bg-clip-text text-transparent text-5xl xl:text-7xl font-bold leading-relaxed">
              Sira
            </span>
            <br />
            <span
              className="font-bold leading-snug text-4xl xl:text-6xl break-words"
              dangerouslySetInnerHTML={{ __html: t('slogan') }}
            ></span>
          </h1>
          <p className="text-bw-1000 text-lg leading-snug">{nextSeoConfig(locale).description}</p>
          <div className={'flex gap-4 items-center'}>
            <Link href={'/docs/guide/installation'} className={'mx-auto xl:mx-0 scale-90'}>
              <button className="btn solid primary xl">🚀{t('launch')}</button>
            </Link>
            <div className="relative group">
              <CodeBlock
                wrapperClass={'w-fit h-fit hidden xl:block'}
                language="bash"
              >{`npm install @sira-ui/tailwind`}</CodeBlock>
              <div className="absolute z-[2] inset-0 transition-all duration-700 opacity-0 group-hover:opacity-100 group-hover:translate-y-[115%]">
                <CodeBlock
                  wrapperClass={'w-full h-fit hidden xl:block'}
                  language="bash"
                >{`yarn add @sira-ui/tailwind`}</CodeBlock>
              </div>
              <div className="absolute z-[3] inset-0 transition-all duration-700 opacity-0 group-hover:opacity-100 group-hover:translate-y-[230%]">
                <CodeBlock
                  wrapperClass={'w-full h-fit hidden xl:block'}
                  language="bash"
                >{`pnpm add @sira-ui/tailwind`}</CodeBlock>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: 'easeInOut', duration: 1 }}
          className="w-full flex-col gap-3 hidden xl:flex"
        >
          <div className="flex flex-wrap gap-2">
            <button className="btn solid primary">Primary</button>
            <button className="btn outline secondary">Secondary</button>
            <button className="btn solid info">Info</button>
            <button className="btn light success">Success</button>
            <button className="btn solid warn">Warn</button>
            <button className="btn ghost danger">Danger</button>
          </div>
          <div className="btn-group danger">
            <button className="btn solid ">Group</button>
            <button className="btn solid ">Group</button>
            <button className="btn solid  active">Active</button>
            <button className="btn solid ">Group</button>
            <button className="btn solid ">Group</button>
          </div>
          <div className={'flex gap-3'}>
            <div className="input danger">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1 2C0.447715 2 0 2.44772 0 3V12C0 12.5523 0.447715 13 1 13H14C14.5523 13 15 12.5523 15 12V3C15 2.44772 14.5523 2 14 2H1ZM1 3L14 3V3.92494C13.9174 3.92486 13.8338 3.94751 13.7589 3.99505L7.5 7.96703L1.24112 3.99505C1.16621 3.94751 1.0826 3.92486 1 3.92494V3ZM1 4.90797V12H14V4.90797L7.74112 8.87995C7.59394 8.97335 7.40606 8.97335 7.25888 8.87995L1 4.90797Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                />
              </svg>
              <input placeholder="Email..." />
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0.877075 7.49988C0.877075 3.84219 3.84222 0.877045 7.49991 0.877045C11.1576 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1576 14.1227 7.49991 14.1227C3.84222 14.1227 0.877075 11.1575 0.877075 7.49988ZM7.49991 1.82704C4.36689 1.82704 1.82708 4.36686 1.82708 7.49988C1.82708 10.6329 4.36689 13.1727 7.49991 13.1727C10.6329 13.1727 13.1727 10.6329 13.1727 7.49988C13.1727 4.36686 10.6329 1.82704 7.49991 1.82704ZM9.85358 5.14644C10.0488 5.3417 10.0488 5.65829 9.85358 5.85355L8.20713 7.49999L9.85358 9.14644C10.0488 9.3417 10.0488 9.65829 9.85358 9.85355C9.65832 10.0488 9.34173 10.0488 9.14647 9.85355L7.50002 8.2071L5.85358 9.85355C5.65832 10.0488 5.34173 10.0488 5.14647 9.85355C4.95121 9.65829 4.95121 9.3417 5.14647 9.14644L6.79292 7.49999L5.14647 5.85355C4.95121 5.65829 4.95121 5.3417 5.14647 5.14644C5.34173 4.95118 5.65832 4.95118 5.85358 5.14644L7.50002 6.79289L9.14647 5.14644C9.34173 4.95118 9.65832 4.95118 9.85358 5.14644Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="breadcrumbs info">
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
          <div className="prompt warn">
            <div className="content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla necessitatibus iusto laborum autem placeat
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
          <div className="grid grid-cols-3">
            <div className="dropdown-container">
              <div className="open dropdown success">
                <label className="btn solid" tabIndex={0}>
                  <span>Dropdown</span>
                </label>
                <div className="menu !z-10 bottom-right gap-1 text-sm leading-5">
                  <div className="item flex-col gap-1 !items-start">
                    <p>Signed in as</p>
                    <p className="truncate">
                      <strong>demo@example.com</strong>
                    </p>
                  </div>
                  <a tabIndex={-1} className="item active" role="menuitem">
                    <span>Account settings</span>
                  </a>
                  <a tabIndex={-1} className="item" role="menuitem">
                    <span>Subscriptions</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 items-center gap-4 col-span-2 grid-rows-4 place-content-stretch place-items-stretch">
              <span className="badge solid primary ">Primary</span>
              <div className="grid grid-cols-3 grid-rows-2 gap-2 col-[2_/_-1] row-[1_/_4] place-self-stretch">
                <div className="skeleton pulse row-span-full"></div>
                <div className="skeleton wave col-span-2"></div>
                <div className="skeleton wave col-span-2"></div>
              </div>
              <span className="badge outline secondary">Secondary</span>
              <span className="badge solid success ">Success</span>
              <span className="badge light danger ">Error</span>
              <span className="badge light warn ">Warning</span>
              <div className="progress indeterminate colored success sm"></div>
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
          <div className="divider">
            <div className="loader bw xs opacity-70">
              <div className="spin"></div>
            </div>
            <div>Loading</div>
          </div>
          <div className="steps primary top">
            <div className="step active" data-content="✓">
              Checked
            </div>
            <div className="step active" data-content="">
              Empty
            </div>
            <div className="step" data-content="★">
              Star
            </div>
            <div className="step" data-content="●">
              Circle
            </div>
            <div className="step" data-content="💪">
              Emoji
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
            <div className="accordion-group bordered info">
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};
