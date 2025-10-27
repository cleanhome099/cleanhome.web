'use client';

import { FC } from 'react';
import { IconTools, IconCalendarEvent, IconTable, IconSpray } from '@tabler/icons-react';
import styles from './ExtraServices.module.css';
import { ServiceCard } from "../CleaningServices/CleaningServices";
import { Image } from "@mantine/core";

interface ServiceItem {
  title: string;
  fromPrice: string;
  description: string[];
  icon: any;
}

const services: ServiceItem[] = [
  {
    title: 'Event Cleanup & Hosting Support',
    fromPrice: 'from $200–$0',
    icon: <IconCalendarEvent size={24} />,
    description: [
      'Full kitchen & dining cleanup',
      'Trash removal, floors, guest area reset.',
      'Add a second load: $50 /hr (4 hr min)'
    ],
  },
  {
    title: 'Post-Party Cleaning Package',
    icon: <IconTools size={24} />,
    fromPrice: 'from $250',
    description: [
      'Detailed cleaning of kitchen, dining room & guest areas',
      'Bathroom cleaning',
      'Trash cleaned–floors cleaned, freshened surface wipe-down',
      'Linens changed & beds made'
    ],
  },
  {
    title: 'Handyman Help',
    fromPrice: 'from $50 /h',
    icon: <IconTable size={24} />,
    description: [
      'Minor tasks like fix clerks, touch-up paint, run errands',
      'Clean-ups provide assisted or specialized pros for quick fixes'
    ],
  },
  {
    title: 'Holiday or Celebration Table Setup',
    fromPrice: 'from $75',
    icon: <IconTable size={24} />,
    description: [
      'Consultation on tableware, linens & decor',
      'Arrange table settings (folding napkins, cen, candles)',
      'Styling console, buffet or mantel for occasion',
      'Takedown, & store items upon request'
    ],
  },
  {
    title: 'Disinfection & Sanitation',
    fromPrice: 'from $99',
    icon: <IconSpray size={24} />,
    description: [
      'Tile and grout steam disinfection (up to 200 sq. ft.)',
      'Sanitation door handles, light switches, remotes',
      'Use products, ideal when post-illness or moving in/out'
    ],
  },
];

export const ExtraServices: FC = () => {
  return (
    <section className={styles.extraServices}>
      <Image src="s.png" radius="lg" mb="lg" />
      <div className={styles.servicesGrid}>
        {services.map((s, idx) => (
            <ServiceCard icon={s.icon} title={s.title} description={s.fromPrice}  features={s.description}/>
        ))}
      </div>
    </section>
  );
};
