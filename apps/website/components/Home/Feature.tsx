import { motion } from 'framer-motion';
import { FcMultipleInputs, FcSmartphoneTablet, FcStackOfPhotos } from 'react-icons/fc';

const FeatureCard = ({ icon, title, description, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ ease: 'linear', duration: 0.7, delay: 1 }}
      className={`duration-300 transition-transform bg-gradient-to-br flex gap-4 rounded-xl p-4 drop-shadow-xl bg-bw-50 hover:-translate-y-2 ${className}`}
    >
      <div className={'w-32'}>{icon}</div>
      <div className={'flex flex-col gap-2'}>
        <div className={'text-lg font-bold leading-normal'}>{title}</div>
        <div className={'text-base font-light leading-snug'}>{description}</div>
      </div>
    </motion.div>
  );
};

export const Feature = () => {
  return (
    <>
      <section className="py-10 flex flex-col items-center gap-6">
        <motion.h1
          initial={{ opacity: 0, x: '-100%' }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ease: 'linear', duration: 0.5, delay: 1 }}
          className={'text-3xl font-bold text-primary-1000'}
        >
          Why choose us ?
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, x: '100%' }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ease: 'linear', duration: 0.5, delay: 1 }}
          className={'text-2xl xl:text-5xl font-bold'}
        >
          Where you all wants here !
        </motion.h1>
        <div className={'grid xl:grid-cols-3 gap-8 pt-4'}>
          <FeatureCard
            icon={<FcMultipleInputs size={'100%'} />}
            title={'Components Collection'}
            description={'Lots of components for all your website needs that meet accessibility criteria.'}
            className={'from-bw-50 to-warn-600'}
          ></FeatureCard>
          <FeatureCard
            icon={<FcSmartphoneTablet size={'100%'} />}
            title={'Frameworks and HTML'}
            description={'With our Tailwindcss plugin that are also compatible with React & Vue and others.'}
            className={'from-bw-50 to-danger-600'}
          ></FeatureCard>
          <FeatureCard
            icon={<FcStackOfPhotos size={'100%'} />}
            title={'Themes & Dark mode'}
            description={'Customizable themes that lets you style your site differently even dark mode is enabled.'}
            className={'from-bw-50 to-primary-600'}
          ></FeatureCard>
        </div>
      </section>
    </>
  );
};
